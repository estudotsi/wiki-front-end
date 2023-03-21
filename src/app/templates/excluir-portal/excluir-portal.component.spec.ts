import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirPortalComponent } from './excluir-portal.component';

describe('ExcluirPortalComponent', () => {
  let component: ExcluirPortalComponent;
  let fixture: ComponentFixture<ExcluirPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcluirPortalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcluirPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
