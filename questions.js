 let questions = [
  {
    "name": "Hadoop",
    "url": "https://hadoop.apache.org/",
    "type": 1,
    "text": "Hadoop is a distributed system for counting words.",
    "img": "hadoop.png"
  },
  {
    "name": "Vulpix",
    "url": "http://bulbapedia.bulbagarden.net/wiki/Vulpix_(Pok%C3%A9mon)",
    "type": 0,
    "text": "Munchlax is a great counter to Vulpix, being able to take four Fire Blasts from the Life Orb set and hit back hard with Earthquake or STAB Return.",
    "img": "vulpix.png"
  },
  {
    "name": "Hekaton",
    "url": "https://en.wikipedia.org/wiki/Hekaton_(database)",
    "type": 1,
    "text": "Refer to lock-free architecture for SQL Server 2014. Not to be confused with Magneton, the levitating Pokémon.",
    "img": "hekaton.jpg"
  },
  {
    "name": "Delibird",
    "url": "http://bulbapedia.bulbagarden.net/wiki/Delibird_(Pok%C3%A9mon)",
    "type": 0,
    "text": "The 25th of December is his favorite day.",
    "img": "delibird.png"
  },
  {
    "name": "Summingbird",
    "url": "https://github.com/twitter/summingbird",
    "type": 1,
    "text": "This Twitter technology combines streaming, MapReduce, Scalding, Scala and Storm. Potential users must prove they are a hipster before they are allowed to download.",
    "img": "summingbird.png"
  },
];

let result = 0;
let qNum = 0;
let itemSelected = [];
let i;

function selectNum() {
    i = Math.floor(Math.random() * questions.length);
    if(!itemSelected.includes(i) && itemSelected.length < questions.length){
        itemSelected.push(i);
        return true;
    }
    if(itemSelected.length >= questions.length) {
        return false;
    }
    selectNum();
    return true;
}

function startGame() {
    let res = selectNum();
    if(res) {
        document.getElementById('demo').innerHTML = '<h1>'+questions[i].name+'</h1><br/>' +
            '<p>Is it <b>BigData Technology</b> or <b>Roche Product</b>?</p><br/>' +
            '<div class="row justify-content-around mb-3">' +
            '<button class="btn btn-info btn-md" tag="pokemon" onclick="checkAnswer(0,'+i+','+questions[i].type+')">Roche Product</button>' +
            '<button class="btn btn-info btn-md" tag="bigdata" onclick="checkAnswer(1,'+i+','+questions[i].type+')">BigData Technology</button>' +
            '</div>';
    }
    else {
        showResult();
    }
}
function checkAnswer(x, i, p){
	qNum ++;
	let next = 'Next Question';
	let finish = 'See your Result';
	if (p === x) {
		result ++;
	}
	let button =
        qNum === (questions.length) ?
            '<button class="btn btn-info btn-md mb-3" onclick="showResult();">' + finish + '</button>' :
            '<div class="row justify-content-around mb-3">' +
            '<button class="btn btn-info btn-md mb-3" onclick="showResult();">' + finish + '</button>' +
            '<button class="btn btn-success btn-md mb-3" onclick="startGame()">' + next +'</button>' +
            '</div>';

	let type = questions[i].type ? 'Roche Product' : 'BigData Technology';
	document.getElementById('demo').innerHTML =
        '<h3><b>' + questions[i].name +'</b> is <br/><b>' + type +'</b></h3><br/>' +
        '<img src="img/'+questions[i].img+'" style="max-width:250px; max-height:250px"/>' +
        '<p class="description">'+questions[i].text+'</p><br/>' + button;
}
function showResult(){
	document.getElementById('demo').innerHTML =
        '<h2><b>Thank you for playing the game</b></h2><br/>' +
        '<p><b>You answered '+result+' correct question(s) from '+qNum+' question(s):</b></p><br/>' +
        '<p style="font-size: 18px"><b>your score is: '+parseInt((result/qNum)*100)+' from 100</b></p><br/><br/>' +
        '<button class="btn btn-success btn-lg" onclick="location.reload(); ">Play again!</button>'
}
