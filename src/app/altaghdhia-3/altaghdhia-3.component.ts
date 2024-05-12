import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-altaghdhia-3',
  templateUrl: './altaghdhia-3.component.html',
  styleUrl: './altaghdhia-3.component.css'
})
export class Altaghdhia3Component implements OnInit {
 
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
  const correctAnswers4 = [false, true, false, true, true, false, false, false, true, false, true, false, true, false, true, false, true, true, false, false, true];

  checkButton4.addEventListener('click', () => {
    verifierReponses(questions4, correctionsDiv4, correctAnswers4, nbReponsesVrai, nbReponsesFaux);
  });







  const checkButton7 = document.getElementById('checkButton7') as HTMLButtonElement;
  const correctionsDiv7 = document.getElementById('corrections7') as HTMLDivElement;
  const questions7= document.querySelectorAll('.question7') as NodeListOf<HTMLInputElement>;
  const correctAnswers7 = ['حيوان كالش', 'حيوان لاحم', 'حيوان عاشب', 'حيوان عاشب', 'حيوان كالش', 'حيوان لاحم'];
  
  checkButton7.addEventListener('click', () => {
    correctionsDiv7.innerHTML = '';
    const answers = [
      (document.getElementById("1") as HTMLInputElement).value,
      (document.getElementById("2") as HTMLInputElement).value,
      (document.getElementById("3") as HTMLInputElement).value,
      (document.getElementById("4") as HTMLInputElement).value,
      (document.getElementById("5") as HTMLInputElement).value,
      (document.getElementById("6") as HTMLInputElement).value
    ];
  
    questions7.forEach((question7, index) => {
      const label7 = question7.parentElement?.textContent?.trim() || '';
      const isCorrect7 = answers[index].toLowerCase() === correctAnswers7[index].toLowerCase();
  
      const correctionText7 = document.createElement('p');
      correctionText7.textContent = (isCorrect7 ? 'أحسنت الإختيار هذا الجواب صحيح' : 'لقد أخطأت هذا الجواب غير صحيح ');
      correctionText7.style.color = isCorrect7 ? 'green' : 'red';
  
      correctionsDiv7.appendChild(correctionText7);
    });
  
    questions7.forEach((question7, index) => {
      const isCorrect7 = answers[index].toLowerCase() === correctAnswers7[index].toLowerCase();
      isCorrect7 ? listT.push("TRUE") : listF.push("FALSE");
    });
  });
 








  const checkButton8 = document.getElementById('checkButton8') as HTMLButtonElement;
  const correctionsDiv8 = document.getElementById('corrections8') as HTMLDivElement;
  const questions8= document.querySelectorAll('.question8') as NodeListOf<HTMLInputElement>;
  const correctAnswers8 = ['نستنتج أن النبتة بحاجة إلى الماء لكي تبقى على قيد الحياة و تنمو بطريقة عادية', 'نستنتج أن النبتة بحاجة إلى التربة لكي تبقى على قيد الحياة و تنمو بطريقة عادية', 'نستنتج أن النبتة بحاجة إلى التربة أو بالأحرى إلى الأملاح المعدنية الموجودة في التربة', 'نستنتج أن الأسمدة الكيميائية هي المكون الموجود في التربة و الذي جعل النبتة في إلى حاجة إلى التربة'];
  
  checkButton8.addEventListener('click', () => {
    correctionsDiv8.innerHTML = '';
    const answers = [
      (document.getElementById("a1") as HTMLInputElement).value,
      (document.getElementById("a2") as HTMLInputElement).value,
      (document.getElementById("a3") as HTMLInputElement).value,
      (document.getElementById("a4") as HTMLInputElement).value
    
    ];
  
    questions8.forEach((question8, index) => {
      const label8 = question8.parentElement?.textContent?.trim() || '';
      const isCorrect8 = answers[index].toLowerCase() === correctAnswers8[index].toLowerCase();
  
      const correctionText8 = document.createElement('p');
      correctionText8.textContent = (isCorrect8 ? 'أحسنت الإختيار هذا الجواب صحيح' : 'التجربة 1 : نستنتج أن النبتة بحاجة إلى الماء لكي تبقى على قيد الحياة و تنمو بطريقة عادية.       التجربة 2 : نستنتج أن النبتة بحاجة إلى التربة لكي تبقى على قيد الحياة و تنمو بطريقة عادية.         التجربة 3: نستنتج أن النبتة بحاجة إلى التربة أو بالأحرى إلى الأملاح المعدنية الموجودة في التربة لكي تبقى على قيد الحياة و تنمو بطريقة عادية.       التجربة 4 : نستنتج أن الأسمدة الكيميائية هي المكون الموجود في التربة و الذي جعل النبتة في إلى حاجة إلى التربة. ');
      correctionText8.style.color = isCorrect8 ? 'green' : 'red';
  
      correctionsDiv8.appendChild(correctionText8);
    });
  
    questions8.forEach((question8, index) => {
      const isCorrect8 = answers[index].toLowerCase() === correctAnswers8[index].toLowerCase();
      isCorrect8 ? listT.push("TRUE") : listF.push("FALSE");
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


}}}}


