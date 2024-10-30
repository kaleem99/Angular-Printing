import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintersComponentComponent } from './printers-component.component';

describe('PrintersComponentComponent', () => {
  let component: PrintersComponentComponent;
  let fixture: ComponentFixture<PrintersComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrintersComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrintersComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
