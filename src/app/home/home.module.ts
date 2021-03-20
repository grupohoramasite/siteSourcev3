import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeLayoutComponent } from './components/home-layout/home-layout.component';
import { MainHeroComponent } from './components/main-hero/main-hero.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../core/core.module';
import { HttpClient } from '@angular/common/http';
import { HomeFeatureComponent } from './components/home-feature/home-feature.component';
import { CommonModule } from '@angular/common';
import { HomeAvailabityComponent } from './components/home-availabity/home-availabity.component';
import { HomeMonitorComponent } from './components/home-monitor/home-monitor.component';
import { HomeContactusComponent } from './components/home-contactus/home-contactus.component';


@NgModule({
  declarations: [HomeLayoutComponent, MainHeroComponent, HomeFeatureComponent, HomeAvailabityComponent, HomeMonitorComponent, HomeContactusComponent],
  imports: [
    CommonModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    HomeRoutingModule
  ]
})
export class HomeModule { }
