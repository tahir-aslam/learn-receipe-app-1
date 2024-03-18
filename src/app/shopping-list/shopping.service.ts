import { EventEmitter, OnInit } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingService{

    ingredientAddedEvent = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] =  [
        new Ingredient('Apple', 5),
        new Ingredient('Oranges', 5),
      ];

    constructor(){}

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredient(ingredient:Ingredient){
        this.ingredients.push(ingredient);

        this.ingredientAddedEvent.emit(this.ingredients);

        console.log('Ingredient add: '+ ingredient.name);
    }

    addIngredients(ingredients: Ingredient[]) {
        // for (let ingredient of ingredients) {
        //   this.addIngredient(ingredient);
        // }
        this.ingredients.push(...ingredients);
        this.ingredientAddedEvent.emit(this.ingredients.slice());
      }
}