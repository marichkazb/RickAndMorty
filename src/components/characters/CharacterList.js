import React, { useEffect } from "react";
import axios from "axios";
import CharacterCard from "./Character";
import { connect } from 'react-redux';
import { setCharactersData } from '../../store/actions/charactersAction';

function CharacterList(props) {

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/?page=1")
      .then(response => {
        console.log(response);
        const { data: { info: {next,pages,prev}, results } } = response;
        props.setCharactersData(next, prev, pages, results);
      })
  }, []);

  const getCharacters = (isNext) => {
    axios
      .get(isNext ? props.charactersReducer.nextPage : props.charactersReducer.prevPage )
      .then(response => {
        console.log(response);
        const { data: { info: {next,pages,prev}, results } } = response;
        props.setCharactersData(next, prev, pages, results);
      });
  }

  return (
    <section className="character-list">
      <div className='gridgeading'>Rick and Morty character list</div>
      <div className="items_container">
      {props.charactersReducer.charactersList.map((chars, id) => {
        return <CharacterCard key={id} chars={chars} />;
      })}
      </div>
      <div className="navigation">
      <button className="button-navigation" disabled={!props.charactersReducer.prevPage} onClick={() => getCharacters(false)} >←</button>
      <button className="button-navigation" disabled={!props.charactersReducer.nextPage} onClick={() => getCharacters(true)} >→</button>
      </div>
    </section>
  );
}
export default connect((store) => ({charactersReducer: store.charactersReducer}), {setCharactersData})(CharacterList);
