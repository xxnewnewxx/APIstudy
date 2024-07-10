const API_KEY = `29a96ef9b757480189bbd02b34691b57`;

let newsList = [];
const getLatesNews = async () => {
  const url = new URL(
    `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${API_KEY}`
  );
  //   console.log("uuu", url);
  const response = await fetch(url);
  const data = await response.json();
  newsList = data.articles;
  render();
  console.log("ddddddd", newsList);
};

const render = () => {
  const newsHTML = newsList
    .map(
      (news) => `<div class="row news">
          <div class="col-lg-4">
            <img
              class="news-img-size"
              src=${news.urlToImage} />
          </div>
          <div class="col-lg-8">
            <h2>${news.tltie}</h2>
            <p>
           ${news.description}
            </p>
            <div>   ${news.source.name}   * ${news.publishedAt}</div>
          </div>
        </div>`
    )
    .join("");
  document.getElementById("news-board").innerHTML = newsHTML;
};
getLatesNews();
