import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-altaqa-oula',
  templateUrl: './altaqa-oula.component.html',
  styleUrl: './altaqa-oula.component.css'
})
export class AltaqaOulaComponent  implements OnInit {
 
  constructor() {}

  ngOnInit(): void {
    this.initializeListeners();
  }

  initializeListeners() {

  if (typeof document !== 'undefined') {
    const checkButton7 = document.getElementById('checkButton7');
    const correctionsDiv7 = document.getElementById('corrections7');
    const questions7 = document.querySelectorAll('.question7');

    const correctAnswers7 = ['قوة الجذب', 'قوة الدفع', 'قوة الجذب', 'قوة الدفع'];

    if (checkButton7 != null && correctionsDiv7 != null ) {
    checkButton7.addEventListener('click', function () {
      
        correctionsDiv7.innerHTML = '';
        const a = (document.getElementById("1") as HTMLInputElement)?.value;
        const b = (document.getElementById("2") as HTMLInputElement)?.value;
        const c = (document.getElementById("3") as HTMLInputElement)?.value;
        const m = (document.getElementById("4") as HTMLInputElement)?.value;

        const answers = [a, b, c, m];

        questions7.forEach((question7, index) => {
            const label7 = question7.parentElement?.textContent?.trim() || '';
            let isCorrect7 = false;
            if (typeof answers[index] === 'string') {
                isCorrect7 = answers[index].toLowerCase() === correctAnswers7[index].toLowerCase();
            }

            const correctionText7 = document.createElement('p');
            correctionText7.textContent = label7 + ' - ' + (isCorrect7 ? 'أحسنت الإختيار هذا الجواب صحيح' : 'لقد أخطأت هذا الجواب غير صحيح ');
            correctionText7.style.color = isCorrect7 ? 'green' : 'red';

            correctionsDiv7?.appendChild(correctionText7);
        });

        const listT: string[] = [];
        const listF: string[] = [];

        questions7.forEach((question7, index) => {
            let isCorrect7 = false;
            if (typeof answers[index] === 'string') {
                isCorrect7 = answers[index].toLowerCase() === correctAnswers7[index].toLowerCase();
            }
            isCorrect7 ? listT.push("TRUE") : listF.push("FALSE");
        });

        const correctionsDiv2 = document.getElementById('corrections2');
        const correctionsDiv9 = document.getElementById('corrections9');

        if (correctionsDiv2 != null && correctionsDiv9 != null) {
            correctionsDiv9.innerHTML = '';
            const correctionText2 = document.createElement('p');
            const correctionText3 = document.createElement('p');
            const correctionText9 = document.createElement('p');
            correctionText2.textContent = 'الإجابات الصحيحة : ' + listT.length;
            correctionText2.style.color = 'green';
            correctionText3.textContent = 'الاجابات الخاطئة :' + listF.length;
            correctionText3.style.color = 'red';
            correctionText9.textContent = '%' + ' النتيجة  :  ' + (listT.length / (listF.length + listT.length) * 100).toString();
            correctionText9.style.color = 'white';
            correctionText9.style.fontSize = 'x-large';
            correctionText9.style.backgroundColor = "blue";
            correctionsDiv2.appendChild(correctionText3);
            correctionsDiv9.appendChild(correctionText9);
            correctionsDiv2.appendChild(correctionText2);
        }

        console.log(listT.length);
        console.log(listF.length);
    });
}


}
}}