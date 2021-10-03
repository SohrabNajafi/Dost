import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ToastrModule } from 'ngx-toastr';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { FileUploadModule } from 'ng2-file-upload';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';




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
    }),
    TabsModule.forRoot(),
    NgxGalleryModule,
    FileUploadModule,
    BsDatepickerModule.forRoot(),

  ],
  exports: [
    BsDropdownModule,
    ToastrModule,
    TabsModule,
    NgxGalleryModule,
    FileUploadModule,
    BsDatepickerModule,
  ]
})
export class SharedModule { }
