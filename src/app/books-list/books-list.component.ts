import { Component, OnInit } from '@angular/core';
import { Book, books } from '../books';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  booksList: Book[] = books;  
  ngOnInit(): void { }
}
