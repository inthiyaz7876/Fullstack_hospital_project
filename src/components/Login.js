import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import { useNavigate } from 'react-router-dom';


export default function Login({getUser}) {

    const navigate = useNavigate();
    const [userName, setUserName]= useState(" ");
    const [pass, setPass] = useState(" ");
    const setName = (e) => {
        setUserName(e.target.value)
    }
    const setPassword = (e) => {
        setPass(e.target.value);
    }
    const login  = () => {
        getUser(userName, pass);
        if(userName == " " || pass == " ") {
            alert("Please enter user name and password");
        }
        if(userName == 'admin' && pass == "admin" || userName == 'pavan' && pass == "Naveen") {
            navigate('/dashboard');
        } else {
            alert("Please enter user name and password");
        }
    }

    return (
        <div className='login_page'>
            <div className="login_label"> 
                <h1>Welcome to Save Life Hospital</h1>
            </div>
            <div>
            <InputGroup className="login_user">
                <InputGroup.Text id="inputGroup-sizing-default">
                User Name
                </InputGroup.Text>
                <Form.Control
                onChange={(e)=>setName(e)}
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                />
                </InputGroup>
                <InputGroup className="login_pass">
                <InputGroup.Text id="inputGroup-sizing-default">
                Password
                </InputGroup.Text>
                <Form.Control
                    onChange={(e)=>setPassword(e)}
                    type="password"
                    id="inputPassword5"
                    aria-describedby="passwordHelpBlock"
                />
            </InputGroup>
            <div className="login_button">
            <Button variant={'warning'} onClick={()=>login()}>Login</Button>
            </div>
            </div>
        </div>
    )
}
