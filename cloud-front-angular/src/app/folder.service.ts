import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Folder } from './folder';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class FolderService {

  private foldersUrl = 'api/folders'; 

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
    
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  };

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }


getFolders(): Observable<Folder[]> {
  return this.http.get<Folder[]>('http://localhost:4200/api/folders')
    .pipe(
      map(this.extractData),
      tap(folders => console.log(`fetched folders yo`, folders)),
      catchError(this.handleError)
      );
}

  // //////// Save methods //////////
  
  addFolder(name): Observable<Folder> { 
    const folder = {
      id: 15,
      id_parent: 0,
      name: name
    }
    console.log(folder);
    return this.http.post<Folder>('http://localhost:4200/api/folders/create', name);
}
}