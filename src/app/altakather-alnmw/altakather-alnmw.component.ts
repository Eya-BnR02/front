import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-altakather-alnmw',
  templateUrl: './altakather-alnmw.component.html',
  styleUrl: './altakather-alnmw.component.css'
})
export class AltakatherAlnmwComponent  implements OnInit {
 
  constructor() {}

  ngOnInit(): void {
    this.initializeListeners();
  }

  initializeListeners() {
    if (typeof document !== 'undefined') {

  

  const checkButton7 = document.getElementById('checkButton7') as HTMLButtonElement;
  const correctionsDiv7 = document.getElementById('corrections7') as HTMLDivElement;
  const questions7= document.querySelectorAll('.question7') as NodeListOf<HTMLInputElement>;
  const correctAnswers7 = ['ترقيد', 'تطعيم', 'إفتسال'];
  
  checkButton7.addEventListener('click', () => {
    correctionsDiv7.innerHTML = '';
    const answers = [
      (document.getElementById("1") as HTMLInputElement).value,
      (document.getElementById("2") as HTMLInputElement).value,
      (document.getElementById("3") as HTMLInputElement).value
    ];
  
    questions7.forEach((question7, index) => {
      const label7 = question7.parentElement?.textContent?.trim() || '';
      const isCorrect7 = answers[index].toLowerCase() === correctAnswers7[index].toLowerCase();
  
      const correctionText7 = document.createElement('p');
      correctionText7.textContent = (isCorrect7 ? 'أحسنت الإختيار هذا الجواب صحيح' : ' ترقيد ـــــــــــــــ 2/تطعيم ـــــــــــــــ 3/إفتسال ');
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
  const correctAnswers8 = ['التين', 'الورود', 'البرتقال'];
  
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
      correctionText8.textContent = (isCorrect8 ? 'أحسنت الإختيار هذا الجواب صحيح' : 'الترقيد:التين ـ الياسمين ـــــــــــــــ 2/الافتسال:الورود ـ الثوم ـــــــــــــــ 3/التطعيم:المانجو ـ البرتقال ');
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
  
  
  }
}}}
