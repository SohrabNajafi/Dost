import { Component, Input, OnInit, Self, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgPersianDatepickerModule } from 'ng-persian-datepicker';


@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.css'],
})
export class DateInputComponent implements ControlValueAccessor {
  @Input() label: string;
  @Input() maxDate: number;
  //bsConfig: Partial<BsDatepickerModule>;

  constructor(@Self() public ngControl: NgControl) {
    this.ngControl.valueAccessor = this;
    // this.bsConfig = {
    //   containerClass: 'theme-red',
    //   dateInputFormat: 'DD MMMM YYYY'
    // };

  }

  writeValue(obj: any): void {
  }

  registerOnChange(fn: any): void {
  }

  registerOnTouched(fn: any): void {
  }
}