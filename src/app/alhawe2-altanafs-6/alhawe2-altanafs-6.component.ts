import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alhawe2-altanafs-6',
  templateUrl: './alhawe2-altanafs-6.component.html',
  styleUrl: './alhawe2-altanafs-6.component.css'
})
export class Alhawe2Altanafs6Component  implements OnInit {
 
  constructor() {}

  ngOnInit(): void {
    this.initializeListeners();
  }

  initializeListeners() {
    if (typeof document !== 'undefined') {

      const checkButton8 = document.getElementById('checkButton8') as HTMLButtonElement;
      const correctionsDiv8 = document.getElementById('corrections8') as HTMLDivElement;
      const questions8= document.querySelectorAll('.question8') as NodeListOf<HTMLInputElement>;
      const correctAnswers8 = ['.'];
      
      checkButton8.addEventListener('click', () => {
        correctionsDiv8.innerHTML = '';
        const answers = [
          (document.getElementById("a1") as HTMLInputElement).value
        
        ];
      
        questions8.forEach((question8, index) => {
          const label8 = question8.parentElement?.textContent?.trim() || '';
          const isCorrect8 = answers[index].toLowerCase() === correctAnswers8[index].toLowerCase();
      
          const correctionText8 = document.createElement('p');
          correctionText8.textContent = (isCorrect8 ? 'أحسنت الإختيار هذا الجواب صحيح' : 'التعليمة 1: ماذا يحدث عند وضع القنينة في الماء الساخن ؟ ــــــــ عند وضع القنينة في الماء الساخن تنتفخ النفاخة مما يدل على ازدياد حجم الهواء المحبوس  ( يتمدد الهواء باكتساب الحرارة ). ــــــــ التعليمة 2: ماذا يحدث عند وضع القنينة في الماء البارد ؟ ــــــــ يحدث العكس عند نقل القنينة إلى الماء البارد ( يتقلص الهواء بالتبريد ). ــــــــ التعليمة 3: ماذا تستنتج من التجربتين السابقتين ؟ ــــــــ يتمدد الهواء باكتساب الحرارة و يتقلص عند فقدانها.ــــــــ خصائص الهواء : له كتلة / قابل للإنحلال و الذوبان في الماء / قابل للتمدد بالحرارة.');
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
  const correctAnswers3 = [true, true, false, false, true, true, false, true, false, true];
  checkButton3.addEventListener('click', () => {
    verifierReponses(questions3, correctionsDiv3, correctAnswers3, nbReponsesVrai, nbReponsesFaux);
  }); 









  const checkButton1 = document.getElementById('checkButton1') as HTMLButtonElement;
  const correctionsDiv1 = document.getElementById('corrections1') as HTMLDivElement;
  const questions1 = document.querySelectorAll('.question1') as NodeListOf<HTMLInputElement>;
  const correctAnswers1 = [true, true, false, false, false, true, false, false, true, false, true];
  
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
