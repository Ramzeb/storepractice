import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-clothingmen',
  templateUrl: './clothingmen.component.html',
  styleUrls: ['./clothingmen.component.css'],
})
export class ClothingmenComponent {
  data: any[] = [];
  element: boolean = true;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.chargeData();
    this.showData();
    this.hideData();
  }

  chargeData() {
    this.apiService.getClothingMen().subscribe((data) => {
      this.data = data;
      console.log(this.data);
    });
  }
  showData() {
    return (this.element = true);
  }
  hideData() {
    return (this.element = false);
  }
}
