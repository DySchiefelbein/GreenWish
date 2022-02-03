import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Row } from 'react-bootstrap';

import { ReactComponent as AlbumSvg } from './album.svg';
import Picture from './components/Picture';
import mapResultsForFancybox from './utils/mapResults';
import showFancyboxOnHash from './utils/showFancyboxOnHash';

function App() {
  const imageApi = "https://jsonplaceholder.typicode.com/albums/1/photos"
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    axios.get(imageApi)
      .then((response) => {
        const result = mapResultsForFancybox(response);
        setGallery(result);
        showFancyboxOnHash(result);
      });
  }, [setGallery]);

  return (
    <div>
      <h1 className="mx-1 pt-4 d-flex align-items-center">
        <AlbumSvg width={45} />
        <span className="mx-2">Photo album</span>
      </h1>
      <hr className="my-4" />
      <Row className="mx-1 text-center">
        {
          gallery.map((image) => (
            <Picture key={image.id} image={image} />
          ))
        }
      </Row>
    </div>
  );
}

export default App;
