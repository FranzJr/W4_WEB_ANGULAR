import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../vehiculo.model';
import { VehiculosService } from '../vehiculos.service';

@Component({
  selector: 'app-vehiculos-list',
  templateUrl: './vehiculos-list.component.html',
  styleUrls: ['./vehiculos-list.component.css']
})
export class VehiculosListComponent implements OnInit {

  list: Vehiculo[] = [];
  cantRenault: Number = 0;
  cantChevrolet: Number = 0;
  cantNissan: Number = 0;

  constructor(private service: VehiculosService) { 
    service.getList().subscribe((response: Vehiculo[])  => {
      this.list = response;
      this.cantRenault = response.filter(x => x.marca === 'Renault').length;
      this.cantChevrolet = response.filter(x => x.marca === 'Chevrolet').length;
      this.cantNissan = response.filter(x => x.marca === 'Nissan').length;
    });
  }

  ngOnInit(): void {
  }

}
