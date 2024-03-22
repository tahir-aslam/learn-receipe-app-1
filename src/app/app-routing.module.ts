import { RouterModule, Routes } from "@angular/router";
import { ReceipeListComponent } from "./receipies/receipe-list/receipe-list.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { Component, NgModule } from "@angular/core";
import { RecipeStartComponent } from "./receipies/recipe-start/recipe-start.component";
import { ReceipeDetailComponent } from "./receipies/receipe-detail/receipe-detail.component";
import { ReceipiesComponent } from "./receipies/receipies.component";
import { EditRecipeComponent } from "./receipies/edit-recipe/edit-recipe.component";

const appRoutes: Routes = [
    {path: '', redirectTo: '/recipies', pathMatch: 'full'},
    {path: 'shopping-list', component: ShoppingListComponent},
    {path: 'recipies', component: ReceipiesComponent, children: [
        {path: 'new', component: EditRecipeComponent},
        {path: ':id', component: ReceipeDetailComponent},
        {path: ':id/edit', component: EditRecipeComponent }
    ]},
];


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}