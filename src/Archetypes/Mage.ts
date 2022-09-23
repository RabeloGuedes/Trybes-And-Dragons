import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _energyType: EnergyType;
  public static _magesCounter = 0;
  
  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage._magesCounter += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Mage._magesCounter;
  }
}