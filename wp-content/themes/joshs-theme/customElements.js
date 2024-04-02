class CopyrightYear extends HTMLElement{
    connectedCallback(){
        this.innerHTML = new Date().getFullYear();
    }
}

customElements.define("x-year", CopyrightYear);

class JoshElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = "Josh was here";
    }
}

customElements.define("x-josh", JoshElement);
