import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-altaghdhia-2',
  templateUrl: './altaghdhia-2.component.html',
  styleUrl: './altaghdhia-2.component.css'
})
export class Altaghdhia2Component implements OnInit {
 
  constructor() {}

  ngOnInit(): void {
    this.initializeListeners();
  }

  initializeListeners() {
    if (typeof document !== 'undefined') {

  const checkButton5 = document.getElementById('checkButton5') as HTMLButtonElement;
  const correctionsDiv5 = document.getElementById('corrections5') as HTMLDivElement;
  const questions5= document.querySelectorAll('.question5') as NodeListOf<HTMLInputElement>;
  const correctAnswers5 = ['أغذية ذات مصدر حيواني', 'أغذية ذات مصدر نباتي', 'أغذية ذات مصدر حيواني', 'أغذية ذات مصدر حيواني', 'أغذية ذات مصدر نباتي', 'أغذية ذات مصدر نباتي'];
  
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
 
  



  
  
  const checkButton4 = document.getElementById('checkButton4') as HTMLButtonElement;
  const correctionsDiv4 = document.getElementById('corrections4') as HTMLDivElement;
  const questions4 = document.querySelectorAll('.question4') as NodeListOf<HTMLInputElement>;
  const correctAnswers4 = [false, true, false, false, true, false, false, false, true];

  checkButton4.addEventListener('click', () => {
    verifierReponses(questions4, correctionsDiv4, correctAnswers4, nbReponsesVrai, nbReponsesFaux);
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


}}}}


