import "../../css/test-component-css/Loader.css";

function Loader() {
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <div style={{ marginLeft: "10px" }}>Loading questions..</div>
    </div>
  );
}

export default Loader;
