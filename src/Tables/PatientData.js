import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from 'axios';
import { MDBDataTable } from 'mdbreact';

function PatientData() {
  const [apiPatientData , setApiPatientData] = useState([]);
  const [show, setShow] = useState(false);
  const [editOp, setEditOp] = useState(false);
  const [patientData, setPatientData] = useState();
  const [drDescription, setdrDescription] = useState("");
  const [editingPatient, setEditingPatient] = useState();

  useEffect(()=> {
    axios
        .get("http://localhost:8080/getallPatients")
        .then(data => {
          setApiPatientData(data.data);
          console.log(data.data)})
        .catch(error => console.log(error));
  }, []);

  let modifiedData = apiPatientData?.map((itm)=>{
    return {
        pAddress: itm.pAddress,
        pAge:itm.pAge,
        pAssignedDoctor: itm.pAssignedDoctor,
        pGender : itm.pGender,
        pId : itm.pId,
        pJoindeDate :itm.pJoindeDate,
        pName: itm.pName,
        pProblem:itm.pProblem,
        pdescription: itm.pdescription ,
        pEdit: <Button variant='info' onClick={(e)=>getEditInfo(e, itm)}>Edit</Button>
    }
})

  const data = {
    columns: [
      {
        label: 'P ID',
        field: 'pId',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Patient Name',
        field: 'pName',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Address',
        field: 'pAddress',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Joined Date',
        field: 'pJoindeDate',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Age',
        field: 'pAge',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Problem',
        field: 'pProblem',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Gender',
        field: 'pGender',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Assigned Doctor',
        field: 'pAssignedDoctor',
        sort: 'asc',
        width: 100
      }
      ,
      {
        label: 'Dr Prescription',
        field: 'pdescription',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Edit',
        field: 'pEdit',
        sort: 'asc',
        width: 100
      }
    ],
    rows: modifiedData

  };
   const getEditInfo = (e, itm) => {
    console.log("urrr", itm);
    setEditingPatient(itm);
    setShow(true);
   }


  const handleClose = () => {
    setShow(false);
    setEditOp(false);
  };
  const handleShow = () => setShow(true);
  useEffect(() => {}, [patientData]);
  const openOP = () => {
    handleShow();
  };
  
  const saveDescription = (e) => {
    const postOp = {
      pAddress: editingPatient.pAddress,
      pAge: editingPatient.pAge,
      pAssignedDoctor: editingPatient.pAssignedDoctor,
      pGender : editingPatient.pGender,
      pId : editingPatient.pId,
      pJoindeDate : editingPatient.pJoindeDate,
      pName: editingPatient.pName,
      pProblem: editingPatient.pProblem,
      pdescription: editingPatient.pdescription + " "+drDescription,
      pEdit: editingPatient.pEdit
    }
      axios
      .put("http://localhost:8080/updatePatient", postOp)
      .then(data => {
        console.log("responseee",data.data)
        alert("Patient saved Successfully");
        data.data == "Patient saved Successfully" ? setShow(false) : null
      })
      .catch(error => console.log(error));
  };
 
  const handleAreaChange = (e) => {
    setdrDescription(e.target.value);
  };
  const opModal = (data) => {
    return (
      <>
        <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Add Prescription</Form.Label>
        <Form.Control onChange={(e)=>handleAreaChange(e)}as="textarea" rows={3} />
      </Form.Group>
    </Form>
        <div className="op_form">
          <Button value={'info'} onClick={(e) => saveDescription(e, editOp)}>
            Save
          </Button>
        </div>
      </>
    );
  };
  return (
    <div>
      <MDBDataTable
        striped
        bordered
        small
        data={data}
      />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><strong>{editingPatient?.pName} ID: {editingPatient?.pId}</strong></Modal.Title>
          <span style={{ marginLeft: '20px' }}>
            {new Date().toLocaleString()}
          </span>
        </Modal.Header>
        <Modal.Body>{editOp ? opModal(patientData) : opModal()}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default PatientData;
