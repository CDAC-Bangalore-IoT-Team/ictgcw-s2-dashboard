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
                        <Marker position={[17.3112, 74.1739]}>
                            <Popup>
                                Banvadi, Maharashtra
                                <br />
                                GlobalM Pvt Ltd
                            </Popup>
                        </Marker>
                        <Marker position={[19.7617, 74.5222]}>
                            <Popup>
                                Pimpalwadi, Maharashtra
                                <br />
                                GlobalM Pvt Ltd
                            </Popup>
                        </Marker>
                        <Marker position={[17.8165, 73.8162]}>
                            <Popup>
                                Chorambe, Maharashtra
                                <br />
                                GlobalM Pvt Ltd
                            </Popup>
                        </Marker>
                        <Marker position={[19.2405, 73.9683]}>
                            <Popup>
                                Tikekarwadi, Maharashtra
                                <br />
                                GlobalM Pvt Ltd
                            </Popup>
                        </Marker>
                        <Marker position={[18.2724, 73.6934]}>
                            <Popup>
                                Lavhi Bk, Maharashtra
                                <br />
                                GlobalM Pvt Ltd
                            </Popup>
                        </Marker>
                        <Marker position={[16.3647, 80.5827]}>
                            <Popup>
                                Chiluvuru, Andhra Pradesh
                                <br />
                                GlobalM Pvt Ltd
                            </Popup>
                        </Marker>
                        <Marker position={[16.3451, 80.6153]}>
                            <Popup>
                                Manchikallupudi, Andhra Pradesh
                                <br />
                                GlobalM Pvt Ltd
                            </Popup>
                        </Marker>
                        <Marker position={[16.5704, 80.02702]}>
                            <Popup>
                                K R Konduru, Andhra Pradesh
                                <br />
                                GlobalM Pvt Ltd
                            </Popup>
                        </Marker>
                        <Marker position={[16.3344, 80.6042]}>
                            <Popup>
                                Penumuli, Andhra Pradesh
                                <br />
                                GlobalM Pvt Ltd
                            </Popup>
                        </Marker>
                        <Marker position={[15.9573, 80.8703]}>
                            <Popup>
                                Singupalem, Andhra Pradesh
                                <br />
                                GlobalM Pvt Ltd
                            </Popup>
                        </Marker>
                        <Marker position={[15.9594, 80.8769]}>
                            <Popup>
                                Visweswaram, Andhra Pradesh
                                <br />
                                GlobalM Pvt Ltd
                            </Popup>
                        </Marker>
                        <Marker position={[16.033, 80.8703]}>
                            <Popup>
                                Penumudi, Andhra Pradesh
                                <br />
                                GlobalM Pvt Ltd
                            </Popup>
                        </Marker>
                        <Marker position={[16.059, 80.8142]}>
                            <Popup>
                                Karumuru, Andhra Pradesh
                                <br />
                                GlobalM Pvt Ltd
                            </Popup>
                        </Marker>
                        <Marker position={[16.3149, 80.177]}>
                            <Popup>
                                Bethapudi, Andhra Pradesh
                                <br />
                                GlobalM Pvt Ltd
                            </Popup>
                        </Marker>
                        <Marker position={[16.3398, 80.4912]}>
                            <Popup>
                                Pedakakani, Andhra Pradesh
                                <br />
                                GlobalM Pvt Ltd
                            </Popup>
                        </Marker>
                        <Marker position={[16.3513, 80.4799]}>
                            <Popup>
                                Venigandla, Andhra Pradesh
                                <br />
                                GlobalM Pvt Ltd
                            </Popup>
                        </Marker>
                        <Marker position={[16.1116, 80.5536]}>
                            <Popup>
                                Dandamudi, Andhra Pradesh
                                <br />
                                GlobalM Pvt Ltd
                            </Popup>
                        </Marker>
                        <Marker position={[17.1, 80.5391]}>
                            <Popup>
                                Gopalapuram, Andhra Pradesh
                                <br />
                                GlobalM Pvt Ltd
                            </Popup>
                        </Marker>
                        <Marker position={[16.2078, 80.1108]}>
                            <Popup>
                                Kanaparru, Andhra Pradesh
                                <br />
                                GlobalM Pvt Ltd
                            </Popup>
                        </Marker>
                        <Marker position={[16.2537, 80.1756]}>
                            <Popup>
                                Gorijavolu, Andhra Pradesh
                                <br />
                                GlobalM Pvt Ltd
                            </Popup>
                        </Marker>
                        <Marker position={[24.8057, 93.8592]}>
                            <Popup>
                                Thaoroijam, Manipur
                                <br />
                                GlobalM Pvt Ltd
                            </Popup>
                        </Marker>
                        <Marker position={[24.7396, 93.8662]}>
                            <Popup>
                                Yarou Bamdiar, Manipur
                                <br />
                                GlobalM Pvt Ltd
                            </Popup>
                        </Marker>
                        <Marker position={[24.7076, 93.8719]}>
                            <Popup>
                                Lairenjam, Manipur
                                <br />
                                GlobalM Pvt Ltd
                            </Popup>
                        </Marker>
                        <Marker position={[24.7252, 93.8764]}>
                            <Popup>
                                Wakching Khullen, Manipur
                                <br />
                                GlobalM Pvt Ltd
                            </Popup>
                        </Marker>
                        <Marker position={[24.7749, 93.8477]}>
                            <Popup>
                                Salam Keikhu, Manipur
                                <br />
                                GlobalM Pvt Ltd
                            </Popup>
                        </Marker>
                        <Marker position={[23.5555, 72.323]}>
                            <Popup>
                                Sametra, Gujarat
                                <br />
                                Greenvironment Pvt Ltd
                            </Popup>
                        </Marker>
                        <Marker position={[23.6232, 72.3799]}>
                            <Popup>
                                Ramosana, Gujarat
                                <br />
                                Greenvironment Pvt Ltd
                            </Popup>
                        </Marker>
                        <Marker position={[23.5639, 72.3518]}>
                            <Popup>
                                Heduva Rajgar, Gujarat
                                <br />
                                Greenvironment Pvt Ltd
                            </Popup>
                        </Marker>
                        <Marker position={[23.5442, 72.4421]}>
                            <Popup>
                                Kherava, Gujarat
                                <br />
                                Greenvironment Pvt Ltd
                            </Popup>
                        </Marker>
                        <Marker position={[23.4513, 72.4229]}>
                            <Popup>
                                Ambaliyasan, Gujarat
                                <br />
                                Greenvironment Pvt Ltd
                            </Popup>
                        </Marker>
                        <Marker position={[23.5189, 72.2497]}>
                            <Popup>
                                Balol, Gujarat
                                <br />
                                Greenvironment Pvt Ltd
                            </Popup>
                        </Marker>
                        <Marker position={[21.7547, 70.618]}>
                            <Popup>
                                Jetpur, Gujarat
                                <br />
                                Greenvironment Pvt Ltd
                            </Popup>
                        </Marker>
                        <Marker position={[23.5504, 72.1544]}>
                            <Popup>
                                Vijapurda, Gujarat
                                <br />
                                Greenvironment Pvt Ltd
                            </Popup>
                        </Marker>
                        <Marker position={[23.407, 72.3873]}>
                            <Popup>
                                Ganeshpura, Gujarat
                                <br />
                                Greenvironment Pvt Ltd
                            </Popup>
                        </Marker>
                        <Marker position={[23.8326, 72.2145]}>
                            <Popup>
                                Digadi, Gujarat
                                <br />
                                Greenvironment Pvt Ltd
                            </Popup>
                        </Marker>
                        <Marker position={[24.7887, 93.8286]}>
                            <Popup>
                                Ngairangbam, Manipur
                                <br />
                                Greenvironment Pvt Ltd
                            </Popup>
                        </Marker>
                        <Marker position={[24.8921, 93.8986]}>
                            <Popup>
                                Khonghampat, Manipur
                                <br />
                                Greenvironment Pvt Ltd
                            </Popup>
                        </Marker>
                        <Marker position={[26.1212, 72.5087]}>
                            <Popup>
                                Mandali, Gujarat
                                <br />
                                Rydot Infotech Pvt Ltd
                            </Popup>
                        </Marker>
                        <Marker position={[23.8464, 72.6669]}>
                            <Popup>
                                Sipor, Gujarat
                                <br />
                                Rydot Infotech Pvt Ltd
                            </Popup>
                        </Marker>
                        <Marker position={[23.7263, 72.6491]}>
                            <Popup>
                                Chhabaliya, Gujarat
                                <br />
                                Rydot Infotech Pvt Ltd
                            </Popup>
                        </Marker>
                        <Marker position={[23.7458, 72.5929]}>
                            <Popup>
                                Gunja, Gujarat
                                <br />
                                Rydot Infotech Pvt Ltd
                            </Popup>
                        </Marker>
                        <Marker position={[23.7816, 72.5545]}>
                            <Popup>
                                Umata, Gujarat
                                <br />
                                Rydot Infotech Pvt Ltd
                            </Popup>
                        </Marker>
                        <Marker position={[23.7081, 72.516]}>
                            <Popup>
                                Kansa, Gujarat
                                <br />
                                Rydot Infotech Pvt Ltd
                            </Popup>
                        </Marker>
                        <Marker position={[23.6458, 72.6122]}>
                            <Popup>
                                Gothva, Gujarat
                                <br />
                                Rydot Infotech Pvt Ltd
                            </Popup>
                        </Marker>
                        <Marker position={[23.763, 72.3637]}>
                            <Popup>
                                Unava, Gujarat
                                <br />
                                Rydot Infotech Pvt Ltd
                            </Popup>
                        </Marker>
                        <Marker position={[23.886, 72.4391]}>
                            <Popup>
                                Kahoda, Gujarat
                                <br />
                                Rydot Infotech Pvt Ltd
                            </Popup>
                        </Marker>
                        <Marker position={[23.8642, 72.3637]}>
                            <Popup>
                                Brahmanvada, Gujarat
                                <br />
                                Rydot Infotech Pvt Ltd
                            </Popup>
                        </Marker>
                        <Marker position={[24.7417, 93.1153]}>
                            <Popup>
                                Chongtham, Manipur
                                <br />
                                Rydot Infotech Pvt Ltd
                            </Popup>
                        </Marker>
                        <Marker position={[26.7326, 76.1523]}>
                            <Popup>
                                Toonga, Rajasthan
                                <br />
                                Rydot Infotech Pvt Ltd
                            </Popup>
                        </Marker>
                        <Marker position={[26.2722, 79.1859]}>
                            <Popup>
                                Madhogarh, Rajasthan
                                <br />
                                Rydot Infotech Pvt Ltd
                            </Popup>
                        </Marker>
                        <Marker position={[27.1159, 76.8526]}>
                            <Popup>
                                Jatwara, Rajasthan
                                <br />
                                Rydot Infotech Pvt Ltd
                            </Popup>
                        </Marker>
                        <Marker position={[26.6449, 76.0827]}>
                            <Popup>
                                Kotkhawda, Rajasthan
                                <br />
                                Rydot Infotech Pvt Ltd
                            </Popup>
                        </Marker>
                        <Marker position={[29.1144, 77.4296]}>
                            <Popup>
                                Chirchita, Uttar Pradesh
                                <br />
                                Rydot Infotech Pvt Ltd
                            </Popup>
                        </Marker>
                        <Marker position={[29.1975, 77.4444]}>
                            <Popup>
                                Bopura, Uttar Pradesh
                                <br />
                                Rydot Infotech Pvt Ltd
                            </Popup>
                        </Marker>
                        <Marker position={[29.1501, 77.4272]}>
                            <Popup>
                                Chandayan, Uttar Pradesh
                                <br />
                                Rydot Infotech Pvt Ltd
                            </Popup>
                        </Marker>
                        <Marker position={[28.5462, 77.5562]}>
                            <Popup>
                                Dadri, Uttar Pradesh
                                <br />
                                Rydot Infotech Pvt Ltd
                            </Popup>
                        </Marker>
                        <Marker position={[29.1038, 77.4214]}>
                            <Popup>
                                Fakharpur Shaikhpura, Uttar Pradesh
                                <br />
                                Rydot Infotech Pvt Ltd
                            </Popup>
                        </Marker>
                        <Marker position={[27.5925, 48.4252]}>
                            <Popup>
                                Galheta, Uttar Pradesh
                                <br />
                                Rydot Infotech Pvt Ltd
                            </Popup>
                        </Marker>
                        <Marker position={[29.1917, 77.4286]}>
                            <Popup>
                                Garhi Kanmaran, Uttar Pradesh
                                <br />
                                Rydot Infotech Pvt Ltd
                            </Popup>
                        </Marker>
                        <Marker position={[28.9435, 77.1801]}>
                            <Popup>
                                Jhundpur, Uttar Pradesh
                                <br />
                                Rydot Infotech Pvt Ltd
                            </Popup>
                        </Marker>
                        <Marker position={[29.1565, 77.4645]}>
                            <Popup>
                                Khaprana, Uttar Pradesh
                                <br />
                                Rydot Infotech Pvt Ltd
                            </Popup>
                        </Marker>
                        <Marker position={[26.5135, 81.6446]}>
                            <Popup>
                                Mangrauli, Uttar Pradesh
                                <br />
                                Rydot Infotech Pvt Ltd
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
