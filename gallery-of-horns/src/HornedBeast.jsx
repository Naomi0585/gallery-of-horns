import { useState } from 'react';

import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

function HornedBeast(props) {

  const [favorites, setFavorites] = useState(0);

  function handleFavorite() {
    setFavorites(favorites + 1);
  }

  return (

    <Card style={{ width: '18rem' }}>

      <Card.Body>

        <Card.Title>
          {props.title}
        </Card.Title>

        <Image
          src={props.image}
          alt={props.title}
          rounded
          fluid
          onClick={handleFavorite}
        />

        <Card.Text>
          {props.description}
        </Card.Text>

        <p>❤️ Favorites: {favorites}</p>

        <p>Horns: {props.horns}</p>

      </Card.Body>

    </Card>

  );
}

export default HornedBeast;