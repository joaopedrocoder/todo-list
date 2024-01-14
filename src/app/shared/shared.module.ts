import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoContentComponent } from './components/no-content/no-content.component';



@NgModule({
  declarations: [
    NoContentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NoContentComponent
  ]
})
export class SharedModule { }
