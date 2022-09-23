import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints: number;
  public static elfsCounter = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf.elfsCounter += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Elf.elfsCounter;
  }
}