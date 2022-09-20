const questions =[
    {
        question : "If 1=3 2=3 3=5 4=4 5=4 Then, 6=?",
        a: 2,
        b: 3,
        c: 4,
        d: 6,
        correct: "b"
    },

    {
        question : "Which number is equivalent to 3^(4)÷3^(2)",
        a: 6,
        b: 5,
        c: 10,
        d: 9,
        correct: "d"
    },

    {
        question : "Sally is 54 years old and her mother is 80,how many years ago was Sallys mother times her age?",
        a: "45 years",
        b: "33 years",
        c: "41 years",
        d: "66 years",
        correct: "c"
    },

    {
        question : "Which 3 numbers have the same answer whether theyre added or multiplied together?",
        a: "1 2 and 3",
        b: "3 4 and 5",
        c: "0 1 and 2",
        d: "100 300 and 60",
        correct: "a"
    }
]

// const text = document.getElementById("last");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

let currentQuiz = 0;
let score=0;
loadQuiz();
function loadQuiz(){
    const currentquizdata = questions[currentQuiz];

    questionEl.innerText = currentquizdata.question;
    a_text.innerText = currentquizdata.a;
    b_text.innerText = currentquizdata.b;
    c_text.innerText = currentquizdata.c;
    d_text.innerText = currentquizdata.d;
}

function ifselected(){
    const answerel = document.querySelectorAll(".answer");

    let answer = undefined;
    answerel.forEach(answerel =>{
        if(answerel.checked){
            answer=answerel.id;
            answerel.checked = false;
        }
    });
    return answer;
}


stdbtn.addEventListener('click',() =>{
    const answer = ifselected();
    
    if(answer){
        if(answer === questions[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz<questions.length){
            loadQuiz();
        }else{
            document.getElementById("last").innerHTML = `<h2 id="question">Yay! you've completed the test</h2><p id="question">with score ${score}</p>
                              <div class="button"><button id="afterbutton">return</button></div>`;
            afterbutton.addEventListener('click',() =>{
                location.reload();
            })
        }
   } 
})