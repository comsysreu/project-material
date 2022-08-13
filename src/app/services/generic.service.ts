import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GenericService {

  constructor(private httpClient: HttpClient,
    private authService: AuthService
  ) { }

  get(entity: string, query: string) {
    const url = `${environment.APIEndpoint}/${entity}/${query}`;

    const headers: any = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.authService.getParam('secacc')}`
    };
    return this.httpClient.get(url, { headers });
  }


}
