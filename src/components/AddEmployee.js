import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { MDBDataTable } from 'mdbreact';
import axios from 'axios';

export default function AddEmployee () {
    const [employeeData, setEmplyeesData] = useState([]);
    const [edit, setEdit] =useState(false);
    const [joD, setJoD] = useState();
    useEffect(()=> {
        axios
        .get("http://localhost:8080/getallEmployees")
        .then(data => {
            setEmplyeesData(data.data);
          console.log(data.data)})
        .catch(error => console.log(error));
    }, [edit]);

    let modifiedData = employeeData?.map((itm)=>{
        return {
            empAddress: itm.empAddress,
            empAge:itm.empAge,
            empGender: itm.empGender,
            empId : itm.empId,
            empJoinedDate : itm.empJoinedDate,
            empName :itm.empName,
            empPassword: itm.empPassword,
            empEdit: <Button variant='info' onClick={(e)=>getEditInfo(e, itm)}>Edit</Button>
        }
    })
    const getEditInfo = (e, itm) => {
        setEdit(true);
        setEGender(itm.empGender)
        setName(itm.empName);
        setAge(itm.empAge);
        setAddress(itm.empAddress);
        setPassword(itm.empPassword);
        setId(itm.empId);
        setJoD(itm.empJoinedDate);
        setConPass(itm.empPassword);
        
    } 
    const data = {
        columns: [
          {
            label: 'Emp ID',
            field: 'empId',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Emplyee Name',
            field: 'empName',
            sort: 'asc',
            width: 270
          },
          {
            label: 'Emp Address',
            field: 'empAddress',
            sort: 'asc',
            width: 200
          },
          {
            label: 'Joined Date',
            field: 'empJoinedDate',
            sort: 'asc',
            width: 100
          },
          {
            label: 'Age',
            field: 'empAge',
            sort: 'asc',
            width: 100
          },
          {
            label: 'Gender',
            field: 'empGender',
            sort: 'asc',
            width: 100
          },
          {
            label: 'Password',
            field: 'empPassword',
            sort: 'asc',
            width: 100
          },
          {
            label: 'Edit',
            field: 'empEdit',
            sort: 'asc',
            width: 100
          }
        ],
        rows: modifiedData || []
    
      };
    const [gender, setEGender]= useState();
    const [name, setName] = useState();
    const [age, setAge] = useState();
    const [address, setAddress] = useState();
    const [password, setPassword]= useState();
    const [conPassword, setConPass] = useState();
    const [id, setId] = useState();
    const nameChange = (e) => {
        setName(e.target.value);
    }
    const ageChange = (e) => {
        setAge(e.target.value);
    }
    const addressChange = (e) => {
        setAddress(e.target.value);
    }

    const enderPassword = (e) => {
        setPassword(e.target.value);
    }
    const confirmPassword = (e) => {
        setConPass(e.target.value);
    }
    const handleId = (e) => {
        setId(e.target.value)
    }   

    const setGender = (e, g) => {
        setEGender(g);
    }
    
    const saveEmp = () => {
        console.log("before", name, age, address, gender);
        if(password == conPassword && name != undefined && age != undefined && gender != undefined && address != undefined && id != undefined) {
        if(edit) {
            const postEmd = {
                empId:id,
                empName:name,
                empAddress: address,
                empAge: age,
                empGender: gender,
                empPassword: password,
                empJoinedDate: joD
              }
              console.log("postEm", postEmd);
              
    axios.post('http://localhost:8080/createEmplyee', postEmd)
    .then(function (response) {
    console.log(response);
    alert("Updated emplyee successfully")
    })
    .catch(function (error) {
    console.log(error);
    });
        } else {
            const postEm = {
                empId:id,
                empName:name,
                empAddress: address,
                empAge: age,
                empGender: gender,
                empPassword: password,
                empJoinedDate: new Date().toISOString().slice(0, 10)
              }
              console.log("postEm", postEm);
              
    axios.post('http://localhost:8080/createEmplyee', postEm)
    .then(function (response) {
    console.log(response);
    alert("Employee saved successfully");
    })
    .catch(function (error) {
    console.log(error);
    });
}

} else {
    alert("Still missing some data or password not matched");
}
    }
    const deleteEmp = () => {
        const postDlt = {
            empId:id,
            empName:name,
            empAddress: address,
            empAge: age,
            empGender: gender,
            empPassword: password,
            empJoinedDate: joD,
            empEdit: ""
          }
          console.log("delete", postDlt);
    axios
      .delete("http://localhost:8080/deleteEmployee", {data:postDlt})
      .then(data => {
        console.log("responseee",data.data)
        alert("Deleted Successfully");
      })
      .catch(error => console.log("error", error));

    }
    return( 
        <>

        <div className="op_form">
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => nameChange(e)}
            placeholder="Name"
          />
        </div>
        <div className="op_form">
          <Form.Control
            type="number"
            value={id}
            onChange={(e) => handleId(e)}
            placeholder="Emp ID"
          />
        </div>
        <div className="op_form">
          <Form.Control
            type="number"
            value={age}
            onChange={(e) => ageChange(e)}
            placeholder="Age"
          />
        </div>
        <div className="op_form">
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => enderPassword(e)}
            placeholder="Password"
          />
        </div>
        <div className="op_form">
          <Form.Control
            type="password"
            value={conPassword}
            onChange={(e) => confirmPassword(e)}
            placeholder="Confirm Password"
          />
        </div>
        <div className="op_form">
          <Form.Control
            type="text"
            value={address}
            onChange={(e) => addressChange(e)}
            placeholder="Address"
          />
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
          <Button value={'info'} onClick={(e) => saveEmp()}>
            Save Employee
          </Button>
          {edit ?<Button value={'info'} onClick={(e) => deleteEmp()}>
            Delete Employee
          </Button>: null }
        </div>

        <h3>All Emplyees Data</h3>
        <MDBDataTable
        striped
        bordered
        small
        data={data}
      />
        </>
    )
}