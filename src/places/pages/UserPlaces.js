import React from 'react';
import {useParams} from 'react-router-dom';
import PlaceList from '../components/PlaceList';
import "./UserPlaces.css";

function UserPlaces(props) {

    const DUMMY_PLACES=[
        {
            id: 'p1',
            title:'Empire State Building',
            description:'One of the most famous sky scrapers in the world!',
            imageUrl:'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
            address:'20 w 34 St , London , 10012 Ny',
            location:{
                lat: 42.99300841943563,
                lng: -81.24313478955656
            },
            creator: 'u1'
        },
        {
            id: 'p2',
            title:'Empire State Building',
            description:'One of the most famous sky scrapers in the world!',
            imageUrl:'https://lh5.googleusercontent.com/p/AF1QipMZp1yJ0ziULkwIcSxQLLrNF-YEL1LR7RyUwWEe=w408-h268-k-no',
            address:'20 w 34 St , London , 10012 Ny',
            location:{
                lat: 42.99300841943563,
                lng: -81.24313478955656
            },
            creator: 'u2'
        }
    ];
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place =>{
        return place.creator===userId;
    })
    return (
     
        <PlaceList items={loadedPlaces}/>
        
           )
}

export default UserPlaces;
