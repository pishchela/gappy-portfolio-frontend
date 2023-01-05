import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Email } from '../app.models';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private _env = 'http://localhost:3000/';
  constructor(private _httpClient: HttpClient) {}

  public sendEmail(body: Email): Observable<any> {
    return this._httpClient.post(this._env + 'sendmail', body);
  }
}
