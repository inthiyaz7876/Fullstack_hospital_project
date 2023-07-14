import React, {useEffect, useState} from 'react';
import { MDBDataTable } from 'mdbreact';
import { Button, Modal, Form } from 'react-bootstrap';
import axios from 'axios';

function AvailableBeds () {

  const [show, setShow] = useState(false);
  const [medicenId, setMedicenId] = useState(Math.floor(1000 + Math.random() * 9000));
  const [apiMedicenData , setApiMedicenData] = useState([]);
  const [medicenN, setmediceN] = useState("");
  const [medicenEx, setMediceEx] = useState("");
  const [medicenInS, setMedicenInS] =useState();
  useEffect(()=> {
    axios
        .get("http://localhost:8080/getallMedicens")
        .then(data => {
          setApiMedicenData(data.data);
          console.log(data.data)})
        .catch(error => console.log(error));
  }, []);

  const data = {
    columns: [
      {
        label: 'Medicen Id',
        field: 'mId',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Medicen Name',
        field: 'mName',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Expiry Date',
        field: 'mExpiryDate',
        sort: 'asc',
        width: 270
      },
      {
        label: 'In Stock',
        field: 'mInStock',
        sort: 'asc',
        width: 200
      }
    ],
    rows: apiMedicenData
  };
 

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);
  const openModal = () => {
    handleShow();
  };
  const changeName = (e) => {
    setmediceN(e.target.value)
  }
  const changeDate = (e) => {
    setMediceEx(e.target.value);
  }
  const changeStock = (e) => {
    setMedicenInS(e.target.value);
  }
  const saveMedicen = () => {
    const postMd = {
      mName:medicenN,
      mExpiryDate:medicenEx,
      mInStock: medicenInS,
      mId: medicenId
    }
      axios
      .post("http://localhost:8080/createMedicen", postMd)
      .then(data => {
        console.log("responseee",data.data)
        alert("Medicen saved Successfully");
        data.data == "Medicen saved Successfully" ? setShow(false) : null
      })
      .catch(error => console.log(error));
  }
  const getMody  = () => {
    return (<>
  <h5>
    Medicen ID - {medicenId}</h5>
    <div className="op_form">
      <Form.Control
        type="text"
        value={null}
        onChange={(e) => changeName(e)}
        placeholder="Medicen Name"
      />
    </div>
    <div className="op_form">
      <Form.Control
        type="calender"
        value={null}
        onChange={(e) => changeDate(e)}
        placeholder="Expiry date"
      />
    </div>
    <div className="op_form">
      <Form.Control
        type="number"
        value={null}
        onChange={(e) => changeStock(e)}
        placeholder="In Stock"
      />
    </div>
    <div className="op_form">
      <Button value={'info'} onClick={() => saveMedicen()}>
        Save Medicen
      </Button>
    </div>
    </>)
  }
  return (
  <>
  <Button variant='warning' onClick={openModal}>Add Medicen</Button>
    <MDBDataTable
      striped
      bordered
      small
      data={data}
    />
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Fill Medicen Details</Modal.Title>
          <span style={{ marginLeft: '20px' }}>
            {new Date().toLocaleString()}
          </span>
        </Modal.Header>
        <Modal.Body>{getMody()}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AvailableBeds;