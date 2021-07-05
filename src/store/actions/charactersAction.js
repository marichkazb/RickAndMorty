import { SET_NEW_CHARACTERS_LIST } from '../types';
import { SET_NEW_EPISODES_LIST } from '../types';
import { SET_NEW_LOCATIONS_LIST } from '../types';


export const setCharactersData = (nextPage, prevPage, pages, charactersList) => ({
    type: SET_NEW_CHARACTERS_LIST,
    payload: { nextPage, prevPage, pages, charactersList },
});

export const setEpisodesData = (nextPage, prevPage, pages, episodesList) => ({
    type: SET_NEW_EPISODES_LIST,
    payload: { nextPage, prevPage, pages, episodesList },
})

export const setLocationsData = (nextPage, prevPage, pages, locationsList) => ({
    type: SET_NEW_LOCATIONS_LIST,
    payload: { nextPage, prevPage, pages, locationsList },
})



