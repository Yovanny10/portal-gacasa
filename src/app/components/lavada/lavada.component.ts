import Swal from 'sweetalert2';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LavadaService } from './lavada.service';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-lavada',
  templateUrl: './lavada.component.html',
  styleUrls: ['./lavada.component.scss']
})
export class LavadaComponent implements OnInit {
  public loading = false;

  @ViewChild('lavadaForm', {static: false}) lavadaForm: NgForm;

  constructor(private lavadaService: LavadaService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
  }

  public registrarLavada(lavadaForm: NgForm) {
    this.loading = true;
    const formLavada = {
      estudianteLa: lavadaForm.form.value.estudianteLa,
      dia: lavadaForm.form.value.dia

    }
    this.lavadaService.validateLavada(formLavada).subscribe(dataFinal => {
      this.loading = true;
      if (dataFinal) {
        this.router.navigate(['/components/lavada'])
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
