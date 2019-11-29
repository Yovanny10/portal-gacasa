import Swal from 'sweetalert2';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CocinadaService } from './cocinada.service';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-cocinada',
  templateUrl: './cocinada.component.html',
  styleUrls: ['./cocinada.component.scss']
})
export class CocinadaComponent implements OnInit {
  public loading = false;
  d2: any;
  d3: any;

  @ViewChild('cocinadaForm', {static: false}) cocinadaForm: NgForm;

  constructor(private cocinadaService: CocinadaService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
  }

  public registrarCocinada(cocinadaForm: NgForm) {
    this.loading = true;
    const formCocinada = {
      chef: cocinadaForm.form.value.chef,
      fechaInicio: this.dateAsYYYYMMDDHHNNSS(new Date()),
      fechaFinal: this.dateAsYYYYMMDDHHNNSS(new Date()),
      detalles: cocinadaForm.form.value.detalles

    }
    this.cocinadaService.validateCocinada(formCocinada).subscribe(dataFinal => {
      this.loading = true;
      if (dataFinal) {
        this.router.navigate(['/components/cocinada'])
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
