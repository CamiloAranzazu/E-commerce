import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TiendaComponent } from './components/tienda/tienda.component';
import { HomeComponent } from './components/home/home.component';
import { CompraComponent } from './components/compra/compra.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'tienda', component: TiendaComponent },
  { path: 'compraExitosa', component: CompraComponent },
  { path: '**', component: HomeComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
