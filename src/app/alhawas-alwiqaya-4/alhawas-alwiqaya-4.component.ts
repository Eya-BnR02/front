import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alhawas-alwiqaya-4',
  templateUrl: './alhawas-alwiqaya-4.component.html',
  styleUrl: './alhawas-alwiqaya-4.component.css'
})
export class AlhawasAlwiqaya4Component   implements OnInit {
 
  constructor() {}

  ngOnInit(): void {
    this.initializeListeners();
  }

  initializeListeners() {
    if (typeof document !== 'undefined') {

  const checkButton1 = document.getElementById('checkButton1') as HTMLButtonElement;
  const correctionsDiv1 = document.getElementById('corrections1') as HTMLDivElement;
  const questions1 = document.querySelectorAll('.question1') as NodeListOf<HTMLInputElement>;
  const correctAnswers1 = [false, true, false, false, false, true];

  checkButton1.addEventListener('click', () => {
    verifierReponses(questions1, correctionsDiv1, correctAnswers1, nbReponsesVrai, nbReponsesFaux);
  }); 

  







  const checkButton7 = document.getElementById('checkButton7') as HTMLButtonElement;
  const correctionsDiv7 = document.getElementById('corrections7') as HTMLDivElement;
  const questions7= document.querySelectorAll('.question7') as NodeListOf<HTMLInputElement>;
  const correctAnswers7 = ['حاسة اللمس', 'حاسة الشم', 'حاسة التذوق', 'حاسة التذوق', 'حاسة السمع', 'حاسة البصر'];
  
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
  const correctAnswers8 = ['تصرف خاطئ', 'تصرف صحيح', 'تصرف صحيح', 'تصرف خاطئ', 'تصرف خاطئ', 'تصرف صحيح', 'تصرف صحيح', 'تصرف خاطئ'];
  
  checkButton8.addEventListener('click', () => {
    correctionsDiv8.innerHTML = '';
    const answers = [
      (document.getElementById("a1") as HTMLInputElement).value,
      (document.getElementById("a2") as HTMLInputElement).value,
      (document.getElementById("a3") as HTMLInputElement).value,
      (document.getElementById("a4") as HTMLInputElement).value,
      (document.getElementById("a5") as HTMLInputElement).value,
      (document.getElementById("a6") as HTMLInputElement).value,
      (document.getElementById("a7") as HTMLInputElement).value,
      (document.getElementById("a8") as HTMLInputElement).value
    
    ];
  
    questions8.forEach((question8, index) => {
      const label8 = question8.parentElement?.textContent?.trim() || '';
      const isCorrect8 = answers[index].toLowerCase() === correctAnswers8[index].toLowerCase();
  
      const correctionText8 = document.createElement('p');
      correctionText8.textContent = (isCorrect8 ? 'أحسنت الإختيار هذا الجواب صحيح' : 'لقد أخطأت هذا الجواب غير صحيح ');
         correctionText8.style.color = isCorrect8 ? 'green' : 'red';
      correctionsDiv8.appendChild(correctionText8);
    });
  
    questions8.forEach((question8, index) => {
      const isCorrect8 = answers[index].toLowerCase() === correctAnswers8[index].toLowerCase();
      isCorrect8 ? listT.push("TRUE") : listF.push("FALSE");
    });
  });
 








  
  
  const checkButton4 = document.getElementById('checkButton4') as HTMLButtonElement;
  const correctionsDiv4 = document.getElementById('corrections4') as HTMLDivElement;
  const questions4 = document.querySelectorAll('.question4') as NodeListOf<HTMLInputElement>;
  const correctAnswers4 = ['تصرف خاطئ', 'تصرف صحيح', 'تصرف صحيح', 'تصرف صحيح', 'تصرف خاطئ', 'تصرف صحيح' ];

  checkButton4.addEventListener('click', () => {
    correctionsDiv4.innerHTML = '';
    const answers = [
      (document.getElementById("1") as HTMLInputElement).value,
      (document.getElementById("2") as HTMLInputElement).value,
      (document.getElementById("3") as HTMLInputElement).value,
      (document.getElementById("4") as HTMLInputElement).value,
      (document.getElementById("5") as HTMLInputElement).value,
      (document.getElementById("6") as HTMLInputElement).value
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
  const correctAnswers3 = [true, false, true, true, false, true, false];

  checkButton3.addEventListener('click', () => {
    verifierReponses(questions3, correctionsDiv3, correctAnswers3, nbReponsesVrai, nbReponsesFaux);
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
