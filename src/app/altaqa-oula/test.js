
if (typeof document !== 'undefined') {
const checkButton7 = document.getElementById('checkButton7');
const correctionsDiv7 = document.getElementById('corrections7');
const questions7 = document.querySelectorAll('.question7');

const correctAnswers7 = ['قوة الجذب','قوة الدفع','قوة الجذب','قوة الدفع'];

checkButton7.addEventListener('click', function () {
    correctionsDiv7.innerHTML = '';
    var a = document.getElementById("1").value;
    var b = document.getElementById("2").value;
    var c = document.getElementById("3").value;
    var m = document.getElementById("4").value;
    

    var answers = [a, b, c, m];
    console.log(a); console.log(b);

    questions7.forEach((question7, index) => {
        const label7 = question7.parentElement.textContent.trim();
        var isCorrect7;
        
            isCorrect7 = answers[index].toLowerCase() === correctAnswers7[index].toLowerCase();
        

        const correctionText7 = document.createElement('p');
        correctionText7.textContent = label7 + ' - ' + (isCorrect7 ? 'أحسنت الإختيار هذا الجواب صحيح' : 'لقد أخطأت هذا الجواب غير صحيح ');
        correctionText7.style.color = isCorrect7 ? 'green' : 'red';

        correctionsDiv7.appendChild(correctionText7);

    });

    questions7.forEach((question7, index) => {
        var isCorrect7;
     
            isCorrect7 = answers[index].toLowerCase() === correctAnswers7[index].toLowerCase();
        

        isCorrect7 ? listT.push("TRUE") : listF.push("FALSE");

    });
    const correctionsDiv2 = document.getElementById('corrections2');
        const correctionsDiv9 = document.getElementById('corrections9');
      
        
        
         
                
            
                const correctionText2 = document.createElement('p');
            correctionsDiv9.innerHTML = '';
                       const correctionText3 = document.createElement('p');
                       const correctionText9 = document.createElement('p');
                       correctionText2.textContent = 'الإجابات الصحيحة : '+listT.length;
                       correctionText2.style.color = 'green'; 
                       correctionText3.textContent = 'الاجابات الخاطئة :'+listF.length;
                       correctionText9.textContent = '%'+' النتيجة  :  '+parseInt(listT.length/(listF.length+listT.length)*100);
                       correctionText3.style.color = 'red'; 
                       correctionText9.style.color = 'white'; 
                       correctionText9.style.fontSize = 'x-large';
                       correctionText9.style.backgroundColor="blue";
                       correctionsDiv2.appendChild(correctionText3);
                       correctionsDiv9.appendChild(correctionText9);
                       correctionsDiv2.appendChild(correctionText2);
        console.log(listT.length); console.log(listF.length);

});
}