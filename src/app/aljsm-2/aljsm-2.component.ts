import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-aljsm-2',
  templateUrl: './aljsm-2.component.html',
  styleUrl: './aljsm-2.component.css'
})
export class Aljsm2Component implements OnInit {
 
  constructor() {}

  ngOnInit(): void {
    this.initializeListeners();
  }

  initializeListeners() {
    if (typeof document !== 'undefined') {


      const checkButton5 = document.getElementById('checkButton5') as HTMLButtonElement;
      const correctionsDiv5 = document.getElementById('corrections5') as HTMLDivElement;
      const questions5= document.querySelectorAll('.question5') as NodeListOf<HTMLInputElement>;
      const correctAnswers5 = ['الرأس', 'الجذع', 'الطرف العلوي', 'الطرف السفلي'];
      
      checkButton5.addEventListener('click', () => {
        correctionsDiv5.innerHTML = '';
        const answers = [
          (document.getElementById("x1") as HTMLInputElement).value,
          (document.getElementById("x2") as HTMLInputElement).value,
          (document.getElementById("x3") as HTMLInputElement).value,
          (document.getElementById("x4") as HTMLInputElement).value
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
}














const listT: string[] = [];
const listF: string[] = [];
const nbReponsesVrai: any[] = [];
const nbReponsesFaux: any[] = [];
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

