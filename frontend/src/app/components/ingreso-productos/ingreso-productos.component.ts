import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-ingreso-productos',
  templateUrl: './ingreso-productos.component.html',
  styleUrls: ['./ingreso-productos.component.css']
})
export class IngresoProductosComponent implements OnInit {
  respuestaObtenida: string = '';

  constructor(private productoService: ProductoService) {}

  ngOnInit() {
    // Suscribirse al observable para obtener el último dato recibido
    this.productoService.ultimoDatoHex$.subscribe((datoRecibido: string) => {
      this.respuestaObtenida = datoRecibido;
    });
  }

  onSubmit() {
    // Llama al servicio para obtener el último dato almacenado en el servidor
    this.productoService.obtenerUltimoDatoHex().subscribe(
      (datoRecibido: string) => {
        this.respuestaObtenida = datoRecibido;
      },
      (error: any) => {
        console.error('Error al obtener el último dato:', error);
      }
    );
  }
}
