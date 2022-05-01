/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import faker from '@faker-js/faker';
import { VehiculosListComponent } from './vehiculos-list.component';
import { VehiculosService } from '../vehiculos.service';
import { Vehiculo } from '../vehiculo.model';


describe('VehiculosListComponent', () => {
  let component: VehiculosListComponent;
  let fixture: ComponentFixture<VehiculosListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ VehiculosListComponent ],
      providers: [VehiculosService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculosListComponent);
    component = fixture.componentInstance;

    component.list = [
      new Vehiculo(
        faker.datatype.number(),
        faker.lorem.word(),
        faker.lorem.word(),
        faker.lorem.word(),
        faker.datatype.number(),
        faker.datatype.number(),
        faker.lorem.word(),
        faker.lorem.word()
      ),
      new Vehiculo(
        faker.datatype.number(),
        faker.lorem.word(),
        faker.lorem.word(),
        faker.lorem.word(),
        faker.datatype.number(),
        faker.datatype.number(),
        faker.lorem.word(),
        faker.lorem.word()
      ),
      new Vehiculo(
        faker.datatype.number(),
        faker.lorem.word(),
        faker.lorem.word(),
        faker.lorem.word(),
        faker.datatype.number(),
        faker.datatype.number(),
        faker.lorem.word(),
        faker.lorem.word()
      ),
    ];

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an thead element ', () => {
    expect(debug.query(By.css('thead')).attributes['class']).toEqual(
      'table-dark head-table'
    );
  });

  it('should have 3 coffees ', () => {
    expect(debug.queryAll(By.css('.item-row')).length).toEqual(
      3
    );
  });

});
