import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alzaman-4',
  templateUrl: './alzaman-4.component.html',
  styleUrl: './alzaman-4.component.css'
})
export class Alzaman4Component  implements OnInit {
 
  constructor() {}

  ngOnInit(): void {
    this.initializeListeners();
  }

  initializeListeners() {
    if (typeof document !== 'undefined') {
      
const checkButton2 = document.getElementById('checkButton2') as HTMLButtonElement;
const correctionsDiv2 = document.getElementById('corrections2') as HTMLDivElement;
const questions2 = document.querySelectorAll('.question2') as NodeListOf<HTMLInputElement>;
const correctAnswers2 = [false, true, true, false, true, false];

checkButton2.addEventListener('click', () => {
  verifierReponses(questions2, correctionsDiv2, correctAnswers2, nbReponsesVrai, nbReponsesFaux);
}); 











const checkButton7 = document.getElementById('checkButton7') as HTMLButtonElement;
const correctionsDiv7 = document.getElementById('corrections7') as HTMLDivElement;
const questions7= document.querySelectorAll('.question7') as NodeListOf<HTMLInputElement>;
const correctAnswers7 = ['08:15', '08:50', '08:05', '09:05', ' 07:20', ' 10:10', ' 07:13', ' 10:53'];

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
correctionText7.textContent = (isCorrect7 ? 'أحسنت الإختيار هذا الجواب صحيح' : 'المثال 1 : الساعة رقم 1 تشير إلى:08:15.ــــــــــــــ الساعة رقم 2 تشير إلى:08:50.ــــــــــــــ المثال 2 : الساعة رقم 1 تشير إلى:08:05.ــــــــــــــ الساعة رقم 2 تشير إلى:09:05.ــــــــــــــ المثال 3: الساعة رقم 1 تشير إلى: 07:20.ــــــــــــــ الساعة رقم 2 تشير إلى: 10:10.ــــــــــــــ المثال 4 : الساعة رقم 1 تشير إلى: 07:13.ــــــــــــــ الساعة رقم 2 تشير إلى: 10:53. ');
correctionText7.style.color = isCorrect7 ? 'green' : 'red';

correctionsDiv7.appendChild(correctionText7);
});

questions7.forEach((question7, index) => {
const isCorrect7 = answers[index].toLowerCase() === correctAnswers7[index].toLowerCase();
isCorrect7 ? listT.push("TRUE") : listF.push("FALSE");
});
});









const checkButton4 = document.getElementById('checkButton4') as HTMLButtonElement;
const correctionsDiv4 = document.getElementById('corrections4') as HTMLDivElement;
const questions4 = document.querySelectorAll('.question4') as NodeListOf<HTMLInputElement>;
const correctAnswers4 = ['ج ب د أ'];

checkButton4.addEventListener('click', () => {
  correctionsDiv4.innerHTML = '';
  const answers = [
    (document.getElementById("q1") as HTMLInputElement).value,
    (document.getElementById("q2") as HTMLInputElement).value,
    (document.getElementById("q3") as HTMLInputElement).value,
    (document.getElementById("q4") as HTMLInputElement).value
  ];

  questions4.forEach((question4, index) => {
    const label4 = question4.parentElement?.textContent?.trim() || '';
    const isCorrect4 = answers[index].toLowerCase() === correctAnswers4[index].toLowerCase();

    const correctionText4 = document.createElement('p');
    correctionText4.textContent = (isCorrect4 ? 'أحسنت الإختيار هذا الجواب صحيح' : ' 1/أمضت شهد وقتا أطول لإنهاء فروضها ـــــــــــــــ 2/يصلُ فَادِي إِلَى المَدْرَسَة مع 07:45 ـــــــــــــــ 3/تَنْتَهِي هذه الحصة مع 09:50 ـــــــــــــــ 4/مدة الحفل 3 ساعات و ربع . بداية الحفْلِ مع 16:45 . نهاية الحفل مع 20:00.');
    correctionText4.style.color = isCorrect4 ? 'green' : 'red';

    correctionsDiv4.appendChild(correctionText4);
  });

  questions4.forEach((question4, index) => {
    const isCorrect4 = answers[index].toLowerCase() === correctAnswers4[index].toLowerCase();
    isCorrect4 ? listT.push("TRUE") : listF.push("FALSE");
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
