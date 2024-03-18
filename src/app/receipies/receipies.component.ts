import { Component, OnInit } from '@angular/core';
import { Receipe } from './receipe.model';
import { recipeService } from './recipe.service';

@Component({
  selector: 'app-receipies',
  templateUrl: './receipies.component.html',
  styleUrl: './receipies.component.css'
})
export class ReceipiesComponent implements OnInit{
  public selectedRecipe: Receipe;

  constructor(private recipeServie: recipeService){
  }

  ngOnInit(): void {
    this.recipeServie.recipeSelected.subscribe(
      (recipe: Receipe)=> {
        this.selectedRecipe = recipe;
      }
    );
  }
}
