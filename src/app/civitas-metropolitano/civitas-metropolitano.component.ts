import { Component } from '@angular/core';
import { Estadio } from '../_modelo/estadio.interface';

@Component({
  selector: 'app-civitas-metropolitano',
  standalone: true,
  imports: [],
  templateUrl: './civitas-metropolitano.component.html',
  styleUrl: './civitas-metropolitano.component.css'
})
export class CivitasMetropolitanoComponent {
  estadio: Estadio = {id:3, nombre: 'Cívitas Metropolitano', direccion:"Av. de Luis Aragonés, 4, San Blas-Canillejas, 28022 Madrid", urlImagen:"./assets/img/civitas-metropolitano.png"};
}
