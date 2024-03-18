import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent implements OnInit{
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  
  constructor(private shoppingService: ShoppingService)
  {
    console.log('shopping-edit constructor');
  }

  ngOnInit(){
    console.log('shopping-edit Init');
  }

  OnAdd() {

    console.log('onAdd clicked');

    const name = this.nameInputRef.nativeElement.value;
    const amount = this.amountInputRef.nativeElement.value;

    const ingredient = new Ingredient(name, amount);    

    //this.ingredientAdded.emit(ingredient);
    this.shoppingService.addIngredient(ingredient);

    console.log(name + ' emitted');
  }

}
