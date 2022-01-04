import React, { useEffect, useState } from 'react';
import { Container, Stack } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import User from '../User/User';

const MakeAdmin = () => {
    const { user } = useAuth();
    const [users, setUsers] = useState([]); // use redux here

    useEffect(() => {
        fetch(`https://serene-bastion-42312.herokuapp.com/users`)
            .then(res => res.json())
            .then(data => {
                setUsers(data);
            });
    }, []);

    return (
        <div>
            <Container>
                <h3 className='mt-5 mb-3 text-center'>Our Admin Panel</h3>
                <Stack gap={3} className='w-75 mx-auto'>
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