import React from 'react'
import { Router, Route, hashHistory, IndexRedirect, IndexRoute } from 'react-router';
import { Provider } from 'react-redux'
import store from './store'
import App from './components/App';
import Campuses from './components/Campuses';
import Students from './components/Students';
import CreateContainer from './components/CreateContainer';


export default function Root () {
    return (
        <Provider store={store}>
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <Route path="/campus" component={Campuses}/>
                    <Route path="/students" component={Students}/>
                    <Route path="/student/add" component={CreateContainer}/>
                    <Route path="/campus/add" component={CreateContainer}/>
                    {/*<Route path="/campus/:albumId" component={AlbumContainer} onEnter={onAlbumEnter}/>*/}
                    {/*<Route path="/artists/:artistId" component={ArtistContainer} onEnter={onArtistEnter}>*/}
                        {/*<Route path="albums" component={Albums}/>*/}
                        {/*<Route path="songs" component={SongsContainer}/>*/}
                    {/*</Route>*/}
                    {/*<Route path="/create-campus" component={NewPlaylistContainer}/>*/}
                    {/*<Route path="/stations" onEnter={onStationsEnter}>*/}
                        {/*<Route path="/stations/:genreName" component={StationContainer} />*/}
                        {/*<IndexRoute component={StationsContainer} />*/}
                    {/*</Route>*/}
                    <IndexRedirect to="/campus"/>
                </Route>
            </Router>
        </Provider>
    )
}