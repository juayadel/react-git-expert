export const getGif = async (key) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=pEFgi28Vzj6NaVQrd7laHiUMCHvpN9j5&q=${key}&limit=10`;
  const resp = await fetch(url);

  const { data = [] } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  return gifs;
};
