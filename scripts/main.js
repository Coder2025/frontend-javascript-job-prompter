// Check console in Chrome
console.log("Proces Start");

// // Opdracht 1a: Log het aantal medewerkers van de sales-afdeling in de console, in het volgende format:
// // "De afdeling Sales heeft [x] medewerkers"
console.log("De afdeling Sales heeft "+departments.sales.numberOfEmployees+" medewerkers");

// Opdracht 1b: Log de afdeling-beschrijving van de marketingafdeling in de console, in het volgende format:
// " Marketing is een leuke afdeling om te werken. [beschrijving]."
console.log("Marketing is een leuke afdeling om te werken. "+departments.marketing.description+".");

// Opdracht 1c: Log het aantal medewerkers van de customer-service-afdeling in de console, in het volgende format:
// "De afdeling Customer Service heeft [aantal] medewerkers" Let op: er is iets raars aan de hand met deze property!
console.log("De afdeling Customer Service heeft "+departments["customer-service"].numberOfEmployees+" medewerkers");

// Opdracht 1d: Log de beschrijving van de functie "Verkoopmanager" in de console, in het volgende format:
// "Sales is een uitdagende afdeling om te werken als Verkoopmanager. [beschrijving functie Verkoopmanager]"
console.log("Sales is een uitdagende afdeling om te werken als Verkoopmanager. "+departments.sales.jobs[1].description);

// prompt-methode
// const userInputA = prompt('Hoi! Hoe heet je?');
// console.log(userInputA);

// Opdracht 2a: Gebruik bovenstaand voorbeeld en pas het zo aan dat de browser jou de volgende vraag stelt:
// Over welke afdeling wil je meer informatie?
// Kies uit: [marketing / sales / customer-service].
// Het antwoord dat jij invoert, log je uiteraard in de console.
// Tip: geef jouw input-prompt altijd in kleine letters ("marketing" in plaats van "Marketing" of "MARKETING"),
// dit voorkomt problemen in het script.
let userInput = prompt('Over welke afdeling wil je meer informatie?\n' +
    'Kies uit: [marketing / sales / customer-service].');
console.log(userInput);

// Opdracht 2b:
// Je koos [ingevoerde]. [beschrijving afdeling]"
// User filled out info which department
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
        // No break because default had to be handled also (Is this a common or acceptable method?)
    default:
        // User did not fill out right info
        console.log("Sorry! Je hebt geen bruikbare info ingevoerd.");
        chosenInfo="Geen info!";

        document.getElementById('error-message').textContent = 'Sorry! Je hebt geen bruikbare info ingevoerd.\n' +
            ' Probeer het opnieuw door de pagina te verversen.';
}
console.log("Je koos "+userInput+".\n"+ chosenInfo);

// Creating the following question in regard with further job-info
let departmJobs = departments[userInput].jobs;
let sepJobLine =''
let joblist =''
let jobAmount

for (let i in departmJobs) {
    sepJobLine = i+': '+departments[userInput].jobs[i].title+'\n';
    joblist = joblist+sepJobLine;
    jobAmount = i;
}

// Ask which job the user would like to have more information about
let userInput2 = prompt('Je koos '+userInput+'marketing. Over welke functie wil je meer weten?\n'  +
    'Voer een getal tussen 0 en '+jobAmount+' in.\n'+joblist+'');

// Displaing job and department info in regard with the chosen job in the browser
let chosNumber =Number(userInput2);
if (chosNumber >-1 && chosNumber <= jobAmount) {
    console.log('Je koos '+departments[userInput].jobs[userInput2].title +'. Een uitdagende rol!');
    console.log(departments[userInput].jobs[userInput2].description);

    document.getElementById('role-title').textContent = departments[userInput].jobs[userInput2].title;
    document.getElementById('department-description').textContent = departments[userInput].description;
    document.getElementById('role-description').textContent = departments[userInput].jobs[userInput2].description;
}else{
    console.log('U heeft geen getal ingevoerd tussen 0 en '+jobAmount+'');

    document.getElementById('error-message').textContent = 'Ongeldige keuze. Probeer het opnieuw door de pagina te verversen.';
}
