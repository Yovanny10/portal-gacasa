import Swal from 'sweetalert2';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AseogeneralService } from './aseogeneral.service';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-aseogeneral',
  templateUrl: './aseogeneral.component.html',
  styleUrls: ['./aseogeneral.component.scss']
})
export class AseogeneralComponent implements OnInit {
  public loading = false;

  @ViewChild('aseoGeneralForm', {static: false}) aseoGeneralForm: NgForm;

  constructor(private aseogeneralService: AseogeneralService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
  }

  public registrarAseoGeneral(aseoGeneralForm: NgForm) {
    this.loading = true;
    const formAseoGeneral = {
      estudianteGe: aseoGeneralForm.form.value.estudianteGe,
      numero: aseoGeneralForm.form.value.numero,
      descripcion: aseoGeneralForm.form.value.descripcion

    }
    this.aseogeneralService.validateAseoGeneral(formAseoGeneral).subscribe(dataFinal => {
      this.loading = true;
      if (dataFinal) {
        this.router.navigate(['/components/aseogeneral'])
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
