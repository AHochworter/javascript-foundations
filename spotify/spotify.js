function createCollection(name, description, tracks) {
  //three params
  var collection = {
    name: name,
    description: description,
    tracks: tracks || [],
  };
  // console.log('collection', collection);
  return collection;
}
function createTrack(title, artist, duration) {
  //three params (track, duration, artist)
  var track = {
    title: title || 'unknown',
    artist: artist || 'unknown',
    duration: duration || 0,
  };
  return track;
}

function reviewTrack(track) {
  if (track.artist === 'Red Hot Chili Peppers') {
    return `The song ${track.title} rules!`;
  } else {
    return `I wish this was a Red Hot Chili Peppers song.`;
  }
}
function addTrack(collectionDetails, trackDetails) {
  collectionDetails.tracks.push(trackDetails);
  return collectionDetails;
}
function getTotalDuration(collectionObj) {
  //sum the duration of the tracks from object.tracks array
  var totalDuration = 0;
  for (var i = 0; i < collectionObj.tracks.length; i++) {
    totalDuration += collectionObj.tracks[i].duration;
  }
  console.log(totalDuration);
  return totalDuration;
}

module.exports = {
  createCollection,
  createTrack,
  reviewTrack,
  addTrack,
  getTotalDuration,
  // findTracksByArtist,
};
