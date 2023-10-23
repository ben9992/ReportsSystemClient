import React, { useState, useEffect } from "react";
import { Button, Container, Modal, Table } from "react-bootstrap";
import axios from "axios";
import ReportPreviewCards from "./ReportPreviewCards";
import CreateReportForm from "./CreateReportForm";

function ReportsTable() {
  const [reports, setReports] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedReport, setSelectedReport] = useState(null);
  const [mode, setMode] = useState("view");
  const [formData, setFormData] = useState({ title: "", description: "" });

  const handleFormDataChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleClose = () => setShowModal(false);
  const handleShow = (report, mode) => {
    setSelectedReport(report);
    setMode(mode);
    setShowModal(true);
  };

  const fetchReports = () => {
    axios.get("http://localhost:3001/api/reports").then((response) => {
      setReports(response.data);
    });
  };

  useEffect(() => {
    if (selectedReport) {
      setFormData({
        title: selectedReport.title,
        description: selectedReport.description,
      });
    }
  }, [selectedReport]);

  useEffect(fetchReports, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    switch (mode) {
      case "edit":
        const updatedReport = {
          ...selectedReport,
          ...formData,
        };
        axios
          .put(
            `http://localhost:3001/api/reports/${selectedReport._id}`,
            updatedReport
          )
          .then((response) => {
            // Handle success (like refreshing the reports list)
            alert("Report updated successfully!");
            setShowModal(false);
            fetchReports();
          })
          .catch((error) => {
            alert("Error updating report!");
          });
        break;

      case "create":
        axios
          .post("http://localhost:3001/api/reports", formData)
          .then((response) => {
            alert("Report created successfully!");
            // Close the modal
            setShowModal(false);

            // Fetch the reports again to update the table
            fetchReports(); // Assuming fetchReports is the function fetching the reports data
          })
          .catch((error) => {
            alert("Error creating report!");
          });
        break;

      default:
        break;
    }
  };

  const handleRowClick = (report) => {
    handleShow(report, "edit");
  };

  useEffect(() => {
    // Assuming your Node server is running on localhost:3001
    axios.get("http://localhost:3001/api/reports").then((response) => {
      setReports(response.data);
    });
  }, []);

  return (
    <Container>
      <ReportPreviewCards />

      <Button
        className="btn-custom"
        style={{ margin: "26px 0 20px" }}
        onClick={() => handleShow(null, "create")}
        variant="primary"
        size="lg"
      >
        + New Report
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>description</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report, index) => (
            <tr key={index} onClick={() => handleRowClick(report)}>
              <td>{index + 1}</td>
              <td>{report.title}</td>
              <td>{report.description}</td>
              <td>{new Date(report.date).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal
        className="custom-modal-size"
        show={showModal}
        onHide={handleClose}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {mode === "create"
              ? "Create Report"
              : mode === "edit"
              ? "Edit Report"
              : "View Report"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CreateReportForm
            report={selectedReport}
            mode={mode}
            onValueChange={handleFormDataChange}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {mode !== "view" && (
            <Button className="btn-custom" onClick={handleSubmit}>
              Save Changes
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default ReportsTable;
