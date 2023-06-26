console.log("Proces Start");

// // Opdracht 1a: Log het aantal medewerkers van de sales-afdeling in de console, in het volgende format:
// // "De afdeling Sales heeft [x] medewerkers"
// console.log("De afdeling Sales heeft "+departments.sales.numberOfEmployees+" medewerkers");
//
// // Opdracht 1b: Log de afdeling-beschrijving van de marketingafdeling in de console, in het volgende format:
// // " Marketing is een leuke afdeling om te werken. [beschrijving]."
// console.log("Marketing is een leuke afdeling om te werken. "+departments.marketing.description+".");
//
// // Opdracht 1c: Log het aantal medewerkers van de customer-service-afdeling in de console, in het volgende format:
// // "De afdeling Customer Service heeft [aantal] medewerkers" Let op: er is iets raars aan de hand met deze property!
// console.log("De afdeling Customer Service heeft "+departments["customer-service"].numberOfEmployees+" medewerkers");
//
// // Opdracht 1d: Log de beschrijving van de functie "Verkoopmanager" in de console, in het volgende format:
// // "Sales is een uitdagende afdeling om te werken als Verkoopmanager. [beschrijving functie Verkoopmanager]"
// console.log("Sales is een uitdagende afdeling om te werken als Verkoopmanager. "+departments.sales.jobs[1].description);

// prompt-methode
//const userInput = prompt('Hoi! Hoe heet je?');
//console.log(userInput);

// Opdracht 2a: Gebruik bovenstaand voorbeeld en pas het zo aan dat de browser jou de volgende vraag stelt:
// Over welke afdeling wil je meer informatie?
// Kies uit: [marketing / sales / customer-service].
// Het antwoord dat jij invoert, log je uiteraard in de console.
// Tip: geef jouw input-prompt altijd in kleine letters ("marketing" in plaats van "Marketing" of "MARKETING"),
// dit voorkomt problemen in het script.
// TODO: Kijken of dit nog wat mooier gemaakt kan worden?
let userInput = prompt('Over welke afdeling wil je meer informatie?\n' +
    'Kies uit: [marketing / sales / customer-service].');
console.log(userInput);

// Opdracht 2b:
// Je koos [ingevoerde]. [beschrijving afdeling]"
// TODO: Kijken of dit nog wat mooier gemaakt kan worden?
let chosenInfo;
switch (userInput) {
    case "marketing":
        chosenInfo=departments.marketing.description
        break;
    case "sales":
        chosenInfo=departments.sales.description
        break;
    case "customer-service":
        chosenInfo=departments["customer-service"].description
        break;
    case "":
        userInput="niets";
    default:
        console.log("Sorry! Je hebt geen bruikbare info ingevoerd.");
        chosenInfo="Geen info!";
}
console.log("Je koos "+userInput+".\n"+ chosenInfo);

console.log('------------>>>>>')
console.log(departments[userInput].jobs)// Test following expression
let departmJobs = departments[userInput].jobs;
let sepJobLine =''
let joblist =''

for (let i in departmJobs) {
    sepJobLine = i+': '+departments[userInput].jobs[i].title+'\n';
    joblist = joblist+sepJobLine;
}
//
// let userInput2 = prompt('Je koos '+userInput+'marketing. Over welke functie wil je meer weten?\n'  +
//     'Voer een getal tussen 0 en 3 in.\n'+joblist)
//
console.log(joblist)


 // console.log(departments.marketing.jobs[0].title);