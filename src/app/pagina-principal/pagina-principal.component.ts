import { Component, OnInit } from '@angular/core';
import { Estadio } from '../_modelo/estadio.interface';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { AnyadirEstadioComponent } from '../anyadir-estadio/anyadir-estadio.component';

@Component({
  selector: 'app-pagina-principal',
  standalone: true,
  imports: [RouterLink, RouterModule, RouterOutlet, AnyadirEstadioComponent],
  templateUrl: './pagina-principal.component.html',
  styleUrl: './pagina-principal.component.css'
})
export class PaginaPrincipalComponent{
  listaEstadios: Estadio[] = [
    {id:1, nombre: 'Camp Nou', direccion:"C/ d'Arístides Maillol, 12, Distrito de Les Corts, 08028 Barcelona", urlImagen:'./assets/img/camp-nou.png'},
    {id:2, nombre: 'Santiago Bernabeu', direccion:"Av. de Concha Espina, 1, 28036 Madrid", urlImagen:"./assets/img/santiago-bernabeu.png"},
    {id:3, nombre: 'Cívitas Metropolitano', direccion:"Av. de Luis Aragonés, 4, San Blas-Canillejas, 28022 Madrid", urlImagen:"./assets/img/civitas-metropolitano.png"},
    {id:4, nombre: 'Ramón Sánchez-Pizjuán', direccion:"C. Sevilla Fútbol Club, s/n, 41005 Sevilla", urlImagen:"./assets/img/ramon-sanchez-pijuan.png"}
  ]

  mostrarFormulario: boolean = false;

  mostrarFormularioAgregarEstadio() {
    this.mostrarFormulario = true;
  }

  anyadirEstadio(estadio: Estadio){
    this.listaEstadios.push(estadio);
    this.mostrarFormulario = false;
  }
}