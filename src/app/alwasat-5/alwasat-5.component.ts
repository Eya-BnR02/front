import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alwasat-5',
  templateUrl: './alwasat-5.component.html',
  styleUrl: './alwasat-5.component.css'
})
export class Alwasat5Component  implements OnInit {
 
  constructor() {}

  ngOnInit(): void {
    this.initializeListeners();
  }

  initializeListeners() {
    if (typeof document !== 'undefined') {

      const checkButton8 = document.getElementById('checkButton8') as HTMLButtonElement;
      const correctionsDiv8 = document.getElementById('corrections8') as HTMLDivElement;
      const questions8= document.querySelectorAll('.question8') as NodeListOf<HTMLInputElement>;
      const correctAnswers8 = ['حبوب / نمل / دجاجة / إنسان '];
      
      checkButton8.addEventListener('click', () => {
        correctionsDiv8.innerHTML = '';
        const answers = [
          (document.getElementById("a1") as HTMLInputElement).value
        
        ];
      
        questions8.forEach((question8, index) => {
          const label8 = question8.parentElement?.textContent?.trim() || '';
          const isCorrect8 = answers[index].toLowerCase() === correctAnswers8[index].toLowerCase();
      
          const correctionText8 = document.createElement('p');
          correctionText8.textContent = (isCorrect8 ? 'أحسنت الإختيار هذا الجواب صحيح' : 'حبوب / نمل / دجاجة / إنسان ');
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
  const correctAnswers3 = [false, true, false, true, true, true, false];
  checkButton3.addEventListener('click', () => {
    verifierReponses(questions3, correctionsDiv3, correctAnswers3, nbReponsesVrai, nbReponsesFaux);
  }); 







const checkButton = document.getElementById('checkButton') as HTMLButtonElement;
const correctionsDiv = document.getElementById('corrections') as HTMLDivElement;
const questions = document.querySelectorAll('.question') as NodeListOf<HTMLInputElement>;
const correctAnswers = [false, true, true, false, false, true, true, true, true];

checkButton.addEventListener('click', () => {
  verifierReponses(questions, correctionsDiv, correctAnswers, nbReponsesVrai, nbReponsesFaux);
}); 








const checkButton1 = document.getElementById('checkButton1') as HTMLButtonElement;
const correctionsDiv1 = document.getElementById('corrections1') as HTMLDivElement;
const questions1 = document.querySelectorAll('.question1') as NodeListOf<HTMLInputElement>;
const correctAnswers1 = [true, true, false, true, true, false, false, false];

checkButton1.addEventListener('click', () => {
  verifierReponses(questions1, correctionsDiv1, correctAnswers1, nbReponsesVrai, nbReponsesFaux);
}); 









const checkButton5 = document.getElementById('checkButton5') as HTMLButtonElement;
const correctionsDiv5 = document.getElementById('corrections5') as HTMLDivElement;
const questions5= document.querySelectorAll('.question5') as NodeListOf<HTMLInputElement>;
const correctAnswers5 = ['2/4/5', 'ترسيب', 'تطهير', 'ترشيح'];

checkButton5.addEventListener('click', () => {
  correctionsDiv5.innerHTML = '';
  const answers = [
    (document.getElementById("x1") as HTMLInputElement).value,
    (document.getElementById("x2") as HTMLInputElement).value,
    (document.getElementById("x3") as HTMLInputElement).value,
    (document.getElementById("x4") as HTMLInputElement).value
  ];

  questions5.forEach((question5, index) => {
    const label5 = question5.parentElement?.textContent?.trim() || '';
    const isCorrect5 = answers[index].toLowerCase() === correctAnswers5[index].toLowerCase();

    const correctionText5 = document.createElement('p');
    correctionText5.textContent = (isCorrect5 ? 'أحسنت الإختيار هذا الجواب صحيح' : 'ـ1_4_5 / ترسيب / تطهير / ترشيح');
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






  
  const checkButton0 = document.getElementById('checkButton0') as HTMLButtonElement;
  const correctionsDiv0 = document.getElementById('corrections0') as HTMLDivElement;
  const questions0 = document.querySelectorAll('.question0') as NodeListOf<HTMLInputElement>;
  const correctAnswers0 = [true, false, false, true, true, true, false, true, true, true, true];

  checkButton0.addEventListener('click', () => {
    verifierReponses(questions0, correctionsDiv0, correctAnswers0, nbReponsesVrai, nbReponsesFaux);
  }); 










  const checkButton7 = document.getElementById('checkButton7') as HTMLButtonElement;
  const correctionsDiv7 = document.getElementById('corrections7') as HTMLDivElement;
  const questions7= document.querySelectorAll('.question7') as NodeListOf<HTMLInputElement>;
  const correctAnswers7 = [' . '];
  
  checkButton7.addEventListener('click', () => {
    correctionsDiv7.innerHTML = '';
    const answers = [
      (document.getElementById("1") as HTMLInputElement).value
    ];
  
    questions7.forEach((question7, index) => {
      const label7 = question7.parentElement?.textContent?.trim() || '';
      const isCorrect7 = answers[index].toLowerCase() === correctAnswers7[index].toLowerCase();
  
      const correctionText7 = document.createElement('p');
      correctionText7.textContent = (isCorrect7 ? 'أحسنت الإختيار هذا الجواب صحيح' : 'نلاحظ أن البذور التي وضعت ماء لم يطرأ عليها أي تغيير أي لم يحصل لها الإنبات. بينما الأخرى التي سقيت بالماء أنبتت جميعها بعد 13 يوم يوم من بداية التجربة. ـ نلاحظ زيادة طول الزهرة التي تسقى بالماء يوما بعد يوم حتى وصل معدل طولها إلى 30 صم بعد 13 يوما من بداية التجربة أما البذور التي عاشت بدون ماء فإنها لم تنبت لأن الأجنة داخلها بقيت في حالة سبات. ـ و بالتالي فإن الماء يؤدي إلى انتفاخ البذور وقيام الأجنة من سباتها تؤيد عمليات التنفس و البناء والهدم داخل خلايا النبات، وبذلك تزيد عمليات النمو فنبتت البذور. ـ الماء إذا شرط أساسي لاستفاقة جنين النبات من سباته');
      correctionText7.style.color = isCorrect7 ? 'green' : 'red';
      correctionsDiv7.appendChild(correctionText7);
    });
  
    questions7.forEach((question7, index) => {
      const isCorrect7 = answers[index].toLowerCase() === correctAnswers7[index].toLowerCase();
      isCorrect7 ? listT.push("TRUE") : listF.push("FALSE");
    });
  });









  const checkButton11 = document.getElementById('checkButton11') as HTMLButtonElement;
  const correctionsDiv11 = document.getElementById('corrections11') as HTMLDivElement;
  const questions11 = document.querySelectorAll('.question11') as NodeListOf<HTMLInputElement>;
  const correctAnswers11 = [true, false, true, false, true, false];
  
  checkButton11.addEventListener('click', () => {
    verifierReponses(questions11, correctionsDiv11, correctAnswers11, nbReponsesVrai, nbReponsesFaux);
  }); 









  
  const checkButton88 = document.getElementById('checkButton88') as HTMLButtonElement;
  const correctionsDiv88 = document.getElementById('corrections88') as HTMLDivElement;
  const questions88= document.querySelectorAll('.question88') as NodeListOf<HTMLInputElement>;
  const correctAnswers88 = ['نستنتج أن النبتة بحاجة إلى الماء لكي تبقى على قيد الحياة و تنمو بطريقة عادية', 'نستنتج أن النبتة بحاجة إلى التربة لكي تبقى على قيد الحياة و تنمو بطريقة عادية', 'نستنتج أن النبتة بحاجة إلى التربة أو بالأحرى إلى الأملاح المعدنية الموجودة في التربة', 'نستنتج أن الأسمدة الكيميائية هي المكون الموجود في التربة و الذي جعل النبتة في إلى حاجة إلى التربة'];
  
  checkButton88.addEventListener('click', () => {
    correctionsDiv88.innerHTML = '';
    const answers = [
      (document.getElementById("a1") as HTMLInputElement).value,
      (document.getElementById("a2") as HTMLInputElement).value,
      (document.getElementById("a3") as HTMLInputElement).value,
      (document.getElementById("a4") as HTMLInputElement).value
    
    ];
  
    questions88.forEach((question88, index) => {
      const label88 = question88.parentElement?.textContent?.trim() || '';
      const isCorrect88 = answers[index].toLowerCase() === correctAnswers88[index].toLowerCase();
  
      const correctionText88 = document.createElement('p');
      correctionText88.textContent = (isCorrect88 ? 'أحسنت الإختيار هذا الجواب صحيح' : 'التجربة 1 : نستنتج أن النبتة بحاجة إلى الماء لكي تبقى على قيد الحياة و تنمو بطريقة عادية.       التجربة 2 : نستنتج أن النبتة بحاجة إلى التربة لكي تبقى على قيد الحياة و تنمو بطريقة عادية.         التجربة 3: نستنتج أن النبتة بحاجة إلى التربة أو بالأحرى إلى الأملاح المعدنية الموجودة في التربة لكي تبقى على قيد الحياة و تنمو بطريقة عادية.       التجربة 4 : نستنتج أن الأسمدة الكيميائية هي المكون الموجود في التربة و الذي جعل النبتة في إلى حاجة إلى التربة. ');
      correctionText88.style.color = isCorrect88 ? 'green' : 'red';
  
      correctionsDiv88.appendChild(correctionText88);
    });
  
    questions88.forEach((question88, index) => {
      const isCorrect88 = answers[index].toLowerCase() === correctAnswers88[index].toLowerCase();
      isCorrect88 ? listT.push("TRUE") : listF.push("FALSE");
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
    