import { NgModule } from '@angular/core';
import { ProductListComponent } from './products-list.component';
import { ProductsDetailComponent } from './products-detail.component';
import { ConverToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { ProductsDetailGuard } from './products-detail.guard';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductsDetailComponent,
    ConverToSpacesPipe,
  ],
  imports: [
    RouterModule.forChild([
      {path: 'products', component: ProductListComponent},
      {
        path: 'products/:id',
        canActivate:[ProductsDetailGuard],
        component: ProductsDetailComponent
      },
    ]),
    SharedModule
  ]
})
export class ProductModule { }
