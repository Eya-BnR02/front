import {  Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-altaghdhia-oula',
  templateUrl: './altaghdhia-oula.component.html',
  styleUrl: './altaghdhia-oula.component.css'
})
export class AltaghdhiaOulaComponent  implements OnInit {
 
  constructor() {}

  ngOnInit(): void {
    this.initializeListeners();
  }

  initializeListeners() {
    
let listT: string[] = [];
let listF: string[] = [];

  
      
      const checkButton6 = document.getElementById('checkButton6');
      const correctionsDiv2 = document.getElementById('corrections2');
      const correctionsDiv9 = document.getElementById('corrections9');
      const correctionsDiv6 = document.getElementById('corrections6');
      const questions6 = document.querySelectorAll('.question6');
  
      const correctAnswers6: (string | boolean)[] = [
          'لا يتغذى جيدا',
          'يتغذى جيدا',
          'لا يتغذى جيدا',
          'يتغذى أكثر من اللازم',
          'لا يتغذى جيدا',
          'يتغذى جيدا',
          'يتغذى أكثر من اللازم',
          'لا يتغدى جيدا'
      ];
      if (checkButton6 != null )
      checkButton6.addEventListener('click', function () {
          if (!correctionsDiv6 || !correctionsDiv2 || !correctionsDiv9) return;
  
          correctionsDiv6.innerHTML = '';
          const answers: string[] = [];
  
          for (let i = 1; i <= 8; i++) {
              const answerInput = document.getElementById(i.toString()) as HTMLInputElement | null;
              if (answerInput) {
                  answers.push(answerInput.value);
              }
          }
  
          questions6.forEach((question6, index) => {
              const label6 = question6.parentElement?.textContent?.trim() || '';
              let isCorrect6;
  
              if (typeof correctAnswers6[index] === 'string') {
                isCorrect6 = typeof answers[index] === 'string' && answers[index].toLowerCase() === (correctAnswers6[index] as string).toLowerCase();
         
               } 
               else {
                  isCorrect6 = answers[index] === correctAnswers6[index];
              }
  
              const correctionText6 = document.createElement('p');
              correctionText6.textContent = label6 + ' - ' + (isCorrect6 ? 'أحسنت الإختيار هذا الجواب صحيح' : 'لقد أخطأت هذا الجواب غير صحيح ');
              correctionText6.style.color = isCorrect6 ? 'green' : 'red';
  
              correctionsDiv6.appendChild(correctionText6);
          });

  
          const correctionText2 = document.createElement('p');
          const correctionText3 = document.createElement('p');
          const correctionText9 = document.createElement('p');
          correctionText2.textContent = 'الإجابات الصحيحة : ' + listT.length;
          correctionText2.style.color = 'green';
          correctionText3.textContent = 'الاجابات الخاطئة :' + listF.length;
          correctionText9.textContent = '%' + ' النتيجة  :  ' + (listT.length / (listF.length + listT.length) * 100).toString();
          correctionText3.style.color = 'red';
          correctionText9.style.color = 'white';
          correctionText9.style.fontSize = 'x-large';
          correctionText9.style.backgroundColor = "blue";
          
          correctionsDiv2.appendChild(correctionText3);
          correctionsDiv9.appendChild(correctionText9);
          correctionsDiv2.appendChild(correctionText2);
      });
  }
}
