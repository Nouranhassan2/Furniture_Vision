import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  @Input() isVisible: boolean = false;
  @Input() selectedProduct?: Product;  // Make sure the type matches what you expect.
  @Output() closeEvent = new EventEmitter<void>();

  constructor() {}

  close(): void {
    this.isVisible = false;
    this.closeEvent.emit();  // Emit an event when the modal is closed

  }
}
