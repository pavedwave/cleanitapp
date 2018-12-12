import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('assets/records/download.json')
  }

  getUser() {
    return this.http.get('assets/records/download.json')
  }

  getStats() {
    return this.http.get('assets/records/download.json')
  }

  getTasks() {
    return this.http.get('assets/records/download.json')
  }

}
