import { Component } from '@angular/core';

@Component({
  selector: 'app-string-calculator',
  standalone: true,
  imports: [],
  templateUrl: './string-calculator.component.html',
  styleUrl: './string-calculator.component.css'
})
export class StringCalculatorComponent {

  add(numbers: string): number {
    if (numbers === "") {
      return 0;
    }
    const numberArray = numbers.split(',').map( num => Number(num));
    return numberArray.reduce((sum,current) => sum + current, 0);
  }

}
