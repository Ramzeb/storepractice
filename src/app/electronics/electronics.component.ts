import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css'],
})
export class ElectronicsComponent {
  data: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.chargeData();
  }

  chargeData() {
    this.apiService.getElectronics().subscribe((data) => {
      this.data = data;
      console.log(this.data);
    });
  }
}
