class MealItem extends HTMLElement {
    
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
    
    set meal(meal) {
        this._meal = meal;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            
            :host {
                display: block;
                margin-bottom: 18px;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                border-radius: 10px;
                overflow: hidden;
                background-color:#ff9a2a;
            }
            .picture-meal {
                width: 100%;
                max-height: 300px;
                object-fit: cover;
                object-position: center;
            }
            
            .meal-info {
                padding: 24px;
            }
            
            .meal-info > h2 {
                font-weight: bold;
            }
            
            .meal-info > p {
                margin-top: 10px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 10; /* number of lines to show */
            }
        </style>
          <img class="picture-meal" src="${this._meal.strMealThumb}" alt="Thumb">
            <div class="meal-info">
            <h2>${this._meal.strMeal}</h2>
            <br>
            <h4> Ingredients </h4>
            <p>${this._meal.strMeasure1}  ${this._meal.strIngredient1}</p>
            <p>${this._meal.strMeasure2}  ${this._meal.strIngredient2}</p>
            <p>${this._meal.strMeasure3}  ${this._meal.strIngredient3}</p>
            <p>${this._meal.strMeasure4}  ${this._meal.strIngredient4}</p>
            <p>${this._meal.strMeasure5}  ${this._meal.strIngredient5}</p>
            <p>${this._meal.strMeasure6}  ${this._meal.strIngredient6}</p>
            <p>${this._meal.strMeasure7}  ${this._meal.strIngredient7}</p>
            <p>${this._meal.strMeasure8}  ${this._meal.strIngredient8}</p>
            <p>${this._meal.strMeasure9}  ${this._meal.strIngredient9}</p>
            <p>${this._meal.strMeasure10}  ${this._meal.strIngredient10}</p>
            <p>${this._meal.strMeasure11}  ${this._meal.strIngredient11}</p>
            <p>${this._meal.strMeasure12}  ${this._meal.strIngredient12}</p>
            <p>${this._meal.strMeasure13}  ${this._meal.strIngredient13}</p>
            <p>${this._meal.strMeasure14}  ${this._meal.strIngredient14}</p>
            <p>${this._meal.strMeasure15}  ${this._meal.strIngredient15}</p>
            <p>${this._meal.strMeasure16}  ${this._meal.strIngredient16}</p>
            <p>${this._meal.strMeasure17}  ${this._meal.strIngredient17}</p>
            <p>${this._meal.strMeasure18}  ${this._meal.strIngredient18}</p>
            <p>${this._meal.strMeasure19}  ${this._meal.strIngredient19}</p>
            <p>${this._meal.strMeasure20}  ${this._meal.strIngredient20}</p>
            <br>
            <h4> Instruction </h4>
            <p>${this._meal.strInstructions}</p>
            </div>
           `;
    }
}

customElements.define("meal-item", MealItem);