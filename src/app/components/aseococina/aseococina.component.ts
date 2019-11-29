import Swal from 'sweetalert2';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AseococinaService } from './aseococina.service';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-aseococina',
  templateUrl: './aseococina.component.html',
  styleUrls: ['./aseococina.component.scss']
})
export class AseococinaComponent implements OnInit {
  public loading = false;
  d2: any;

  @ViewChild('aseococinaForm', {static: false}) aseococinaForm: NgForm;

  constructor(private aseococinaService: AseococinaService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
  }

  public registrarAseoCocina(aseoCocinaForm: NgForm) {
    this.loading = true;
    const formAseoCocina = {
      estudianteCo: aseoCocinaForm.form.value.estudianteCo,
      dia: this.dateAsYYYYMMDDHHNNSS(new Date()),

    }
    this.aseococinaService.validateAseoCocina(formAseoCocina).subscribe(dataFinal => {
      this.loading = true;
      if (dataFinal) {
        this.router.navigate(['/components/aseococina'])
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
