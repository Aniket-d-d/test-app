import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ConnectserviceService {

  _url = 'http://localhost:3000';
  //private _url: string = 'http://localhost:4200';

  constructor(private http: HttpClient) { }

  getsignupdetails(username: any, password: any){
    return this.http.put(this._url, {
      username,
      password
    })

  }
}
