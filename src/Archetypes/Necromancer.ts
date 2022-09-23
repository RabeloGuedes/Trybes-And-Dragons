import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _energyType: EnergyType;
  public static _necromancersCounter = 0;
  
  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer._necromancersCounter += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Necromancer._necromancersCounter;
  }
}