let screenWelcome = document.getElementById('welcomescreen')//variable utilisées dans le programme
let screenQuestion = document.getElementById('questionscreen')
let screenResult = document.getElementById('resultscreen')
class Quiz {
  //Class Quiz qui va être implementé par la propriété addQuestion 
  // on push les questions (question) dans le tableau this.question
  constructor(){
    this.questions = [],
    this.nbCorrects = 0,
    this.indexCurrentQuestion = 0

    this.addQuestion = function(question){
      this.questions.push(question);
    }
    this.showCurrentQuestion = function(){ 
        if(this.indexCurrentQuestion < this.questions.length ){
          this.questions[this.indexCurrentQuestion].getElement( 
              this.indexCurrentQuestion+1,this.questions.length
            )
         
        }
        else{
        screenQuestion.classList.add("hidden") 

        let elNbCorrects = document.getElementById("nbcorrects")
        elNbCorrects.textContent = quiz.nbCorrects
        screenResult.style.display = "block"
        }
      }
      
      
    }
    // Automatisation recupère la réponse compare la réponse et affiche gagné ou perdu
    /*this.launch = function(){
     this.questions.forEach((question) => {
        let userAnwser = prompt(question.getBody());
        if(question.isCorrectAnwser(userAnwser)){
          console.log("Gagné");
          this.nbCorrects++;
        }else{
          console.log("perdu");
        }
      })
      this.showResults();
    }
    this.showResults = function(){
      let msg = "Resultats : \n " + this.nbCorrects + " sur " + this.questions.length + " correctes"
      alert(msg);
    }*/
  }

// structure et génère les questions 
class Question {
  constructor(title, anwsers, correctAnwser){      
    this.title = title;
    this.anwsers = anwsers;
    this.correctAnwser = correctAnwser;
    /*this.getBody = function(){
      let body = this.title.toUpperCase(1) + "\n";
      for (let i = 0; i< this.anwsers.length ; i++){
        body += (i+1) + ". " + this.anwsers[i] + "\n";
      } 
      return body;
    },*/
    this.getElement = function (indexQuestion,nbQuestions){
      let questionNumber = document.createElement("h2")
      questionNumber.classList.add("quiz__subtitle")
      questionNumber.textContent ="Question " + indexQuestion + "/" + nbQuestions
      
    
      screenQuestion.append(questionNumber)

      let questionTitle = document.createElement("h3")
      questionTitle.textContent = this.title  

      screenQuestion.append(questionTitle)

      let questionAnwsers = document.createElement("ul")
      questionAnwsers.classList.add("question__anwsers");

      this.anwsers.forEach((anwser,index )=>{ // pour chaque reponses venant de la classe question
        let elAnwser = document.createElement("li");// création d'un élément html li
        elAnwser.classList.add("anwser");//ajout de la classe anwser cf style.css
        elAnwser.textContent = anwser;//ajout du texte des réponses 
        elAnwser.id = index+1;  
        elAnwser.addEventListener("click", this.checkAnwser)
        questionAnwsers.append(elAnwser);// affiche html des réponses
      })
      /*let anwser2 = document.createElement("li")
      anwser2.classList.add("anwser")
      anwser2.textContent ="Argentine"
      questionAnwsers.append(anwser2)

      let anwser3 = document.createElement("li")
      anwser3.classList.add("anwser")
      anwser3.textContent ="Italie"
      questionAnwsers.append(anwser3)*/

      screenQuestion.append(questionAnwsers)

      
      
    }
    // permet de pousser les réponses  
    this.addAnwser = function(anwser){
      this.anwsers.push(anwser)
    },
    this.checkAnwser = (event)=>{
      let anwserSelected = event.target 
      if(this.isCorrectAnwser(anwserSelected.id) ){
        anwserSelected.classList.add("anwser--correct")
        quiz.nbCorrects++
      } 
      else{
        anwserSelected.classList.add("anwser--wrong")
        let elRightanwser = document.getElementById(this.correctAnwser)
        elRightanwser.classList.add("anwser--correct")
      }
       setTimeout(function() { 
        screenQuestion.textContent = ''
        quiz.indexCurrentQuestion++
        quiz.showCurrentQuestion()
       }, 1000)


    }
    //vérifie si la réponse user correspond
    this.isCorrectAnwser = function(userAnswer){
      if(userAnswer == this.correctAnwser){
        return true;
      }else{
        return false;
      }

    }
  }
};


//instance question 1
let question1 = new Question("Qui a remporté la copa america en 2016",
['Chili', 'Argentine', 'Uruguay'],1);

//instance du Quiz
let quiz = new Quiz();
//utilise la propriété addQuestion de la class quiz pour ajouter la question 1
quiz.addQuestion(question1)

let question2 = new Question("Contre qui l'allemagne à gagné en finale de la coupe du monde",
['Brésil','Argentine','Italie'],2);

quiz.addQuestion(question2);

let question3 = new Question("Où ce sont déroulés les jeux Olympiques d'été en 2016?",
['Chicago','Rio de Janeiro','Doha'],2);

quiz.addQuestion(question3);

let question4 = new Question("Quelles sont les épreuves en force athlétique?",
['tractions, pompes, airsquats','developpé militaire, squat, soulevé de terre','soulevé de terre, squat, développé couché'],3);

quiz.addQuestion(question4);

let question5 = new Question("Au judo quel est le grade le plus élevé parmi ces ceintures ?",['Orange', 'Bleue', 'Vert'],2);
quiz.addQuestion(question5);

let question6 = new Question("Quel pays ne participe pas au tounoi des Six-Nations ?", ['Italie','France','Espagne'],3);
quiz.addQuestion(question6);

let question7 = new Question("Quel pays d'Amérique latine accueil un grands Prix de formule 1?", ['Argentine','Mexique','Chili'],3);
quiz.addQuestion(question7);

let question8 = new Question("Contre qui a combattu Mohamed Ali dans un combat mémorable se déroulant à Kinshasa ?"['George Foreman','Sonny Liston','Michael Moorer'],1);
quiz.addQuestion(question8);



//quiz.launch();

//let elNbQuestions = document.getElementsByClassName("nbquestions") ne permet pas de pouvoir 
//utiliser forEach car c'est HTML collection or querySelector est une nodelist si id # si class . 
elNbQuestions = document.querySelectorAll(".nbquestions")
console.log(elNbQuestions)

//for(let i = 0; i < elNbQuestions.length; i++){
 // elNbQuestions[i].textContent = quiz.questions.length
//}
elNbQuestions.forEach(function(elNbQuestions){
  elNbQuestions.textContent = quiz.questions.length
});

// la propriété textContent en js permet de récuperer le texte dans dans l'objet noeud selectionné 
// la propriété textInnerHtml en js rend en compte le style de l'élément et ne retournera rien pour 
//les éléments cachés

function seeFirstQuestion(){

// 1ère façon de faire screeWelcome.style.display="none"
screenWelcome.classList.add('hidden') // 2ème façon de le faire appelant une class css pré-établie
// pour cacher un element 

screenQuestion.style.display="block"
quiz.showCurrentQuestion();
}


let welcomeBtn = document.getElementById('welcomeBtn')
welcomeBtn.addEventListener("click", seeFirstQuestion)