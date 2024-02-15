import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  productos: any = [];

  constructor(private service: ProductoService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.Listar();
  }

  Listar(){
    this.service.listarTodos().subscribe(data => {
      this.productos = data;
    });
  }

  Eliminar(id: number){
    this.service.eliminar(id).subscribe(data => {
      this.toastr.success('Producto eliminado!');
      this.Listar();
    },
    error => {
      this.toastr.error('No se ha podido eliminar!');
     });
  }
}
