import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import MainMenu from "./components/MainMenu";
import ReportsTable from "./components/Reports/ReportsTable";
import CreateReport from "./components/Reports/CreateReportForm";
import Analytics from "./components/Reports/Analytics";
import HomePage from "./components/HomePage";

import "./App.css";

function App() {
  return (
    <Container fluid className="h-100 p-0 d-flex flex-column">
      <Router>
        <Row className="no-gutters h-100">
          <Col md={3} className="d-flex flex-column">
            <MainMenu />
          </Col>
          <Col md={9} style={{ padding: "40px" }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/reports" element={<ReportsTable />} />
              <Route path="/create" element={<CreateReport />} />
              <Route path="/analytics" element={<Analytics />} />
            </Routes>
          </Col>
        </Row>
      </Router>
    </Container>
  );
}

export default App;
