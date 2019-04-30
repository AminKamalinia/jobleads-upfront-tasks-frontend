import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MainComponent } from './main/main.component';
import { HomeRoutingModule } from './home-routing.module';
import { DefaultComponent } from './default/default.component';
import { MoreInformationComponent } from 'src/app/components';

@NgModule({
  declarations: [
    MainComponent,
    DefaultComponent,
    MoreInformationComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    HomeRoutingModule
  ],
  providers: [
  ]
})
export class HomeModule { }
