import React from 'react';
import UsersList from '../components/UsersList';


function Users() {
    const USERS = [
        {id: 'u1' ,
        name:'Robin Rezowan' ,
        image :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgHLhrRf3JMfujmP2qeTul_rm7X-BHW4odCg&usqp=CAU",
        places: 3 },
        {id: 'u2' ,
        name:'Hasan Fahad' ,
        image :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgHLhrRf3JMfujmP2qeTul_rm7X-BHW4odCg&usqp=CAU",
        places: 1 },
        {id: 'u3' ,
        name:'Itemam Haris' ,
        image :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgHLhrRf3JMfujmP2qeTul_rm7X-BHW4odCg&usqp=CAU",
        places: 2 },
        
    ];
    return (
       <UsersList items={USERS}/>
    )
}

export default Users;
