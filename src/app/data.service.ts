import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('https://s3-us-west-2.amazonaws.com/cleanitapp/users')
  }

  getUser(userId) {
    return this.http.get('https://s3-us-west-2.amazonaws.com/cleanitapp/users/'+userId)
  }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

}
