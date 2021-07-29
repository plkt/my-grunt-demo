'use strict';

function Goblin(name) {
  this.name = name || 'Zomeone is knockin';
}

Goblin.prototype.speak = function () {
  console.log('Waaagh!');
};

