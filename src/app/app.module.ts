import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// Servicios
import { HttpClientModule } from '@angular/common/http';
import { ProductosService } from './servicios/productos.service';
import { CategoriasService } from './servicios/categorias.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeardComponent } from './components/heard/heard.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { HomeComponent } from './components/home/home.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { CompraComponent } from './components/compra/compra.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FilterDispoPipe } from './pipes/filter-dispo.pipe';
import { OrdenarProductoPipe } from './pipes/ordenar-producto.pipe';
import { MenuCategoriasComponent } from './components/menu-categorias/menu-categorias.component';
import { KeysPipe } from './pipes/keys.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeardComponent,
    TiendaComponent,
    HomeComponent,
    CarritoComponent,
    CompraComponent,
    FilterPipe,
    FilterDispoPipe,
    OrdenarProductoPipe,
    MenuCategoriasComponent,
    KeysPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ProductosService,
    CategoriasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
