import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css'],
})
export class DataFormComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    // this.form = new FormGroup({
    //   name: new FormControl(),
    //   email: new FormControl(),
    // });
    this.form = this.formBuilder.group({
      name: [],
      email: [],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.form.value);
  }
}
