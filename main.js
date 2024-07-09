const API_KEY = `29a96ef9b757480189bbd02b34691b57`;

let news = [];
const getLatesNews = async () => {
  const url = new URL(
    `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${API_KEY}`
  );
  //   console.log("uuu", url);
  const response = await fetch(url);
  const data = await response.json();
  news = data.articles;
  console.log("ddddddd", news);
};

getLatesNews();
