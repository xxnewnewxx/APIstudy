const API_KEY = `http://times-node-env.eba-appvq3ef.ap-northeast-2.elasticbeanstalk.com/top-headlines`;
const pageSize = 10;
let page = 2;
let category = "";
let keyword = "";
let news = [];
const getLatesNews = async () => {
  const url = new URL(
    `https://rad-sawine-85f04e.netlify.app/top-headlines?country=us&pageSize=${pageSize}&page=${page}&category=${category}&keyword=${keyword}`
  );
  //   console.log("uuu", url);
  const response = await fetch(url);
  const data = await response.json();
  news = data.articles;
  console.log("santa", news);
};

getLatesNews();
