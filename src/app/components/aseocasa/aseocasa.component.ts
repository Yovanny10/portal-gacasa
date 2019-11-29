import Swal from 'sweetalert2';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AseocasaService } from './aseocasa.service';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-aseocasa',
  templateUrl: './aseocasa.component.html',
  styleUrls: ['./aseocasa.component.scss']
})
export class AseocasaComponent implements OnInit {
  public loading = false;

  @ViewChild('aseoCasaForm', {static: false}) aseoCasaForm: NgForm;

  constructor(private aseocasaService: AseocasaService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
  }

  public registrarAseoCasa(aseoCasaForm: NgForm) {
    this.loading = true;
    const formAseoCasa = {
      estudianteCa: aseoCasaForm.form.value.estudianteCa,
      dia: aseoCasaForm.form.value.dia,
      descripcion: aseoCasaForm.form.value.descripcion

    }
    this.aseocasaService.validateAseoCasa(formAseoCasa).subscribe(dataFinal => {
      this.loading = true;
      if (dataFinal) {
        this.router.navigate(['/components/aseocasa'])
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
