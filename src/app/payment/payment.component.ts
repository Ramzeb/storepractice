import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent {
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
