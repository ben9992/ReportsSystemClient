import { Form } from "react-bootstrap";

function CreateReportForm({ report, mode, onValueChange }) {
  return (
    <Form>
      <Form.Group controlId="reportTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter title"
          defaultValue={report?.title}
          readOnly={mode === "view"}
          onChange={(e) => onValueChange("title", e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="reportDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter description"
          defaultValue={report?.description}
          readOnly={mode === "view"}
          onChange={(e) => onValueChange("description", e.target.value)}
        />
      </Form.Group>
    </Form>
  );
}

export default CreateReportForm;
