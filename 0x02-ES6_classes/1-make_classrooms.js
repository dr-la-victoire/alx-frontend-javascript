import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const sizeOne = new ClassRoom(19);
  const sizeTwo = new ClassRoom(20);
  const sizeThree = new ClassRoom(34);

  const sizeArr = [sizeOne, sizeTwo, sizeThree];

  return sizeArr;
}
