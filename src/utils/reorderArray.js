export default function reorderArray(array, search) {
  for (let index = 0; index < array.length; index++) {
    if (array[index].name.includes(search)) {
      const metahumanObj = array.splice(index, 1)[0];
      array.unshift(metahumanObj);
      index--; 
    }
  }
  return array;
}
