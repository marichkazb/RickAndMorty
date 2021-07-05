import './App.css';
import {connect} from 'react-redux';
import {removeOneFilm, addOneFilm} from './store/actions/counter';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import GlobalStyle from './globalStyles';
import Hero from './components/Hero';
import Footer from './components/footer/index';
import WatchList from './components/WatchList/WatchList';
import CharacterList from './components/characters/CharacterList'
import LocationsList from "./components/Locations/LocationsList";

function App(props) {
    const remove = () => {
        props.remove();
    }
    const add = () => {
        props.add();
    }
    return (
        <>
            <Router> 
                <GlobalStyle />
                <Navbar />
                  {/*<Hero />   */}
                <Route path='/' exact component={Hero} />
                <Route path='/characters' exact component={CharacterList} />
                <Route path='/locations' exact component={LocationsList} />
                <Route path='/watchlist' exact component={WatchList} />
                <Footer />
            </Router>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        films: state.films.filmsCount,
    }
}
const mapDispatchToProps = {
    add: addOneFilm,
    remove: removeOneFilm,
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
