import { combineReducers } from 'redux';

const songReducer = () => {
    return [
        { title: 'O meri sapno ki rani kab aaogi tum', duration: '4:10'},
        { title: 'ae watan ae watan aabaad raho tum', duration: '3:45'},
        { title: 'kabhi kabhi aditi', duration: '5:05'},
        { title: 'Pappu song', duration: '3:40'},
        { title: 'banghra pale', duration: '2:10'}
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songReducer,
    selectedSong: selectedSongReducer
});