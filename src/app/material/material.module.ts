import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule,MatCardModule,MatFormFieldModule,MatSidenavModule,MatListModule,MatInputModule,
         MatTableModule,MatDividerModule,MatGridListModule,MatMenuModule,
         MatToolbarModule,MatIconModule}from '@angular/material';
  import { from } from 'rxjs';




@NgModule({
 // declarations: [],
  imports: [
    CommonModule,MatButtonModule,MatCardModule,MatFormFieldModule,
    MatSidenavModule,MatInputModule,MatTableModule,MatDividerModule,MatGridListModule,
    MatListModule,MatIconModule,MatToolbarModule,MatMenuModule
  ],
  exports:[
           MatButtonModule,MatCardModule,MatFormFieldModule,MatSidenavModule,
           MatInputModule,MatTableModule,MatSidenavModule,MatGridListModule,
           MatListModule,MatIconModule,MatToolbarModule,MatMenuModule

  ]
})
export class MaterialModule { }
