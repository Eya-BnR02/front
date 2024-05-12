import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alwiqaya-amradh-3',
  templateUrl: './alwiqaya-amradh-3.component.html',
  styleUrl: './alwiqaya-amradh-3.component.css'
})
export class AlwiqayaAmradh3Component implements OnInit {
 
  constructor() {}

  ngOnInit(): void {
    this.initializeListeners();
  }

  initializeListeners() {
    if (typeof document !== 'undefined') {

  
  const checkButton7 = document.getElementById('checkButton7') as HTMLButtonElement;
  const correctionsDiv7 = document.getElementById('corrections7') as HTMLDivElement;
  const questions7= document.querySelectorAll('.question7') as NodeListOf<HTMLInputElement>;
  const correctAnswers7 = ['مصاب بالرمد', 'مصاب بالرمد', 'غير مصاب بالرمد'];
  
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
      correctionText7.textContent = (isCorrect7 ? 'أحسنت الإختيار هذا الجواب صحيح' : 'لقد أخطأت هذا الجواب غير صحيح ');
      correctionText7.style.color = isCorrect7 ? 'green' : 'red';
  
      correctionsDiv7.appendChild(correctionText7);
    });
  
    questions7.forEach((question7, index) => {
      const isCorrect7 = answers[index].toLowerCase() === correctAnswers7[index].toLowerCase();
      isCorrect7 ? listT.push("TRUE") : listF.push("FALSE");
    });
  });
 







  const checkButton3 = document.getElementById('checkButton3') as HTMLButtonElement;
  const correctionsDiv3 = document.getElementById('corrections3') as HTMLDivElement;
  const questions3 = document.querySelectorAll('.question3') as NodeListOf<HTMLInputElement>;
  const correctAnswers3 = [true, false, true, true, false, true, true, false, false, true];

  checkButton3.addEventListener('click', () => {
    verifierReponses(questions3, correctionsDiv3, correctAnswers3, nbReponsesVrai, nbReponsesFaux);
  }); 




  

  

  const checkButton = document.getElementById('checkButton') as HTMLButtonElement;
      const correctionsDiv = document.getElementById('corrections') as HTMLDivElement;
      const questions = document.querySelectorAll('.question') as NodeListOf<HTMLInputElement>;
      const correctAnswers = [true, false, true, false, true, true, false, true, false, true];

      checkButton.addEventListener('click', () => {
        correctionsDiv.innerHTML = '';

        questions.forEach((question, index) => {
          const label = question.parentElement?.textContent?.trim() || '';
          const isCorrect = question.checked === correctAnswers[index];

          const correctionText = document.createElement('p');
          correctionText.textContent = label + ' - ' + (isCorrect ? 'أحسنت الإختيار هذا الجواب صحيح' : 'لقد أخطأت هذا الجواب غير صحيح ');
          correctionText.style.color = isCorrect ? 'green' : 'red';

          correctionsDiv.appendChild(correctionText);
        });

        questions.forEach((question, index) => {
          const isCorrect = question.checked === correctAnswers[index];
          isCorrect ? listT.push("TRUE") : listF.push("FALSE");
        });
      });





      const checkButton1 = document.getElementById('checkButton1') as HTMLButtonElement;
      const correctionsDiv1 = document.getElementById('corrections1') as HTMLDivElement;
      const questions1 = document.querySelectorAll('.question1') as NodeListOf<HTMLInputElement>;
      const correctAnswers1 = [true, true, false, true, false, true, false];

      checkButton1.addEventListener('click', () => {
        verifierReponses(questions1, correctionsDiv1, correctAnswers1, nbReponsesVrai, nbReponsesFaux);
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

