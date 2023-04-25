import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPortalComponent } from './cadastro-portal.component';

describe('CadastroPortalComponent', () => {
  let component: CadastroPortalComponent;
  let fixture: ComponentFixture<CadastroPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroPortalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
