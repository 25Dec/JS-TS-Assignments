// Câu 10: Write an async function "getData" that simulates fetching data using setTimeout (use Promise). When awaited, it should return the string "Data loaded!" after 1 second.

async function getData() {
  const data = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data loaded!");
    }, 1000);
  });

  return await data;
}

(async () => {
  const data = await getData();
  console.log(data);
})();
