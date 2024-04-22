import { Component } from '@angular/core';
import { Estadio } from '../_modelo/estadio.interface';

@Component({
  selector: 'app-santiago-bernabeu',
  standalone: true,
  imports: [],
  templateUrl: './santiago-bernabeu.component.html',
  styleUrl: './santiago-bernabeu.component.css'
})
export class SantiagoBernabeuComponent {
  estadio: Estadio = {id:2, nombre: 'Santiago Bernabeu', direccion:"Av. de Concha Espina, 1, 28036 Madrid", urlImagen:"./assets/img/santiago-bernabeu.png"};
}