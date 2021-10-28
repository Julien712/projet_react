/* Import React module */
import React from "react";
import GoogleMapReact from 'google-map-react';

/* Infowindow component
TODO: create separated component */

const InfoWindow = (props) => {
    const { address } = props;
    const infoWindowStyle = {
        position: 'relative',
        bottom: 150,
        left: '-45px',
        width: 220,
        backgroundColor: 'white',
        boxShadow: '0 2px 7px 1px rgba(0, 0, 0, 0.3)',
        padding: 10,
        fontSize: 14,
        zIndex: 100,
    };

    return (
        <div style={infoWindowStyle}>
            {address}
        </div>
    );
};
//

/* Marker component
TODO: create separated component */
const Marker = ({ show, name, address }) => {
    const markerStyle = {
        border: '1px solid white',
        borderRadius: '50%',
        height: 12,
        width: 12,
        backgroundColor: show ? 'blue' : 'red',
        cursor: 'pointer',
        zIndex: 10,
    };

    return (
        <>
            <div style={markerStyle}>
                {name}
                {show && <InfoWindow address={address} />}
            </div>
        </>
    );
};
//

/* Google map component */
export default function SimpleMap() {
    // Define collection of place (replace to Redux/CRUD)
    let places = [
        {
            id: 0,
            lat: 48.855590708859566,
            lng: 2.3530613929627053,
            name: "Paris",
            address: "2,161 millions d'habitants",
            show: false,
        },
        {
            id: 1,
            lat: 40.416859636776984,
            lng: -3.7034556102807246,
            name: "Madrid",
            address: "3,223 millions d'habitants",
            show: false,
        },
        {
            id: 2,
            lat: 52.520308621077454, 
            lng: 13.404942771371989,
            name: "Berlin",
            address: "3,645 millions d'habitants",
            show: false,
        },
        {
            id: 3,
            lat: 41.902800021326414,
            lng: 12.496199781074848,
            name: "Rome",
            address: "2,873 millions d'habitants",
            show: false,
        },
        {
            id: 4,
            lat: 52.22761382977419,
            lng: 21.01160953071247,
            name: "Varsovie",
            address: "1,765 million d'habitants",
            show: false,
        },
    ];

    // Create a colleciton of markers
    const markerCollection = [];
    for (let item of places) {
        const row = (
            <Marker
                key={item.id}
                lat={item.lat}
                lng={item.lng}
                show={item.show}
                name={item.name}
                address={item.address}
            />
        );
        markerCollection.push(row);
    }

    // Fonction to display infowindow
    const onChildClickCallback = (key) => {
        // Loop on places
        for (let item of markerCollection) {
            if (item.key === key) {
                /* item.props.show = true */
                console.log('onChildClickCallback',
                    item.props.name, item.props.address)
            }
        }
    };

    return (
        // Important! Always set the container height explicitly
        <div style={{ height: '550px', width: '100%' }}>
            {/* Display GoogleMap */}
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyAGKLyy2Tn32dLsH9hOpsPQlFOe7DWfiJ8" }}
                defaultCenter={{ lat: 46.7791242, lng: 9.0371319 }}
                defaultZoom={5}
                onChildClick={onChildClickCallback}
                position={{ lat: 45.2949307, lng: -0.3545167 }}
            >
                {/* Add Markers */}
                {markerCollection}
            </GoogleMapReact>
        </div>
    );
}