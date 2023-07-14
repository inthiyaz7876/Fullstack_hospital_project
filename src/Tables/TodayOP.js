import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from 'axios';
import { MDBDataTable } from 'mdbreact';

function TodayOP() {
  const [apiPatientData , setApiPatientData] = useState([]);
  useEffect(()=> {
    axios
        .get("http://localhost:8080/getallPatients")
        .then(data => {
          setApiPatientData(data.data);
          console.log(data.data)})
        .catch(error => console.log(error));
  }, []);
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
    ],
    rows:
      apiPatientData
  };

  // {"pId":1,"pName":"Neelappa","pAddress":"Bengalore","pJoindeDate":"11-07-2023","pProblem":"Fever","pAge":35,"pGender":"Male","pAssignedDoctor":"Raio mar"}

  console.log("api data", apiPatientData);
  console.log("data", data);
  const headers = [ "ID", "Name", "Address", "Joined Date", "Problem", "Age", "Gender", "Assigned Dr"];
  const [selectedP, setSelectedP] = useState('');
  const [show, setShow] = useState(false);
  const [editOp, setEditOp] = useState(false);
  const [patientData, setPatientData] = useState();

  const [pName, setPName] = useState();
  const [pAddress, setPAddress] = useState();
  const [pAge, setPAge] = useState();
  const [pAssignedDoctor, setPAssignedDoctor] = useState();
  const [pGender, setPGender] = useState();
  const [pProblem, setPProblem] = useState();
  const [pJoindeDate, setPJoindeDate] = useState(new Date().toISOString().slice(0, 10));


  const handleClose = () => {
    setShow(false);
    setEditOp(false);
  };
  const handleShow = () => setShow(true);
  console.log('HHHHHH', new Date());
  const doctorList = ['Sudharshan', 'Shanthan', 'Carwell', 'Jodus', 'MoranCal'];
  useEffect(() => {}, [patientData]);
  const openOP = () => {
    handleShow();
  };
  const nameChange = (e) => {
    console.log('change name ', e.target.value);
    setPName(e.target.value);
  };
  const ageChange = (e) => {
    console.log('change', e.target.value);
    setPAge(e.target.value);

  };
  const addressChange = (e) => {
    console.log('change', e.target.value);
    setPAddress(e.target.value);
  };
  const problemChange = (e) => {
    console.log('change', e.target.value);
    setPProblem(e.target.value)
  };
  const selectDoctpor = (e) => {
    setPAssignedDoctor(e.target.value)
    console.log('uiuji', e.target.value);
  };
  const setGender = (e, gender) => {
    console.log('setGender', gender);
    setPGender(gender);
  };
  const saveOP = (e, editOp) => {
    const postOp = {
      pAddress: pAddress,
      pAge:pAge,
      pAssignedDoctor:pAssignedDoctor,
      pGender : pGender,
      pId : editOp ? editOp.pId : Math.floor(1000 + Math.random() * 9000),
      pJoindeDate :pJoindeDate,
      pName:pName,
      pProblem:pProblem
    }
      axios
      .post("http://localhost:8080/createPatients", postOp)
      .then(data => {
        console.log("responseee",data.data)
        alert("Patient saved Successfully");
        data.data == "Patient saved Successfully" ? setShow(false) : null
      })
      .catch(error => console.log(error));


  };
  const editHandle = (e, op) => {
    console.log('op', op);
    setPName(op.pName);
    setPAge(op.pAge);
    setPAddress(op.pAddress);
    setPProblem(op.pProblem);
    setGender(op.pGender);
    setPAssignedDoctor(op.pAssignedDoctor);
    

    setPatientData(op);
    setEditOp(true);
    openOP();
  };
  const selectTest = () => {};
  const opModal = (data) => {
    return (
      <>
        <div className="op_form">
          <Form.Control
            type="text"
            value={editOp ? data.pName : null}
            onChange={(e) => nameChange(e)}
            placeholder="Name"
          />
        </div>
        <div className="op_form">
          <Form.Control
            type="text"
            value={editOp ? data.pAge : null}
            onChange={(e) => ageChange(e)}
            placeholder="Age"
          />
        </div>
        <div className="op_form">
          <Form.Control
            type="text"
            value={editOp ? data.pAddress : null}
            onChange={(e) => addressChange(e)}
            placeholder="Address"
          />
        </div>
        <div className="op_form">
          <Form.Control
            type="text"
            value={editOp ? data.pProblem : null}
            onChange={(e) => problemChange(e)}
            placeholder="Problem"
          />
        </div>
        <div className="op_form">
          <Form.Select
            onChange={(e) => selectDoctpor(e)}
            aria-label="Default select example"
          >
            <option>Select Docter</option>
            {doctorList.map((it, data) => (
              <option value={data.pAssignedDoctor}>{it}</option>
            ))}
          </Form.Select>
        </div>
        <div className="op_form">
          <Form.Check
            inline
            label="Male"
            name="group1"
            type={'radio'}
            id={`Male`}
            onChange={(e) => setGender(e, 'Male')}
          />
          <Form.Check
            inline
            label="Female"
            name="group1"
            type={'radio'}
            id={`Female`}
            onChange={(e) => setGender(e, 'Female')}
          />
          <Form.Check
            inline
            label="Trans"
            name="group1"
            type={'radio'}
            id={`Female`}
            onChange={(e) => setGender(e, 'Trans')}
          />
        </div>
        <div className="op_form">
          <Form.Check
            inline
            label="Urin"
            name="group2"
            type={'checkbox'}
            id={`Urin`}
            onChange={(e) => selectTest(e, 'Urin')}
          />
          <Form.Check
            inline
            label="Blood"
            name="group2"
            type={'checkbox'}
            id={`Blood`}
            onChange={(e) => selectTest(e, 'Blood')}
          />
          <Form.Check
            inline
            label="Scan"
            name="group2"
            type={'checkbox'}
            id={`Scan`}
            onChange={(e) => selectTest(e, 'Scan')}
          />
        </div>
        <div className="op_form">
          <Button value={'info'} onClick={(e) => saveOP(e, editOp)}>
            Save OP
          </Button>
        </div>
      </>
    );
  };
  return (
    <div>
      <Button variant="primary" onClick={openOP}>
        Create OP
      </Button>
      <MDBDataTable
        striped
        bordered
        small
        data={data}
      />
      {/* <Table responsive="sm">
        <thead>
          <tr>
            <th>S No</th>
            {headers.map((item) => (
              <th>{item}</th>
            ))}
            <th>Edit Data</th>
          </tr>
        </thead>
        <tbody>
          {apiPatientData.map((item, index) => (
            <tr>
              <td>{index}</td>
              <td>{item.pId}</td>
              <td>{item.pName}</td>
              <td>{item.pAddress}</td>
              <td>{item.pJoindeDate}</td>
              <td>{item.pProblem}</td>
              <td>{item.pAge}</td>
              <td>{item.pGender}</td>
              <td>{item.pAssignedDoctor}</td>
              <td>
                <Button onClick={(e) =>editHandle(e, item)}>Edit</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Fill Patient Details</Modal.Title>
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

export default TodayOP;
