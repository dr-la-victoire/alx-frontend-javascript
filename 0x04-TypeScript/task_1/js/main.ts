// The Teacher Interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
  }


// The Director Interface extends the Teacher Interface
interface Directors extends Teacher {
  numberOfReports: number;
  }


 // The Function Interface: Prints a teacher's name
 interface printTeacherFunction {
   (firstName: string, lastName: string): string;
 }

 // Creating a Teacher
  const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

// Function that prints a teacher's initial and lastname
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  const first = firstName.charAt(0);

  return `${first}. ${lastName}`;
}
