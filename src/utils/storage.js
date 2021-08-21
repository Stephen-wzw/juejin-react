export function saveArticleNumber(nums) {
  localStorage.setItem("article_number", nums);
}

export function getArticleNumber() {
  return localStorage.getItem("article_number");
}

export function saveScrollTop(scrollTop) {
  localStorage.setItem("scrollTop", scrollTop);
}

export function getScrollTop() {
  return localStorage.getItem("scrollTop");
}
