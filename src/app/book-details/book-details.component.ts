import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { BookFromISBN } from '../books';
import { BooksService } from '../services/books.service';


@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  book?: BookFromISBN;
  bookID: string = '';

  ngOnInit(): void {
    this.bookID = this.route.snapshot.params['bookId'];

    this.booksService.getBookByISBNFromGoogle(this.bookID).subscribe( data => {
    console.log(data);
    this.book = data.items[0].volumeInfo;
   })
  }

  constructor(private route: ActivatedRoute, private booksService: BooksService) {}

}
