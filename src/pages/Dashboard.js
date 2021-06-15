import React from 'react';
import Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import SmallBox from '../components/small-box/SmallBox';

<link
    rel="stylesheet"
    href="https://unpkg.com/leaflet@1.0.1/dist/leaflet.css"
/>;

Leaflet.Icon.Default.imagePath =
    '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/';

const Dashboard = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-3 col-6">
                    <SmallBox
                        count={150}
                        title="New Orders"
                        type="info"
                        icon="ion-android-people"
                        navigateTo="/"
                    />
                </div>
                <div className="col-lg-3 col-6">
                    <SmallBox
                        count={53}
                        title="Bounce Rate"
                        type="success"
                        navigateTo="/"
                    />
                </div>
                <div className="col-lg-3 col-6">
                    <SmallBox
                        count={44}
                        title="User Registrations"
                        type="warning"
                        navigateTo="/"
                    />
                </div>
                <div className="col-lg-3 col-6">
                    <SmallBox
                        count={65}
                        title="Unique Visitors"
                        type="danger"
                        navigateTo="/"
                    />
                </div>
            </div>
            <div>
                <div className="App">
                    <h1>Sankalp - Hello World</h1>
                    <h2>Lorem Ipsum</h2>
                </div>
                <div className="App">
                    <h1>Sankalp - Hello World</h1>
                    <MapContainer
                        // center={[51.505, -0.09]}
                        center={[12.8416, 77.6636]}
                        zoom={13}
                        // scrollWheelZoom={false}
                        style={{height: '100vh', width: '200wh'}}
                    >
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker // position={[51.505, -0.09]}
                            position={[12.8416, 77.6636]}
                        >
                            <Popup>
                                CDAC Electonic City
                                <br />
                                Bangalore, India
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
                );
            </div>
        </div>
    );
};

export default Dashboard;
