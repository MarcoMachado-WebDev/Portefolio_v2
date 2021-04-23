import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component:HomeComponent, data: {animation: 'HomePage'}},
  { path: 'about', component:AboutComponent, data: {animation: 'AboutPage'}},
  { path: 'projects', component:ProjectsComponent, data:{animation: 'ProjectsPage'} },
  { path: 'skills', component:SkillsComponent, data: {animation: 'SkillsPage'} },

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules }),
    BrowserModule,
    BrowserAnimationsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
