//quantity -> the amount we convert (an integer)
//currentType -> the current measurement type (a string)
//expectedType -> the measurement type the user wants to achieve (a string)

class Mass {
    static conversions = {
        ounce: 28.35,
        pound: 453.592,
        gram: 1,
        decagram: 10,
        kilogram: 1000
    };

    constructor(cm) {
        this.cm = cm;
    };
}

Object.entries(Mass.conversions).forEach(([unit, conversion]) => {
    Object.defineProperty(
        Mass,
        `from${unit.charAt(0).toUpperCase() + unit.slice(1)}`,
        {
            get: function () {
                return value => new Mass(value * conversion);
            },
        }
    );

    Object.defineProperty(Mass.prototype, unit, {
        get: function () {
            return this.cm / conversion;
        },
    });
});

// ---- TEST START ----
//const mass = Mass.fromKilogram(1);
// console.log("1 kilogram to ounces: " + mass.ounce);
// console.log("1 kilogram to pounds: " + mass.pound);
// console.log("1 kilogram to grams: " + mass.gram);
// ---- TEST END ----

var mass;

//Converts the Metric mass system into the Imperial mass system
function ConvertMassToImperial(quantity, currentType, expectedType) {
    //Checking what measurement type we want to achieve
    if (expectedType === "Ounce") {
        //Checking the currently used measurement type
        switch (currentType) {
            case "Gram":
                // 1 Ounce (oz) == 28.35 Gram (g)
                mass = Mass.fromGram(quantity)
                return console.log(quantity + "Gram (g) is " + mass.ounce + " Ounce (oz)");
                break;
            case "Decagram":
                return quantity / 10 * 0.03527396;
                break;
            case "Kilogram":
                return quantity / 1000 * 0.03527396;
                break;
        }
    }
    else if (expectedType === "Pound") {
        //Checking the currently used measurement type
        switch (currentType) {
            case "Gram":
                // 1 Pound (lb) == 454 Gram (g)
                return quantity * 0.03527396;
                break;
            case "Decagram":
                return quantity / 10 * 0.03527396;
                break;
            case "Kilogram":
                return quantity / 1000 * 0.03527396;
                break;
        }
    }

    return console.error("Error: Unknown measurement type");
};

//Converts the Imperial mass system into the Metric mass system
function ConvertMassToMetric(measurement) {

};

//Converts the Metric volume system into the Imperial volume system
function ConvertVolumeToImperial(measurement) {

};

//Converts the Imperial volume system into the Metric volume system
function ConvertVolumeToMetric(measurement) {

};