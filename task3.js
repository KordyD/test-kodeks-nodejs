function isSquare(number) {
  // Если число 1 или 0, оно является квадратом
  if (number == 1 || number == 0) {
    return true;
  }
  // Если число отрицательное, оно не является квадратом
  if (number < 0) {
    return false;
  }
  // Реализация бинарного поиска
  let current;
  const interval = [0, number];
  while (true) {
    // Находим середину интервала и отбрасываем дробную часть
    current = ~~((interval[1] + interval[0]) / 2);
    // Если current совпал с левой границей, значит ответ не нашелся
    if (current == interval[0]) {
      return false;
    }
    if (current ** 2 == number) {
      return true;
    }
    // Изменяем границы интервала
    if (current ** 2 > number) {
      interval[1] = current;
      continue;
    }
    if (current ** 2 < number) {
      interval[0] = current;
      continue;
    }
  }
}
