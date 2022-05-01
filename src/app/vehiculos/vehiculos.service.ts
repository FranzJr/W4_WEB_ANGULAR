import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Vehiculo } from './vehiculo.model';


@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

  private endpoint: string = environment.vehiculos.list;

  getList(): Observable<Vehiculo[]> {
    return this.http.get<Vehiculo[]>(this.endpoint);
  }

  constructor(private http: HttpClient) {}
}
