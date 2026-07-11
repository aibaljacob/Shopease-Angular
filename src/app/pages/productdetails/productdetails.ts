import { ChangeDetectorRef, Component } from '@angular/core';
import { ApiService } from '../../api-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  imports: [],
  templateUrl: './productdetails.html',
  styleUrl: './productdetails.css',
})
export class Productdetails {
  id: any;
  singleProduct: any;
  constructor(private api:ApiService,private cdr: ChangeDetectorRef,private ar:ActivatedRoute) {}
    ngOnInit() {
      this.id = this.ar.snapshot.params['id'];
      this.api.getProductDetails(this.id).subscribe((res:any)=>{
        this.singleProduct = res;
        this.cdr.detectChanges();
      });
}
}