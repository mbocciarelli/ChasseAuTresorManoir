// Dictionnaire contenant les équipes et leurs indices
// var hints = {
//     "1": [
//         { code: "1", nextCode: "2", hint: "Votre prochain nombre est 42. \nIndice supplémentaire : Un objet précieux souvent associé à la sagesse." },
//         { code: "2", nextCode: "3", hint: "Votre prochain nombre est 17. \nIndice supplémentaire : Il est souvent utilisé pour représenter l'âge de la majorité." },
//         { code: "3", nextCode: "4", hint: "Votre prochain nombre est 99. \nIndice supplémentaire : Il est souvent utilisé pour représenter un prix maximal." },
//         { code: "4", nextCode: "none", hint: "Votre prochain nombre est 77. \nIndice supplémentaire : Il a six faces et peut être jeté pour obtenir des nombres aléatoires." }
//     ],
//     "2": [
//         { code: "1", nextCode: "2", hint: "Votre prochain nombre est 99. \nIndice supplémentaire : Il est souvent utilisé pour représenter un prix maximal." },
//         { code: "2", nextCode: "3", hint: "Votre prochain nombre est 77. \nIndice supplémentaire : Il a six faces et peut être jeté pour obtenir des nombres aléatoires." },
//         { code: "3", nextCode: "4", hint: "Votre prochain nombre est 42. \nIndice supplémentaire : Un objet précieux souvent associé à la sagesse." },
//         { code: "4", nextCode: "none", hint: "Votre prochain nombre est 17. \nIndice supplémentaire : Il est souvent utilisé pour représenter l'âge de la majorité." }
//     ],
//     "3": [
//         { code: "1", nextCode: "2", hint: "Votre prochain nombre est 17. \nIndice supplémentaire : Il est souvent utilisé pour représenter l'âge de la majorité." },
//         { code: "2", nextCode: "3", hint: "Votre prochain nombre est 77. \nIndice supplémentaire : Il a six faces et peut être jeté pour obtenir des nombres aléatoires." },
//         { code: "3", nextCode: "4", hint: "Votre prochain nombre est 99. \nIndice supplémentaire : Il est souvent utilisé pour représenter un prix maximal." },
//         { code: "4", nextCode: "none", hint: "Votre prochain nombre est 42. \nIndice supplémentaire : Un objet précieux souvent associé à la sagesse." }
//     ],
//     "4": [
//         { code: "1", nextCode: "2", hint: "Votre prochain nombre est 99. \nIndice supplémentaire : Il est souvent utilisé pour représenter un prix maximal." },
//         { code: "2", nextCode: "3", hint: "Votre prochain nombre est 17. \nIndice supplémentaire : Il est souvent utilisé pour représenter l'âge de la majorité." },
//         { code: "3", nextCode: "4", hint: "Votre prochain nombre est 42. \nIndice supplémentaire : Un objet précieux souvent associé à la sagesse." },
//         { code: "4", nextCode: "none", hint: "Votre prochain nombre est 77. \nIndice supplémentaire : Il a six faces et peut être jeté pour obtenir des nombres aléatoires." }
//     ]
// };

var teams = {
    "1" : [
        { previous : "null", code : "482751", next : "139468" },
        { previous : "", code : "", next : "" },
        { previous : "", code : "", next : "" },
        { previous : "", code : "", next : "null" }
    ],
    "2" : [
        { previous : "null", code : "482751", next : "139468" },
        { previous : "", code : "", next : "" },
        { previous : "", code : "", next : "" },
        { previous : "", code : "", next : "null" }
    ],
    "3" : [
        { previous : "null", code : "482751", next : "139468" },
        { previous : "", code : "", next : "" },
        { previous : "", code : "", next : "" },
        { previous : "", code : "", next : "null" }
    ],
    "4" : [
        { previous : "null", code : "482751", next : "139468" },
        { previous : "", code : "", next : "" },
        { previous : "", code : "", next : "" },
        { previous : "", code : "", next : "null" }
    ]
}

var hints = {
    "482751" : "Je suis unique mais à la fois plusieurs. Malgré le temps qui passe, je reviens toujours à mes racines. J'aurais 20 ans cette année.",
    "139468" : "L'obscurité de la nuit grandissant, mes manettes me permettent d'obtenir une part de lumière.",
    "657293" : "Ma chute fut causée par un typhon causant 2 morts mais je me suis transformée pour soutenir de nouvelle fondation.",
    "821745" : "De passage à St-Eulalie-en-borne pour refaire la piéta de l'Eglise et pour remercier de l'hébergement au manoir, j'ai fait fleurir mon art sur mon œuvre.",
    "396528" : "Fait de pierre et de briques, j'accueillais le bois pour mon confort thermique et digestif.",
    "572936" : "Symbole de noblesse alors que mes créateurs ne l'étaient pas.",
    "413682" : "Co-fondateur de la plus grande organisation d'aide au monde et ancien résident du manoir, ma seule trace n'est présent que sur un bout de papier.",
    "268495" : "Je trône fièrement au-dessus du plus fréquent point de passage du manoir. Normal, je fus le 1er propriétaire.",
    "735821" : "Nous célébrons ce week-end l'anniversaire d'une personne formidable, il faut bien que sa génitrice le soit tout autant.",
    "549317" : "Je suis dessiné en compagnie de mes 2 acolytes. Merci pour ce tableau, Frederick Blaimont.",
    "678142" : "Je suis caché en petit au milieu de la photo avec toute mon école. Bonne chance pour me trouver.",
    "854239" : "Ma balade au plus proche des Humains m'a coûté la vie.",
    "297514" : "Personnage important ayant vécu au manoir, ma photo rend hommage à mes 67 ans de vie.",
    "436759" : "On m'a décerné le seul ordre impérial encore remis de nos jours : Les Palmes Académiques."
}

var nextCode = 0;

function getHint(code) {
    for (const val in hints) {
        if (val === code) {
            return hints[val];
        }
    }
    return "0"; // Code incorrect
}

function getNextCode(code)
{
    var teamNumber = document.getElementById('teamNumberHidden').innerText;

    // Vérifie si le code correspond à un indice dans le dictionnaire
    for (var i = 0; i < teams[teamNumber].length; i++) {
        if (teams[teamNumber][i].code === code) {
            return teams[teamNumber][i].next;
        }
    }
    return "0"; // Code incorrect
}


document.getElementById('teamForm').addEventListener('submit', function (e) {
    e.preventDefault();

    var teamNumber = document.getElementById('teamNumber').value;

    document.getElementById('teamNumberHidden').innerText = teamNumber;

    if (teams.hasOwnProperty(teamNumber)) {
        // Afficher les informations sur l'équipe sélectionnée
        document.getElementById('teamInfoText').innerText = "Vous êtes dans l'équipe " + teamNumber;
        document.getElementById('teamSelection').style.display = 'none'; // Cacher le formulaire de sélection d'équipe
        document.getElementById('teamInfo').style.display = 'block'; // Afficher les informations sur l'équipe
        document.getElementById('treasureForm').style.display = 'block'; // Afficher le formulaire pour choisir un indice
        document.getElementById('hint').style.display = 'block';
    } else {
        // Afficher un message d'erreur si l'équipe n'existe pas
        document.getElementById('teamError').innerText = "L'équipe " + teamNumber + " n'existe pas. Veuillez réessayer avec un autre numéro d'équipe.";
    }
});

document.getElementById('changeTeamButton').addEventListener('click', function (e) {
    // Afficher à nouveau le formulaire de sélection d'équipe
    document.getElementById('teamSelection').style.display = 'block';
    document.getElementById('teamInfo').style.display = 'none'; // Cacher les informations sur l'équipe
    document.getElementById('treasureForm').style.display = 'none'; // Cacher le formulaire pour choisir un indice
    document.getElementById('teamError').innerText = ""; // Effacer le message d'erreur
    document.getElementById('hint').style.display = 'none';
    
    document.getElementById('TimelineIndice1').style.display = 'none';
    document.getElementById('TimelineIndice2').style.display = 'none';
    document.getElementById('TimelineIndice3').style.display = 'none';
    document.getElementById('TimelineIndice4').style.display = 'none';
    document.getElementById('Timeline').style.display = 'none';

    nextCode = 0;
});

document.getElementById('indiceForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var code = document.getElementById('code').value;

    var timelineDisplay = document.getElementById('Timeline').style.display;

    // Récupère l'indice
    var hint = getHint(code);

    // Affiche l'indice ou un message d'erreur
    if (hint !== "0") {
        
        if(nextCode != 0 && nextCode != code)
        {
            document.getElementById('hint').innerText = "Le code saisi n'est pas le code attendu pour le prochain indice.";
            return;   
        }

        document.getElementById('hint').innerText = hint;
        nextCode = getNextCode(code);

        if(timelineDisplay == 'none')
        {
            document.getElementById('Timeline').style.display = 'block';
        }

        var numberTimeline1 = document.getElementById('TimelineIndice1').style.display;
        var numberTimeline2 = document.getElementById('TimelineIndice2').style.display;
        var numberTimeline3 = document.getElementById('TimelineIndice3').style.display;
        var numberTimeline4 = document.getElementById('TimelineIndice4').style.display;

        if(numberTimeline1 == 'none')
        {
            document.getElementById('TimelineIndice1').style.display = 'block';
            document.getElementById('TexteIndice1').innerText = hint;
        }
        else if(numberTimeline2 == 'none')
        {
            document.getElementById('TimelineIndice2').style.display = 'block';
            document.getElementById('TexteIndice2').innerText = hint;
        }
        else if(numberTimeline3 == 'none')
        {
            document.getElementById('TimelineIndice3').style.display = 'block';
            document.getElementById('TexteIndice3').innerText = hint;
        }
        else if(numberTimeline4 == 'none')
        {
            document.getElementById('TimelineIndice4').style.display = 'block';
            document.getElementById('TexteIndice4').innerText = hint;
        }

        
        
    } else {
        document.getElementById('hint').innerText = "Code incorrect. Veuillez réessayer.";
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.gallery img');
    const overlay = document.getElementById('overlay');
    const overlayImage = document.getElementById('overlay-image');
    const overlayText = document.getElementById('overlay-text');

    images.forEach(image => {
        image.addEventListener('click', () => {
            overlayImage.src = image.src;
            overlayText.textContent = image.getAttribute('data-name');
            overlay.classList.add('show');
        });
    });

    overlay.addEventListener('click', () => {
        overlay.classList.remove('show');
    });
});
