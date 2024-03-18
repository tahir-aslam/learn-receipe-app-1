import { RouterModule, Routes } from "@angular/router";
import { ReceipeListComponent } from "./receipies/receipe-list/receipe-list.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { Component, NgModule } from "@angular/core";
import { RecipeStartComponent } from "./receipies/recipe-start/recipe-start.component";
import { ReceipeDetailComponent } from "./receipies/receipe-detail/receipe-detail.component";
import { ReceipiesComponent } from "./receipies/receipies.component";

const appRoutes: Routes = [
    {path: '', redirectTo: '/recipies', pathMatch: 'full'},
    // {path: 'recipies', component: ReceipiesComponent},
    // {path: 'recipies/:id', component: ReceipeDetailComponent},
    {path: 'shopping-list', component: ShoppingListComponent},
    {path: 'recipies', component: ReceipiesComponent, children: [
        {path: ':id', component: ReceipeDetailComponent}
    ]},
];


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}