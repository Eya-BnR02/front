import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-altanafs-2',
  templateUrl: './altanafs-2.component.html',
  styleUrl: './altanafs-2.component.css'
})
export class Altanafs2Component  implements OnInit {
 
  constructor() {}

  ngOnInit(): void {
    this.initializeListeners();
  }

  initializeListeners() {
    if (typeof document !== 'undefined') {



const checkButton4 = document.getElementById('checkButton4') as HTMLButtonElement;
const correctionsDiv4 = document.getElementById('corrections4') as HTMLDivElement;
const questions4 = document.querySelectorAll('.question4') as NodeListOf<HTMLInputElement>;
const correctAnswers4 = ['يتنفس في الماء', 'تنفس في الماء و البر', 'يتنفس في البر', 'يتنفس في البر'];

checkButton4.addEventListener('click', () => {
  correctionsDiv4.innerHTML = '';
  const answers = [
    (document.getElementById("q1") as HTMLInputElement).value,
    (document.getElementById("q2") as HTMLInputElement).value,
    (document.getElementById("q3") as HTMLInputElement).value,
    (document.getElementById("q4") as HTMLInputElement).value
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
