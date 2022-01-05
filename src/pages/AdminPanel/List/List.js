import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const List = () => {
    const [users, setUsers] = useState([]);
    const { title } = useParams();

    useEffect(() => {
        fetch(`https://serene-bastion-42312.herokuapp.com/list`)
            .then(res => res.json())
            .then(data => {
                let filter = []
                data?.map(s => {
                    if (s?.events?.indexOf(title) > -1) {
                        filter.push(s)
                    }
                    return filter
                })
                setUsers(filter)
            });
    }, [title])

    return (
        <div>
            <div className='text-center'>
                <h3 className='mb-3'>List of participant</h3>
                <span>on</span>
                <h3 className='text-danger my-3 '>{title}</h3>
                <h5 className='text-primary'>Total {users?.length} join </h5>
            </div>

            <ul className='bg-light text-success fs-6 fw-bold pb-3 pt-4'>
                {users?.map(i => <li key={i._id} className='px-3 py-1'>{i?.displayName}</li>)}
            </ul>

        </div>
    );
};

export default List;