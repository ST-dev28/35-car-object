class Car {
    constructor(data) {
        this.data = data;
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

    }
    canTravel() {

    }
    continueTravel() {

    }
}

module.exports = Car;