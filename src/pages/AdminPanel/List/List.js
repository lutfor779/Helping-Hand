import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const List = () => {
    const [users, setUsers] = useState([]);
    const { title } = useParams();
    console.log(title)

    useEffect(() => {
        fetch(`http://localhost:5000/list`)
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

            <ul>
                <h3>List of participant</h3>
                <h5>Total {users?.length} join </h5>

                {users?.map(i => <li>{i?.displayName}</li>)}
            </ul>


        </div>
    );
};

export default List;