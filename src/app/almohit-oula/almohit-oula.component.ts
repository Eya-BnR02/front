import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-almohit-oula',
  templateUrl: './almohit-oula.component.html',
  styleUrl: './almohit-oula.component.css'
})
export class AlmohitOulaComponent  implements OnInit {
 
  constructor() {}

  ngOnInit(): void {
    this.initializeListeners();
  }

  initializeListeners() {
    
    let listT: string[] = [];
    let listF: string[] = [];
    
    if (typeof document !== 'undefined') {
        const checkButton2 = document.getElementById('checkButton2') as HTMLButtonElement | null;
        const correctionsDiv2 = document.getElementById('corrections2') as HTMLDivElement | null;
        const questions2 = document.querySelectorAll('.question2');
    
        const correctAnswers2 = ['حيوان برمائي', 'حشرة', 'حيوان بري', 'طائر', 'حيوان زاحف', 'حيوان مائي'];
    
        if (checkButton2 && correctionsDiv2) {
            checkButton2.addEventListener('click', function () {
                if (correctionsDiv2) {
                    correctionsDiv2.innerHTML = '';
    
                    const a = (document.getElementById("t1") as HTMLInputElement)?.value;
                    const b = (document.getElementById("t2") as HTMLInputElement)?.value;
                    const c = (document.getElementById("t3") as HTMLInputElement)?.value;
                    const m = (document.getElementById("t4") as HTMLInputElement)?.value;
                    const n = (document.getElementById("t5") as HTMLInputElement)?.value;
                    const p = (document.getElementById("t6") as HTMLInputElement)?.value;
    
                    const answers = [a, b, c, m, n, p];
    
                    questions2.forEach((question2, index) => {
                        const label2 = question2.parentElement?.textContent?.trim() || '';
                        const isCorrect2 = answers[index]?.toLowerCase() === correctAnswers2[index].toLowerCase();
    
                        const correctionText2 = document.createElement('p');
                        correctionText2.textContent = label2 + ' - ' + (isCorrect2 ? 'أحسنت الإختيار هذا الجواب صحيح' : 'لقد أخطأت هذا الجواب غير صحيح ');
                        correctionText2.style.color = isCorrect2 ? 'green' : 'red';
    
                        if (correctionsDiv2) {
                            correctionsDiv2.appendChild(correctionText2);
                        }
                    });
    
                    questions2.forEach((question2, index) => {
                        const isCorrect2 = answers[index]?.toLowerCase() === correctAnswers2[index].toLowerCase();
                        isCorrect2 ? listT.push("TRUE") : listF.push("FALSE");
                    });
                }
            });
        }
    }
    
    if (typeof document !== 'undefined') {
        const checkButton1 = document.getElementById('checkButton1') as HTMLButtonElement | null;
        const correctionsDiv1 = document.getElementById('corrections1') as HTMLDivElement | null;
        const questions1 = document.querySelectorAll('.question1');
    
        const correctAnswers1 = [
            true,
            false,
            false,
            true,
            false,
            true,
            false,
            true,
            true,
            false,
            true,
            false,
            false,
            true,
            false,
            true,
        ];
    
        if (checkButton1 && correctionsDiv1) {
            checkButton1.addEventListener('click', function () {
                if (correctionsDiv1) {
                    correctionsDiv1.innerHTML = '';
    
                    questions1.forEach((question1, index) => {
                        const label1 = question1.parentElement?.textContent?.trim() || '';
                        const isCorrect1 = (question1 as HTMLInputElement).checked === correctAnswers1[index];
    
                        const correctionText1 = document.createElement('p');
                        correctionText1.textContent = label1 + ' - ' + (isCorrect1 ? 'أحسنت الإختيار هذا الجواب صحيح' : 'لقد أخطأت هذا الجواب غير صحيح ');
                        correctionText1.style.color = isCorrect1 ? 'green' : 'red';
    
                        if (correctionsDiv1) {
                            correctionsDiv1.appendChild(correctionText1);
                        }
                    });
    
                    questions1.forEach((question1, index) => {
                        const isCorrect1 = (question1 as HTMLInputElement).checked === correctAnswers1[index];
                        isCorrect1 ? listT.push("TRUE") : listF.push("FALSE");
                    });
                }
            });
        }
    }
    
    if (typeof document !== 'undefined') {
        const checkButton7 = document.getElementById('checkButton7') as HTMLButtonElement | null;
        const correctionsDiv7 = document.getElementById('corrections7') as HTMLDivElement | null;
        const questions7 = document.querySelectorAll('.question7');
    
        const correctAnswers7 = ['أعشاب', 'أزهار', 'شجيرة', 'شجرة مثمرة', 'أعشاب', 'أزهار'];
    
        if (checkButton7 && correctionsDiv7) {
            checkButton7.addEventListener('click', function () {
                if (correctionsDiv7) {
                    correctionsDiv7.innerHTML = '';
    
                    const a = (document.getElementById("1") as HTMLInputElement)?.value;
                    const b = (document.getElementById("2") as HTMLInputElement)?.value;
                    const c = (document.getElementById("3") as HTMLInputElement)?.value;
                    const m = (document.getElementById("4") as HTMLInputElement)?.value;
                    const n = (document.getElementById("5") as HTMLInputElement)?.value;
                    const p = (document.getElementById("6") as HTMLInputElement)?.value;
    
                    const answers = [a, b, c, m, n, p];
    
                    questions7.forEach((question7, index) => {
                        const label7 = question7.parentElement?.textContent?.trim() || '';
                        const isCorrect7 = answers[index]?.toLowerCase() === correctAnswers7[index].toLowerCase();
    
                        const correctionText7 = document.createElement('p');
                        correctionText7.textContent = label7 + ' - ' + (isCorrect7 ? 'أحسنت الإختيار هذا الجواب صحيح' : 'لقد أخطأت هذا الجواب غير صحيح ');
                        correctionText7.style.color = isCorrect7 ? 'green' : 'red';
    
                        if (correctionsDiv7) {
                            correctionsDiv7.appendChild(correctionText7);
                        }
                    });
    
                    questions7.forEach((question7, index) => {
                        const isCorrect7 = answers[index]?.toLowerCase() === correctAnswers7[index].toLowerCase();
                        isCorrect7 ? listT.push("TRUE") : listF.push("FALSE");
                    });
    
                    const correctionsDiv3 = document.getElementById('corrections3');
                    const correctionsDiv9 = document.getElementById('corrections9');
    
                    if (correctionsDiv3 && correctionsDiv9) {
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
                        correctionsDiv3.appendChild(correctionText3);
                        correctionsDiv9.appendChild(correctionText9);
                        correctionsDiv3.appendChild(correctionText2);
                    }
                    console.log(listT.length);
                    console.log(listF.length);
                }
            });
        }
    }
  }}