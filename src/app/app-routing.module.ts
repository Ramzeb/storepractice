import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { ClothingwomenComponent } from './clothingwomen/clothingwomen.component';
import { ClothingmenComponent } from './clothingmen/clothingmen.component';

import { JeweleryComponent } from './jewelery/jewelery.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'electronics', component: ElectronicsComponent },
  { path: 'men', component: ClothingmenComponent },
  { path: 'women', component: ClothingwomenComponent },
  { path: 'jewelery', component: JeweleryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
