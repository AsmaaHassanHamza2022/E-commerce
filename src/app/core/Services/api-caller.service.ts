import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { MessageService } from 'primeng/api';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn:'root',
})
export class ApiCallerService {
  private baseUrl = 'https://localhost:7125/api';

  constructor(private http: HttpClient,private messageService: MessageService) {}

  private getHeaders(): HttpHeaders {
    // Add any required headers for authentication or request customization
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    return headers;
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    // Handle different types of errors and return a standardized error response
    let errorMessage = 'An error occurred';
    let errorCode = 'UNKNOWN_ERROR';

    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = error.error?.message || errorMessage;
      errorCode = error.error?.code || errorCode;
    }

    const errorResponse = {
      error: true,
      code: errorCode,
      message: errorMessage,
    };
    this.messageService.add({ severity: 'error', summary: 'Error', detail:errorResponse.message,life: 100000000000  })
    console.error(errorResponse);
    return throwError(() => errorResponse);
  }

  private sendRequest<T>(
    method: string,
    endpoint: string,
    data: any,
  ): Observable<T> {
    const url = `${this.baseUrl}/${endpoint}`;
    const headers = this.getHeaders();

    const options = {
      headers,
      body: data,
    };

    let request$: Observable<T>;

    switch (method) {
      case 'GET':
        request$ = this.http.get<T>(url, options);
        break;
      case 'POST':
        request$ = this.http.post<T>(url, data, options);
        break;
      case 'PUT':
        request$ = this.http.put<T>(url, data, options);
        break;
      case 'DELETE':
        request$ = this.http.delete<T>(url, options);
        break;
      default:
        throw new Error(`Unsupported HTTP method: ${method}`);
    }

    return request$.pipe(catchError((error)=>this.handleError(error)));
  }

  public get<T>(endpoint: string): Observable<T> {
    return this.sendRequest<T>('GET', endpoint, null);
  }

  public post<T>(endpoint: string, data: any): Observable<T> {
    return this.sendRequest<T>('POST', endpoint, data);
  }

  public put<T>(endpoint: string, data: any): Observable<T> {
    return this.sendRequest<T>('PUT', endpoint, data);
  }

  public delete<T>(endpoint: string): Observable<T> {
    return this.sendRequest<T>('DELETE', endpoint, null);
  }
}
