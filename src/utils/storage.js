const id_arr = [];

export function saveViewedArticleId(id) {
  id_arr.push(id);
  window.localStorage.setItem("viewed_article_id", JSON.stringify(id_arr));
}

export function getViewedArticleId() {
  return JSON.parse(localStorage.getItem("viewed_article_id")) || [];
}
