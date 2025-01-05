async function fetchMangaFromMAL(query) {
  const response = await fetch(`https://api.myanimelist.net/v2/manga?q=${query}&limit=10`, {
    headers: {
      'X-MAL-CLIENT-ID': 'your-mal-client-id'
    }
  });
  const data = await response.json();
  return data;
}
async function displayFeaturedManga() {
  const featuredSection = document.getElementById("featured-manga");
  const mangaList = await fetchMangaFromMAL("naruto");
  mangaList.data.forEach(manga => {
    const div = document.createElement("div");
    div.innerHTML = `
      <img class="lazy" data-src="${manga.node.main_picture.medium}" alt="${manga.node.title}">
      <h3>${manga.node.title}</h3>
    `;
    featuredSection.appendChild(div);
  });
}
displayFeaturedManga();
