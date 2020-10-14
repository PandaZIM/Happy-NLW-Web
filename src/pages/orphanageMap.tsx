import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi'
import { Map, TileLayer } from "react-leaflet";

import 'leaflet/dist/leaflet.css'

import mapMarker from '../assets/images/Local.svg'
// import { Container } from './styles';
import './orphanageMap.scss'


function OrphanageMap () {
  return(
      <div id="page-map">
          <aside>
            <header>
              <img src={mapMarker} alt="happy"/>

              <h2>Escolha um orfanato no mapa</h2>
              <p>Muitas crianças estão esperando a sua visita :)</p>
            </header>
            <footer>
              <strong>Cuiabá</strong>
              <span>Mato Grosso</span>
            </footer>
          </aside>
          <Map
            center={[-15.5970993,-56.0789764]}
            zoom={15}
            style={{ width: '100%', height: '100%'}}
              >
              <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
          </Map>

          <Link to="" className="create-orphanage">
              <FiPlus size={32} color="#FFF" />
          </Link>
      </div>
  )
}

export default OrphanageMap;