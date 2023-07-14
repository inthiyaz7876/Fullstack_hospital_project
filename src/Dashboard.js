import React, { useState, useEffect } from 'react';
import ReactNavbar from './components/Navbar';
import './style.css';
import { Carousel, Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ResponsiveExample from './components/Table';
import JustifiedExample from './components/Tabs';
import * as adminData from './adminData';
import LeftContainer from './components/LeftContainer';
import PatientGraph from './components/patientReportgraphj';
import ReactButton from './components/Button';
import MedicalReportGraph from './components/MedicalReportGraph';
import EmployeeReport from './components/EmployeeReportGraph';
import AvailableStaff from './components/Availablestaff';
import LabsTable from './Tables/Lab';
import TodayOP from './Tables/TodayOP';
import MedicalData from './Tables/MedicalData';
import AvailbelBeds from './Tables/AvailableBeds';
import PatientData from './Tables/PatientData';

export default function Dashboard({getUser}) {


  const user = "admi";
  const leftMenuAdminData = user == 'admin' ? ["Financial Report", "Patient Data", "Medical Data"] : 
  ["OP Section", "Patient Data", "Medical Section", "Lab"];
  const AvailablestaffData = ["Dr Vardhan", "Nirio", "Molwell", "Looper"];

  const [tabsText, setTabsText] = useState(adminData.default);
  const [tabsDevider, setTabsDevider] = useState(user == 'admin' ? 'Financial Report': 'OP Section');
  const [graphType, setGraphType] = useState('employee');
  useEffect(() => {}, [tabsDevider]);

  const controllLeftMenu = (e, item) => {
    console.log('clicked', e.target.name);
    // testtabs.tabsInfo = tabsText[e.target.name];
    // testtabs.defaultTab = testtabs.tabsInfo[0];

    setTabsDevider(e.target.name);
  };

  const rightContainer = (selectedDiv) => {
    if (selectedDiv == 'Financial Report') {
      return (
        <Row style={{marginTop: "20px"}}>
          <Col sm={4}>
            <ReactButton
              onClick={() => setGraphType('employee')}
              ButtonName={'Employee Report'}
              variant={'warning'}
            />
          </Col>
          <Col sm={4}>
            <ReactButton
              onClick={() => setGraphType('medicen')}
              ButtonName={'Medical Report'}
              variant={'warning'}
            />
          </Col>
          <Col sm={4}>
            <ReactButton
              onClick={() => setGraphType('patient')}
              ButtonName={'Patient Report'}
              variant={'warning'}
            />
          </Col>
        </Row>
      );
    }
  };

  console.log('testtabs', tabsDevider);
  return (
    <div>
      <ReactNavbar />

      <Container fluid>
        <Row style={{ height: '97vh' }}>
          <Col sm={2} className="left_container">
            {leftMenuAdminData.length !== 0 &&
              leftMenuAdminData.map((item) => (
                <LeftContainer
                  leftData={item}
                  onClick={(e, item) => controllLeftMenu(e, item)}
                  color={'info'}
                  classText={'leftMenuButtons'}
                />
              ))}
             <div style={{marginTop: '30px'}}>
                <h4>Available Staff</h4>
                <div style={{height: '363px', backgroundColor: 'white'}}><AvailableStaff staffData={AvailablestaffData}/></div>
              </div>
          </Col>
          <Col sm={10}>
            <h3>{tabsDevider}</h3>
            {tabsDevider == 'Financial Report' ? <>
            {rightContainer(tabsDevider)}
          <div style={{marginTop: '30px'}}>
          <div>{graphType == 'patient' ? <PatientGraph /> : null}</div>
          <div>{graphType == 'medicen' ?<MedicalReportGraph />: null}</div>
          <div>{graphType == 'employee' ?<EmployeeReport />: null}</div>
         </div>
            </> : tabsDevider == 'Lab' ? <LabsTable /> : tabsDevider == 'OP Section' ? <TodayOP /> : tabsDevider == 'Medical Section' || tabsDevider == 'Medical Data' ? <MedicalData /> : tabsDevider == 'Patient Data' ? <PatientData/>:null}
  
            {/* <JustifiedExample data={tabsDevider} />
            <ResponsiveExample data={tableData} /> */}
            
          </Col>
        </Row>
      </Container>
    </div>
  );
}
