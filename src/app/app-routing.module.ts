import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksListComponent } from './books-list/books-list.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ReadbooksListComponent } from './readbooks-list/readbooks-list.component';
import { UserSigninComponent } from './user-signin/user-signin.component';

const routes: Routes = [
  {
    path: '', component: BooksListComponent,
  },
  {
    path: 'wishlist', component: WishlistComponent,
  },
  {
    path: 'readbooks', component: ReadbooksListComponent,
  },
  {
    path: 'sign-in', component: UserSigninComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
