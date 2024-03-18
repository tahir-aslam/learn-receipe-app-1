import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ReceipiesComponent } from './receipies/receipies.component';
import { ReceipeListComponent } from './receipies/receipe-list/receipe-list.component';
import { ReceipeDetailComponent } from './receipies/receipe-detail/receipe-detail.component';
import { ReceipeItemComponent } from './receipies/receipe-list/receipe-item/receipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { HighLightDirectiveDirective } from './high-light-directive.directive';
import { dropDownDirective } from './shared/dropdown.directive';
import { recipeService } from './receipies/recipe.service';
import { ShoppingService } from './shopping-list/shopping.service';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RecipeStartComponent } from './receipies/recipe-start/recipe-start.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReceipiesComponent,
    ReceipeListComponent,
    ReceipeDetailComponent,
    ReceipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    HighLightDirectiveDirective,
    dropDownDirective,
    RecipeStartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(),
    recipeService,
    ShoppingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
