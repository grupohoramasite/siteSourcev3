import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeLayoutComponent } from './components/home-layout/home-layout.component';
import { MainHeroComponent } from './components/main-hero/main-hero.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../core/core.module';
import { HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [HomeLayoutComponent, MainHeroComponent],
  imports: [
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
