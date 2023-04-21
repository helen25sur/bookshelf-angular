import { Component, OnInit } from '@angular/core';
import { BookInList } from '../books';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  booksList?: BookInList[];

  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
   this.booksService.getOneLastList().subscribe( data => {
    console.log(data);
    this.booksList = data.results.books;
   })
  }
}
