import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { ClothingmenComponent } from './clothingmen/clothingmen.component';
import { ClothingwomenComponent } from './clothingwomen/clothingwomen.component';
import { JeweleryComponent } from './jewelery/jewelery.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, ElectronicsComponent, ClothingmenComponent, ClothingwomenComponent, JeweleryComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
