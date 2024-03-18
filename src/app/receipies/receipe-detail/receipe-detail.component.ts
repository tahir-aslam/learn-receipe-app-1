import { Component, Input, OnInit } from '@angular/core';
import { Receipe } from '../receipe.model';
import { recipeService } from '../recipe.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-receipe-detail',
  templateUrl: './receipe-detail.component.html',
  styleUrl: './receipe-detail.component.css'
})
export class ReceipeDetailComponent implements OnInit {
  // @Input() recipe: Receipe; we will use route to get recipe id
  public recipe: Receipe;
  public id: number = 0;

  constructor(private recipeService: recipeService,
    private route: ActivatedRoute){
      console.log('recipe-detail: constructor');
  }

  ngOnInit(): void {
    console.log('recipe-detail OnInit()');
    //this.id = this.route.snapshot.params['id'];
    this.route.params
      .subscribe(
        (params: Params) =>{
          this.id = +params['id'];
          console.log('recipe-detail get param id: '+ this.id);
          this.recipe = this.recipeService.getRecipe(this.id);
          console.log('recipe-detail get recipe: '+ this.recipe.name);
        }
        );
  }

  onEditRecipe() {
  throw new Error('Method not implemented.');
  }

  onAddToShoppingList() {
  throw new Error('Method not implemented.');
  }
}
