import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-altanaql-4',
  templateUrl: './altanaql-4.component.html',
  styleUrl: './altanaql-4.component.css'
})
export class Altanaql4Component  implements OnInit {
 
  constructor() {}

  ngOnInit(): void {
    this.initializeListeners();
  }

  initializeListeners() {
    if (typeof document !== 'undefined') {

 

  const checkButton4 = document.getElementById('checkButton4') as HTMLButtonElement;
  const correctionsDiv4 = document.getElementById('corrections4') as HTMLDivElement;
  const questions4 = document.querySelectorAll('.question4') as NodeListOf<HTMLInputElement>;
  const correctAnswers4 = ['يتنقل مشيا', 'يتنقل عدوا', 'يتنقل قفزا', 'يتنقل زحفا', 'يتنقل عدوا', 'يتنقل مشيا', 'يتنقل عدوا', 'يتنقل قفزا'];

  checkButton4.addEventListener('click', () => {
    correctionsDiv4.innerHTML = '';
    const answers = [
      (document.getElementById("q1") as HTMLInputElement).value,
      (document.getElementById("q2") as HTMLInputElement).value,
      (document.getElementById("q3") as HTMLInputElement).value,
      (document.getElementById("q4") as HTMLInputElement).value,
      (document.getElementById("q5") as HTMLInputElement).value,
      (document.getElementById("q6") as HTMLInputElement).value,
      (document.getElementById("q7") as HTMLInputElement).value,
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
  









  
  const checkButton3 = document.getElementById('checkButton3') as HTMLButtonElement;
  const correctionsDiv3 = document.getElementById('corrections3') as HTMLDivElement;
  const questions3 = document.querySelectorAll('.question3') as NodeListOf<HTMLInputElement>;
  const correctAnswers3 = [true, false, false, true, true, false, true ];

  checkButton3.addEventListener('click', () => {
    verifierReponses(questions3, correctionsDiv3, correctAnswers3, nbReponsesVrai, nbReponsesFaux);
  });












   
const checkButton5 = document.getElementById('checkButton5') as HTMLButtonElement;
const correctionsDiv5 = document.getElementById('corrections5') as HTMLDivElement;
const questions5= document.querySelectorAll('.question5') as NodeListOf<HTMLInputElement>;
const correctAnswers5 = ['دجاجة بطريق نعامة', 'نمر أسد فهد غزالة', 'ببغاء عصفور حمامة صقر نسر', 'في هذه المجموعة يوجد طيور لا تستطيع الطيران بسبب وزنها الزائد أم بسبب أجنحتها الصغيرة', 'في هذه المجموعة يوجد حيوانات تتنقل عدوا', 'في هذه المجموعة يوجد طيور'];

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
    correctionText5.textContent = (isCorrect5 ? 'أحسنت الإختيار هذا الجواب صحيح' : 'لقد أخطأت هذا الجواب غير صحيح و هذا هو الجواب الصحيح : المجموعة 1 : دجاجة بطريق نعامة. وجه الشبه : في هذه المجموعة يوجد طيور لا تستطيع الطيران بسبب وزنها الزائد أم بسبب أجنحتها الصغيرة. المجموعة 2 : نمر أسد فهد غزالة. وجه الشبه : في هذه المجموعة يوجد حيوانات تتنقل عدوا. المجموعة 3 : ببغاء عصفور حمامة صقر نسر.  وجه الشبه : في هذه المجموعة يوجد طيور. ');
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
