import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

export default function LoadingScreen() {
  return (
    <div className="gap-4 bg-blue-900 d-flex flex-column justify-content-center align-items-center vh-100">
      <Spinner animation="border" role="status" className="text-danger" />

      <div className="d-flex flex-column align-items-center">
        <Button variant="success" disabled className="mb-3">
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          <span className="visually-hidden"> en cours de chargement...</span>
        </Button>
        <Button
          style={{
            backgroundColor: "#fff",
            borderColor: "#fff",
            color: "blue",
            fontSize: "1rem",
            fontWeight: "bold",
          }}
          disabled
        >
          <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          en cours de chargement...
        </Button>
      </div>
    </div>
  );
}
