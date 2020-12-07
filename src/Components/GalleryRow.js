import Container from "react-bootstrap/Container";

const GalleryRow = (props) => {
  
  return (
    <Container fluid className="my-2 d-flex justify-content-around">
        {props.children}
    </Container>
  );
};

export default GalleryRow;
