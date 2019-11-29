import Swal from 'sweetalert2';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';
import { Router, ActivatedRoute } from "@angular/router";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  public loading = false;

  @ViewChild('userLogin', {static: false}) loginForm: NgForm;

  constructor(private loginService: LoginService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

  public login(userLogin: NgForm) {
    this.loading = true;
    const formLogin = {
      email: userLogin.form.value.user,
      password: userLogin.form.value.password
    }
    this.loginService.validateUser(formLogin).subscribe(dataFinal => {
      this.loading = true;
      if (dataFinal.token) {
        const tokenCifrado = this.loginService.cifrarToken(dataFinal.token)
        sessionStorage.setItem(tokenCifrado.nameToken, tokenCifrado.cifrado)
        this.router.navigate(['/components/carousel'])
        this.loading = false;
      }
    },
      error => {      
        
          this.loading = true;
          Swal.fire({
            title: 'Algo ha fallado' ,
            text: error.Errors.message,
            type: 'warning',
            confirmButtonText: 'Quiero volverlo a intentar'
          })        
        this.loading = false;
      });
    this.loading = false;
  }


  loginf(f) {
    console.log(f.value);
  }

  // On Forgot password link click
  onForgotPassword() {
    this.router.navigate(['forgotpassword'], { relativeTo: this.route.parent });
  }
  // On registration link click
  onRegister() {
    this.router.navigate(['register'], { relativeTo: this.route.parent });
  }

}
