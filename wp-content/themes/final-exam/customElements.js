class CopyrightYear extends HTMLElement{
    connectedCallback(){
        this.innerHTML = new Date().getFullYear();
    }
}

customElements.define("x-year", CopyrightYear);

class TwosidedMarket extends HTMLElement{
	connectedCallback(){
		this.innerHTML = '<a href="/scope:0.5747131388342597/?page_id=37">Products</a>&nbsp;<a href="/scope:0.5747131388342597/?page_id=75">Registration</a>
	}
}

customElements.define("x-twosided", TwoSidedMarket)