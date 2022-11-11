import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css'],
})
export class TemplateFormComponent implements OnInit {
  usuario = {
    nome: null,
    email: null,
  };

  constructor() {}

  onSubmit(form: NgForm) {
    console.log(form);
  }

  ngOnInit(): void {}
}
