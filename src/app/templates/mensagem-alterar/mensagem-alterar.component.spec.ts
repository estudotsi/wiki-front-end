import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensagemAlterarComponent } from './mensagem-alterar.component';

describe('MensagemAlterarComponent', () => {
  let component: MensagemAlterarComponent;
  let fixture: ComponentFixture<MensagemAlterarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensagemAlterarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MensagemAlterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
