import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { time } from 'console';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrl: './edit-recipe.component.css'
})
export class EditRecipeComponent implements OnInit {
  private id: number;
  private editMode: boolean = false;

  constructor(private route: ActivatedRoute){

  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params)=>{
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        console.log(this.editMode);
      }
    );
  }

}
