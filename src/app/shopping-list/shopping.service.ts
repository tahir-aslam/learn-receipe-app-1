import { EventEmitter, OnInit } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

export class ShoppingService{

    ingredientAddedEvent = new Subject<Ingredient[]>();

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

        this.ingredientAddedEvent.next(this.ingredients);

        console.log('Ingredient add: '+ ingredient.name);
    }

    addIngredients(ingredients: Ingredient[]) {
        // for (let ingredient of ingredients) {
        //   this.addIngredient(ingredient);
        // }
        this.ingredients.push(...ingredients);
        this.ingredientAddedEvent.next(this.ingredients.slice());
      }
}