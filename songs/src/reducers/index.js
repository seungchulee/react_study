import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {
            title: 'Runaway',
            duration : '6:30'
        },
        {
            title: 'Get Lucky',
            duration: '4:31'
        },
        {
            title: 'Movie',
            duration: '3:27'
        },
        {
            title: 'Snowman',
            duration: '3:31'
        }
    ]
};

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload
    }
    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});