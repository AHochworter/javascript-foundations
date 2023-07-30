function createPlayer(name, age, moveset) {
  var player = {
    name: name,
    age: age,
    moveset: moveset,
  };
  return player;
}

function createLevel(levelName, players) {
  var level = {
    name: levelName,
    players: players,
    coins: 0,
    lives: 3,
  };
  return level;
}

function findCoins(levelObj, coins) {
  //   console.log('levelObj', levelObj);
  levelObj.coins += coins;
  if (levelObj.coins >= 100) {
    levelObj.lives += 1;
  }
  //   console.log('levelObj after', levelObj);
  return levelObj;
}

function defeatPlayer(levelObj) {
  levelObj.lives -= 1;
  if (levelObj.lives === 0) {
    return `GAME OVER`;
  }
  console.log('levelObj', levelObj);
  return levelObj;
}
module.exports = {
  createPlayer,
  createLevel,
  findCoins,
  defeatPlayer,
};
