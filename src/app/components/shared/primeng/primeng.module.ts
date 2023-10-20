import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { MenubarModule } from 'primeng/menubar';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { DropdownModule } from 'primeng/dropdown';
import { ScrollerModule } from 'primeng/scroller';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FileUploadModule } from 'primeng/fileupload';



import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';








@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenubarModule,
    CalendarModule,
    InputTextModule,
    CascadeSelectModule,
    DropdownModule,
    ScrollerModule,
    MultiSelectModule,
    InputTextareaModule,
    FileUploadModule,
    ButtonModule,
    ToastModule



  ],
  exports:[


    CommonModule,
    MenubarModule,
    CalendarModule,
    InputTextModule,
    CascadeSelectModule,
    DropdownModule,
    ScrollerModule,
    MultiSelectModule,
    InputTextareaModule,
    FileUploadModule,
    ButtonModule,
    ToastModule

  ],
})
export class PrimengModule { }
