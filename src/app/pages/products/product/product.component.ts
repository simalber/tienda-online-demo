import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { product } from '../interfaces/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {
  @Input()product!: product;
  @Output() addtoCartClick = new EventEmitter<product>();



  onClick(): void {
    this.addtoCartClick.emit(this.product);

  }

}
