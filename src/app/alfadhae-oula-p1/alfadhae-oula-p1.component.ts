import { Component, OnInit } from '@angular/core';
import { EleveService } from '../Services/eleve.service';
@Component({
  selector: 'app-alfadhae-oula-p1',
  templateUrl: './alfadhae-oula-p1.component.html',
  styleUrls: ['./alfadhae-oula-p1.component.css']
})
export class AlfadhaeOulaP1Component implements OnInit {
 
  constructor(private eleveService: EleveService) {}

  ngOnInit(): void {
    this.initializeListeners();
  }

  initializeListeners() {
    
    
    if (typeof document !== 'undefined') {
      
      // Partie 1
      
      const checkButton = document.getElementById('checkButton') as HTMLButtonElement;
      const correctionsDiv = document.getElementById('corrections') as HTMLDivElement;
      const questions = document.querySelectorAll('.question') as NodeListOf<HTMLInputElement>;
      const correctAnswers = [true, false, true, true, false, true, false];

      checkButton.addEventListener('click', () => {
        correctionsDiv.innerHTML = '';

        questions.forEach((question, index) => {
          const label = question.parentElement?.textContent?.trim() || '';
          const isCorrect = question.checked === correctAnswers[index];

          const correctionText = document.createElement('p');
          correctionText.textContent = label + ' - ' + (isCorrect ? 'أحسنت الإختيار هذا الجواب صحيح' : 'لقد أخطأت هذا الجواب غير صحيح ');
          correctionText.style.color = isCorrect ? 'green' : 'red';

          correctionsDiv.appendChild(correctionText);
        });

        questions.forEach((question, index) => {
          const isCorrect = question.checked === correctAnswers[index];
          isCorrect ? listT.push("TRUE") : listF.push("FALSE");
        });
        
      });

      // Partie 2
      const checkButton1 = document.getElementById('checkButton1') as HTMLButtonElement;
      const correctionsDiv1 = document.getElementById('corrections1') as HTMLDivElement;
      const questions1 = document.querySelectorAll('.question1') as NodeListOf<HTMLInputElement>;
      const correctAnswers1 = [true, true, true, false, false, false, true];

      checkButton1.addEventListener('click', () => {
        correctionsDiv1.innerHTML = '';

        questions1.forEach((question1, index) => {
          const label1 = question1.parentElement?.textContent?.trim() || '';
          const isCorrect1 = question1.checked === correctAnswers1[index];

          const correctionText1 = document.createElement('p');
          correctionText1.textContent = label1 + ' - ' + (isCorrect1 ? 'أحسنت الإختيار هذا الجواب صحيح' : 'لقد أخطأت هذا الجواب غير صحيح ');
          correctionText1.style.color = isCorrect1 ? 'green' : 'red';

          correctionsDiv1.appendChild(correctionText1);
        });

        questions1.forEach((question1, index) => {
          const isCorrect1 = question1.checked === correctAnswers1[index];
          isCorrect1 ? listT.push("TRUE") : listF.push("FALSE");
        });
        
      });

      // Partie 3
      const checkButton3 = document.getElementById('checkButton3') as HTMLButtonElement;
      const correctionsDiv3 = document.getElementById('corrections3') as HTMLDivElement;
      const questions3 = document.querySelectorAll('.question3') as NodeListOf<HTMLInputElement>;
      const correctAnswers3 = [true, false, true, false, true, false, true, true];

      checkButton3.addEventListener('click', () => {
        verifierReponses(questions3, correctionsDiv3, correctAnswers3, nbReponsesVrai, nbReponsesFaux);
      }); 


      
      // Partie 4
      const checkButton4 = document.getElementById('checkButton4') as HTMLButtonElement;
      const correctionsDiv4 = document.getElementById('corrections4') as HTMLDivElement;
      const questions4 = document.querySelectorAll('.question4') as NodeListOf<HTMLInputElement>;
      const correctAnswers4 = ['على يسار', 'على يمين', 'اليسرى', 'اليمنى'];

      checkButton4.addEventListener('click', () => {
        correctionsDiv4.innerHTML = '';
        const answers = [
          (document.getElementById("q1") as HTMLInputElement).value,
          (document.getElementById("q2") as HTMLInputElement).value,
          (document.getElementById("q3") as HTMLInputElement).value,
          (document.getElementById("q8") as HTMLInputElement).value
        ];

        questions4.forEach((question4, index) => {
          const label4 = question4.parentElement?.textContent?.trim() || '';
          const isCorrect4 = answers[index].toLowerCase() === correctAnswers4[index].toLowerCase();

          const correctionText4 = document.createElement('p');
          correctionText4.textContent = (isCorrect4 ? 'أحسنت الإختيار هذا الجواب صحيح' : 'لقد أخطأت هذا الجواب غير صحيح ');
          correctionText4.style.color = isCorrect4 ? 'green' : 'red';

          correctionsDiv4.appendChild(correctionText4);
        });

        questions4.forEach((question4, index) => {
          const isCorrect4 = answers[index].toLowerCase() === correctAnswers4[index].toLowerCase();
          isCorrect4 ? listT.push("TRUE") : listF.push("FALSE");
        });
      });

      // Partie 5
      const checkButton5 = document.getElementById('checkButton5') as HTMLButtonElement;
      const correctionsDiv5 = document.getElementById('corrections5') as HTMLDivElement;
      const questions5 = document.querySelectorAll('.question5') as NodeListOf<HTMLInputElement>;
      const correctAnswers5 = [true, false, false, true];

      checkButton5.addEventListener('click', () => {
        correctionsDiv5.innerHTML = '';

        questions5.forEach((question5, index) => {
          const label5 = question5.parentElement?.textContent?.trim() || '';
          const isCorrect5 = question5.checked === correctAnswers5[index];

          const correctionText5 = document.createElement('p');
          correctionText5.textContent = (isCorrect5 ? 'أحسنت الإختيار هذا الجواب صحيح' : 'لقد أخطأت هذا الجواب غير صحيح ');
          correctionText5.style.color = isCorrect5 ? 'green' : 'red';

          correctionsDiv5.appendChild(correctionText5);
        });

        questions5.forEach((question5, index) => {
          const isCorrect5 = question5.checked === correctAnswers5[index];
          isCorrect5 ? listT.push("TRUE") : listF.push("FALSE");
        });
      });

      // Partie 6
      const checkButton6 = document.getElementById('checkButton6') as HTMLButtonElement;
      const correctionsDiv2 = document.getElementById('corrections2') as HTMLDivElement;
      const correctionsDiv9 = document.getElementById('corrections9') as HTMLDivElement;
      const correctionsDiv6 = document.getElementById('corrections6') as HTMLDivElement;
      const questions6 = document.querySelectorAll('.question6') as NodeListOf<HTMLInputElement>;
      const correctAnswers6 = ['أقصر', 'أطول', 'كبيرة', 'صغير', true, false, false, false, false];

      checkButton6.addEventListener('click', () => {
        correctionsDiv6.innerHTML = '';
        const answers = [
          (document.getElementById("11") as HTMLInputElement).value,
          (document.getElementById("12") as HTMLInputElement).value,
          (document.getElementById("13") as HTMLInputElement).value,
          (document.getElementById("14") as HTMLInputElement).value
        ];
      
        questions6.forEach((question6, index) => {
          const label6 = question6.parentElement?.textContent?.trim() || '';
          const isCorrect6 = typeof answers[index] === 'string' && answers[index].toLowerCase() === (correctAnswers6[index] as string).toLowerCase();
         
          
          const correctionText6 = document.createElement('p');
          correctionText6.textContent = label6 + ' - ' + (isCorrect6 ? 'أحسنت الإختيار هذا الجواب صحيح' : 'لقد أخطأت هذا الجواب غير صحيح ');
          correctionText6.style.color = isCorrect6 ? 'green' : 'red';
      
          correctionsDiv6.appendChild(correctionText6);
        });
      
        questions6.forEach((question6, index) => {
          const isCorrect6 = typeof answers[index] === 'string' && answers[index].toLowerCase() === (correctAnswers6[index] as string).toLowerCase();
          isCorrect6 ? listT.push("TRUE") : listF.push("FALSE");
        
        });
      


//partie 7

//chouf altaghia-3 feha checkbutton7 w nafs l'exercice
















        
        const correctionText2 = document.createElement('p');
        correctionsDiv9.innerHTML = '';
        const correctionText3 = document.createElement('p');
        const correctionText9 = document.createElement('p');
        correctionText2.textContent = 'الإجابات الصحيحة : ' + listT.length;
        correctionText2.style.color = 'green';
        correctionText3.textContent = 'الاجابات الخاطئة :' + listF.length;
        correctionText3.style.color = 'red';
        correctionText9.textContent = '%' + ' النتيجة  :  ' + (listT.length / (listF.length + listT.length) * 100).toString();
        correctionText9.style.color = 'white';
        correctionText9.style.fontSize = 'x-large';
        correctionText9.style.backgroundColor = "blue";
      
        correctionsDiv2.appendChild(correctionText3);
        correctionsDiv9.appendChild(correctionText9);
        correctionsDiv2.appendChild(correctionText2);
      });
      

      const listT: string[] = [];
      const listF: string[] = [];
      const nbReponsesVrai: any[] = [];
      const nbReponsesFaux: any[] = [];
    }
  }
}

function verifierReponses(questions: NodeListOf<HTMLInputElement>, correctionsDiv: HTMLDivElement, correctAnswers: any[], nbReponsesVrai: any[], nbReponsesFaux: any[]) {
  correctionsDiv.innerHTML = '';

  questions.forEach((question, index) => {
    const label = question.parentElement?.textContent?.trim() || '';
    const isCorrect = question.checked === correctAnswers[index];

    const correctionText = document.createElement('p');
    correctionText.textContent = (isCorrect ? ' أحسنت الإختيار هذا الجواب صحيح ' : ' لقد أخطأت هذا الجواب غير صحيح ');
    correctionText.style.color = isCorrect ? 'green' : 'red';

    correctionsDiv.appendChild(correctionText);

    isCorrect ? nbReponsesVrai.push("TRUE") : nbReponsesFaux.push("FALSE");
  });

  console.log(`Nombre de réponses vraies : ${nbReponsesVrai.length}`);
  console.log(`Nombre de réponses fausses : ${nbReponsesFaux.length}`);
  
}