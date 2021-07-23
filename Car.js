class Car {
    constructor(data) {
        this.data = data;
        this.tankSize = this.data.tankSize;
        this.fuelConsumption = this.data.fuelConsumption;
        this.fuelCostPerLitre = this.data.fuelCostPerLitre;
    }

    intro() {
        console.log(`This is ${this.data.brand}.`);
    }

    doorsCount(){
        const doors = this.data.doors;
        console.log(`${this.data.brand} has ${doors.length} doors.`)
    }

    doorsWorking() {
        const doors = this.data.doors;
        let brokenDoorCount = 0;

        for (const door of doors) {
            if (!door.working) {
                brokenDoorCount++;
            }
        }

        const workingDoorCount = doors.length - brokenDoorCount;

        let howManyDoorsWorks = ``

        if (brokenDoorCount === 0) {
            howManyDoorsWorks = `and all works!`
            console.log(`${this.data.brand} has ${doors.length} doors ${howManyDoorsWorks}`)
            return
        }

        if (workingDoorCount === 0) {
            howManyDoorsWorks = `and all broken!`
            console.log(`${this.data.brand} has ${doors.length} doors ${howManyDoorsWorks}`)
            return
        } else {
            howManyDoorsWorks = `, but only ${workingDoorCount} are working.`
            console.log(`${this.data.brand} has ${doors.length} doors${howManyDoorsWorks}`)
            return
        }
    }
    maxDistance() {
        const maxTankSize = this.tankSize.maxSize;
        const fuelConsumption = this.data.fuelConsumption;

        const maxDistancePossible = (maxTankSize / fuelConsumption) * 100;

            this.maxDistancePossible = maxDistancePossible;
            console.log(`${this.data.brand} can travel maximum ${this.maxDistancePossible.toFixed(0)} km.`);

    }

    canTravel(distance) {
        const fuel = this.tankSize.currentSize;
        const fuelConsumption = this.data.fuelConsumption;
        const maxDistancePossible = (fuel / fuelConsumption) * 100;

        this.maxDistancePossible = maxDistancePossible;

        if (distance <= this.maxDistancePossible) {
            console.log(`${this.data.brand} can travel ${distance} km.`);

        } else{

            console.log(`${this.data.brand} can't travel ${distance} km, it has fuel only for ${this.maxDistancePossible.toFixed(0)} km`);
        }
    }

    continueTravel(distance) {
        const maxDistancePossible = this.maxDistancePossible;
        const pricePerKm = Math.floor(this.fuelConsumption * this.fuelCostPerLitre*10);
        const pricePerKmRound = pricePerKm/1000;
        let moneyNeed = 0;

        if (distance <= maxDistancePossible) {
            console.log(`${this.data.brand} can travel ${distance} km, no extra fuel is needed.`)
        } else {
            moneyNeed = (distance - maxDistancePossible) * pricePerKmRound;
            console.log(`${this.data.brand} can't travel ${distance} km, you need ${moneyNeed.toFixed(2)} Euros for extra fuel.`)
        }
    }
}

module.exports = Car;