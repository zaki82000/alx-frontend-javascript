export default function getStudentsByLocation(arr) {
  return arr.filter((student) => student.location === 'San Francisco');
}
