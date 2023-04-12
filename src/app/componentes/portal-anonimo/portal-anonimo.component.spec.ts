import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalAnonimoComponent } from './portal-anonimo.component';

describe('PortalAnonimoComponent', () => {
  let component: PortalAnonimoComponent;
  let fixture: ComponentFixture<PortalAnonimoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortalAnonimoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalAnonimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
