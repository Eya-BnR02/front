import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-altakather-3',
  templateUrl: './altakather-3.component.html',
  styleUrl: './altakather-3.component.css'
})
export class Altakather3Component implements OnInit {
 
  constructor() {}

  ngOnInit(): void {
    this.initializeListeners();
  }

  initializeListeners() {
    if (typeof document !== 'undefined') {


  const checkButton4 = document.getElementById('checkButton4') as HTMLButtonElement;
  const correctionsDiv4 = document.getElementById('corrections4') as HTMLDivElement;
  const questions4 = document.querySelectorAll('.question4') as NodeListOf<HTMLInputElement>;
  const correctAnswers4 = ['ج ب د أ'];

  checkButton4.addEventListener('click', () => {
    correctionsDiv4.innerHTML = '';
    const answers = [
      (document.getElementById("q") as HTMLInputElement).value
    ];

    questions4.forEach((question4, index) => {
      const label4 = question4.parentElement?.textContent?.trim() || '';
      const isCorrect4 = answers[index].toLowerCase() === correctAnswers4[index].toLowerCase();

      const correctionText4 = document.createElement('p');
      correctionText4.textContent = (isCorrect4 ? 'أحسنت الإختيار هذا الجواب صحيح' : ' لقد أخطأت هذا الجواب غير صحيح و هذا هو الجواب الصحيح : ج ب د أ ');
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
  const correctAnswers3 = [true, false, false, true, true, true, false, true, true, true, true];

  checkButton3.addEventListener('click', () => {
    verifierReponses(questions3, correctionsDiv3, correctAnswers3, nbReponsesVrai, nbReponsesFaux);
  }); 













   
  const checkButton7 = document.getElementById('checkButton7') as HTMLButtonElement;
  const correctionsDiv7 = document.getElementById('corrections7') as HTMLDivElement;
  const questions7= document.querySelectorAll('.question7') as NodeListOf<HTMLInputElement>;
  const correctAnswers7 = ['حيوان بيوض/23يوم', 'حيوان غير بيوض', 'حيوان بيوض/7-يوم10', 'حيوان بيوض/', 'حيوان بيوض/1-2يوم', 'حيوان بيوض/30-90يوم', 'حيوان غير بيوض', 'حيوان غير بيوض'];
  
  checkButton7.addEventListener('click', () => {
    correctionsDiv7.innerHTML = '';
    const answers = [
      (document.getElementById("1") as HTMLInputElement).value,
      (document.getElementById("2") as HTMLInputElement).value,
      (document.getElementById("3") as HTMLInputElement).value,
      (document.getElementById("4") as HTMLInputElement).value,
      (document.getElementById("5") as HTMLInputElement).value,
      (document.getElementById("6") as HTMLInputElement).value,
      (document.getElementById("7") as HTMLInputElement).value,
      (document.getElementById("8") as HTMLInputElement).value
    ];
  
    questions7.forEach((question7, index) => {
      const label7 = question7.parentElement?.textContent?.trim() || '';
      const isCorrect7 = answers[index].toLowerCase() === correctAnswers7[index].toLowerCase();
  
      const correctionText7 = document.createElement('p');
      correctionText7.textContent = (isCorrect7 ? 'أحسنت الإختيار هذا الجواب صحيح' : 'عصفور:حيوان غير بيوض/23 يوم ــــــــــــــ قطة:غير بيوض ــــــــــــــ ضفدعة:بيوض/7ـ10 ــــــــــــــ دودة:غير بيوض ــــــــــــــ ذبابة:بيوض/1ـ2 ــــــــــــــ سلحفاة:بيوض/25ـ90 ــــــــــــــ كلب:غير بيوض ــــــــــــــ أرنب:غير بيوض');
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
  const correctAnswers8 = ['ثعلب:جرو/50ـ60 يوم', 'قطة:هرير/63ـ65يوم', 'خروف:حمل/150يوم', 'فأر:درص/19ـ21يوم', 'الحوت:العجل/10ـ12شهر', 'الحصان:مهر/11شهر', 'كلب:جرو/58ـ68يوم', 'أرنب:خرنق/28ـ31يوم'];
  
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
      correctionText8.textContent = (isCorrect8 ? 'أحسنت الإختيار هذا الجواب صحيح' : 'ثعلب:جرو/50ـ60 يوم ــــــــــــــ قطة:هرير/63ـ65يوم ــــــــــــــ خروف:حمل/150يوم ــــــــــــــ فأر:درص/19ـ21يوم ــــــــــــــ الحوت الأزرق:العجل/10ـ12شهر ــــــــــــــ الحصان:مهر/11شهر ــــــــــــــ كلب:جرو/58ـ68يوم ــــــــــــــ أرنب:خرنق/28ـ31يوم');
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
