import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BRState } from '../models/brstate';

@Injectable({
  providedIn: 'root',
})
export class DropdownService {
  constructor(private http: HttpClient) {}

  getBrazilStates() {
    return this.http.get<BRState[]>('assets/data/brstates.json').pipe();
  }
}
