// Consts || elements : 
const startTest = document.getElementById("testStart");
const informations = document.getElementById("informations");
const questions = document.getElementById("questions");
const info = document.getElementById("info");
const resultat = document.getElementById("resultat");

// question cards
const Q1 = document.getElementById("Q1");
const Q2 = document.getElementById("Q2");
const Q3 = document.getElementById("Q3");
const Q4 = document.getElementById("Q4");
const Q5 = document.getElementById("Q5");
const Q6 = document.getElementById("Q6");
const Q7 = document.getElementById("Q7");
const Q8 = document.getElementById("Q8");
const Q9 = document.getElementById("Q9");
const Q10 = document.getElementById("Q10");
const Q11 = document.getElementById("Q11");
const Q12 = document.getElementById("Q12");
const Q13 = document.getElementById("Q13");
const Q14 = document.getElementById("Q14");
const Q15 = document.getElementById("Q15");
const Q16 = document.getElementById("Q16");
const Q17 = document.getElementById("Q17");
const Q18 = document.getElementById("Q18");
const Q19 = document.getElementById("Q19");
const Q20 = document.getElementById("Q20");
const Q21 = document.getElementById("Q21");
const Q22 = document.getElementById("Q22");
const result = document.getElementById("result");

// test inputs : 
const fievreOui=document.getElementById("fievreOui");
const fievreNon=document.getElementById("fievreNon");
const temp = document.getElementById("temp");
const touxOui=document.getElementById("touxOui");
const touxNon=document.getElementById("touxNon");
const coursOui=document.getElementById("coursOui");
const coursNon=document.getElementById("coursNon");
const gorgeOui=document.getElementById("gorgeOui");
const gorgeNon=document.getElementById("gorgeNon");
const diarOui=document.getElementById("diarOui");
const diarNon=document.getElementById("diarNon");
const fatigueOui=document.getElementById("fatigueOui");
const fatigueNon=document.getElementById("fatigueNon");
const boireOui=document.getElementById("boireOui");
const boireNon=document.getElementById("boireNon");
const geneOui=document.getElementById("geneOui");
const geneNon=document.getElementById("geneNon");
const bien=document.getElementById("bien");
const tresBien=document.getElementById("tresBien");
const mal=document.getElementById("mal");
const tresMal=document.getElementById("tresMal");
const age=document.getElementById("age");
const poids=document.getElementById("poids");
const taille=document.getElementById("taille");
const maladieOui=document.getElementById("maladieOui");
const maladieNon=document.getElementById("maladieNon");
const diabOui=document.getElementById("diabOui");
const diabNon=document.getElementById("diabNon");
const cancerOui=document.getElementById("cancerOui");
const cancerNon=document.getElementById("cancerNon");
const respOui=document.getElementById("respOui");
const respNon=document.getElementById("respNon");
const dialyseOui=document.getElementById("dialyseOui");
const dialyseNon=document.getElementById("dialyseNon");
const croniqueOui=document.getElementById("croniqueOui");
const croniqueNon=document.getElementById("croniqueNon");
const encOui=document.getElementById("encOui");
const encNon=document.getElementById("encNon");
const homme=document.getElementById("homme");
const immOui=document.getElementById("immOui");
const immNon=document.getElementById("immNon");
const traitOui=document.getElementById("traitOui");
const traitNon=document.getElementById("traitNon");



//next buttons
const next1 = document.getElementById("next1");
const next2 = document.getElementById("next2");
const next3 = document.getElementById("next3");
const next4 = document.getElementById("next4");
const next5 = document.getElementById("next5");
const next6 = document.getElementById("next6");
const next7 = document.getElementById("next7");
const next8 = document.getElementById("next8");
const next9 = document.getElementById("next9");
const next10 = document.getElementById("next10");
const next11 = document.getElementById("next11");
const next12 = document.getElementById("next12");
const next13 = document.getElementById("next13");
const next14 = document.getElementById("next14");
const next15 = document.getElementById("next15");
const next16 = document.getElementById("next16");
const next17 = document.getElementById("next17");
const next18 = document.getElementById("next18");
const next19 = document.getElementById("next19");
const next20 = document.getElementById("next20");
const next21 = document.getElementById("next21");
const next22 = document.getElementById("next22");



// Events : 
startTest.addEventListener("click", stepper);
startTest.addEventListener("click", start);

//next question event
next1.addEventListener("click", () => {
  next(Q1,Q2);  
  answerStock1();
});
next2.addEventListener("click",() => {
  next(Q2,Q3);
  answerStock2();
})
next3.addEventListener("click",() => {
  next(Q3,Q4);
  answerStock3();
})
next4.addEventListener("click",() => {
  next(Q4,Q5);
  answerStock4();
})
next5.addEventListener("click",() => {
  next(Q5,Q6);
  answerStock5();
})
next6.addEventListener("click",() => {
  next(Q6,Q7);
  answerStock6();
})
next7.addEventListener("click",() => {
  next(Q7,Q8);
  answerStock7();
})  
next8.addEventListener("click",() => {
  next(Q8,Q9);
  answerStock8();
})
next9.addEventListener("click",() => {
  next(Q9,Q10);
  answerStock9();
})
next10.addEventListener("click",() => {
  next(Q10,Q11);
  answerStock10();
})
next11.addEventListener("click",() => {
  next(Q11,Q12);
  answerStock11();
})
next12.addEventListener("click",() => {
  next(Q12,Q13);
  answerStock12();
})
next13.addEventListener("click",() => {
  next(Q13,Q14);
  answerStock13();
})
next14.addEventListener("click",() => {
  next(Q14,Q15);
  answerStock14();
})
next15.addEventListener("click",() => {
  next(Q15,Q16);
  answerStock15();
})
next16.addEventListener("click",() => {
  next(Q16,Q17);
  answerStock16();
})
next17.addEventListener("click",() => {
  next(Q17,Q18);
  answerStock17();
})
next18.addEventListener("click",() => {
  next(Q18,Q19);
  answerStock18();
})
next19.addEventListener("click",() => {
  next(Q19,Q20);
  answerStock19();
})
next20.addEventListener("click",() => {
  next(Q20,Q21);
  answerStock20();
})
next21.addEventListener("click",() => {
  next(Q21,Q22);
  answerStock21();
})
// afficher result message
next22.addEventListener("click",() => { 
  next(Q22,result);
  answerStock22();
  evaluate();
  showResult();
  questions.classList.remove("label-circle-s");
  questions.classList.add("label-circle-ns");
  resultat.classList.remove("label-circle-ns");
  resultat.classList.add("label-circle-s");
})

// functions : 
function stepper() {
informations.classList.remove("label-circle-s");
informations.classList.add("label-circle-ns");
questions.classList.add("label-circle-s");
info.style.display = "none";
}
function start(){
Q1.classList.remove("d-none");
}
function buttonAble(element){
  element.disabled = false; 
}

function next(Qprev,Qcurent) {
  Qprev.classList.add("d-none");
  Qcurent.classList.remove("d-none");
}
//validate temp form
function validateTemp(){
  if(temp.value!="" && temp.value>32 && temp.value<42){
    return true;
  }
  return false;
}
//validate age
function validateAge(){
  if(age.value!="" && age.value>15 && age.value<100){
    return true;
  }
  return false;
}
//validate poids
function validatePoids(){
  if(poids.value!="" && poids.value>50 && poids.value<100){
    return true;
  }
  return false;
}
// validate taille
function validateTaille(){
  if(taille.value!="" && taille.value>80 && taille.value<200){
    return true;
  }
  return false;
}
// Precedent Function
function goBack(Qcurrent,Qprev) {
  Qcurrent.classList.add("d-none");
  Qprev.classList.remove("d-none");
  
}
// answers object
let answers = {
    Q1 : {
        fievreOui : false , 
        fievreNon  : false 
    },
    Q2 : 0, //temp
    Q3 : {
        touxOui : false , 
        touxNon  : false 
    },
    Q4 : {
        coursOui : false , 
        coursNon  : false 
    },
    Q5 :{
        gorgeOui : false,
        gorgeNon : false
    },
    Q6 :{
        diarOui : false,
        diarNon : false
    },
    Q7 :{
        fatigueOui : false,
        fatigueNon : false
    },
    Q8 :{
        boireOui : false,
        boireNon : false
    },
    Q9 : {
        geneOui : false,
        geneNon : false
    },
    Q10 : {
        bien: false,
        tresBien: false,
        mal: false,
        tresMal: false,
    },
    //age
    Q11 : 0, // age
    Q12 : 0, //poids
    Q13 : 0, //taille
    Q14 : {
        maladieOui: false,
        maladieNon: false
    },
    Q15 : {
        diabOui: false,
        diabNo: false
    },
    Q16 : {
        cancerOui: false,
        cancerNon: false
    },
    Q17 : {
        respOui: false,
        respNon: false
    }, 
    Q18 : {
        dialyseOui: false,
        dialysNon: false
    }, 
    Q19 : {
        croniqueOui: false,
        croniqueNon: false
    }, 
    Q20: {
        encOui: false,
        encNon: false,
        homme: false
    },
    Q21: {
        immOui: false,
        immNon: false
    }, 
    Q22:{
        traitOui: false,
        traitNon: false
    }
}


//stocking aswers
//stock
function answerStock1(){
    if(fievreNon.checked){
      answers.Q1.fievreNon=true;
    }else{
      answers.Q1.fievreOui=true;
    }
}

function answerStock2(){
  answers.Q2 = temp.value;
  console.log(`your temp is :${answers.Q2}`);
}

function answerStock3(){
  if(touxNon.checked){
    answers.Q3.touxNon=true;
  }else{
    answers.Q3.touxOui=true;
  }
}

function answerStock4(){
  if(coursNon.checked){
    answers.Q4.coursNon=true;
  }else{
    answers.Q4.coursOui=true;
  }
}

function answerStock5(){
  if(gorgeNon.checked){
    answers.Q5.gorgeNon=true;
  }else{
    answers.Q5.gorgeOui=true;
  }
}

function answerStock6(){
  if(diarNon.checked){
    answers.Q6.diarNon=true;
  }else{
    answers.Q6.diarOui=true;
  }
}

function answerStock7(){
  if(fatigueNon.checked){
    answers.Q7.fatigueNon=true;
  }else{
    answers.Q7.fatigueOui=true;
  }
}

function answerStock8(){
  if(boireNon.checked){
    answers.Q8.boireNon=true;
  }else{
    answers.Q8.boireOui=true;
  }
}

function answerStock9(){
  if(geneNon.checked){
    answers.Q9.geneNon=true;
  }else{
    answers.Q9.geneOui=true;
  }
}
function answerStock10(){
  if(bien.checked){
    answers.Q10.bien=true;
  }
  if(tresBien.checked){
    answers.Q10.tresBien=true;
  }
  if(mal.checked){
    answers.Q10.mal=true;
  }
  if(tresMal.checked){
    answers.Q10.tresMal=true;
  }
}

function answerStock11(){
  answers.Q11 = age.value;
  console.log(`your age is :${answers.Q11}`);
}

function answerStock12(){
  answers.Q12 = poids.value;
  console.log(`your poids is :${answers.Q12}`);
}

function answerStock13(){
  answers.Q13 = taille.value;
  console.log(`your taille is :${answers.Q13}`);
}

function answerStock14(){
  if(maladieNon.checked){
    answers.Q14.maladieNon=true;
  }else{
    answers.Q14.maladieOui=true;
  }
}

function answerStock15(){
  if(diabNon.checked){
    answers.Q15.diabNon=true;
  }else{
    answers.Q15.diabOui=true;
  }
}
function answerStock16(){
  if(cancerNon.checked){
    answers.Q16.cancerNon=true;
  }else{
    answers.Q16.cancerOui=true;
  }
}

function answerStock17(){
  if(respNon.checked){
    answers.Q17.respNon=true;
  }else{
    answers.Q17.respOui=true;
  }
}

function answerStock18(){
  if(dialyseNon.checked){
    answers.Q18.dialyseNon=true;
  }else{
    answers.Q18.dialyseOui=true;
  }
}

function answerStock19(){
  if(croniqueNon.checked){
    answers.Q19.croniqueNon=true;
  }else{
    answers.Q19.croniqueOui=true;
  }
}

function answerStock20(){
  if(encNon.checked){
    answers.Q20.encNon=true;
  }
  if(encOui.checked){
    answers.Q20.encOui=true;
  }
  if(homme.checked){
    answers.Q20.homme  = true;
  }
}

function answerStock21(){
  if(immNon.checked){
    answers.Q21.immNon=true;
  }else{
    answers.Q21.immOui=true;
  }
}

function answerStock22(){
  if(traitNon.checked){
    answers.Q22.traitNon=true;
  }else{
    answers.Q22.traitOui=true;
  }
}

