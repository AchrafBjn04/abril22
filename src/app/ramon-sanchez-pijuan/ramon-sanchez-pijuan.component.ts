import { Component } from '@angular/core';
import { Estadio } from '../_modelo/estadio.interface';

@Component({
  selector: 'app-ramon-sanchez-pijuan',
  standalone: true,
  imports: [],
  templateUrl: './ramon-sanchez-pijuan.component.html',
  styleUrl: './ramon-sanchez-pijuan.component.css'
})
export class RamonSanchezPijuanComponent {
  estadio: Estadio = {id:4, nombre: 'Ramón Sánchez-Pizjuán', direccion:"C. Sevilla Fútbol Club, s/n, 41005 Sevilla", urlImagen:"./assets/img/ramon-sanchez-pijuan.png"};
}
