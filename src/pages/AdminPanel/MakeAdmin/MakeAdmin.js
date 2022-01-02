import React, { useEffect, useState } from 'react';
import { Container, Stack } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import User from '../User/User';

const MakeAdmin = () => {
    const { user } = useAuth();
    const [users, setUsers] = useState([]); // use redux here

    useEffect(() => {
        fetch(`http://localhost:5000/users`)
            .then(res => res.json())
            .then(data => {
                setUsers(data);
            });
    }, []);

    return (
        <div>
            <Container>
                <Stack gap={3}>
                    {
                        users.length > 0
                        &&
                        users.map(singleUser => <User key={singleUser._id} user={singleUser} mail={user.email} />)
                    }

                </Stack>
            </Container>
        </div>
    );
};

export default MakeAdmin;