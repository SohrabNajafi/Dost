import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-left',
      preventDuplicates: false,

      // "closeButton": true,
      // "debug": false,
      // "newestOnTop": false,
      // "progressBar": false,
      // "positionClass": "toast-bottom-right",
      // "preventDuplicates": false,
      // "onclick": null,
      // "showDuration": "300",
      // "hideDuration": "1000",
      // "timeOut": "60000",
      // "extendedTimeOut": "60000",
      // "showEasing": "swing",
      // "hideEasing": "linear",
      // "showMethod": "fadeIn",
      // "hideMethod": "fadeOut"
    })
  ],
  exports: [
    BsDropdownModule,
    ToastrModule
  ]
})
export class SharedModule { }
