const IMAGE_DIR = "questions/";
const imageFiles = questions.map(question => `${IMAGE_DIR}/${question.question}`);
// 테스트 결과
const results = [];

let currentQuestion = 0;
let score = 100;

//1번부터 15번까지는 맞추면 1점, 틀리면 -2점, 16번부터 30번까지는 맞추면 2점, 틀리면 -1점

const imageDir = "questions/";
const options = questions[currentQuestion].options;
const questionImg = document.getElementById("question");
const choicesDiv = document.getElementById("choices");
const nextButton = document.getElementById("next");
const currentQuestionImg = new Image();
const progressDiv = document.getElementById("progress");
const lastContainer = document.getElementById("container");

function init() {

  // 현재 질문 이미지 preload

  currentQuestionImg.src = imageDir + questions[currentQuestion].question;

  // 선택지 이미지 preload
  for (let i = 0; i < options.length; i++) {
    const img = new Image();
    img.src = imageDir + (currentQuestion+1) + "번/" + options[i] + ".gif";
  }

  showQuestion();
}



function showQuestion() {
  const question = questions[currentQuestion];
  const curn = currentQuestion + 1;
  questionImg.src = IMAGE_DIR + question.question;
  
  const options = question.options;
  showChoices(options, curn);
  progressDiv.textContent = `Test ${currentQuestion + 1} / ${questions.length}`;
}

function showChoices(options, curn) {
  choicesDiv.innerHTML = "";
  options.forEach((option, index) => {
    const choiceDiv = document.createElement("div");
    choiceDiv.classList.add("choice");
    const img = document.createElement("img");
    img.src = `${IMAGE_DIR}${curn + "번"}/${option}.gif`;
    img.addEventListener("click", (e) => {
      if (img.complete) {
        answerQuestion(option);
      } else {
        e.preventDefault();
      }
    });
    const label = document.createElement("label");
    label.textContent = option.toUpperCase();
    choiceDiv.setAttribute("data-answer", option);
    choiceDiv.appendChild(img);
    choiceDiv.appendChild(label);
    choicesDiv.appendChild(choiceDiv);
  });
}


const submitBtn = document.createElement('button');
submitBtn.type = 'submit';
submitBtn.textContent = 'IQ점수 확인하기';
submitBtn.id = 'submit-btn';
submitBtn.disabled = true;


// 동의 체크박스 선택
const agreeCheckbox = document.querySelector('.agree');

// 입력 폼 요소 선택
const emailInput = document.querySelector('#email');
const nameInput = document.querySelector('#name');
const ageSelect = document.querySelector('.age select');
const genderSelect = document.querySelector('.gender select');
const countrySelect = document.querySelector('#country_selector');

      function nextQuestion() {
      currentQuestion++;
      if (currentQuestion === questions.length) {
        showResult();
      } else {
        nextButton.style.display = "none";
        showQuestion();
      }
    }

    function showPayment() {
    // 결제를 할 건지 물어보는 창으로 이동합니다.
    window.location.href = "payment.html";
    }
    
    function answerQuestion(option) {
      const question = questions[currentQuestion];
      let points;
    
      if (currentQuestion < 15) {
        // Questions 1-15 are worth 1 point for a correct answer and -2 points for a wrong answer
        points = option == question.answer ? 1 : -2;
      } else {
        // Questions 16-30 are worth 2 points for a correct answer and -1 point for a wrong answer
        points = option == question.answer ? 2 : -1;
      }
    
      score += points;
    
      results.push({question: question.question, option, answer: question.answer});
    
      // rest of your code
      // ...
    
      // 선택지 이미지 클릭 이벤트 등록
      const choiceImgs = choicesDiv.querySelectorAll("img");
      const loadedChoiceImgs = Array.from(choiceImgs).filter(img => img.complete);
      if (loadedChoiceImgs.length === choiceImgs.length) {
        nextQuestion();
      } else {
        nextButton.style.display = "none";
        choicesDiv.classList.add("loading");
        choiceImgs.forEach(img => img.addEventListener("load", handleChoiceImgLoad));
      }
    }
    function handleChoiceImgLoad() {
      const choiceImgs = choicesDiv.querySelectorAll("img");
      const loadedChoiceImgs = Array.from(choiceImgs).filter(img => img.complete);
    
      if (loadedChoiceImgs.length === choiceImgs.length) {
        nextQuestion();
        choicesDiv.classList.remove("loading");
      }
    }    

    function showResult() {
      const resultDiv = document.getElementById("result");
      const result설명 = document.getElementById("설명");
      const timer = document.getElementById("timer");
      const progressDiv = document.getElementById("progress");
      timer.style.display = "none";
      progressDiv.style.display = "none";
      resultDiv.innerHTML = `<h1>당신의 IQ는 ${score}점 입니다.</h1>`;
    
      results.forEach(result => {
        resultDiv.innerHTML += "";
      });
      choicesDiv.innerHTML = "";
      questionImg.style.display = "none";
      nextButton.style.display = "none";
      choicesDiv.style.display = "none";
      lastContainer.style.display = "none";
      timer.style.display = "none";
      progressDiv.style.display = "none";
    }
    
  
    
    init();