import { ChangeDetectorRef, Component } from '@angular/core';
import { ApiService } from '../../api-service';
import { Card } from '../../ui/card/card';

@Component({
  selector: 'app-product',
  imports: [Card],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
data: any = [];
constructor(private api: ApiService, private cdr: ChangeDetectorRef){}
ngOnInit(){
  this.api.getAllProducts().subscribe((res:any)=>{
    this.data = res.products;
    console.log(this.data);
    this.cdr.detectChanges();
  })
}
}