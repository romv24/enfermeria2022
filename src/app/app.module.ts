import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreinscripcionComponent } from './preinscripcion/preinscripcion.component';
import { NovedadesComponent } from './novedades/novedades.component';
import { QuienessomosComponent } from './quienessomos/quienessomos.component';
import { CarrerasComponent } from './carreras/carreras.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PreinscripcionComponent,
    NovedadesComponent,
    QuienessomosComponent,
    CarrerasComponent,
    ToolbarComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
