import { NgModule } from '@angular/core';
import {
  MatInputModule,
  MatButtonModule,
  MatRadioModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatProgressBarModule,
  MatGridListModule,
  MatListModule,
  MatPaginatorModule,
  MatCardModule,
  MatSelectModule, 
  MatCheckboxModule,
  MatMenuModule,
  


} from '@angular/material';


@NgModule({
  imports: [
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatGridListModule,
    MatListModule,
    MatPaginatorModule,
    MatCardModule,
    MatCheckboxModule,
    MatRadioModule,
    MatMenuModule
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatGridListModule,
    MatListModule,
    MatPaginatorModule,
    MatCardModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatMenuModule
  ]

})

export class SharedModule { }