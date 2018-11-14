import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  
  url="http://localhost:4200/assets/fixtures.json";
  
  
  constructor(public httpClient : HttpClient) {  };
  
  getCorreos() {
    // any[] devuelve un array de cualquier tipo
    return this.httpClient.get<any[]>(this.url);
  }
}
