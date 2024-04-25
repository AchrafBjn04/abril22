import { Component, OnInit } from '@angular/core';
import { Estadio } from '../_modelo/estadio.interface';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { AnyadirEstadioComponent } from '../anyadir-estadio/anyadir-estadio.component';
import { EstadioService } from '../_service/estadio.service';

@Component({
  selector: 'app-pagina-principal',
  standalone: true,
  imports: [RouterLink, RouterModule, RouterOutlet, AnyadirEstadioComponent],
  templateUrl: './pagina-principal.component.html',
  styleUrl: './pagina-principal.component.css'
})
export class PaginaPrincipalComponent implements OnInit {
  listaEstadios: Estadio[] = [];

  constructor(private estadioServicio:EstadioService){}

  ngOnInit(): void {
    this.listaEstadios = this.estadioServicio.obtenerTodos();
  }

  mostrarFormulario: boolean = false;

  mostrarFormularioAgregarEstadio() {
    this.mostrarFormulario = true;
  }

  anyadirEstadio(estadio: Estadio){
    this.estadioServicio.agregarEstadio(estadio);
    this.mostrarFormulario = false;
  }
}