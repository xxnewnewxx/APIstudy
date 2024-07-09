const API_KEY = `29a96ef9b757480189bbd02b34691b57`;

let news = [];
const getLatesNews = async () => {
  const url = new URL(
    `https://rad-sawine-85f04e.netlify.app/top-headlines?q=${keyword}&country=kr&pagesize=${PAGE_SIZE}`
  );
  //   console.log("uuu", url);
  const response = await fetch(url);
  const data = await response.json();
  news = data.articles;
  console.log("ddddddd", news);
};

getLatesNews();
