export default function getStudentIdsSum(arr) {
  const reducedArr = arr.reduce((total, student) => total + student.id, 0);
  return reducedArr;
}
