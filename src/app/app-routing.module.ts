import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ListaItems } from './pages/items/lista-items.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "lista-items/:productURL",
    component: ListaItems
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule, CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
