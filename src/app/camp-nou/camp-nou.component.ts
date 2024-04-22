import { Component } from '@angular/core';
import { Estadio } from '../_modelo/estadio.interface';

@Component({
  selector: 'app-camp-nou',
  standalone: true,
  imports: [],
  templateUrl: './camp-nou.component.html',
  styleUrl: './camp-nou.component.css'
})
export class CampNouComponent {
  estadio: Estadio = {id:1, nombre: 'Camp Nou', direccion:"C/ d'Arístides Maillol, 12, Distrito de Les Corts, 08028 Barcelona", urlImagen:'./assets/img/camp-nou.png'};
}
