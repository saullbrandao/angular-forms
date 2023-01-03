import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { map } from 'rxjs';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css'],
})
export class DataFormComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    // this.form = new FormGroup({
    //   name: new FormControl(),
    //   email: new FormControl(),
    // });
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      address: this.formBuilder.group({
        cep: [null, Validators.required],
        number: [null, Validators.required],
        street: [null, Validators.required],
        complement: [null],
        district: [null, Validators.required],
        city: [null, Validators.required],
        state: [null, Validators.required],
      }),
    });
  }

  ngOnInit(): void {}

  isInvalid(input: string) {
    return this.form.get(input)?.invalid && this.form.get(input)?.touched;
  }

  onSubmit() {
    if (this.form.invalid) {
      Object.keys(this.form.controls).forEach((field) => {
        const control = this.form.get(field);
        control?.markAllAsTouched();
      });
    }
  }

  getAddressByCep() {
    const cep = this.form.get('address.cep')?.value;
    const formattedCEP = cep.replace(/\D/g, '');

    if (formattedCEP !== '') {
      const cepValidation = /^[0-9]{8}$/;

      if (cepValidation.test(formattedCEP)) {
        this.http
          .get(`https://viacep.com.br/ws/${formattedCEP}/json`)
          .pipe(map((data) => data))
          .subscribe((data) => this.populateForm(data));
      }
    }
  }

  populateForm(data: any) {
    this.form.patchValue({
      address: {
        street: data.logradouro,
        cep: data.cep,
        district: data.bairro,
        city: data.localidade,
        state: data.uf,
        complement: data.complemento,
      },
    });
  }
}
