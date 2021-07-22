const zapasData = require('./zapasData');
const opelData = require('./opelData');
const Car = require('./Car');

const zapas = new Car(zapasData);
const opelis = new Car(opelData);

zapas.intro();
// This is Zapukas.
opelis.intro();
// This is Opel.

zapas.doorsCount();
// // Zapukas has 2 doors.
opelis.doorsCount();
// // Opel has 4 doors.

zapas.doorsWorking();
// // Zapukas has 2 doors and all works!
opelis.doorsWorking();
// // Opel has 4 doors, but only 3 is working.

zapas.maxDistance();
// // Zapukas can travel maximum 678 km.
opelis.maxDistance();
// // Opel can travel maximum 611 km.

zapas.canTravel(5);
// // Zapukas can travel 5 km.
opelis.canTravel(5);
// // Opel can travel 5 km.
zapas.canTravel(50);
// // Zapukas can travel 50 km.
opelis.canTravel(50);
// // Opel can travel 50 km.
zapas.canTravel(500);
// // Zapukas can't travel 500 km, it has fuel only for 254 km.
opelis.canTravel(500);
// // Opel can't travel 500 km, it has fuel only for 478 km.

zapas.continueTravel(50);
// // Zapukas can travel 50 km, no extra fuel is needed.
opelis.continueTravel(50);
// // Opel can travel 50 km, no extra fuel is needed.
zapas.continueTravel(500);
// // Zapukas can't travel 500 km, you need 18.87 Euros for extra fuel.
opelis.continueTravel(500);
// // Opel can't travel 500 km, you need 2.38 Euros for extra fuel.