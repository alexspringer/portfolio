import Container from "react-bootstrap/Container";

const GalleryItem = (props) => {
  if (props.scheme == "light") {
    var background = "bg-light";
    var textColor = "";
  } else if (props.scheme == "dark") {
    var background = "bg-dark";
    var textColor = "text-white";
  } else if (props.scheme == "blue") {
    var background = "bg-info";
    var textColor = "text-white";
  }
  return (
    <Container
      className={
        background +
        " py-5 mx-2 d-flex flex-column align-items-center justify-content-center"
      }
    >
      <Container className={textColor + " my-3 py-3 text-center"}>
        <Container>
          <h2 class="display-5">{props.title}</h2>
          <p>{props.desc}</p>
        </Container>
      </Container>
      <img
        style={{ height: props.imgHeight, width: props.imgWidth }}
        src={props.img}
        alt=""
      />
    </Container>
  );
};

export default GalleryItem;
