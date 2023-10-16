import React, { useState, useEffect } from 'react';

import PasswordProtectedPage from './PasswordProtectedPage';

import '../../../galeria-fotos/src/Gallery.css';

let placeholderImages;
placeholderImages = [
  // Replace these with actual image URLs
  'https://via.placeholder.com/200',
  'https://via.placeholder.com/200',
  'https://via.placeholder.com/200',
  'https://via.placeholder.com/200',
  'https://via.placeholder.com/200',
  'https://via.placeholder.com/200',
  'https://via.placeholder.com/200',
  'https://via.placeholder.com/200',
  'https://via.placeholder.com/200',
  'https://via.placeholder.com/200',
  'https://via.placeholder.com/200',
  'https://via.placeholder.com/200',
  'https://via.placeholder.com/200',
  'https://via.placeholder.com/200',
  'https://via.placeholder.com/200',
  'https://via.placeholder.com/200',
  'https://via.placeholder.com/200',
  'https://via.placeholder.com/200',
  'https://via.placeholder.com/200',
  'https://via.placeholder.com/200',
  'https://via.placeholder.com/200',
  'https://via.placeholder.com/200',
  'https://via.placeholder.com/200',
  'https://via.placeholder.com/200',
  'https://via.placeholder.com/200',
  'https://via.placeholder.com/200',
  'https://via.placeholder.com/200',
  'https://via.placeholder.com/200',
  'https://via.placeholder.com/200',
  'https://via.placeholder.com/200',
  'https://via.placeholder.com/200',
  'https://via.placeholder.com/200',
  'https://via.placeholder.com/200',
  'https://via.placeholder.com/200',
  'https://via.placeholder.com/200',
  'https://via.placeholder.com/200',
  // ... Add more images
];

function Gallery() {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Simulate loading images
    setIsLoading(true);
    setTimeout(() => {
      setPhotos(placeholderImages.slice(0, 8)); // Initially load 4 images
      setIsLoading(false);
    }, 1000);
  }, []);

  const loadMorePhotos = () => {
    // Simulate loading more images
    setIsLoading(true);
    setTimeout(() => {
      const currentLength = photos.length;
      const newPhotos = placeholderImages.slice(
          currentLength,
          currentLength + 10
      );
      setPhotos([...photos, ...newPhotos]);
      setIsLoading(false);
    }, 1000);
  };

  return (
      <div>
      <PasswordProtectedPage correctPassword="password1" />
      <div className="App">
        <h1>Scalable Photo Gallery</h1>
        <div id="lipsum">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent egestas luctus feugiat. In in gravida purus. Pellentesque volutpat id sapien rutrum fringilla. Vivamus ac dui neque. Proin felis leo, molestie a pulvinar id, suscipit id enim. Vestibulum fermentum enim libero, a commodo velit tristique non. Maecenas dictum lacinia ligula, ac ullamcorper risus feugiat eget. Quisque gravida facilisis velit vel tincidunt. In varius condimentum justo vitae fermentum. Etiam vestibulum nec risus id vulputate.
          </p>
          <p>
            Ut et nulla dolor. Maecenas eleifend augue id cursus congue. Nullam sollicitudin risus et felis consectetur, nec fringilla dolor egestas. Aliquam ex nunc, interdum sed consequat non, commodo non arcu. Integer feugiat dolor non ipsum euismod mollis. Nulla interdum a leo vel malesuada. Mauris ullamcorper nibh eget nulla porta, ac tincidunt elit fringilla. Sed malesuada maximus suscipit.
          </p>
          <p>
            Duis urna velit, gravida sed arcu sed, consequat mattis mauris. Nunc a leo eu justo fermentum rhoncus. Proin pharetra tempor dolor ac sodales. Nullam volutpat faucibus iaculis. Sed vitae nisl sed purus suscipit condimentum id at orci. Curabitur vitae posuere nunc. Ut elementum purus nisl, quis rhoncus sem congue vitae. Donec sapien orci, hendrerit ut lacus ac, tempus pellentesque magna. Fusce et vestibulum elit, et mattis sapien. Nunc posuere rutrum dolor a feugiat. Curabitur feugiat justo nec mollis tincidunt.
          </p>
          <p>
            Vestibulum porta nisi vitae enim dapibus, sit amet tempus justo convallis. In luctus nisl nulla. Nam nec pulvinar leo. Integer in sagittis risus. Suspendisse potenti. Integer eleifend, metus id pharetra pretium, tortor turpis consequat nulla, at finibus risus est at nisi. Nulla sed mauris condimentum, feugiat neque ac, placerat quam. Nunc sem mi, pretium nec vehicula vel, bibendum aliquam ante. Duis ut pharetra felis. Morbi maximus nec sapien ut sollicitudin. Maecenas bibendum accumsan dolor et fringilla. Donec gravida nisi ac nunc tincidunt viverra. Ut dui nunc, eleifend gravida neque at, volutpat iaculis dolor. Aenean a tellus nec mi suscipit pellentesque ac sed diam. Proin hendrerit urna quis lorem sodales, ac laoreet nisl elementum. Etiam eleifend, sem in lacinia consectetur, dolor purus efficitur metus, sed dictum nisi augue blandit ipsum.
          </p>
          <p>
            Suspendisse pulvinar lacinia metus eu condimentum. Ut tincidunt hendrerit felis ut cursus. Nam commodo lacus aliquet, tincidunt quam sed, vestibulum urna. Pellentesque suscipit malesuada interdum. Curabitur gravida risus non justo facilisis feugiat. Donec blandit ipsum ac felis lobortis, at elementum velit gravida. Proin ut magna condimentum, maximus ex vel, molestie dui.
          </p></div>
        <div className="gallery">
          {photos.map((photo, index) => (
              <div className="gallery-item" key={index}>
                <img src={photo} alt={`Photo ${index}`} />
              </div>
          ))}
          {isLoading}
        </div>
        <button onClick={loadMorePhotos} disabled={isLoading}>
          Load More
        </button>
      </div>
      </div>
  );
}

export default Gallery;
