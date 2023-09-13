import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio/inicio.component';
import { ContactenosComponent } from './pages/contactenos/contactenos.component';
import { ProjectComponent } from './pages/project/project.component';
import { ResumeComponent } from './pages/resume/resume.component';


const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'contactenos', component: ContactenosComponent },
  { path: 'project', component: ProjectComponent},
  { path: 'resume', component: ResumeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }