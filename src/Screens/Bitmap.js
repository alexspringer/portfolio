import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import GalleryRow from "../Components/GalleryRow.js";
import GalleryItem from "../Components/GalleryItem.js";

import C from "../Assets/C++.png";
import Linux from "../Assets/Logos/linux.png";
import bear32 from "../Assets/Bitmap/bear1_32.bmp";
import bear32Cell from "../Assets/Bitmap/bear1_32_cell.bmp";
import bear32Blur from "../Assets/Bitmap/bear1_32_blur.bmp";
import bear32D1 from "../Assets/Bitmap/bear1_32_d1.bmp";
import bear32D2 from "../Assets/Bitmap/bear1_32_d2.bmp";
import bear32Gray from "../Assets/Bitmap/bear1_32_gray.bmp";
import bear32Hor from "../Assets/Bitmap/bear1_32_hor.bmp";
import bear32Pixel from "../Assets/Bitmap/bear1_32_pixelate.bmp";
import bear32R90 from "../Assets/Bitmap/bear1_32_r90.bmp";
import bear32R180 from "../Assets/Bitmap/bear1_32_r180.bmp";
import bear32R270 from "../Assets/Bitmap/bear1_32_r270.bmp";
import bear32Vert from "../Assets/Bitmap/bear1_32_vert.bmp";

const BitmapScreen = (props) => {
  return (
    <Container fluid>
      <Container fluid className="p-5 mx-0 my-5 text-center">
        <h1> Bitmap Filters </h1>
        <p class="lead text-muted">
          A c++ app that manipulates bitmaps to give photos Instragram like
          filters.
        </p>
        <Button href="https://github.com/alexspringer/Bitmap-filters">
          Go to Github.
        </Button>
      </Container>

      <Row className="my-5">
        <Col className="d-flex justify-content-center">
          <a href="https://www.linux.org/">
            <Card
              className="d-flex flex-column justify-content-center align-items-center"
              style={{ width: "18rem" }}
            >
              <Card.Img
                style={{ width: 200, height: 200 }}
                variant="top"
                src={Linux}
              />
              <Card.Body>
                <Card.Title className="text-center">Linux</Card.Title>
              </Card.Body>
            </Card>
          </a>
        </Col>

        <Col className="d-flex justify-content-center">
          <a href="https://www.cplusplus.com/">
            <Card
              className="d-flex flex-column justify-content-center align-items-center"
              style={{ width: "18rem" }}
            >
              <Card.Img
                style={{ width: 200, height: 200 }}
                variant="top"
                src={C}
              />
              <Card.Body>
                <Card.Title className="text-center">C++</Card.Title>
              </Card.Body>
            </Card>
          </a>
        </Col>
      </Row>

      <GalleryRow>
        <GalleryItem
          title="Before: Cell Shade"
          desc=""
          img={bear32}
          scheme="blue"
          imgWidth={362}
          imgHeight={724}
        />
        <GalleryItem
          title="After: Cell Shade"
          desc=""
          img={bear32Cell}
          scheme="light"
          imgWidth={362}
          imgHeight={724}
        />
      </GalleryRow>

      <GalleryRow>
        <GalleryItem
          title="Before: Blur"
          desc=""
          img={bear32}
          scheme="light"
          imgWidth={362}
          imgHeight={724}
        />
        <GalleryItem
          title="After: Blur"
          desc=""
          img={bear32Blur}
          scheme="dark"
          imgWidth={362}
          imgHeight={724}
        />
      </GalleryRow>

      <GalleryRow>
        <GalleryItem
          title="Before: Diagonal Rotate"
          desc=""
          img={bear32}
          scheme="blue"
          imgWidth={362}
          imgHeight={724}
        />
        <GalleryItem
          title="After: Diagonal Rotate"
          desc=""
          img={bear32D1}
          scheme="light"
          imgWidth={724}
          imgHeight={362}
        />
      </GalleryRow>

      <GalleryRow>
        <GalleryItem
          title="Before: Diagonal Rotate v2"
          desc=""
          img={bear32}
          scheme="light"
          imgWidth={362}
          imgHeight={724}
        />
        <GalleryItem
          title="After: Diagonal Rotate v2"
          desc=""
          img={bear32D2}
          scheme="dark"
          imgWidth={724}
          imgHeight={362}
        />
      </GalleryRow>

      <GalleryRow>
        <GalleryItem
          title="Before: Gray Scale"
          desc=""
          img={bear32}
          scheme="blue"
          imgWidth={362}
          imgHeight={724}
        />
        <GalleryItem
          title="After: Gray Scale"
          desc=""
          img={bear32Gray}
          scheme="light"
          imgWidth={362}
          imgHeight={724}
        />
      </GalleryRow>

      <GalleryRow>
        <GalleryItem
          title="Before: Horizontal Flip"
          desc=""
          img={bear32}
          scheme="light"
          imgWidth={362}
          imgHeight={724}
        />
        <GalleryItem
          title="After: Horizontal Flip"
          desc=""
          img={bear32Hor}
          scheme="dark"
          imgWidth={362}
          imgHeight={724}
        />
      </GalleryRow>

      <GalleryRow>
        <GalleryItem
          title="Before: Pixelate"
          desc=""
          img={bear32}
          scheme="blue"
          imgWidth={362}
          imgHeight={724}
        />
        <GalleryItem
          title="After: Pixelate"
          desc=""
          img={bear32Pixel}
          scheme="light"
          imgWidth={362}
          imgHeight={724}
        />
      </GalleryRow>

      <GalleryRow>
        <GalleryItem
          title="Before: Rotate 90 Degrees"
          desc=""
          img={bear32}
          scheme="light"
          imgWidth={362}
          imgHeight={724}
        />
        <GalleryItem
          title="After: Rotate 90 Degrees"
          desc=""
          img={bear32R90}
          scheme="dark"
          imgWidth={724}
          imgHeight={362}
        />
      </GalleryRow>

      <GalleryRow>
        <GalleryItem
          title="Before: Rotate 180 Degrees"
          desc=""
          img={bear32}
          scheme="blue"
          imgWidth={362}
          imgHeight={724}
        />
        <GalleryItem
          title="After: Rotate 180 Degrees"
          desc=""
          img={bear32R180}
          scheme="light"
          imgWidth={362}
          imgHeight={724}
        />
      </GalleryRow>

      <GalleryRow>
        <GalleryItem
          title="Before: Rotate 270 Degrees"
          desc=""
          img={bear32}
          scheme="light"
          imgWidth={362}
          imgHeight={724}
        />
        <GalleryItem
          title="After: Rotate 270 Degrees"
          desc=""
          img={bear32R270}
          scheme="dark"
          imgWidth={724}
          imgHeight={362}
        />
      </GalleryRow>

      <GalleryRow>
        <GalleryItem
          title="Before: Verticle Flip"
          desc=""
          img={bear32}
          scheme="blue"
          imgWidth={362}
          imgHeight={724}
        />
        <GalleryItem
          title="After: Verticle Flip"
          desc=""
          img={bear32Vert}
          scheme="light"
          imgWidth={362}
          imgHeight={724}
        />
      </GalleryRow>
    </Container>
  );
};

export default BitmapScreen;
