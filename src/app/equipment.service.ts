import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EquipmentService {
  API_URL: string = `${environment.apiUrl}/equipment`

  constructor(private http: HttpClient) { }

  // Get Equipment
  getEquipment(): Observable<any> {
    return this.http.get<Array<object>>(`${this.API_URL}`);
  }
}
