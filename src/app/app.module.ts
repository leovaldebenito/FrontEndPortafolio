import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { AptitudesComponent } from './componentes/aptitudes/aptitudes.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { ExperienciaYEducacionComponent } from './componentes/experiencia-y-educacion/experiencia-y-educacion.component';
import { LogrosComponent } from './componentes/logros/logros.component';

@NgModule({
  declarations: [
    AppComponent,
    AcercaDeComponent,
    AptitudesComponent,
    EncabezadoComponent,
    ExperienciaYEducacionComponent,
    LogrosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
