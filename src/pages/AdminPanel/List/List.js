import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const List = () => {
    const [users, setUsers] = useState([]);
    const { title } = useParams();
    console.log(title)

    useEffect(() => {
        fetch(`https://serene-bastion-42312.herokuapp.com/list`)
            .then(res => res.json())
            .then(data => {
                let filter = []
                data?.map(s => {
                    console.log('s', s)

                    if (s?.events?.indexOf(title) > -1) {
                        filter.push(s)
                    }

                    console.log('filter', filter)
                    return filter
                })
                setUsers(filter)
            });
        // window.location.reload()

    }, [title])

    console.log('user', users)
    return (
        <div>
            <h4>List of participant</h4>
            <h5>Total {users?.length} member join </h5>

            <ul>
                {users?.map(i => <li>{i?.displayName}</li>)}
            </ul>

        </div>
    );
};

export default List;