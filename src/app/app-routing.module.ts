import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';


const routes: Routes = [
  {path: 'ruta1/:id/:segundo', component: Component1Component},
  {path: 'ruta1', component: Component1Component},
  {path: 'ruta1/prueba', component: Component2Component},
  {path: 'ruta2/:identificador', component: Component2Component},
  {path: 'ruta2', component: Component2Component},
  {path: 'ruta3', redirectTo: 'ruta1'},
  {path: 'ruta4', component: Component1Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
