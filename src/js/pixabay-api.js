export default function getImagesOnSearch(query, page) {
  const params = new URLSearchParams({
    key: '29734383-6ec437d7a0c5df52cef54a0f9',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page,
  });

  return fetch(`https://pixabay.com/api/?${params}`).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}