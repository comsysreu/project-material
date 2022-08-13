import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  post(entity: string, obj: any, query: string) {
    const url = `${environment.APIEndpoint}/${entity}`;
    console.log(url);

    const headers: any = {
      'Content-Type': 'application/json',
    };
    return this.httpClient.post(url, obj, { headers });
  }

  saveParam(name: string, value: string) {
    localStorage.setItem(name, value);
  }

  getParam(key: string) {
    const value = localStorage.getItem(key);
    return value;
  }

}
