import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Product } from './pages/product/product';
import { Productdetails } from './pages/productdetails/productdetails';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
    {
        path: '',component: Home
    },
    {
        path: 'contact',component: Contact
    },
    {
        path: 'products',component: Product
    },
    {
        path: 'productdetails/:id',component: Productdetails
    }
];
