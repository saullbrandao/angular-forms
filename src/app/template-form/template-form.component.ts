import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { map } from 'rxjs';

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

  constructor(private http: HttpClient) {}

  onSubmit(form: NgForm) {
    console.log(form);
  }

  isInvalid(input: NgModel) {
    return input.invalid && input.touched;
  }

  getAddressByCep(cep: string, form: NgForm) {
    const formattedCEP = cep.replace(/\D/g, '');

    if (formattedCEP !== '') {
      const cepValidation = /^[0-9]{8}$/;

      if (cepValidation.test(formattedCEP)) {
        this.http
          .get(`https://viacep.com.br/ws/${formattedCEP}/json`)
          .pipe(map((data) => data))
          .subscribe((data) => this.populateForm(data, form));
      }
    }
  }

  populateForm(data: any, form: NgForm) {
    form.form.patchValue({
      endereco: {
        rua: data.logradouro,
        cep: data.cep,
        bairro: data.bairro,
        cidade: data.localidade,
        estado: data.uf,
        complemento: data.complemento,
      },
    });
  }

  ngOnInit(): void {}
}
