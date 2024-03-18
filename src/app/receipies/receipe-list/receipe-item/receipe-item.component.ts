import { Component, Input } from '@angular/core';
import { Receipe } from '../../receipe.model';
import { recipeService } from '../../recipe.service';

@Component({
  selector: 'app-receipe-item',
  templateUrl: './receipe-item.component.html',
  styleUrl: './receipe-item.component.css'
})
export class ReceipeItemComponent {

  @Input() recipe: Receipe;
  @Input() index: number;

  constructor(private recipeService: recipeService){

  }

  // onRecipeSelected() {
  //   console.log('Recipe selected: '+ this.recipe.name);
  //   this.recipeService.recipeSelected.emit(this.recipe);
  // }  
}
