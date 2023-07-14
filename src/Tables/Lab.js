import React, {useEffect, useState} from 'react';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function LabsTable() {
    const labData = [
        {"PatientName": "Korian Lalu", "LabType": ["Blood", "Urin"], "DateOfTest": "15-02-2023", "Report":"View" },
        {"PatientName": "Nola Rab", "LabType": ["Blood", "Urin"], "DateOfTest": "15-02-2023", "Report":"View" },
        {"PatientName": "Varan Kaloi", "LabType": ["Blood", "Urin"], "DateOfTest": "15-02-2023", "Report":"View" },
        {"PatientName": "Thonu Mal", "LabType": ["Blood", "Urin"], "DateOfTest": "15-02-2023", "Report":"View" },
        {"PatientName": "Kareon", "LabType": ["Blood", "Urin"], "DateOfTest": "15-02-2023", "Report":"View" },
        {"PatientName": "Leelu Sa", "LabType": ["Blood", "Urin"], "DateOfTest": "15-02-2023", "Report":"View" },
        {"PatientName": "Sanee Var", "LabType": ["Blood", "Urin"], "DateOfTest": "15-02-2023", "Report":"View" },
        {"PatientName": "Shivakar", "LabType": ["Blood", "Urin", "Scan"], "DateOfTest": "15-02-2023", "Report":"View" },
        {"PatientName": "Vanikar Lalu", "LabType": ["Blood", "Urin"], "DateOfTest": "15-02-2023", "Report":"View" },
        {"PatientName": "Komaram Rai", "LabType": ["Blood", "Urin"], "DateOfTest": "15-02-2023", "Report":"View" },
        {"PatientName": "Seetha kal", "LabType": ["Blood", "Urin"], "DateOfTest": "15-02-2023", "Report":"View" },
        {"PatientName": "Varun Maraj", "LabType": ["Blood", "Urin"], "DateOfTest": "15-02-2023", "Report":"View" },    
    ]
    const headers = Object.keys(labData[0]);
    const [selectedP, setSelectedP] = useState("");
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(()=> {
    }, [])
    const getView = (en) => {
        setSelectedP(en);
        handleShow();
    }

  return (
    <div>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>S No</th>
            {headers.map((item)=> (<th>{item}</th>))}
          </tr>
        </thead>
        <tbody>
        {labData.map((item, index)=>(
                     <tr>
                      <td>{index}</td>
                     <td>{item.PatientName}</td>
                     <td>{item.LabType.map((i)=>(<li>{i}</li>))}</td>
                     <td>{item.DateOfTest}</td>
                     <td><Button variant='warning' onClick={()=>getView(item.PatientName)}>{item.Report}</Button></td>
                   </tr>
        ))}
    
            </tbody>
      </Table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedP} Reports</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <ul>
                <li>Blood : 11.2 and No issue found. Count: 1120</li>
                <li>Urin:  No isuse observed </li>
            </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default LabsTable;