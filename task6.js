const { readdir, readFile } = require('node:fs/promises');

const PATH = './html';
const STR = 'Hello, world!';

async function parseHtml(path, str) {
  try {
    // Регулярное выражение
    const regex = new RegExp(`<p>${str}</p>`, 'g');
    // Считываем директорию
    const files = await readdir(path);
    for (const file of files) {
      // Считываем файл
      const result = await readFile(`${path}/${file}`, 'utf-8');
      // Ищем количество всех подстрок
      const found = (result.match(regex) || []).length;
      console.log(`File ${file}:\n\tAmount of <p> with \"${str}\": ${found}`);
    }
  } catch (error) {
    console.log(error);
  }
}

parseHtml(PATH, STR);
