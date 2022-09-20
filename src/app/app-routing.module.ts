import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpaceBurgersComponent } from './space-burgers/space-burgers.component';
import { BurgerAboutComponent } from './burger-about/burger-about.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'burgers',
    pathMatch: 'full'
  },
  {
    path: 'burgers',
    component: SpaceBurgersComponent
  },
  {
    path: 'about',
    component: BurgerAboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
