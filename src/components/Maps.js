
import React, { Component } from 'react';
import './Maps.css';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
 
class Map extends Component {
  constructor (){
    super()
    this.state = {
      map: null
    }
  }

 mapMoved(map){
  console.log('mapLoaded: ' + JSON.stringify(this.state.map.getCenter()))
}

 mapLoaded(map){
  //console.log('mapLoaded: ' + JSON.stringify(map.getCenter()))
  // console.log('mapLoaded: ')
   if (this.state.map !== null)
   return
   this.setState ({
     map: map
   })
 } 
zoomChanged(){
   console.log('zoomChanged: ' + this.state.map.getZoom())
}

  render() {
    const markers =this.props.markers || []
    
    return (
      <div className="GoogleMaps">
      {/* <h1>GoogleMaps</h1> */}
      <GoogleMap
        ref={this.mapLoaded.bind(this)}
        onDragEnd={this.mapMoved.bind(this)}
        onZoomChanged={this.zoomChanged.bind(this)}
        defaultZoom={this.props.zoom} 
        defaultCenter={this.props.center}>
        {markers.map((marker, index)=>(
        <Marker {...marker} />
        )
        )}
      </GoogleMap>
      </div>
    )
  }
}
export default withGoogleMap(Map)