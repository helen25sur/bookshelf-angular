import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksListComponent } from './books-list/books-list.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ReadbooksListComponent } from './readbooks-list/readbooks-list.component';
import { SearchBooksComponent } from './books-list/search-books/search-books.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EditProfileComponent } from './user-profile/edit-profile/edit-profile.component';
import { UserSigninComponent } from './user-signin/user-signin.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    WishlistComponent,
    ReadbooksListComponent,
    SearchBooksComponent,
    BookDetailsComponent,
    UserProfileComponent,
    EditProfileComponent,
    UserSigninComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
