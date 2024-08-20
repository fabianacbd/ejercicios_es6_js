1.1

const game = {title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020}

const { title, gender, year} = game;

1.2
const fruits = ['Banana', 'Strawberry', 'Orange']; 
const [primero, segundo, tercero] = fruits;
console.log(primero);
console.log(segundo);
console.log(tercero);

1.3
const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'}
};

const animals = {name: 'Bengal Tiger', race: 'Tiger'};
const {name, race} = animals;
console.log(animals);

1.4

const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] }

const year {itv} = car;
const nom {name} = car;
const [primero, segundo, tercero] = car;
console.log(itv);
console.log(name);

2.1

const pointsList = [32, 54, 21, 64, 75, 43];

const nums = [...pointsList];
console.log(nums)

2.2

const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const newToy = {...toy};
console.log(newToy)

2.3

const pointsList = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54,87,99,65,32];
const list = [...pointsList, ...pointsLis2];
console.log(list)

2.4

const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}

const newToys = {...toy, ...toyUpdate};
console.log(newToys)

2.5
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
const [segundo, ...rest] = colors;
console.log(colors)

3.1
const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const names = users.map(user => user.name);

console.log(names);

3.2

const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const withA = users.map(user => {
    if (user.name.startsWith('A')) {
        return'Anacleto';}
        return user.name;
    });
    
    console.log(withA);

3.3

const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];

const visited = cities.map(city => {
    if (city.isVisited) {
        return city.name + "(Visitado)"
    } return city.name;
})

console.log(visited)

4.1
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const mayor19 = ages.filter(age => age > 19);
console.log(mayor19)

4.2
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const pares = ages.filter(age => age % 2 === 0)
console.log(pares)

4.3
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const Lol = streamers.filter(streamer => streamer.gameMorePlayed === 'League of Legends')
console.log(Lol)

4.4
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const streamersWithU = streamers.filter(streamer => streamer.name.includes("u"))
console.log(streamersWithU)

4.5
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];
 
const filteredStreamers = streamers
    .filter(streamer => streamer.gameMorePlayed.includes('Legends'))
    .map(streamer => {
        if (streamer.age > 35) {
            return { ...streamer, gameMorePlayed: streamer.gameMorePlayed.toUpperCase() };
        }
        return streamer;
    });
	console.log(filteredStreamers)

6.1

const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

const sum = exams.reduce((acc, exam) => acc + exam.score, 0);
console.log(sum); 


6.2

const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

const aprobadosScore = exams.reduce((acc, exam) => {
    return exam.score >= 5 ? acc + exam.score : acc;
}, 0);

console.log(totalApprovedScore); 

6.3 
const totalScore = exams.reduce((acc, exam) => acc + exam.score, 0);
const mediaTotal = totalScore / exams.length;
console.log(mediaTotal)

7.1 
const videogames = [
    {name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5},
    {name: 'Assasins Creed Valhala', genders: ['Aventura', 'RPG'], score: 4.5},
    {name: 'The last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8},
    {name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5},
    {name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5},
    {name: 'Legend of Zelda: Breath of the wild', genders: ['RPG'], score: 10},
]



const findRPG = videogames.find((videogame) => videogame.genders === "RPG");
console.log(findRPG)