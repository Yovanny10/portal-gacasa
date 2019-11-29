import Swal from 'sweetalert2';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterPageService } from './register-page.service';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-register-page',
    templateUrl: './register-page.component.html',
    styleUrls: ['./register-page.component.scss']
})

export class RegisterPageComponent implements OnInit {
    public loading = false;

    @ViewChild('userRegister', {static: false}) registerForm: NgForm;

    constructor(private registerService: RegisterPageService,
        private router: Router,
        private route: ActivatedRoute) { }

    ngOnInit() {
  }

  public register(userRegister: NgForm) {
    this.loading = true;
    const formRegister = {
      email: userRegister.form.value.user,
      nombre: userRegister.form.value.nombre,
      password: userRegister.form.value.password
    }
    this.registerService.validateUser(formRegister).subscribe(dataFinal => {
      this.loading = true;
      if (dataFinal) {
        this.router.navigate(['/login'])
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
}
