import { NgModule, signal } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { IngresoProductosComponent } from './components/ingreso-productos/ingreso-productos.component';
import { FormsModule } from '@angular/forms';
import { MenuPrincipalComponent } from './components/menu-principal/menu-principal.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { OfertasComponent } from './components/ofertas/ofertas.component';
import { AdminComponent } from './components/admin/admin.component';
import { GestionProductoComponent } from './components/gestion-producto/gestion-producto.component';
import { HomeComponent } from './components/home/home.component'
import { RouterModule, Route } from '@angular/router';
import { VerProductosComponent } from './components/ver-productos/ver-productos.component';
import { OperadorComponent } from './components/operador/operador.component';
import { FacturarComponent } from './components/facturar/facturar.component';

const rutas:Route[]=[
  {path:'home', component:HomeComponent},
  {path:'ofertas', component:OfertasComponent},
  {path:'signIn', component:SignInComponent},
  {path:'admin', component:AdminComponent},
  {path:'gestionProducto', component:GestionProductoComponent},
  {path:'ingresoProducto', component:IngresoProductosComponent},
  {path:'verProducto', component:VerProductosComponent},
  {path:'operador', component:OperadorComponent},
  {path:'facturar', component:FacturarComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    IngresoProductosComponent,
    MenuPrincipalComponent,
    SignInComponent,
    OfertasComponent,
    AdminComponent,
    GestionProductoComponent,
    HomeComponent,
    VerProductosComponent,
    OperadorComponent,
    FacturarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(rutas),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
