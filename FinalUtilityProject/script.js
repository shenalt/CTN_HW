let correctAmount = 10;
let counter = 0;
let isDisplayed = false;

function displayCorrect(selected, correct){
    if (selected === correct) {
        this.classList.add('correct');
    } else {
        this.classList.add('incorrect');
        const correctOne = this.closest('.correctOne')
        correctOne.add('correct')
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const answerOptions = document.querySelectorAll('.answer-option');

    answerOptions.forEach(option => {
        option.addEventListener('click', function() {
            const questionSection = this.closest('.multiplechoice'); // Changed from .utility to .multiplechoice
            const selectedAnswer = this.dataset.answer;
            const correctOne = questionSection.querySelectorAll('.correctOne')
            const spanElem = this.closest('.multiplechoice').querySelector('span')

            let correctAnswer = '';
            if (questionSection.id === 'question1') {
                correctAnswer = 'b';
            } else if (questionSection.id === 'question2') {
                correctAnswer = 'd';
            } else if (questionSection.id === 'question3') {
                correctAnswer = 'a';
            } else if (questionSection.id === 'question4') {
                correctAnswer = 'b';
            } else if (questionSection.id === 'question5') {
                correctAnswer = 'c';
            } else if (questionSection.id === 'question6') {
                correctAnswer = 'd';
            } else if (questionSection.id === 'question7') {
                correctAnswer = 'c';
            } else if (questionSection.id === 'question8') {
                correctAnswer = 'd';
            } else if (questionSection.id === 'question9') {
                correctAnswer = 'd';
            } else if (questionSection.id === 'question10') {
                correctAnswer = 'a';
            }

            if(selectedAnswer === correctAnswer){
                this.classList.add('correct');
                questionSection.classList.add('clicked')
                spanElem.style.display = '';
                counter++;
            } else{
                this.classList.add('incorrect')
                while(!questionSection.classList.contains('clicked')){
                    correctAmount--;
                    setTimeout(() => {
                        correctOne[0].classList.add('correct')
                        spanElem.style.display = '';
                    }, 50);
                    questionSection.classList.add('clicked')
                    counter++;
                }
            }

            if(counter === 10 && isDisplayed === false){
                console.log('sdlfsdf')
                const finalContainer = document.createElement('div')
                finalContainer.innerHTML = `
                    <div class="conclusion">
                        <h1>You got ${correctAmount} out of 10 questions correct!</h1>
            
                        <p>12,429 people died from drunk-driving crashes in 2023 <a href="https://www.nhtsa.gov/risky-driving/drunk-driving">according</a> to the National Highway 
                        Traffic Safety Administration. Every day, about 32 people die in drunk-driving related crashes. Such deaths do not need to happen and the more you are aware
                        of the dangers of drunk driving and the importance of drinking responsibly, the more lives can be saved. Think twice before getting behind the wheel after a night
                        of drinking.</p>
                    </div>
                `;  
                const container = document.getElementsByClassName('container')[0];
                container.appendChild(finalContainer); 
                isDisplayed = true;
            }

            console.log(correctAmount)       
            console.log(counter)
            
        });
    });
});

