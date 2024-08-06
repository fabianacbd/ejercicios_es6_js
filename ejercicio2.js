const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];


const filterStreamers = (keyword) => {
	const filteredStreamers = streamers.filter(
	  (streamer) =>
		streamer.name.toLowerCase().includes(keyword.toLowerCase())
	);
	console.log(filteredStreamers);
  };

  const searchInput = document.querySelector("#search");
searchInput.addEventListener("input", (ev) => {
  filterStreamers(ev.target.value);
});