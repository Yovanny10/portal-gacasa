import Swal from 'sweetalert2';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AseocuartoService } from './aseocuarto.service';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-aseocuarto',
  templateUrl: './aseocuarto.component.html',
  styleUrls: ['./aseocuarto.component.scss']
})
export class AseocuartoComponent implements OnInit {
  public loading = false;

  @ViewChild('aseoCuartoForm', {static: false}) aseoCuartoForm: NgForm;

  constructor(private aseocuartoService: AseocuartoService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
  }

  public registrarAseoCuarto(aseoCuartoForm: NgForm) {
    this.loading = true;
    const formAseoCuarto = {
      estudianteCu: aseoCuartoForm.form.value.estudianteCu,
      dia: aseoCuartoForm.form.value.dia,
      numCuarto: aseoCuartoForm.form.value.numCuarto

    }
    this.aseocuartoService.validateAseoCuarto(formAseoCuarto).subscribe(dataFinal => {
      this.loading = true;
      if (dataFinal) {
        this.router.navigate(['/components/aseocuarto'])
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
