export default function getListStudentIds(arr) {
  //arr = getListStudents();
  if (!Array.isArray(arr)) {
    return [];
  }
  const newArr = arr.map((student) => student.id);

  return newArr;
}
