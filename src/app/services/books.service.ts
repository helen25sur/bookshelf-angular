import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import { BookInList, List, BookFromISBN } from '../books';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  #apiKey = 'Si3mxXDRuV3jYysE1gCnawFbqpi7LGnk';

  #apiUrl = 'https://api.nytimes.com/svc/books/v3/lists/current/';

  #googleBookUrl = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  }

  getOneLastList(nameList: string): Observable<BookInList[] | any> {
    return this.http.get(`${this.#apiUrl}${nameList}.json?api-key=${this.#apiKey}`, { headers: this.httpOptions.headers })
  }

  getBookByISBNFromGoogle(isbn: string): Observable<BookFromISBN | any> {
    return this.http.get<BookFromISBN>(`${this.#googleBookUrl}?q=isbn:${isbn}`);
  }
}
