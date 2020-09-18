import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentComponent } from '../app/components/content/content.component';
import { EducationComponent } from '../app/components/education/education.component';
import { AboutUsComponent } from '../app/components/about-us/about-us.component'




const routes: Routes = [
  { path: 'content', component: ContentComponent},
  { path: 'education', component: EducationComponent},
  { path: 'aboutus', component: AboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ContentComponent, EducationComponent, AboutUsComponent]