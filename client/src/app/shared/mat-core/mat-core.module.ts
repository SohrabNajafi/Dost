import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {JalaliMomentDateAdapter} from './jalali-moment-date-adapter';
import {JALALI_MOMENT_FORMATS} from './jalali_moment_formats';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: DateAdapter, useClass: JalaliMomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: JALALI_MOMENT_FORMATS },
  ]
})
export class MatCoreModule { }
