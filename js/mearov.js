var Team = function(teamName) {
	var name = teamName;
	var players = [];

	function getName() {
		return name;
	}

	function getPlayers() {
		return players;
	}
	function addPlayer(player) {
		var add = true;
		for (var i = 0 ; i < getPlayers().length && add ; i++) {
			if (getPlayers()[i].getName() == player) {
				add = false;
			}
		}
		if (add) {
			players.push(player);
			console.log("player: " + player + " added to " + getName());
		}
		else {
			console.log("player " + player + " aleady exist!");
		}
	}
	function removePlayer(player) {
		var remove = false;
		for (var i = 0 ; i < getPlayers().length && !remove ; i++) {
			if (getPlayers()[i].getName() == player) {
				players = players.splice(i, 1);

				remove = true;
			}
		}
		if (remove) {
			console.log("removed: " + player);
		}
		else {
			console.log("player " + player + " not found!");
		}
	}
	return {
		getName: getName,
		getPlayers: getPlayers,
		addPlayer: addPlayer,
		removePlayer: removePlayer
	}
};

var Player = function(name) {
	var name;
	var rank = 0;

	function getName() {
		return name;
	}
	function getRank() {
		return rank;
	}
	function setRank(newRank) {
		rank = newRank;
	}
	return {
		getName: getName,
		getRank: getRank
	}
}

// init
var teams = [Team('team1'), Team('team2'), Team('team3')];

// bind event listeners
$(document).ready(function() {
	$('.js-add-player').on('click', function() {
		team = parseInt(this.dataset.team);
		alert(teams[team].getName());
	});
});

