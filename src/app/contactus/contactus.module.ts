import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactusRoutingModule } from './contactus-routing.module';
import { ContactusComponent } from './components/contactus/contactus.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [ContactusComponent],
  imports: [
    CoreModule,
    CommonModule,
    ReactiveFormsModule,
    ContactusRoutingModule,
    HttpClientModule
  ]
})
export class ContactusModule { }
