import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { InventoryComponent } from './inventory/inventory.component';

// källa: Gary Simon, Coursetro
// Här konfigurear jag mina routes
const routes: Routes = [

  // Default-route  
  {path: '' , component: HomeComponent},
  // Vanliga routes
  {path: 'inventory', component: InventoryComponent}

];

// 404 vid refresh av sidan i /inventory = lösning "HashLocationStrategy" src: https://bit.ly/2BwA6g1 
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash:true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
