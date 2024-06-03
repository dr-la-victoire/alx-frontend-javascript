export default function updateStudentGradeByCity(students, city, newGrades) {
  // filtering the students by city and storing it in one array
  const firstArr = students.filter((student) => student.location === city);
  // storing the results of the map in another array
  const secondArr = firstArr.map((student) => {
    // finding out if the student.id & newGrade.id match
    const gradeObject = newGrades.find(
      (grade) => grade.studentId === student.id
    );
    let updatedGrade;

    if (gradeObject) {
      updatedGrade = gradeObject.grade;
    } else {
      updatedGrade = "N/A";
    }

    return {
      ...student,
      grade: updatedGrade,
    };
  });
  return secondArr;
}
