import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard";
import { connect } from 'react-redux';
import { setLocationsData} from '../../store/actions/charactersAction';

 function LocationsList(props) {

   console.log(props.locationsReducer.locationsList)

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/location")
      .then(response => {
        console.log(response);
        const { data: { info: {next,pages,prev}, results } } = response;
        props.setLocationsData(next, prev, pages, results);
      })
  }, []);


   const getCharacters = (isNext) => {
     axios
       .get(isNext ? props.locationsReducer.nextPage : props.locationsReducer.prevPage )
       .then(response => {
         console.log(response);
         const { data: { info: {next,pages,prev}, results } } = response;
         props.setLocationsData(next, prev, pages, results);
       });
   }

  return (
    <section className="locations-list">
      <div className='gridheading'>Rick and Morty locations list</div>
      <div className="items_container_loc">
        {props.locationsReducer.locationsList.map((chars) => {
          console.log({chars})
          return <LocationCard key={chars.id} chars={chars} />;
        })}
      </div>
   <div className="navigation">
     <button className="button-navigation" disabled={!props.locationsReducer.prevPage} onClick={() => getCharacters(false)} >←</button>
     <button className="button-navigation" disabled={!props.locationsReducer.nextPage} onClick={() => getCharacters(true)} >→</button>
   </div>
    </section>
  );
}

export default connect((store) => ({locationsReducer: store.locationsReducer}), {setLocationsData})(LocationsList);