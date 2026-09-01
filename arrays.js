document.addEventListener("DOMContentLoaded", function () {
    let catsArray = ["Ollie", "Sophie", "Salem", "Tiger", "Binx", "Pumpkin", "Penny", "Lenny"];
    let dogsArray = ["Barney", "Molly", "Baxter", "Polly", "Buddy", "Suki", "Watson"];
    let fruitsArray = ["Banana", "Orange", "Pineapple", "Mango", "Plum", "Apricot"]
    let numbersArray = [12, 4, 45, 17, 2, 26, 7, 55, 48, 32, 21]

    // --- Løs opgaverne herunder --- 

    // Opgave 1
    let newNumbers = numbersArray.filter((num) => num > 20);
    console.log(newNumbers);

    // Opgave 2
    catsArray.push("Sniffles");
    console.log("Opgave 2 " + catsArray);

    // Opgave 3
    console.log("Opgave 3a " + dogsArray.includes("Trixie"));
    console.log("Opgave 3b " + dogsArray.includes("Baxter"));

    // Opgave 4
    if (catsArray.includes("Bagheera")) {
        console.log("Opgave 4a" + " Bagheera");
    } else {
        console.log(undefined);
    }

    if (catsArray.includes("Salem")) {
        console.log("Opgave 4b" + " Salem");
    } else {
        console.log(undefined);
    }

    // Opgave 5
    let newNumberArray = numbersArray.map((x) => x*3);
    console.log(newNumberArray);

    // Opgave 6
    let dogString = "";
    dogsArray.forEach((dog)=>{
        dogString+=dog;
    });
    console.log(dogString);

    // Opgave 7
    console.log("Opgave 7a "+ fruitsArray.indexOf("Mango"));
    console.log("Opgave 7b "+ fruitsArray.indexOf("Blåbær"));

    // Opgave 8
    dogsArray.splice(dogsArray.indexOf("Polly"),1);
    console.log(dogsArray);

}) // ends DOMContentLoaded