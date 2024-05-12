import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jihez-dawaran-amradh-taghdhia-6',
  templateUrl: './jihez-dawaran-amradh-taghdhia-6.component.html',
  styleUrl: './jihez-dawaran-amradh-taghdhia-6.component.css'
})
export class JihezDawaranAmradhTaghdhia6Component  implements OnInit {
 
  constructor() {}

  ngOnInit(): void {
    this.initializeListeners();
  }

  initializeListeners() {
    if (typeof document !== 'undefined') {

        
  const checkButton3 = document.getElementById('checkButton3') as HTMLButtonElement;
  const correctionsDiv3 = document.getElementById('corrections3') as HTMLDivElement;
  const questions3 = document.querySelectorAll('.question3') as NodeListOf<HTMLInputElement>;
  const correctAnswers3 = [true, false, true, false, true, true, true, true, true, false, true, true, true,true, true];
  checkButton3.addEventListener('click', () => {
    verifierReponses(questions3, correctionsDiv3, correctAnswers3, nbReponsesVrai, nbReponsesFaux);
  }); 








  const checkButton8 = document.getElementById('checkButton8') as HTMLButtonElement;
  const correctionsDiv8 = document.getElementById('corrections8') as HTMLDivElement;
  const questions8= document.querySelectorAll('.question8') as NodeListOf<HTMLInputElement>;
  const correctAnswers8 = ['البشرة / الأدمة / نسيج تحت الجلد  '];
  
  checkButton8.addEventListener('click', () => {
    correctionsDiv8.innerHTML = '';
    const answers = [
      (document.getElementById("a1") as HTMLInputElement).value,
      (document.getElementById("a2") as HTMLInputElement).value,
      (document.getElementById("a3") as HTMLInputElement).value
    
    ];
  
    questions8.forEach((question8, index) => {
      const label8 = question8.parentElement?.textContent?.trim() || '';
      const isCorrect8 = answers[index].toLowerCase() === correctAnswers8[index].toLowerCase();
  
      const correctionText8 = document.createElement('p');
      correctionText8.textContent = (isCorrect8 ? 'أحسنت الإختيار هذا الجواب صحيح' : 'البشرة / الأدمة / نسيج تحت الجلد  ');
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
const correctAnswers = [false, true, true, false, true, false, false, true, true, false, true, true];

checkButton.addEventListener('click', () => {
  verifierReponses(questions, correctionsDiv, correctAnswers, nbReponsesVrai, nbReponsesFaux);
}); 










const checkButton1 = document.getElementById('checkButton1') as HTMLButtonElement;
const correctionsDiv1 = document.getElementById('corrections1') as HTMLDivElement;
const questions1 = document.querySelectorAll('.question1') as NodeListOf<HTMLInputElement>;
const correctAnswers1 = [true, false, true, false, true, false, true, true];

checkButton1.addEventListener('click', () => {
  verifierReponses(questions1, correctionsDiv1, correctAnswers1, nbReponsesVrai, nbReponsesFaux);
}); 








const checkButton7 = document.getElementById('checkButton7') as HTMLButtonElement;
const correctionsDiv7 = document.getElementById('corrections7') as HTMLDivElement;
const questions7= document.querySelectorAll('.question7') as NodeListOf<HTMLInputElement>;
const correctAnswers7 = ['مهاجمة الكرية البيضاء للجرثومة / القضاء على الجرثومة  / الإحاطة بالجرثومة / إبتلاع الجرثومة'];

checkButton7.addEventListener('click', () => {
  correctionsDiv7.innerHTML = '';
  const answers = [
    (document.getElementById("x1") as HTMLInputElement).value,
    (document.getElementById("x2") as HTMLInputElement).value,
    (document.getElementById("x3") as HTMLInputElement).value,
    (document.getElementById("x4") as HTMLInputElement).value
  ];

  questions7.forEach((question7, index) => {
    const label7 = question7.parentElement?.textContent?.trim() || '';
    const isCorrect7 = answers[index].toLowerCase() === correctAnswers7[index].toLowerCase();

    const correctionText7 = document.createElement('p');
    correctionText7.textContent = (isCorrect7 ? 'أحسنت الإختيار هذا الجواب صحيح' : 'مهاجمة الكرية البيضاء للجرثومة / القضاء على الجرثومة  / الإحاطة بالجرثومة / إبتلاع الجرثومة');
    correctionText7.style.color = isCorrect7 ? 'green' : 'red';
    correctionsDiv7.appendChild(correctionText7);
  });

  questions7.forEach((question7, index) => {
    const isCorrect7 = answers[index].toLowerCase() === correctAnswers7[index].toLowerCase();
    isCorrect7 ? listT.push("TRUE") : listF.push("FALSE");
  });
});









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
  const correctAnswers4 = [false, true, false, true, true, false, false, false, true, false, true, false, true, false, true, false, true, true, false, false, true];

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
      
      
      }
    }}}
    