import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const List = () => {
    const [users, setUsers] = useState([]);
    const { title } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/list`)
            .then(res => res.json())
            .then(data => {
                console.log(data)

                setUsers(data)
            });


    }, [title])
    console.log('user', users)
    return (
        <div>

            <ul>
                list
                {/* {
                    users?.filter(d => d?.events?.filter(f => f === title)).map(g => <li>{g.displayName}</li>)
                } */}
            </ul>


        </div>
    );
};

export default List;