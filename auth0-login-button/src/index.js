import createAuth0Client from '@auth0/auth0-spa-js';

const template = document.createElement('template');

template.innerHTML = `
  <style>
  #login-button {
    background: #EB5424;
    color: #FFFFFF;
    text-transform: uppercase;
    border: 1px solid #EB5424;
    margin: 5px 16px 5px 16px;
    padding: 5px 16px 5px 16px;
    line-height: 32px;
    text-decoration-line: none;
    font-size: 18px;
    font-family: fakt-web, Helvetica Neue, Hevetica, sans-serif;
  }
  </style>
  <a id="login-button" href="#">Log in</a>
`;

export default class Auth0Login extends HTMLElement {
  constructor() {
    super();

    this._domain = "";
    this._clientId = "";

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  get domain() {
    return this._domain;
  }

  set domain(val) {
    this._domain = val;
    this.setAttribute("domain", val);
    this.buildAuth0Client();
  }

  get clientId() {
    return this._clientId;
  }

  set clientid(val) {
    this._clientId = val;
    this.setAttribute("clientid", val);
    this.buildAuth0Client();
  }

  static get observedAttributes() {
    return ["domain", "clientid"];
  }

  async attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      switch (name) {
        case "domain":
          this._domain = newValue;
          break;
        case "clientid":
          this._clientId = newValue;
          break;
      }

      this.buildAuth0Client();
    }
  }

  async connectedCallback() {
    await this.buildAuth0Client();

    this.addEventListener("click", async (e) => {
      const isAuthenticated = await this.auth0Client.isAuthenticated();

      if (!isAuthenticated) {
        await this.login();
      } else {
        await this.logout();
      }
      await this.updateUI();

      e.preventDefault();
    });

    await this.updateUI();

    await this.handleRedirectCallback();
  }

  async buildAuth0Client() {
    this.auth0Client = await createAuth0Client({
      domain: this._domain,
      client_id: this._clientId
    });
  }

  async updateUI() {
    const isAuthenticated = await this.auth0Client.isAuthenticated();
    const loginButton = this.shadowRoot.getElementById("login-button");

    if (!isAuthenticated) {
      loginButton.innerText = "Log in";
    } else {
      loginButton.innerText = "Log out";
    }
  }

  async login() {
    await this.auth0Client.loginWithRedirect({
      redirect_uri: window.location.origin
    });
  }

  async logout() {
    this.auth0Client.logout({
      returnTo: window.location.origin
    });
  }

  async handleRedirectCallback() {
    const isAuthenticated = await this.auth0Client.isAuthenticated();

    if (!isAuthenticated) {
      const query = window.location.search;
      if (query.includes("code=") && query.includes("state=")) {
        await this.auth0Client.handleRedirectCallback();

        this.updateUI();
        window.history.replaceState({}, document.title, "/");
      }
    }
  }
}

customElements.define("auth0-login", Auth0Login);
