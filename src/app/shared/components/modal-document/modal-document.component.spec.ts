import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDocumentComponent } from './modal-document.component';

describe('ModalDocumentComponent', () => {
  let component: ModalDocumentComponent;
  let fixture: ComponentFixture<ModalDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
