import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from '../components/content/content.component';
import { RoutingRoutingModule } from './routing-routing.module';


const routes: Routes = [
  { path: 'home', component: ContentComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
  { path: '', redirectTo: '/home', pathMatch: 'full' }
  { path: '', redirectTo: '/home', pathMatch: 'full' }
  { path: '', redirectTo: '/home', pathMatch: 'full' }
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }