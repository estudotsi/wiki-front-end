import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarPortalComponent } from './alterar-portal.component';

describe('AlterarPortalComponent', () => {
  let component: AlterarPortalComponent;
  let fixture: ComponentFixture<AlterarPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlterarPortalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
