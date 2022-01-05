import React, { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';

const User = ({ user, mail }) => {
    const { email, role } = user;
    const [currentRole, setCurrentRole] = useState(role);

    const handleChange = (email, role) => {
        if (mail === email) {
            alert("You can not change it");
            return;
        }
        const userData = { email, role };
        fetch(`https://serene-bastion-42312.herokuapp.com/users/admin`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.result.modifiedCount) {
                    setCurrentRole(data.role);
                    alert('User Role change successfully!');
                }

            })
    }
    // console.log(currentRole);

    return (
        <Row className="bg-light p-3 pe-lg-5 rounded-3" style={{ fontFamily: "poppins", fontWeight: "300" }}>
            <Col sm={12} md={7} lg={7}>{email}</Col>
            <Col sm={8} md={3} lg={4}>Role: {currentRole}</Col>
            <Col sm={4} md={2} lg={1}>
                <Button
                    className='button-color border-0'
                    size="sm"
                    onClick={() => handleChange(user.email, currentRole)}>
                    Change
                </Button>
            </Col>
        </Row>
    );
};

export default User;