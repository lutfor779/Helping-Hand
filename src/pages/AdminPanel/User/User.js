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
        fetch(`http://localhost:5000/users/admin`, {
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
        <Row className="bg-light border p-3">
            <Col sm={12} md={7} lg={9}>{email}</Col>
            <Col sm={8} md={3} lg={2}>Role: {currentRole}</Col>
            <Col sm={4} md={2} lg={1}>
                <Button
                    variant="primary"
                    size="sm"
                    onClick={() => handleChange(user.email, currentRole)}>
                    Change
                </Button>
            </Col>
        </Row>
    );
};

export default User;