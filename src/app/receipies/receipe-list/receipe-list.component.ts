import { Component, OnInit } from '@angular/core';
import { Receipe } from '../receipe.model';
import { recipeService } from '../recipe.service';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrl: './receipe-list.component.css'
})
export class ReceipeListComponent implements OnInit {

  Receipies: Receipe[];

  constructor(private recipeService: recipeService){
  }

  ngOnInit(): void {
    console.log('recipe-list: constructor');
    this.Receipies = this.recipeService.getRecipes();    
  } 
}
