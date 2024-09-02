import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringCalculatorComponent } from './string-calculator.component';

describe('StringCalculatorComponent', () => {
  let component: StringCalculatorComponent;
  let fixture: ComponentFixture<StringCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StringCalculatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StringCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return 0 for an empty string', () => {
    expect(component.add("")).toEqual(0);
  });

  it('should return 1 for the input "1"', () => {
    expect(component.add("1")).toEqual(1);
  });
  
  it('should return 6 for the input "1,5"', () => {
    expect(component.add("1,5")).toEqual(6);
  });

  it('should return 6 for the input "1,2,3"', () => {
    expect(component.add("1,2,3")).toEqual(6);
  });

  it('should return 6 for the input "1\\n2,3"', () => {
    expect(component.add("1\n2,3")).toEqual(6);
  });
  
  it('should return 3 for the input "//;\n1;2"'), () => {
    expect(component.add("//;\n1;2")).toEqual(3);
  }
});
