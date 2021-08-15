import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroeComponent } from './heroe/heroe.component';
import { HomeComponent } from './home/home.component';
import { InicioComponent } from './inicio/inicio.component';
import { SeriresComponentComponent } from './serires-component/serires-component.component';
const routes: Routes = [
  {path: "Personajes", component: InicioComponent},
  {path: "series", component: SeriresComponentComponent},
  {path: "Home", component: HomeComponent},
  {path: "Personaje/:nombre", component: HeroeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
