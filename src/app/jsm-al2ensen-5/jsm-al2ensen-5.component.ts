import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jsm-al2ensen-5',
  templateUrl: './jsm-al2ensen-5.component.html',
  styleUrl: './jsm-al2ensen-5.component.css'
})
export class JsmAl2ensen5Component  implements OnInit {
 
  constructor() {}

  ngOnInit(): void {
    this.initializeListeners();
  }

  initializeListeners() {
    if (typeof document !== 'undefined') {

      const checkButton8 = document.getElementById('checkButton8') as HTMLButtonElement;
      const correctionsDiv8 = document.getElementById('corrections8') as HTMLDivElement;
      const questions8= document.querySelectorAll('.question8') as NodeListOf<HTMLInputElement>;
      const correctAnswers8 = ['عظم العضد', 'عظم القصبة', 'عظم الزند', 'عظم الفخذ', 'عظم القصبة', 'عظم الشظية'];
      
      checkButton8.addEventListener('click', () => {
        correctionsDiv8.innerHTML = '';
        const answers = [
          (document.getElementById("a1") as HTMLInputElement).value,
          (document.getElementById("a2") as HTMLInputElement).value,
          (document.getElementById("a3") as HTMLInputElement).value,
          (document.getElementById("a4") as HTMLInputElement).value,
          (document.getElementById("a5") as HTMLInputElement).value,
          (document.getElementById("a6") as HTMLInputElement).value
        
        ];
      
        questions8.forEach((question8, index) => {
          const label8 = question8.parentElement?.textContent?.trim() || '';
          const isCorrect8 = answers[index].toLowerCase() === correctAnswers8[index].toLowerCase();
      
          const correctionText8 = document.createElement('p');
          correctionText8.textContent = (isCorrect8 ? 'أحسنت الإختيار هذا الجواب صحيح' : 'عظم العضد / 2:عظم القصبة / 3:عظم الزند / 4:عظم الفخذ / 5:عظم القصبة / 6:عظم الشظية');
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
      const correctAnswers3 = [true, false, false, true, true, false, true, true, true, true, true];
      checkButton3.addEventListener('click', () => {
        verifierReponses(questions3, correctionsDiv3, correctAnswers3, nbReponsesVrai, nbReponsesFaux);
      }); 











      
  const checkButton5 = document.getElementById('checkButton5') as HTMLButtonElement;
  const correctionsDiv5 = document.getElementById('corrections5') as HTMLDivElement;
  const questions5= document.querySelectorAll('.question5') as NodeListOf<HTMLInputElement>;
  const correctAnswers5 = ['نصف متحرك', 'متحرك', 'نصف متحرك', 'متحرك', 'متحرك', 'ثابت'];
  
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








  
      
  const checkButton1 = document.getElementById('checkButton1') as HTMLButtonElement;
  const correctionsDiv1 = document.getElementById('corrections1') as HTMLDivElement;
  const questions1 = document.querySelectorAll('.question1') as NodeListOf<HTMLInputElement>;
  const correctAnswers1 = [false, true, false, true, true, true, false, true, true, true, false, true, false];

  checkButton1.addEventListener('click', () => {
    verifierReponses(questions1, correctionsDiv1, correctAnswers1, nbReponsesVrai, nbReponsesFaux);
  }); 








  
  const checkButton = document.getElementById('checkButton') as HTMLButtonElement;
  const correctionsDiv = document.getElementById('corrections') as HTMLDivElement;
  const questions = document.querySelectorAll('.question') as NodeListOf<HTMLInputElement>;
  const correctAnswers = [false, true, false, false, true, false, true, false, false, true];

  checkButton.addEventListener('click', () => {
    verifierReponses(questions, correctionsDiv, correctAnswers, nbReponsesVrai, nbReponsesFaux);
  }); 








  const checkButton4 = document.getElementById('checkButton4') as HTMLButtonElement;
  const correctionsDiv4 = document.getElementById('corrections4') as HTMLDivElement;
  const questions4 = document.querySelectorAll('.question4') as NodeListOf<HTMLInputElement>;
  const correctAnswers4 = ['شهيق', 'زفير'];

  checkButton4.addEventListener('click', () => {
    correctionsDiv4.innerHTML = '';
    const answers = [
      (document.getElementById("q") as HTMLInputElement).value,
      (document.getElementById("q1") as HTMLInputElement).value
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







  
  const checkButton0 = document.getElementById('checkButton0') as HTMLButtonElement;
  const correctionsDiv0 = document.getElementById('corrections0') as HTMLDivElement;
  const questions0 = document.querySelectorAll('.question0') as NodeListOf<HTMLInputElement>;
  const correctAnswers0 = [true, false, true, true, true, true];
  checkButton0.addEventListener('click', () => {
    verifierReponses(questions0, correctionsDiv0, correctAnswers3, nbReponsesVrai, nbReponsesFaux);
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

