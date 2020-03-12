import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    // return this.http.get('https://jsonplaceholder.typicode.com/users');
    return this.http.get('/assets/data/personas.json');
  }
  getMenuOpts() {
    return this.http.get('/assets/data/menu.json');
  }
}
