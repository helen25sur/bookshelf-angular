import { Component, OnInit } from '@angular/core';
import { BookInList } from '../books';
import { BooksService } from '../services/books.service';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  booksList?: BookInList[];

  listNames = [
    {
      name_encoded: 'hardcover-fiction',
      label: 'Hardcover Fiction',
    },
    {
      name_encoded: 'hardcover-nonfiction',
      label: 'Hardcover Nonfiction',
    },
    {
      name_encoded: 'combined-print-and-e-book-fiction',
      label: 'Combined Print & E-Book Fiction',
    },
    {
      name_encoded: 'combined-print-and-e-book-nonfiction',
      label: 'Combined Print & E-Book Nonfiction',
    },
    {
      name_encoded: 'e-book-fiction',
      label: 'E-Book Fiction',
    },
    {
      name_encoded: 'e-book-nonfiction',
      label: 'E-Book Nonfiction',
    },
    {
      name_encoded: 'hardcover-graphic-books',
      label: 'Hardcover Graphic Books',
    },
    {
      name_encoded: 'paperback-graphic-books',
      label: 'Paperback Graphic Books',
    },
    {
      name_encoded: 'manga',
      label: 'Manga',
    },
  ];

  currentNameList: string = 'hardcover-fiction';

  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
   this.booksService.getOneLastList(this.currentNameList).subscribe( data => {
    // console.log(data);
    this.booksList = data.results.books;
   })
  }

  changeTab(event: MatTabChangeEvent) {
    this.currentNameList = this.listNames[event.index]['name_encoded'];

    this.booksService.getOneLastList(this.currentNameList).subscribe( data => {
    this.booksList = data.results.books;
   })
  }
}
