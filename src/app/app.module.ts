import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BurgerListComponent } from './burger-list/burger-list.component';

import { FormsModule } from '@angular/forms';
import { BurgerAboutComponent } from './burger-about/burger-about.component';
import { SpaceBurgersComponent } from './space-burgers/space-burgers.component';
import { ShoppCartComponent } from './shopp-cart/shopp-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    BurgerListComponent,
    BurgerAboutComponent,
    SpaceBurgersComponent,
    ShoppCartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

