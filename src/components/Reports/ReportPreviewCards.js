import { Card, Button, Col, Row } from "react-bootstrap";

function ReportPreviewCards() {
  // This array represents the preview data for your report templates
  // You can fetch this from a server, use a state, or keep it static as shown
  const reportTemplates = [
    { id: 1, title: "Template 1", imageUrl: "path_to_image1.jpg" },
    { id: 2, title: "Template 2", imageUrl: "path_to_image2.jpg" },
    // ... add more templates as needed
  ];

  return (
    <Row className="mb-4">
      {reportTemplates.map((template) => (
        <Col md={3} key={template.id}>
          <Card>
            <Card.Img variant="top" src={template.imageUrl} />
            <Card.Body>
              <Card.Title>{template.title}</Card.Title>
              {/* You can add more details or a button to select the template here */}
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default ReportPreviewCards;
