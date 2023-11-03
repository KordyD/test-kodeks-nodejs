function hasSum(arr, targetSum) {
  // Создаем объект, который хранит пары: число из массива - число, которое дополняет его до targetSum
  const obj = arr.reduce((prev, curr) => {
    prev[curr] = targetSum - curr;
    return prev;
  }, {});
  /* Проходимся циклом по ключам объекта. Если объект имеет ключ, равный значению по текущему ключу,
  и если текущий ключ и значение по нему не совпадают, возвращаем ответ */
  for (let key in obj) {
    if (obj.hasOwnProperty(obj[key]) && obj[key] != key) {
      return [Number(key), obj[key]];
    }
  }
  // Иначе возвращаем пустой массив
  return [];
}
