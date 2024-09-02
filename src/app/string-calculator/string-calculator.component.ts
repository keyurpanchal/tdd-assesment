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

    let delimetersRegex = /,|\n/; 

    if (numbers.startsWith('//')) {
      const delimiterEndIndex = numbers.indexOf('\n');
      console.log(delimiterEndIndex);      
      const customDelimiter = numbers.substring(2, delimiterEndIndex);
      console.log(customDelimiter);      
      delimetersRegex = new RegExp(customDelimiter);
      console.log(delimetersRegex);       
      numbers = numbers.substring(delimiterEndIndex + 1);
      console.log(numbers);
    }

    const numberArray = numbers.split(delimetersRegex).map( num => Number(num));

    const negatives = numberArray.filter(num => num < 0);

    // Throw an exception if there are negative numbers
    if (negatives.length > 0) {
      throw new Error(`Negative numbers not allowed: ${negatives.join(', ')}`);
    }  

    return numberArray.reduce((sum,current) => sum + current, 0);
  }
}
