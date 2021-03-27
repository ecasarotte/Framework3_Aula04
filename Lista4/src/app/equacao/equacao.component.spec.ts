import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquacaoComponent } from './equacao.component';

describe('EquacaoComponent', () => {
  let component: EquacaoComponent;
  let fixture: ComponentFixture<EquacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
