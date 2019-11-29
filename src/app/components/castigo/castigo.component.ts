import Swal from 'sweetalert2';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CastigoService } from './castigo.service';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-castigo',
  templateUrl: './castigo.component.html',
  styleUrls: ['./castigo.component.scss']
})
export class CastigoComponent implements OnInit {
  public loading = false;
  d2: any;
  d3: any;

  @ViewChild('castigoForm', {static: false}) castigoForm: NgForm;

  constructor(private castigoService: CastigoService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
  }

  public registrarCastigo(castigoForm: NgForm) {
    this.loading = true;
    const formCastigo = {
      castigado: castigoForm.form.value.castigado,
      fechaInicio: this.dateAsYYYYMMDDHHNNSS(new Date()),
      fechaFinal: this.dateAsYYYYMMDDHHNNSS(new Date()),
      tipoCastigo: castigoForm.form.value.tipoCastigo,

    }
    this.castigoService.validateCastigo(formCastigo).subscribe(dataFinal => {
      this.loading = true;
      if (dataFinal) {
        this.router.navigate(['/components/castigo'])
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
  dateAsYYYYMMDDHHNNSS(date): string {
    return date.getFullYear()
              + '-' + this.leftpad(date.getMonth() + 1, 2)
              + '-' + this.leftpad(date.getDate(), 2)
              + ' ' + this.leftpad(date.getHours(), 2)
              + ':' + this.leftpad(date.getMinutes(), 2)
              + ':' + this.leftpad(date.getSeconds(), 2);
  }
  
  leftpad(val, resultLength = 2, leftpadChar = '0'): string {
    return (String(leftpadChar).repeat(resultLength)
          + String(val)).slice(String(val).length);
  }
  
  

}
