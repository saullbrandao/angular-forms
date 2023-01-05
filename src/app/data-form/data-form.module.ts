import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DataFormComponent } from './data-form.component';
import { DropdownService } from '../shared/services/dropdown.service';

@NgModule({
  declarations: [DataFormComponent],
  imports: [CommonModule, ReactiveFormsModule],
  providers: [DropdownService],
})
export class DataFormModule {}
