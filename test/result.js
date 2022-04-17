// Result Card
const resultCard = document.getElementById("resultMessage");
//object of result messages
let resultMessages = {
    msg1: 'nous vous conseillons de rester à votre domicile et de contacter votre medecin en cas d apparition de nouveaux symptoms . Vous pourrez utiliser à nouveau l application pour réévaluer vos symptomes.',
    msg2: 'teleconsultation ou medecin generaliste ou visite a domicile',
    msg3: 'appel 141',
    msg4: 'Votre situation ne releve probablement pas du Covid-19. Consultez votre medecin au moindre doute',
    msg5: 'Votre situation ne releve probablement pas du Covid-19. Un avis medical est recommande. Au moindre dout, appelez le 141',
    msg6: "votre situation ne releve probablement pas du Covid-19 nhesitez pas a contacter votre medecin en cas de doute. Vous pouvez refaire le test en cas de nouveau symptome pour reevaluer la situation Pour toute information concernant le Covid-19 allez vers la page d'accueil."
}

// facteurs mentioned in the algorithm
let facteurs = {
    facGraMin: 0,
    facGraMaj: 0,
    facProno: 0,
    sym: 0
}

let msg141 = false;

function evaluate(){
    //facteures de gravite mineur
    if (answers.Q2 >= 39){
        facteurs.facGraMin++;
    }
    if (answers.Q7.fatigueOui){
        facteurs.facGraMin++;
    }
    if(answers.Q10.mal || answers.Q10.tresMal){
        facteurs.facGraMin++;
    }
    //facteur de gravitee majour
    if(answers.Q9.geneOui){
        facteurs.facGraMaj++;
    }
    if (answers.Q8.boireOui){
        facteurs.facGraMaj++;
    }
    if (answers.Q2 <= 35.4){
        facteurs.facGraMaj++;
    }
    // facteur pronostique
    if (answers.Q13 >= 70){
        facteurs.facProno++;
    }
    if (answers.Q14.maladieOui){
        facteurs.facProno++;
    }
    if (answers.Q15.diabOui){
        facteurs.facProno++;
    }
    if (answers.Q16.cancerOui){
        facteurs.facProno++;
    }
    if (answers.Q17.respOui){
        facteurs.facProno++;
    }
    if (answers.Q18.dialyseOui){
        facteurs.facProno++;
    }
    if (answers.Q19.croniqueOui){
        facteurs.facProno++;
    }
    if (answers.Q21.immOui){
        facteurs.facProno++;
    }
    if (answers.Q22.traitOui){
        facteurs.facProno++;
    }
    // sympthoms
    if (answers.Q1.fievreOui){
        facteurs.sym ++;
    }
    if (answers.Q3.touxOui){
        facteurs.sym ++;
    }
    if (answers.Q4.coursOui){
        facteurs.sym ++;
    }
    if (answers.Q5.gorgeOui){
        facteurs.sym ++;
    }
    if (answers.Q6.diarOui){
        facteurs.sym ++;
    }
    if (answers.Q7.fatigueOui){
        facteurs.sym ++;
    }

    // algorithms decisionnel
    // calculating result with case 1
    if (answers.Q1.fievreOui || (answers.Q3.touxOui && answers.Q5.gorgeOui) || (answers.Q3.touxOui && answers.Q4.coursOui) || (answers.Q1.fievreOui && answers.Q6.diarOui)){
        // sans facteur pronostique
        if (facteurs.facProno == 0 && facteurs.facGraMaj == 0 && facteurs.facGraMin == 0 && answers.Q11 < 50){
            console.log(resultMessages.msg1);
            finalResult = resultMessages.msg1 ; 
        }
        if (facteurs.facProno == 0 && facteurs.facGraMaj == 0 && (answers.Q11 < 70 && answers.Q11 > 50) ){
            console.log(resultMessages.msg2);
            finalResult = resultMessages.msg2 ; 
        }
        if (facteurs.facProno == 0 && facteurs.facGraMaj == 0 && facteurs.facGraMin == 1){
            console.log(resultMessages.msg2);
            finalResult = resultMessages.msg2 ; 
        }
        // avec facteur pronostique ou plus
        if (facteurs.facProno > 0 && facteurs.facGraMaj == 0 && facteurs.facGraMin == 0){
            console.log(resultMessages.msg2);
            finalResult = resultMessages.msg2 ; 
        }
        if (facteurs.facProno > 0 && facteurs.facGraMaj == 0 && facteurs.facGraMin == 1){
            console.log(resultMessages.msg2);
            finalResult = resultMessages.msg2 ; 
        }
        if (facteurs.facProno > 0 && facteurs.facGraMaj == 0 && facteurs.facGraMin > 1){
            console.log(resultMessages.msg3);
            finalResult = resultMessages.msg3 ; 
            msg141 = true;
        }
        //avec facteur gravite majeur
        if (facteurs.facGraMaj > 0){
            console.log(resultMessages.msg3);
            finalResult = resultMessages.msg3 ; 
            msg141 = true;
        }
    }
    // calculating result with case 2
    if (answers.Q1.fievreOui && answers.Q3.touxOui){
        if (facteurs.facProno == 0 && facteurs.facGraMaj == 0 && facteurs.facGraMin <= 1){
            console.log(resultMessages.msg2);
            finalResult = resultMessages.msg2 ; 
        }
        if (facteurs.facProno >= 1 && facteurs.facGraMaj == 0 && facteurs.facGraMin == 0){
            console.log(resultMessages.msg2);
            finalResult = resultMessages.msg2 ; 
        }
        if (facteurs.facProno >= 1 && facteurs.facGraMaj == 0 && facteurs.facGraMin == 1){
            console.log(resultMessages.msg2);
            finalResult = resultMessages.msg2 ; 
        }
        if (facteurs.facProno >= 1 && facteurs.facGraMaj == 0 && facteurs.facGraMin > 1){
            console.log(resultMessages.msg3);
            finalResult = resultMessages.msg3 ;
            msg141 = true;
        }
        if (facteurs.facGraMaj > 0){
            console.log(resultMessages.msg3);
            finalResult = resultMessages.msg3 ; 
            msg141 = true;
        }
    }
    // calculating result with case 3
    if (answers.Q1.fievreOui || answers.Q3.touxOui || answers.Q5.gorgeOui || answers.Q4.coursOui){
        if (facteurs.facGraMaj == 0 && facteurs.facGraMin == 0){
            console.log(resultMessages.msg4)
            finalResult = resultMessages.msg4 ; 
        }
        if (facteurs.facGraMaj == 1 || facteurs.facGraMin == 1 || facteurs.facProno == 1){
            console.log(resultMessages.msg5)
            finalResult = resultMessages.msg5 ; 
        }
    }
    // calculating with case 4
    if (facteurs.sym == 0){
        console.log(resultMessages.msg6)
        finalResult = resultMessages.msg6 ; 
    }
}

function showResult(){
    if (msg141){
        resultCard.innerHTML = resultMessages.msg3;
        resultCard.classList.remove('result-message');
        resultCard.classList.add("bad-result-message");
    } else {
        resultCard.innerHTML = finalResult;
    }
}