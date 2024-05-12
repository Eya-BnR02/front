import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-aljsm-oula',
  templateUrl: './aljsm-oula.component.html',
  styleUrl: './aljsm-oula.component.css'
})
export class AljsmOulaComponent  implements OnInit {
 
  constructor() {}

  ngOnInit(): void {
    this.initializeListeners();
  }

  initializeListeners() {

let listT: string[] = [];
let listF: string[] = [];

if (typeof document !== 'undefined') {
    const checkButton6 = document.getElementById('checkButton6') as HTMLButtonElement | null;
    const correctionsDiv6 = document.getElementById('corrections6') as HTMLDivElement | null;
    const correctionsDiv2 = document.getElementById('corrections2') as HTMLDivElement | null;
    const correctionsDiv9 = document.getElementById('corrections9') as HTMLDivElement | null;

    const questions6 = document.querySelectorAll('.question6');

    const correctAnswers6 = [false, true, false, false, true, false, 'حاسة اللمس', 'حاسة الشم', 'حاسة التذوق', 'حاسة التذوق', 'حاسة السمع', 'حاسة البصر'];

    if (checkButton6 && correctionsDiv6 && correctionsDiv2 && correctionsDiv9) {
        checkButton6.addEventListener('click', function () {
            if (correctionsDiv6) {
                correctionsDiv6.innerHTML = '';

                const a = (document.getElementById("1") as HTMLInputElement)?.value;
                const b = (document.getElementById("2") as HTMLInputElement)?.value;
                const c = (document.getElementById("3") as HTMLInputElement)?.value;
                const m = (document.getElementById("4") as HTMLInputElement)?.value;
                const m1 = (document.getElementById("5") as HTMLInputElement)?.value;
                const m2 = (document.getElementById("6") as HTMLInputElement)?.value;

                const answers = [a, b, c, m, m1, m2];

                questions6.forEach((question6, index) => {
                    const label6 = question6.parentElement?.textContent?.trim() || '';
                    let isCorrect6;
                    if (index > 5) {
                          isCorrect6 = typeof answers[index] === 'string' && answers[index].toLowerCase() === (correctAnswers6[index] as string).toLowerCase();
         
                      } else {
                        isCorrect6 = (question6 as HTMLInputElement).checked === correctAnswers6[index];
                    }

                    const correctionText6 = document.createElement('p');
                    correctionText6.textContent = label6 + ' - ' + (isCorrect6 ? 'أحسنت الإختيار هذا الجواب صحيح' : 'لقد أخطأت هذا الجواب غير صحيح ');
                    correctionText6.style.color = isCorrect6 ? 'green' : 'red';

                    if (correctionsDiv6) {
                        correctionsDiv6.appendChild(correctionText6);
                    }
                });

                questions6.forEach((question6, index) => {
                    let isCorrect6;
                    if (index > 5) {
                      isCorrect6 = typeof answers[index] === 'string' && answers[index].toLowerCase() === (correctAnswers6[index] as string).toLowerCase();
                    } else {
                        isCorrect6 = (question6 as HTMLInputElement).checked === correctAnswers6[index];
                    }

                    isCorrect6 ? listT.push("TRUE") : listF.push("FALSE");
                });
                

                const correctionText2 = document.createElement('p');
                correctionsDiv9.innerHTML = '';
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
                if (correctionsDiv2) {
                    correctionsDiv2.appendChild(correctionText3);
                    correctionsDiv9.appendChild(correctionText9);
                    correctionsDiv2.appendChild(correctionText2);
                }
            }
        });
    }
}
  }}