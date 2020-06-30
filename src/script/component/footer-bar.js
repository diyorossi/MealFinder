import css from "bootstrap/dist/css/bootstrap.min.css";

class FooterBar extends HTMLElement {

  // constructor() {
  //       super();
  //       this.shadowDOM = this.attachShadow({mode: "open"});
  //   }

   connectedCallback(){
     this.attachShadow({mode: "open"});
       this.render();
   }

   render() {
       this.shadowRoot.innerHTML = `
       <style>
        .footer{
              clear:both;
              padding: 15px;
              width: 100%;
              position:fixed;
              background-color: #23180d;
              color: #ff9a2a!important;
              text-align: center;
              bottom:0;
          }
          ${css}
       </style>
       <div class="footer">
       <p>Copyright &copy; 2020 All rights reserved | Made with <svg class="bi bi-heart-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" clip-rule="evenodd"/>
      </svg> by Denlei Diyorossi</p>
       </div>
       `;
   }
}

customElements.define("footer-bar", FooterBar);