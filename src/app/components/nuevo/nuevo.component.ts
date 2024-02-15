import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  miFormulario: FormGroup;

  constructor(private service: ProductoService ,
              private toastr: ToastrService,
              private router: Router) {
    this.miFormulario = new FormGroup({
      productName: new FormControl('' , [Validators.required ]),
      category: new FormControl('' , [Validators.required]),
      unitPrice: new FormControl('' , [ Validators.required])
    });
  }
  ngOnInit(): void {

  }

  guardarCambios(){
    this.service.guardar(this.miFormulario.value).subscribe(data => {
      this.miFormulario.reset();
      this.router.navigate(['/listar']);
      this.toastr.success('Producto creado!');
    },
    error => {
      this.toastr.error('No se ha podido registrar!');
     });
  }
}
