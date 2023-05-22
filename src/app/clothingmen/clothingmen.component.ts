import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-clothingmen',
  templateUrl: './clothingmen.component.html',
  styleUrls: ['./clothingmen.component.css'],
})
export class ClothingmenComponent {
  data: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.chargeData();
  }

  chargeData() {
    this.apiService.getClothingMen().subscribe((data) => {
      this.data = data;
      console.log(this.data);
    });
  }
}
