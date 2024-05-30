import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    // Ensure that cloneCar returns an instance of Car
    return new Car(this._brand, this._motor, this._color);
  }
}
