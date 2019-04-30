import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { DefaultComponent } from './default/default.component';

const routes: Routes = [{
  path: '',
  component: MainComponent,
  children: [
    { path: '', component: DefaultComponent },
    { path: 'default', component: DefaultComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
