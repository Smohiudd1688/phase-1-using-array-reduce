const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

let totalBatteries = 0;

function reducer() {
    const batteryCount = (accumulator, element) => {
        return element + accumulator;
    }
    
    return batteryBatches.reduce(batteryCount, 0);
}

totalBatteries = reducer();
