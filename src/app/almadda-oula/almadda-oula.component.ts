import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-almadda-oula',
  templateUrl: './almadda-oula.component.html',
  styleUrls: ['./almadda-oula.component.css']
})
export class AlmaddaOulaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.initializeListeners();
  }



    initializeListeners() {
      if (typeof document !== 'undefined') {
        const checkButton7 = document.getElementById('checkButton7') as HTMLButtonElement;
        const correctionsDiv7 = document.getElementById('corrections7') as HTMLDivElement;
        const questions7 = document.querySelectorAll('.question7') as NodeListOf<HTMLInputElement>;
  
        const correctAnswers7: (string | boolean)[] = [true, false, false, true, true, false, 'أثقل', 'لهما نفس الوزن', 'أخف', 'لهما نفس الوزن'];
  
        const listT: string[] = [];
        const listF: string[] = [];
  
        checkButton7.addEventListener('click', () => {
          correctionsDiv7.innerHTML = '';
          const answers: (string | boolean)[] = [];
          questions7.forEach((question7, index) => {
            const input = question7 as HTMLInputElement;
            const label7 = input.parentElement?.textContent?.trim();
            const value = input.type === 'text' ? input.value : input.checked;
            answers.push(value);
            let isCorrect7;
            if (index < 5) {
              isCorrect7 = typeof value === 'string' && value.toLowerCase() === (correctAnswers7[index] as string).toLowerCase();
            } else {
              isCorrect7 = value === (correctAnswers7[index] as boolean);
            }
  
            const correctionText7 = document.createElement('p');
            correctionText7.textContent = label7 + ' - ' + (isCorrect7 ? 'أحسنت الإختيار هذا الجواب صحيح' : 'لقد أخطأت هذا الجواب غير صحيح ');
            correctionText7.style.color = isCorrect7 ? 'green' : 'red';
  
            correctionsDiv7.appendChild(correctionText7);
  
            isCorrect7 ? listT.push("TRUE") : listF.push("FALSE");
          });
  
          console.log(listT.length);
          console.log(listF.length);
        });
      }
    
  
  



    if (typeof document !== 'undefined') {
      const checkButton1 = document.getElementById('checkButton1') as HTMLButtonElement;
      const correctionsDiv1 = document.getElementById('corrections1') as HTMLDivElement;
      const questions1 = document.querySelectorAll('.question1') as NodeListOf<HTMLInputElement>;

      const correctAnswers1 = [true, false, false, true, false, true, true, false];

      const listT: string[] = [];
      const listF: string[] = [];

      checkButton1.addEventListener('click', () => {
        correctionsDiv1.innerHTML = '';

        questions1.forEach((question1, index) => {
          const label1 = question1.parentElement?.textContent?.trim(); // Vérification de nullité
          const isCorrect1 = question1.checked === correctAnswers1[index];

          const correctionText1 = document.createElement('p');
          correctionText1.textContent = label1 !== null ? label1 + ' - ' + (isCorrect1 ? 'أحسنت الإختيار هذا الجواب صحيح' : 'لقد أخطأت هذا الجواب غير صحيح ') : ''; // Vérification de nullité
          correctionText1.style.color = isCorrect1 ? 'green' : 'red';

          correctionsDiv1.appendChild(correctionText1);

          isCorrect1 ? listT.push("TRUE") : listF.push("FALSE");
        });

        const correctionsDiv2 = document.getElementById('corrections2') as HTMLDivElement;
        const correctionsDiv9 = document.getElementById('corrections9') as HTMLDivElement;

        const correctionText2 = document.createElement('p');
        const correctionText3 = document.createElement('p');
        const correctionText9 = document.createElement('p');

        correctionsDiv9.innerHTML = '';
        correctionText2.textContent = 'الإجابات الصحيحة : ' + listT.length.toString(); // Conversion en chaîne de caractères
        correctionText2.style.color = 'green';
        correctionText3.textContent = 'الاجابات الخاطئة :' + listF.length.toString(); // Conversion en chaîne de caractères
        correctionText3.style.color = 'red';
        correctionText9.textContent = '%' + ' النتيجة  :  ' + (listT.length / (listF.length + listT.length) * 100).toString(); // Conversion en chaîne de caractères
        correctionText9.style.color = 'white';
        correctionText9.style.fontSize = 'x-large';
        correctionText9.style.backgroundColor = "blue";

        correctionsDiv2.appendChild(correctionText3);
        correctionsDiv9.appendChild(correctionText9);
        correctionsDiv2.appendChild(correctionText2);

        console.log(listT.length);
        console.log(listF.length);
      });
    }
  }}
