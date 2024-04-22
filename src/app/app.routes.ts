import { Routes } from '@angular/router';
import { CampNouComponent } from './camp-nou/camp-nou.component';
import { SantiagoBernabeuComponent } from './santiago-bernabeu/santiago-bernabeu.component';
import { CivitasMetropolitanoComponent } from './civitas-metropolitano/civitas-metropolitano.component';
import { RamonSanchezPijuanComponent } from './ramon-sanchez-pijuan/ramon-sanchez-pijuan.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { AnyadirEstadioComponent } from './anyadir-estadio/anyadir-estadio.component';

export const routes: Routes = [
    {
        path : '', title: 'Home' , component: PaginaPrincipalComponent
    },
    {
        path : 'estadio/1', title: 'Camp Nou' , component: CampNouComponent
    },
    {
        path : 'estadio/2', title: 'Santiago Bernabéu' , component: SantiagoBernabeuComponent
    },
    {
        path : 'estadio/3', title: 'Cívitas Metropolitano' , component: CivitasMetropolitanoComponent
    },
    {
        path : 'estadio/4', title: 'Ramoón Sánchez Pijuán' , component: RamonSanchezPijuanComponent
    },
    {
        path : 'anyadir-estadio', title: 'Añadir estadio' , component: AnyadirEstadioComponent
    }
];
