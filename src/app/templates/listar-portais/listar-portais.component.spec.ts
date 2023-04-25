import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPortaisComponent } from './listar-portais.component';

describe('ListarPortaisComponent', () => {
  let component: ListarPortaisComponent;
  let fixture: ComponentFixture<ListarPortaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPortaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPortaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
