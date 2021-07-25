class MyHeader extends HTMLElement {
    connectedCallback () {
        this.innerHTML = "
        <header>
            <div class="name">
                <img src="./images/logo.svg" alt="Yuan Wu" style="width: 80px;">
            </div>
            <div class="pages">
                <a href="./about.html" style="text-decoration: none">About</a>
                <a href="./resume.html" style="text-decoration: none">Resume</a>
                <a href="./contact.html" style="text-decoration: none">Contact</a>
            </div>
        </header>
        "
    }
}

customElements.define('my-header', MyHeader)