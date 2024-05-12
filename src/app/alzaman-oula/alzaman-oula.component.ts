import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alzaman-oula',
  templateUrl: './alzaman-oula.component.html',
  styleUrls: ['./alzaman-oula.component.css']
})
export class AlzamanOulaComponent implements OnInit {
 
  constructor() {}

  ngOnInit(): void {
    this.initializeListeners();
  }

  initializeListeners() {

  const listT: string[] = [];
const listF: string[] = [];

if (typeof document !== 'undefined') {
    const checkButton1 = document.getElementById('checkButton1') as HTMLButtonElement;
    const correctionsDiv1 = document.getElementById('corrections1') as HTMLDivElement;

    const questions1 = document.querySelectorAll('.question1') as NodeListOf<HTMLInputElement>;

    const correctAnswers1 = [
        true,
        false,
        true,
        false,
        true,
        false,
        false,
        true,
    ];

    checkButton1.addEventListener('click', () => {
        correctionsDiv1.innerHTML = '';

        questions1.forEach((question1, index) => {
            const label1 = question1.parentElement?.textContent?.trim() || '';
            const isCorrect1 = question1.checked === correctAnswers1[index];

            const correctionText1 = document.createElement('p');
            correctionText1.textContent = label1 + ' - ' + (isCorrect1 ? 'أحسنت الإختيار هذا الجواب صحيح' : 'لقد أخطأت هذا الجواب غير صحيح ');
            correctionText1.style.color = isCorrect1 ? 'green' : 'red';

            correctionsDiv1.appendChild(correctionText1);
        });

        questions1.forEach((question1, index) => {
            const isCorrect1 = question1.checked === correctAnswers1[index];
            isCorrect1 ? listT.push("TRUE") : listF.push("FALSE");
        });

        console.log(listT.length);
        console.log(listF.length);
    });
}

if (typeof document !== 'undefined') {
    const checkButton4 = document.getElementById('checkButton4') as HTMLButtonElement;
    const correctionsDiv4 = document.getElementById('corrections4') as HTMLDivElement;
    const questions4 = document.querySelectorAll('.question4') as NodeListOf<HTMLInputElement>;

    const correctAnswers4 = ['نشاط ليلي', 'نشاط نهاري', 'نشاط نهاري', 'نشاط نهاري'];

    checkButton4.addEventListener('click', () => {
        correctionsDiv4.innerHTML = '';
        const answers = [
            (document.getElementById("text1") as HTMLInputElement).value,
            (document.getElementById("text2") as HTMLInputElement).value,
            (document.getElementById("text3") as HTMLInputElement).value,
            (document.getElementById("text4") as HTMLInputElement).value
        ];

        questions4.forEach((question4, index) => {
            const label4 = question4.parentElement?.textContent?.trim() || '';
            const isCorrect4 = answers[index].toLowerCase() === correctAnswers4[index].toLowerCase();

            const correctionText4 = document.createElement('p');
            correctionText4.textContent = label4 + ' - ' + (isCorrect4 ? 'أحسنت الإختيار هذا الجواب صحيح' : 'لقد أخطأت هذا الجواب غير صحيح ');
            correctionText4.style.color = isCorrect4 ? 'green' : 'red';

            correctionsDiv4.appendChild(correctionText4);
        });

        questions4.forEach((question4, index) => {
            const isCorrect4 = answers[index].toLowerCase() === correctAnswers4[index].toLowerCase();
            isCorrect4 ? listT.push("TRUE") : listF.push("FALSE");
        });

        console.log(listT.length);
        console.log(listF.length);
    });
}

if (typeof document !== 'undefined') {
    const checkButton3 = document.getElementById('checkButton3') as HTMLButtonElement;
    const correctionsDiv3 = document.getElementById('corrections3') as HTMLDivElement;
    const questions3 = document.querySelectorAll('.question3') as NodeListOf<HTMLInputElement>;

    const correctAnswers3 = [
        true,
        false,
        false,
        true,
    ];

    checkButton3.addEventListener('click', () => {
        correctionsDiv3.innerHTML = '';

        questions3.forEach((question3, index) => {
            const label3 = question3.parentElement?.textContent?.trim() || '';
            const isCorrect3 = question3.checked === correctAnswers3[index];

            const correctionText3 = document.createElement('p');
            correctionText3.textContent = label3 + ' - ' + (isCorrect3 ? 'أحسنت الإختيار هذا الجواب صحيح' : 'لقد أخطأت هذا الجواب غير صحيح ');
            correctionText3.style.color = isCorrect3 ? 'green' : 'red';

            correctionsDiv3.appendChild(correctionText3);
        });

        questions3.forEach((question3, index) => {
            const isCorrect3 = question3.checked === correctAnswers3[index];
            isCorrect3 ? listT.push("TRUE") : listF.push("FALSE");
        });

        const correctionsDiv2 = document.getElementById('corrections2');
        const correctionsDiv9 = document.getElementById('corrections9');

        if (correctionsDiv2 != null && correctionsDiv9 != null) {
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
        correctionsDiv2.appendChild(correctionText3);
        correctionsDiv9.appendChild(correctionText9);
        correctionsDiv2.appendChild(correctionText2);

        console.log(listT.length);
        console.log(listF.length);
    }});
}
  }}