import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  error = 'Welcome';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  login(email: string, pass: string) {
    if (!email) this.error = 'Please enter email';
    else if (!pass) this.error = 'Pelase enter password';
    else if (pass.length < 6)
      this.error = 'Password must be 6 characters at least';
      else{
        this.router.navigate(['home'], {replaceUrl: true})
      }
  }
}
