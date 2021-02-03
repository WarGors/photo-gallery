import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import './App.css';
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
        <header>Photo Gallery Name</header>
        <div className='content'>
          <Switch>
            <Route path='/' exact component={Homepage} />
            <Route path='/user-:authorID-albums' component={Albums}/>
            <Route path='/user-:authorID-album-:albumID' component={Photos}/>
            <Route  render={NotFound}/>
          </Switch>
        </div>
        <footer className='footer'>Контакты © Имя Владельца</footer>
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