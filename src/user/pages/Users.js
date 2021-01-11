import React, {useEffect ,useState} from 'react';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import UsersList from '../components/UsersList';
import {useHttpClient} from '../../shared/hooks/http-hook';

function Users() {
     const {isLoading, error,sendRequest, clearError} = useHttpClient();

      const [loadedUsers, setLoadedUsers] =useState();
      

  useEffect(() =>{
      
    const fetchUsers = async() =>{
        try{
            const responseData = await  sendRequest('http://localhost:5000/api/users'); //use asyn inside a function not in useEffect
      
           

            setLoadedUsers(responseData.users);
        }catch(err){
           
        }
  


      
    };
    fetchUsers();

  },[sendRequest]);
  //fetch inside the useEffect because.useEffect runs when any change on the page occurs.Without it if we change anything in the page.Then the users will not apear again.For solving this we have to use the useEffect.


    return (
        <React.Fragment>
            <ErrorModal error ={error} onClear = {clearError} />
          {isLoading && (
              <div class="center">
                  <LoadingSpinner/>
              </div>
          )}
         {!isLoading && loadedUsers && <UsersList items={loadedUsers}/>}
        </React.Fragment>
      
    )
}

export default Users;
