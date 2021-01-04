import React from 'react';
import {Route, Link} from 'react-router-dom';

function Rooms({match}) {
    return (
        <div>
            <h2>방방</h2>
            <Link to={`${match.url}/blueRoom`}>blue</Link>
            <br/>
            <Link to={`${match.url}/redRoom`}>red</Link>
            <br/>
            <Route path={`${match.url}/:roomId`} component={Room}/>
            <Route exact path={match.url}
                render={() => <h3>choose room</h3>}></Route>
        </div>
    )
}
export default Rooms;

function Room({match}) {
    return <h2>{`${match.params.roomId}방 선택`}</h2>
}