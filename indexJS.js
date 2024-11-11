

class User {
    constructor (firstName, lastName, age, location) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }

    isMajorOrMinor(userToCompare) {
        return this.age > userToCompare.age ? `L' età di ${this.firstName} è maggiore di ${userToCompare.firstName}` : ` L'età di ${this.firstName} è minore  `;

    }
}

const user1 = new User("lina","barcino","23","brescia");
const user2 = new User("dario","mugherino","43","cagliari");
const user3 = new User("davide","bretona","15","firenze");
const user4 = new User("martina","lizzi","55","gavi");
const user5 = new User("luisa","campolungo","28","novi ligure");

console.log(user1.isMajorOrMinor(user3));



class Pet {
    constructor (petName, ownerName, species = [], breed = []) {
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
    }
    isSameOwner(petOwnerToCompare) {
        return this.ownerName === petOwnerToCompare.ownerName
        //  ? `Il padrone di ${this.petName} è lo stesso di ${petOwnerToCompare.petName}` : ` Il padrone di ${this.petName} è diverso da quello di ${petOwnerToCompare.petName}  `;
    }
}


// const pet1 = new Pet("figaro", "lucio", "cane", "labrador");
// const pet2 = new Pet("ruffy", "marco", "coniglio","nano");
// const pet3 = new Pet("ruffy", "massimo", "gatto","bengala");
// const pet4 = new Pet("chuck", "lorena", "cavallo","lusitano");
// const pet5 = new Pet("snicky", "marco", "criceto","nano");
// const pet6 = new Pet("bombo", "cecilia", "rapace","falco pellegrino");



// const pets = [];

// function updatePetList() {
// const petList = document.getElementById("petList");
// petList.innerHTML = "";
// pets.forEach((pet) => {
// const listItem = document.createElement("li");
// listItem.textContent = `Name: ${pet.petName}, Owner: ${pet.ownerName}, Species: ${pet.species}, Breed: ${pet.breed}`;
// petList.appendChild(listItem);
//     });
// }

// document.getElementById("petForm").addEventListener("submit", function (event) {
// event.preventDefault();

// const petName = document.getElementById("petName").value;
// const ownerName = document.getElementById("ownerName").value;
// const species = document.getElementById("species").value;
// const breed = document.getElementById("breed").value;

// const newPet = new Pet(petName, ownerName, species, breed);

// pets.push(newPet);

// updatePetList();

// document.getElementById("petForm").reset();
// });
