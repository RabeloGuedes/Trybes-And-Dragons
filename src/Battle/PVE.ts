import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  private _character: Fighter;
  private _enemies: SimpleFighter[] | Fighter[] | Monster[];
  constructor(
    character: Fighter,
    enemies: SimpleFighter[] | Fighter[] | Monster[],
  ) {
    if (enemies.length < 1) {
      throw new Error('At least one monster is expected.');
    } super(character);
    this._character = character;
    this._enemies = enemies;
  }

  public fight(): number {
    this._enemies.every((enemy) => {
      while (this._character.lifePoints > 0 && enemy.lifePoints > 0) {
        this._character.attack(enemy);
        enemy.attack(this._character);
      } return this._character.lifePoints >= 0;
    });
    return super.fight();
  }
}