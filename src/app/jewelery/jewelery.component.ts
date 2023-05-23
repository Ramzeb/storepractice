import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-jewelery',
  templateUrl: './jewelery.component.html',
  styleUrls: ['./jewelery.component.css'],
})
export class JeweleryComponent {
  data: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.chargeData();
  }

  chargeData() {
    this.apiService.getJewelery().subscribe((data) => {
      this.data = data;
      console.log(this.data);
    });
  }
}
