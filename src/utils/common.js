import { getCategories } from "../fake-api";

export async function getTagsByName (name) {
  const res = await getCategories();
  const categories = res.data.categories;
  const tagList = categories.filter(item => item.category_name === name)[0].children;
  
  return tagList;
}
