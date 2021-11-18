import { Component, OnInit } from '@angular/core';
import { ConnectserviceService } from 'src/app/connectservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private Connectservice: ConnectserviceService) { }

  ngOnInit(): void {
  }
  signupUser(event: { target: any; }) {

    //event.preventDefault()
    const target = event.target
    const username = target.querySelector('#username').value
    const password = target.querySelector('#password').value
    const repassword = target.querySelector('#repassword').value
    console.log(username, password, repassword);

    this.Connectservice.getsignupdetails(username, password);
    
  }

}
