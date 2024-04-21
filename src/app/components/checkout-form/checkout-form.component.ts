import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutFormComponent {

  order: any = {};

  constructor(private http: HttpClient) {}

  onSubmit(): void {
    this.http.post('http://localhost:5000/submit_order', this.order).subscribe(
      response => alert('Order submitted successfully'),
      error => alert('Error occurred while submitting order')
    );
  }
}
