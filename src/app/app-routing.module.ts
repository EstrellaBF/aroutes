import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common'; // Porqué no se declara componentes en el routing
import { RouterModule, Routes } from '@angular/router'; // Exportando RouterModule hace que las directivas rutas disponibles para appModule

import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
  { path: 'heroes-ruta', component: HeroesComponent }
]

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [ HeroesComponent ]
})
export class AppRoutingModule { }
