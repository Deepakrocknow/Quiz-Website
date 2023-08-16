const questions = [
    {
        question:"What Is Full Form OF AIT",
        answers: [
            { text: "Army Instiute Of Technology",correct:true},
            { text:"All Instiute Of Technology",correct:false},
            { text:"Any Instiute Of Techno",correct:false},
            { text:"All India Technology",correct:false},

        ]
    },
    {
        question:"What Is The Capital Of M.P.",
        answers:[
            { text:"Madhya Pradesh",correct:false},
            { text:"Bhopal",correct:true},
            { text:"Indore",correct:false},
            { text:"mouse",correct:false},

        ]
    },
    {
        question:"What Is The Full Form Of ISDF",
        answers:[
            { text:"Information Source And Digital Form",correct:false},
            { text:"Inter Security And Desi Fundamental",correct:false},
            { text:"Information Security And Digital Forencics",correct:true},
            { text:"Information Source And Digital Form",correct:false},

        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
     currentQuestionIndex =0;
     score =0;
     nextButton.innerHTML = "Next";
     showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1;
    questionElement.innerHTML = questionNo + ". "+currentQuestion.question;
   
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);   
        if(answer.correct){
             button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer); 
    });
}

  function resetState(){
     nextButton.style.display = "none";
     while(answerButtons.firstChild){
          answerButtons.removeChild(answerButtons.firstChild);
     }

  }

  function selectAnswer(e){
      const selectedBtn = e.target;
      const isCorrect = selectedBtn.dataset.correct ==="true";
      if(isCorrect){
         selectedBtn.classList.add("correct");
         score++;
      }
      else{
        selectedBtn.classList.add("incorrect")
      }
      Array.from(answerButtons.children).forEach(button =>{
          if(button.dataset.correct ==="true"){
              button.classList.add("correct");
          }
          button.disabled = true;
      });
      nextButton.style.display = "block";
      
  }

  function showScore(){
      resetState();
      questionElement.innerHTML = `The score is ${score} out of ${questions.length} !.. WELL PLAYED :)`;
      nextButton.innerHTML = "Try Again";
      nextButton.style.display = "block";

      
  }

  function handleNextButton(){
       currentQuestionIndex++;
       if(currentQuestionIndex<questions.length){
           showQuestion();
       }
       else{
          showScore();
       }
  }

  nextButton.addEventListener("click",()=>{
      if(currentQuestionIndex < questions.length){
          handleNextButton();
      }
      else{
         startQuiz();
      }

  })

   startQuiz();







