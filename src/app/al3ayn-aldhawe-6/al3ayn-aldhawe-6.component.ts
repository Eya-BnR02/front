import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-al3ayn-aldhawe-6',
  templateUrl: './al3ayn-aldhawe-6.component.html',
  styleUrl: './al3ayn-aldhawe-6.component.css'
})
export class Al3aynAldhawe6Component  implements OnInit {
 
  constructor() {}

  ngOnInit(): void {
    this.initializeListeners();
  }

  initializeListeners() {
    
  const checkButton3 = document.getElementById('checkButton3') as HTMLButtonElement;
  const correctionsDiv3 = document.getElementById('corrections3') as HTMLDivElement;
  const questions3 = document.querySelectorAll('.question3') as NodeListOf<HTMLInputElement>;
  const correctAnswers3 = [true, false, true, true, false, true];
  checkButton3.addEventListener('click', () => {
    verifierReponses(questions3, correctionsDiv3, correctAnswers3, nbReponsesVrai, nbReponsesFaux);
  }); 








  const checkButton8 = document.getElementById('checkButton8') as HTMLButtonElement;
      const correctionsDiv8 = document.getElementById('corrections8') as HTMLDivElement;
      const questions8= document.querySelectorAll('.question8') as NodeListOf<HTMLInputElement>;
      const correctAnswers8 = ['.'];
      
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
          correctionText8.textContent = (isCorrect8 ? 'أحسنت الإختيار هذا الجواب صحيح' : 'نقاط تشابه بين العين و آلة التصوير:1/ التقاط الضوء وتكوينه صورة: (العين: يدخل الضوء من خلال القرنية و عدسة العين، و يتجمع على شبكية العين حيث تتحول الصورة الضوئية إلى إشارات كهربائية ـــــ آلة التصوير: يدخل الضوء من خلال عدسة الكاميرا، و يتجمع على مستشعر الصور حيث تتحول الصورة الضوئية إلى إشارات رقمية.) 2/ وجود فتحة للتحكم بكمية الضوء: (العين: تتكون من بؤرة القزحية التي تتسع و تضيق للتحكم بكمية الضوء التي تدخل العين ـــــ آلة التصوير: تتكون من فتحة العدسة التي يمكن ضبطها للتحكم بكمية الضوء التي تدخل الكاميرا.) 3/ تركيز الصورة: ( العين: تقوم عضلات العين بتغيير شكل عدسة العين لتركيز الصورة على شبكية العين ـــــ آلة التصوير: تقوم بعض الكاميرات بتغيير موضع عدسة الكاميرا لتركيز الصورة على مستشعر الصور.) ــــــــــ طول النظر / قصر النظر / عين سليمة');
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
      const correctAnswers = [false, true, false, true, true, true, false, true, false, true];
      
      checkButton.addEventListener('click', () => {
        verifierReponses(questions, correctionsDiv, correctAnswers, nbReponsesVrai, nbReponsesFaux);
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
       
       
       }}}
