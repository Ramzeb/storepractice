import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-clothingwomen',
  templateUrl: './clothingwomen.component.html',
  styleUrls: ['./clothingwomen.component.css'],
})
export class ClothingwomenComponent {
  data: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.chargeData();
  }

  chargeData() {
    this.apiService.getClothingWomen().subscribe((data) => {
      this.data = data;
      console.log(this.data);
    });
  }
}
