import Swal from 'sweetalert2';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RemplazomadreService } from './remplazomadre.service';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-remplazomadre',
  templateUrl: './remplazomadre.component.html',
  styleUrls: ['./remplazomadre.component.scss']
})
export class RemplazomadreComponent implements OnInit {
  public loading = false;
  d2: any;

  @ViewChild('remplazomadreForm', {static: false}) remplazomadreForm: NgForm;

  constructor(private remplazomadreService: RemplazomadreService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
  }

  public registrarRemplazoMadre(remplazomadreForm: NgForm) {
    this.loading = true;
    const formRemplazoMader = {
      estudianteRe: remplazomadreForm.form.value.estudianteRe,
      dia: this.dateAsYYYYMMDDHHNNSS(new Date()),
      descripcion: remplazomadreForm.form.value.descripcion,

    }
    this.remplazomadreService.validateRemplazoMadre(formRemplazoMader).subscribe(dataFinal => {
      this.loading = true;
      if (dataFinal) {
        this.router.navigate(['/components/remplazomadre'])
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
