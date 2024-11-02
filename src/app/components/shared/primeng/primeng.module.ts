import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MultiSelectModule } from 'primeng/multiselect';
import { CalendarModule } from 'primeng/calendar';
import { FileUploadModule } from 'primeng/fileupload';

import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';

























@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenubarModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    MultiSelectModule,
    CalendarModule,
    FileUploadModule,
    MessagesModule,
    ToastModule,
    TableModule















  ],
  exports:[


    CommonModule,
    MenubarModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    MultiSelectModule,
    CalendarModule,
    FileUploadModule,
    MessagesModule,
    ToastModule,
    TableModule



  ],
})
export class PrimengModule { }
