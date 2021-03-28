import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './components/services/services.component';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [ServicesComponent],
  imports: [
    CommonModule,
    CoreModule,
    ServicesRoutingModule
  ]
})
export class ServicesModule { }
