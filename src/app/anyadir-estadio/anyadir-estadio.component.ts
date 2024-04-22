import { Component, EventEmitter, Output } from '@angular/core';
import { Estadio } from '../_modelo/estadio.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-anyadir-estadio',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './anyadir-estadio.component.html',
  styleUrl: './anyadir-estadio.component.css'
})
export class AnyadirEstadioComponent {
  @Output()
  emitter: EventEmitter<Estadio> = new EventEmitter();
  
  id: number = 0;
  nombre: string = '';
  direccion: string = '';
  urlImagen: string = '';
  informacion: string = '';
  historia: string = '';

  anyadirEstadio(){
    const estadio: Estadio = {id: this.id, nombre: this.nombre, direccion: this.direccion, urlImagen: this.urlImagen};
    this.emitter.emit(estadio)
  }
}
