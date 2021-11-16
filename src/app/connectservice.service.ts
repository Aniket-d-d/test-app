import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ConnectserviceService {

  _url = 'htttp://localhost:4200';

  constructor(private http: HttpClient) { }

  getsignupdetails(username: any, password: any, repassword: any){
    return this.http.post<any>(`${this._url}/signup`, {
      username,
      password
    })

  }
}
