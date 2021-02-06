import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeLayoutComponent } from './components/home-layout/home-layout.component';
import { MainHeroComponent } from './components/main-hero/main-hero.component';


@NgModule({
  declarations: [HomeLayoutComponent, MainHeroComponent],
  imports: [
    HomeRoutingModule
  ]
})
export class HomeModule { }
