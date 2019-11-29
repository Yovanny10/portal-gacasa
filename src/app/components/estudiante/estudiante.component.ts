import Swal from 'sweetalert2';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EstudianteService } from './estudiante.service';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.scss']
})
export class EstudianteComponent implements OnInit {
  public loading = false;

  @ViewChild('estudianteForm', {static: false}) estudianteForm: NgForm;

  constructor(private estudianteService: EstudianteService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
  }

  public registrarEstudiante(estudianteForm: NgForm) {
    this.loading = true;
    const formEstudiante = {
      nombre: estudianteForm.form.value.nombre,
      apellido: estudianteForm.form.value.apellido,
      telefono: estudianteForm.form.value.telefono,
      casa: estudianteForm.form.value.casa,
      email: estudianteForm.form.value.email,
      password: estudianteForm.form.value.password
    }
    this.estudianteService.validateEstudiante(formEstudiante).subscribe(dataFinal => {
      this.loading = true;
      if (dataFinal) {
        this.router.navigate(['/components/estudiante'])
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
