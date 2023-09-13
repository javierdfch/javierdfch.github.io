import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactenosComponent } from './pages/contactenos/contactenos.component';
import { InicioComponent } from './pages/inicio/inicio/inicio.component';
import { ProjectComponent } from './pages/project/project.component';
import { ResumeComponent } from './pages/resume/resume.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactenosComponent,
    InicioComponent,
    ProjectComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
