import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alkahrabae-5',
  templateUrl: './alkahrabae-5.component.html',
  styleUrl: './alkahrabae-5.component.css'
})
export class Alkahrabae5Component  implements OnInit {
 
  constructor() {}

  ngOnInit(): void {
    this.initializeListeners();
  }

  initializeListeners() {
    if (typeof document !== 'undefined') {

      const checkButton8 = document.getElementById('checkButton8') as HTMLButtonElement;
      const correctionsDiv8 = document.getElementById('corrections8') as HTMLDivElement;
      const questions8= document.querySelectorAll('.question8') as NodeListOf<HTMLInputElement>;
      const correctAnswers8 = ['2'];
      
      checkButton8.addEventListener('click', () => {
        correctionsDiv8.innerHTML = '';
        const answers = [
          (document.getElementById("a1") as HTMLInputElement).value
        
        ];
      
        questions8.forEach((question8, index) => {
          const label8 = question8.parentElement?.textContent?.trim() || '';
          const isCorrect8 = answers[index].toLowerCase() === correctAnswers8[index].toLowerCase();
      
          const correctionText8 = document.createElement('p');
          correctionText8.textContent = (isCorrect8 ? 'أحسنت الإختيار هذا الجواب صحيح' : '2');
          correctionText8.style.color = isCorrect8 ? 'green' : 'red';
          correctionsDiv8.appendChild(correctionText8);
        });
      
        questions8.forEach((question8, index) => {
          const isCorrect8 = answers[index].toLowerCase() === correctAnswers8[index].toLowerCase();
          isCorrect8 ? listT.push("TRUE") : listF.push("FALSE");
        });
      });







      const checkButton3 = document.getElementById('checkButton3') as HTMLButtonElement;
      const correctionsDiv3 = document.getElementById('corrections3') as HTMLDivElement;
      const questions3 = document.querySelectorAll('.question3') as NodeListOf<HTMLInputElement>;
      const correctAnswers3 = [true, false, true, false, true, true, true, false, true, false, true];
      checkButton3.addEventListener('click', () => {
        verifierReponses(questions3, correctionsDiv3, correctAnswers3, nbReponsesVrai, nbReponsesFaux);
      }); 
    
    






      
  const checkButton5 = document.getElementById('checkButton5') as HTMLButtonElement;
  const correctionsDiv5 = document.getElementById('corrections5') as HTMLDivElement;
  const questions5= document.querySelectorAll('.question5') as NodeListOf<HTMLInputElement>;
  const correctAnswers5 = ['ناقل للتيار الكهربائي', 'ناقل للتيار الكهربائي', 'عازل للتيار الكهربائي', 'ناقل للتيار الكهربائي', 'عازل للتيار الكهربائي','عازل للتيار الكهربائي'];
  
  checkButton5.addEventListener('click', () => {
    correctionsDiv5.innerHTML = '';
    const answers = [
      (document.getElementById("x1") as HTMLInputElement).value,
      (document.getElementById("x2") as HTMLInputElement).value,
      (document.getElementById("x3") as HTMLInputElement).value,
      (document.getElementById("x4") as HTMLInputElement).value,
      (document.getElementById("x5") as HTMLInputElement).value,
      (document.getElementById("x6") as HTMLInputElement).value
    ];
  
    questions5.forEach((question5, index) => {
      const label5 = question5.parentElement?.textContent?.trim() || '';
      const isCorrect5 = answers[index].toLowerCase() === correctAnswers5[index].toLowerCase();
  
      const correctionText5 = document.createElement('p');
      correctionText5.textContent = (isCorrect5 ? 'أحسنت الإختيار هذا الجواب صحيح' : 'لقد أخطأت هذا الجواب غير صحيح ');
      correctionText5.style.color = isCorrect5 ? 'green' : 'red';
  
      correctionsDiv5.appendChild(correctionText5);
    });
  
    questions5.forEach((question5, index) => {
      const isCorrect5 = answers[index].toLowerCase() === correctAnswers5[index].toLowerCase();
      isCorrect5 ? listT.push("TRUE") : listF.push("FALSE");
    });
  });
    
    

    
    
    
    
      const listT: string[] = [];
      const listF: string[] = [];
      const nbReponsesVrai: any[] = [];
      const nbReponsesFaux: any[] = [];
      
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
    }}}
    