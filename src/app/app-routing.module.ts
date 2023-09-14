import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio/inicio.component';
import { ContactenosComponent } from './pages/contactenos/contactenos.component';
import { ProjectComponent } from './pages/project/project.component';
import { ResumeComponent } from './pages/resume/resume.component';


const routes: Routes = [
  { path: '', component: InicioComponent, pathMatch:"full" },
  { path: 'inicio', component: InicioComponent, pathMatch:"full" },
  { path: 'contactenos', component: ContactenosComponent, pathMatch:"full" },
  { path: 'project', component: ProjectComponent, pathMatch:"full"},
  { path: 'resume', component: ResumeComponent, pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }