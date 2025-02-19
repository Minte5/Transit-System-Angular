import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private apiUrl = 'https://your-api-url.com/api/items';

  constructor(private http: HttpClient) { }

  getReceivedItems(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/received`);
  }

  receiveItem(item: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/receive`, item);
  }

  sendForInspection(itemId: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/send-for-inspection/${itemId}`, {});
  }

  getInspectionItems(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/inspection`);
  }

  receiveFromInspection(itemId: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/receive-from-inspection/${itemId}`, {});
  }

  sendToStore(item: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/send-to-store`, item);
  }

  getSentToStoreItems(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/sent-to-store`);
  }
}
