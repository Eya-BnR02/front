import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-altaqa-6',
  templateUrl: './altaqa-6.component.html',
  styleUrl: './altaqa-6.component.css'
})
export class Altaqa6Component implements OnInit {
 
  constructor() {}

  ngOnInit(): void {
    this.initializeListeners();
  }

  initializeListeners() {
    if (typeof document !== 'undefined') {

    
      const checkButton3 = document.getElementById('checkButton3') as HTMLButtonElement;
      const correctionsDiv3 = document.getElementById('corrections3') as HTMLDivElement;
      const questions3 = document.querySelectorAll('.question3') as NodeListOf<HTMLInputElement>;
      const correctAnswers3 = [true, true, false, true, false, true, true, false, true, true, true, false, true, false];
      checkButton3.addEventListener('click', () => {
        verifierReponses(questions3, correctionsDiv3, correctAnswers3, nbReponsesVrai, nbReponsesFaux);
      }); 
    








      const checkButton8 = document.getElementById('checkButton8') as HTMLButtonElement;
      const correctionsDiv8 = document.getElementById('corrections8') as HTMLDivElement;
      const questions8= document.querySelectorAll('.question8') as NodeListOf<HTMLInputElement>;
      const correctAnswers8 = ['تنافر', 'تنافر', 'تجاذب', 'تجاذب'];
      
      checkButton8.addEventListener('click', () => {
        correctionsDiv8.innerHTML = '';
        const answers = [
          (document.getElementById("a1") as HTMLInputElement).value
        
        ];
      
        questions8.forEach((question8, index) => {
          const label8 = question8.parentElement?.textContent?.trim() || '';
          const isCorrect8 = answers[index].toLowerCase() === correctAnswers8[index].toLowerCase();
      
          const correctionText8 = document.createElement('p');
          correctionText8.textContent = (isCorrect8 ? 'أحسنت الإختيار هذا الجواب صحيح' : 'تنافر / تنافر / تجاذب / تجاذب ');
          correctionText8.style.color = isCorrect8 ? 'green' : 'red';
          correctionsDiv8.appendChild(correctionText8);
        });
      
        questions8.forEach((question8, index) => {
          const isCorrect8 = answers[index].toLowerCase() === correctAnswers8[index].toLowerCase();
          isCorrect8 ? listT.push("TRUE") : listF.push("FALSE");
        });
      });







      
const checkButton = document.getElementById('checkButton') as HTMLButtonElement;
const correctionsDiv = document.getElementById('corrections') as HTMLDivElement;
const questions = document.querySelectorAll('.question') as NodeListOf<HTMLInputElement>;
const correctAnswers = [false, true, false, true, false, true, true, false, true, false];

checkButton.addEventListener('click', () => {
  verifierReponses(questions, correctionsDiv, correctAnswers, nbReponsesVrai, nbReponsesFaux);
}); 









const checkButton1 = document.getElementById('checkButton1') as HTMLButtonElement;
const correctionsDiv1 = document.getElementById('corrections1') as HTMLDivElement;
const questions1 = document.querySelectorAll('.question1') as NodeListOf<HTMLInputElement>;
const correctAnswers1 = [true, false, true, false, false, true, true, false];

checkButton1.addEventListener('click', () => {
  verifierReponses(questions1, correctionsDiv1, correctAnswers1, nbReponsesVrai, nbReponsesFaux);
}); 







const checkButton0 = document.getElementById('checkButton0') as HTMLButtonElement;
const correctionsDiv0 = document.getElementById('corrections0') as HTMLDivElement;
const questions0 = document.querySelectorAll('.question0') as NodeListOf<HTMLInputElement>;
const correctAnswers0 = [true, false, true, false, true, false, true, false, true, true, false];

checkButton0.addEventListener('click', () => {
  verifierReponses(questions0, correctionsDiv0, correctAnswers0, nbReponsesVrai, nbReponsesFaux);
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
    