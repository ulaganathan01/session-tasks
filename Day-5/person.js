class Person {
  constructor(fName, lName, age, dob, email, phone) {
    this.firstName = fName;
    this.lastName = lName;
    this.age = age;
    this.dob = dob;
    this.email = email;
    this.phone = phone;
  }

  getFullName(){
    return this.firstName + " " + this.lastName;
  }
}

const person1 = new Person("Ulaganathan", "Selvaraj", "24", "01/03/2000", "ulaganathans@gmail.com", "+91-8764739020");
console.log(person1.getFullName());