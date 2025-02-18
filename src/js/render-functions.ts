type ImageElement = {
  id: number;
  pageURL: string;
  type: string;
  tags: string;
  previewURL: string;
  previewWidth: number;
  previewHeight: number;
  webformatURL: string;
  webformatWidth: number;
  webformatHeight: number;
  largeImageURL: string;
  imageWidth: number;
  imageHeight: number;
  imageSize: number;
  views: number;
  downloads: number;
  collections: number;
  likes: number;
  comments: number;
  user_id: number;
  user: string;
  userImageURL: string;
};

export default function createMarkUp(arr: ImageElement[]): string {
  return arr
    .map(
      el =>
        `<li class="gallery-item">
          <a class="item-link" href="${el.largeImageURL}">
            <img
              class="item-image"
              src="${el.webformatURL}"
              alt="${el.tags}"
            >
          </a>
          <div class="item-stats_container">
            <p class="item-stats"><span>Likes</span>${el.likes}</p>
            <p class="item-stats"><span>Views</span>${el.views}</p>
            <p class="item-stats"><span>Comments</span>${el.comments}</p>
            <p class="item-stats"><span>Downloads</span>${el.downloads}</p>
          </div>
        </li>`
    )
    .join('');
}
