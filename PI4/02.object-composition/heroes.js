function main() {
  function canFight(stats) {
    return {
      fight: () => {
        stats.stamina--;
        console.log(`${stats.name} slashes at the foe!`);
      },
    };
  }
  function canCast(stats) {
    return {
      cast: (spell) => {
        stats.mana--;
        console.log(`${stats.name} cast ${spell}`);
      },
    };
  }
  let obj = {
    fighter: (name) => {
      let baseStats = {
        name,
        health: 100,
        stamina: 100,
      };
      return { ...baseStats, ...canFight(baseStats) };
    },
    mage: (name) => {
      let baseStats = {
        name,
        health: 100,
        mana: 100,
      };
      return Object.assign(baseStats, canCast(baseStats));
    },
  };

  return obj;
}

let create = main();

let newFighter = create.fighter("brute");
newFighter.fight();
newFighter.fight();
newFighter.fight();
// // console.log(newFighter);

// let shog = create.fighter("shog");
// shog.fight();
// console.log(shog);
// console.log(newFighter);

let scrochy = create.mage("Scorh");
scrochy.cast("fireball");
