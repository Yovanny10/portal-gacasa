import Swal from 'sweetalert2';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CasaService } from './casa.service';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-casa',
  templateUrl: './casa.component.html',
  styleUrls: ['./casa.component.scss'],
})

export class CasaComponent implements OnInit {
  public loading = false;
  public listaCasa: any = [];
  public casaSelect;

  @ViewChild('casaForm', {static: false}) casaForm: NgForm;



  constructor(private casaService: CasaService,
    private router: Router,
    private route: ActivatedRoute) { }   
 
  public registrarCasa(casaForm: NgForm) {
    this.loading = true;
    const formCasa = {
      nombreCasa: casaForm.form.value.nombreCasa,
      tipoCasa: casaForm.form.value.tipoCasa,
      detalles: casaForm.form.value.detalles
    }
    this.casaService.validateCasa(formCasa).subscribe(dataFinal => {
      this.loading = true;
      if (dataFinal) {
        this.router.navigate(['/components/carousel'])
        this.loading = false;
        Swal.fire({
            title: 'Casa creada exitosamente'
          })
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

  ngOnInit() {
    this.getAllCasa();
  }

  getAllCasa(): void  {
    this.casaService.obtenerCasa().subscribe(dataFinal => {
      this.listaCasa = dataFinal.casa
    // console.log(dataFinal.casa)
    },
      error => {
        console.log(error)
      });
  }
  

}
