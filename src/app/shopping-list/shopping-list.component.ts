import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from './shopping.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit, OnDestroy{
  ingredients: Ingredient[];
  IngredientAddSubscription: Subscription;

  constructor(private shoppingService: ShoppingService){
    console.log('shopping-list Constructor');
  }

  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIngredients(); 

    this.IngredientAddSubscription = this.shoppingService.ingredientAddedEvent.subscribe((ingredients: Ingredient[])=>{
      this.ingredients = ingredients;
    });
  }

  ngOnDestroy(): void {
    this.IngredientAddSubscription.unsubscribe();
  }

  // onIngredientAdded(ingredient: Ingredient) {
  //   console.log('onIngredient added '+ ingredient.name);
  //   this.ingredients.push(ingredient);
  // } 
}
