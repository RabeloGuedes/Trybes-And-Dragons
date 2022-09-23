import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints: number;
  public static halflingCounter = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling.halflingCounter += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Halfling.halflingCounter;
  }
}