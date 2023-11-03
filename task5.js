// Callback получит массив, отсортированный по длине задержек.

// Реализация на promise
function func(arr) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(arr) || arr.some((it) => parseInt(it) != it || it < 0)) {
      reject(
        'Неверный формат входящих данных, должен быть массив положительных чисел'
      );
      return;
    }

    let res = [];
    const f = (val) => {
      res.push(val);
      if (res.length == arr.length) {
        resolve(res);
        return;
      }
    };

    for (let i = 0; i < arr.length; i++) {
      setTimeout(f, arr[i], arr[i]);
    }
  });
}

func([5000, 2, 3, 7000, 5, 1])
  .then((value) => console.log(value))
  .catch((error) => console.log(error));

// Async await
async function test() {
  try {
    const value = await func([-5000, 2, 3, 7000, 5, 1]);
    console.log(value);
  } catch (error) {
    console.log(error);
  }
}

test();
