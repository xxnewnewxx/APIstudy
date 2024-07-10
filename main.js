const API_KEY = `https://noona-times-v2.netlify.app/top-headlines`;
const pageSize = 10;
let page = 2;
let category = "";
let keyword = "";
let news = [];
const getLatesNews = async () => {
  const url = new URL(
    `https://668dd865cc0e7e24a08db0f2--rad-sawine-85f04e.netlify.app/top-headlines?country=us&pageSize=${pageSize}&page=${page}&category=${category}&keyword=${keyword}&apiKey=${API_KEY}`
  );
  //   console.log("uuu", url);
  const response = await fetch(url);
  const data = await response.json();
  news = data.articles;
  console.log("santa", news);
};

getLatesNews();
