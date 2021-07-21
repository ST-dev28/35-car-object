const opelData = {
    brand: 'Opel',
    doors: [
        {
            front: true,
            side: 'left',
            working: true
        },
        {
            front: true,
            side: 'right',
            working: true
        },
        {
            front: false,
            side: 'left',
            working: false
        },
        {
            front: false,
            side: 'right',
            working: true
        }
    ],
    tankSize: {
        maxSize: 55,
        currentSize: 43
    },
    fuelComsumption: 9,
    fuelCostPerLitre: 1.2
}

module.exports = opelData;