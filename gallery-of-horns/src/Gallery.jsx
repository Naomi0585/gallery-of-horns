
import HornedBeast from './HornedBeast';
import data from '../data.json';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Gallery() {

  return (

    <Container>

      <Row>

        {data.map((beast) => (

          <Col key={beast._id} md={4} className="mb-4">

            <HornedBeast
              title={beast.title}
              image={beast.image_url}
              description={beast.description}
              horns={beast.horns}
            />

          </Col>

        ))}

      </Row>

    </Container>

  );
}

export default Gallery;