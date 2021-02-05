import { useEffect } from 'react';
import { connect } from 'react-redux';
import { NavLink, Route, Switch } from 'react-router-dom';
import classes from './App.module.css';
import NotFound from './components/notFound/notFound';
import Albums from './containers/albums/albums';
import Homepage from './containers/homepage/homepage';
import Photos from './containers/photos/photos';
import { usersLoad } from './redux/actions/actions';

const App = props => {
    const { usersLoad } = props;
    
    useEffect(() => {
      usersLoad()  
    }, [usersLoad])

    return (
      <main>
        <header><NavLink className={classes['go-home']} to='/photo-gallery'>Photo Gallery Name</NavLink></header>
        <div className={classes.content}>
          <Switch>
            <Route path='/photo-gallery' exact component={Homepage} />
            <Route path='/photo-gallery/user-:authorID-albums' component={Albums}/>
            <Route path='/photo-gallery/user-:authorID-album-:albumID' component={Photos}/>
            <Route render={NotFound}/>
          </Switch>
        </div>
        <footer>Контакты © Имя Владельца</footer>
      </main>
      
    );
}

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

function mapDispatchToProps(dispatch) {
  return {
    usersLoad: () => dispatch(usersLoad()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);