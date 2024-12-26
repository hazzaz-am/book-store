function getImageUrls(name) {
  return new URL(`../assets/books/${name}`, import.meta.url);
}

export { getImageUrls };