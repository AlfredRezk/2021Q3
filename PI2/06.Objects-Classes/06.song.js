class Song { 
  constructor(typeList, name, time) { 
    this.typeList = typeList;
    this.name = name; 
    this.time = time
  }
}


function main(songsArr) { 

  // remove the first element in array 
  songsArr.shift();
  let selectedPlayList = songsArr.pop();

  let songs = songsArr.map((songInfo) => {
    let [typeList, name, time] = songInfo.split('_');
    return new Song(typeList, name, time)
   })

  // Search for the selected playlist

  if (selectedPlayList != 'all') { 
      songs = songs.filter((song) => song.typeList === selectedPlayList);
  }
  

  // Loop through the array and print its songs
  songs.forEach((song) => console.log(song.name))


}


main([
	4,
	"favourite_DownTown_3:14",
	"listenLater_Andalouse_3:24",
	"favourite_In To The Night_3:58",
	"favourite_Live It Up_3:48",
	"all",
]);