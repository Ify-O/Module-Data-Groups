// what is an object?

let myName = "Nico"; // variable
const myAge = 18;

const bankAccounts = [
  {
    nameOfBank: "bank Name",
    iban: 12345,
    bic: 678,
  },
  {
    nameOfBank: "my second one",
    iban: 934895,
    bic: "i dont know",
  },
];

let person = {
  firstName: "Nico",
  middleName: null,
  lastName: "Stuhlfauth",
  secondLastName: null,
  age: 18,
  bankAccounts,
};

// function to print a person
function getPerson() {
  console.log("The customers details:", person.firstName, person.middleName, person.lastName, person.age)
  return getPerson
}
  console.log(getPerson());

// function to update a person
