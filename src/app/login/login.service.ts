import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from './login';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private httpClient: HttpClient) {}
  public getAllLoginService() {
    return this.httpClient.get('http://localhost:8080/login/');
  }
  public getLoginService(id) {
    return this.httpClient.get('http://localhost:8080/login/' + id);
  }
  public deleteLoginService(id) {
    return this.httpClient.delete('http://localhost:8080/login/' + id);
  }
  public createLoginService(login: Login) {
    const headers = { 'content-type': 'application/json' };
    return this.httpClient.post(
      'http://localhost:8080/login/',
      JSON.stringify(login),
      {
        headers: headers,
      }
    );
  }
  public updateLoginService(id, login: Login) {
    const headers = { 'content-type': 'application/json' };
    return this.httpClient.put(
      'http://localhost:8080/login/' + String,
      JSON.stringify(Login),
      {
        headers: headers,
      }
    );
  }
}
