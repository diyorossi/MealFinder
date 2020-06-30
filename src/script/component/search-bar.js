import css from "bootstrap/dist/css/bootstrap.min.css";


class SearchBar extends HTMLElement {
  
    // constructor() {
    //     super();
    //     this.shadowDOM = this.attachShadow({mode: "open"});
    // }

    connectedCallback(){
      this.attachShadow({mode: "open"});
      this.render();
  }

  set clickEvent(event) {
      this._clickEvent = event;
      this.render();
  }


  get value() {
      return this.shadowRoot.querySelector("#searchElement").value;
  }

  render() {
       this.shadowRoot.innerHTML = `
       <style>
       .search-container {
        max-width: 800px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        padding: 10px;
        border-radius: 15px;
        display: flex;
        position: sticky;
        top: 10px;
        background-color: white;
        }
        
        .search-container > input {
            width: 75%;
            padding: 5px;
            border: 0;
            border-bottom: 1px solid #23180d;
            font-weight: light;
        }
        
        .search-container > input:focus {
            outline: 0;
            border-bottom: 2px solid #23180d;
        }
        
        .search-container > input:focus::placeholder {
            font-weight: bold;
        }
        
        .search-container >  input::placeholder {
            color: #23180d;
            font-weight: normal;
        }
        
        .search-container > button {
            width: 23%;
            cursor: pointer;
            margin-left: auto;
            padding: 9px;
            background-color: #ff9a2a;
            color: #23180d;
            border: 0;
            border-radius:40px;
            text-transform: uppercase;
        }
        
        @media screen and (max-width: 550px){
            .search-container {
                flex-direction: column;
                position: static;
            }
        
            .search-container > input {
                width: 100%;
                margin-bottom: 12px;
            }
        
            .search-container > button {
                width: 100%;
            }
        }
        ${css}
       </style>
        <div id="search-container" class="search-container">
            <input placeholder="Search Your Meal Here!!!!" id="searchElement" type="search">
            <button id="searchButtonElement" type="submit"><svg class="bi bi-search" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z" clip-rule="evenodd"/>
            <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" clip-rule="evenodd"/>
          </svg> Search</button>
        </div>
     `;

     this.shadowRoot.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
  }
}

customElements.define("search-bar", SearchBar);