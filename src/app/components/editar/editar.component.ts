import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductoService } from 'src/app/services/producto.service';
@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  miFormulario: FormGroup;

  constructor(private service: ProductoService ,
              private routerAct: ActivatedRoute,
              private router: Router,
              private toastr: ToastrService) {

    this.miFormulario = new FormGroup({
      id: new FormControl(),
      productName: new FormControl('' , [Validators.required ]),
      category: new FormControl('' , [Validators.required]),
      unitPrice: new FormControl('' , [ Validators.required])
    });
  }
  ngOnInit(): void {
    this.routerAct.params.subscribe( (data: any) => {
      this.buscarPorId(data.id);
    });
  }

  buscarPorId(id: number){
    if (id){
      this.service.buscarPorId(id).subscribe(data => {
        this.miFormulario.setValue(data);
      } , (error) => {
        this.toastr.error(`No se encontro producto con el id ${id}.`);
        this.router.navigate(['/listar']);
      });
    }
  }

  guardarCambios(){
    this.service.editar(this.miFormulario.value).subscribe(data => {
      this.miFormulario.reset();
      this.router.navigate(['/listar']);
      this.toastr.success('Producto editado!');
    },
    error => {
      this.toastr.error('No se ha podido editar!');
     });
  }
}
