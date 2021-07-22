class Car {
    constructor(data) {
        this.data = data;
        this.tankSize = this.data.tankSize;
        this.fuelComsumption = this.data.fuelComsumption;
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
    maxDistance(print = true) {
        const maxTankSize = this.tankSize.maxSize;
        const fuelConsumption = this.data.fuelComsumption;

        const maxDistance = (maxTankSize / fuelConsumption) * 100;

        if (print) {

            console.log(`${this.data.brand} can travel maximum ${maxDistance.toFixed(0)} km.`);
        }
        return maxDistance
    }

    canTravel(distance, print = true) {
        const fuel = this.tankSize.currentSize;
        const fuelConsumption = this.data.fuelComsumption;
        const maxDistance = (fuel / fuelConsumption) * 100;

        if (distance <= maxDistance && print) {
            console.log(`${this.data.brand} can travel ${distance} km.`);

        } else if (print) {
            console.log(`${this.data.brand} can't travel ${distance} km, it has fuel only for ${maxDistance.toFixed(0)} km`);
        }

        // const canTravel = distance <= maxDistance ? console.log(`${this.brand} can travel ${distance} km.`) : console.log(`${this.brand} can't travel ${distance} km, it has fuel only for ${maxDistance.toFixed(0)} km`);
        return maxDistance
    }
    continueTravel(distance) {
        const maxDistance = this.canTravel(distance, false);

        const kilometerPrice = this.fuelComsumption * this.fuelCostPerLitre / 100;

        let needMoney = 0;

        if (distance <= maxDistance) {
            console.log(`${this.data.brand} can travel ${distance} km, no extra fuel is needed.`)
        } else {
            needMoney = (distance - maxDistance) * kilometerPrice;
            console.log(`${this.data.brand} can't travel ${distance} km, you need ${needMoney.toFixed(2)} Euros for extra fuel.`)
        }
    }
}

module.exports = Car;