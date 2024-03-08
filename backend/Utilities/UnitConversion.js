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

class Volume {
    static conversions = {
        teaspoon: 4.92892,
        tablespoon: 14.7868,
        fluid_ounce: 29.5735,
        cup: 236.588,
        pint: 473.176,
        quart: 946.353,
        gallon: 3785.41,
        milliliter: 1,
        centiliter: 10,
        deciliter: 100,
        liter: 1000
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

Object.entries(Volume.conversions).forEach(([unit, conversion]) => {
    Object.defineProperty(
        Volume,
        `from${unit.charAt(0).toUpperCase() + unit.slice(1)}`,
        {
            get: function () {
                return value => new Volume(value * conversion);
            },
        }
    );

    Object.defineProperty(Volume.prototype, unit, {
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
                mass = Mass.fromGram(quantity);
                return console.log(quantity + " Gram (g) is " + mass.ounce + " Ounce (oz)");
            case "Decagram":
                mass = Mass.fromDecagram(quantity);
                return console.log(quantity + " Decagram (dag) is " + mass.ounce + " Ounce (oz)");
            case "Kilogram":
                mass = Mass.fromKilogram(quantity);
                return console.log(quantity + " Kilogram (kg) is " + mass.ounce + " Ounce (oz)");
        }
    }
    else if (expectedType === "Pound") {
        switch (currentType) {
            case "Gram":
                mass = Mass.fromGram(quantity);
                return console.log(quantity + " Gram (g) is " + mass.pound + " Pound (lb)");
            case "Decagram":
                mass = Mass.fromDecagram(quantity);
                return console.log(quantity + " Decagram (dag) is " + mass.pound + " Pound (lb)");
            case "Kilogram":
                mass = Mass.fromKilogram(quantity);
                return console.log(quantity + " Kilogram (kg) is " + mass.pound + " Pound (lb)");
        }
    }

    return console.error("Error: Unknown measurement type");
};

//Converts the Imperial mass system into the Metric mass system
function ConvertMassToMetric(quantity, currentType, expectedType) {
    //Checking what measurement type we want to achieve
    if (expectedType === "Gram") {
        //Checking the currently used measurement type
        switch (currentType) {
            case "Ounce":
                mass = Mass.fromOunce(quantity);
                return console.log(quantity + " Ounce (oz) is " + mass.gram + " Gram (g)");
            case "Pound":
                mass = Mass.fromPound(quantity);
                return console.log(quantity + " Pound (pd) is " + mass.gram + " Gram (g)");
        }
    }
    else if (expectedType === "Decagram") {
        switch (currentType) {
            case "Ounce":
                mass = Mass.fromOunce(quantity);
                return console.log(quantity + " Ounce (oz) is " + mass.decagram + " Decagram (dag)");
            case "Pound":
                mass = Mass.fromPound(quantity);
                return console.log(quantity + " Pound (pd) is " + mass.decagram + " Decagram (dag)");
        }
    }
    else if (expectedType === "Kilogram") {
        switch (currentType) {
            case "Ounce":
                mass = Mass.fromOunce(quantity);
                return console.log(quantity + " Ounce (oz) is " + mass.kilogram + " Kilogram (kg)");
            case "Pound":
                mass = Mass.fromPound(quantity);
                return console.log(quantity + " Pound (pd) is " + mass.kilogram + " Kilogram (kg)");
        }
    }

    return console.error("Error: Unknown measurement type");
};


var volume;

//Converts the Metric volume system into the Imperial volume system
function ConvertVolumeToImperial(quantity, currentType, expectedType) {
    if (expectedType === "Teaspoon") {
        //Checking the currently used measurement type
        switch (currentType) {
            case "Milliliter":
                volume = Volume.fromMilliliter(quantity);
                return console.log(quantity + " Milliliter (ml) is " + volume.teaspoon + " Teaspoon (tsp)");
            case "Centiliter":
                volume = Volume.fromCentiliter(quantity);
                return console.log(quantity + " Centiliter (cl) is " + volume.teaspoon + " Teaspoon (tsp)");
            case "Deciliter":
                volume = Volume.fromDeciliter(quantity);
                return console.log(quantity + " Deciliter (dl) is " + volume.teaspoon + " Teaspoon (tsp)");
            case "Liter":
                volume = Volume.fromLiter(quantity);
                return console.log(quantity + " Liter (l) is " + volume.teaspoon + " Teaspoon (tsp)");
        }
    }
    else if (expectedType === "Tablespoon") {
        switch (currentType) {
            case "Milliliter":
                volume = Volume.fromMilliliter(quantity);
                return console.log(quantity + " Milliliter (ml) is " + volume.tablespoon + " Tablespoon (tbsp)");
            case "Centiliter":
                volume = Volume.fromCentiliter(quantity);
                return console.log(quantity + " Centiliter (cl) is " + volume.tablespoon + " Tablespoon (tbsp)");
            case "Deciliter":
                volume = Volume.fromDeciliter(quantity);
                return console.log(quantity + " Deciliter (dl) is " + volume.tablespoon + " Tablespoon (tbsp)");
            case "Liter":
                volume = Volume.fromLiter(quantity);
                return console.log(quantity + " Liter (l) is " + volume.tablespoon + " Tablespoon (tbsp)");
        }
    }
    else if (expectedType === "Fluid ounce") {
        switch (currentType) {
            case "Milliliter":
                volume = Volume.fromMilliliter(quantity);
                return console.log(quantity + " Milliliter (ml) is " + volume.fluid_ounce + " Fluid ounce (fl oz)");
            case "Centiliter":
                volume = Volume.fromCentiliter(quantity);
                return console.log(quantity + " Centiliter (cl) is " + volume.fluid_ounce + " Fluid ounce (fl oz)");
            case "Deciliter":
                volume = Volume.fromDeciliter(quantity);
                return console.log(quantity + " Deciliter (dl) is " + volume.fluid_ounce + " Fluid ounce (fl oz)");
            case "Liter":
                volume = Volume.fromLiter(quantity);
                return console.log(quantity + " Liter (l) is " + volume.fluid_ounce + " Fluid ounce (fl oz)");
        }
    }
    else if (expectedType === "Cup") {
        switch (currentType) {
            case "Milliliter":
                volume = Volume.fromMilliliter(quantity);
                return console.log(quantity + " Milliliter (ml) is " + volume.cup + " Cup (c)");
            case "Centiliter":
                volume = Volume.fromCentiliter(quantity);
                return console.log(quantity + " Centiliter (cl) is " + volume.cup + " Cup (c)");
            case "Deciliter":
                volume = Volume.fromDeciliter(quantity);
                return console.log(quantity + " Deciliter (dl) is " + volume.cup + " Cup (c)");
            case "Liter":
                volume = Volume.fromLiter(quantity);
                return console.log(quantity + " Liter (l) is " + volume.cup + " Cup (c)");
        }
    }
    else if (expectedType === "Pint") {
        switch (currentType) {
            case "Milliliter":
                volume = Volume.fromMilliliter(quantity);
                return console.log(quantity + " Milliliter (ml) is " + volume.pint + " Pint (p)");
            case "Centiliter":
                volume = Volume.fromCentiliter(quantity);
                return console.log(quantity + " Centiliter (cl) is " + volume.pint + " Pint (p)");
            case "Deciliter":
                volume = Volume.fromDeciliter(quantity);
                return console.log(quantity + " Deciliter (dl) is " + volume.pint + " Pint (p)");
            case "Liter":
                volume = Volume.fromLiter(quantity);
                return console.log(quantity + " Liter (l) is " + volume.pint + " Pint (p)");
        }
    }
    else if (expectedType === "Quart") {
        switch (currentType) {
            case "Milliliter":
                volume = Volume.fromMilliliter(quantity);
                return console.log(quantity + " Milliliter (ml) is " + volume.quart + " Quart (qt)");
            case "Centiliter":
                volume = Volume.fromCentiliter(quantity);
                return console.log(quantity + " Centiliter (cl) is " + volume.quart + " Quart (qt)");
            case "Deciliter":
                volume = Volume.fromDeciliter(quantity);
                return console.log(quantity + " Deciliter (dl) is " + volume.quart + " Quart (qt)");
            case "Liter":
                volume = Volume.fromLiter(quantity);
                return console.log(quantity + " Liter (l) is " + volume.quart + " Quart (qt)");
        }
    }
    else if (expectedType === "Gallon") {
        switch (currentType) {
            case "Milliliter":
                volume = Volume.fromMilliliter(quantity);
                return console.log(quantity + " Milliliter (ml) is " + volume.gallon + " Gallon (gal)");
            case "Centiliter":
                volume = Volume.fromCentiliter(quantity);
                return console.log(quantity + " Centiliter (cl) is " + volume.gallon + " Gallon (gal)");
            case "Deciliter":
                volume = Volume.fromDeciliter(quantity);
                return console.log(quantity + " Deciliter (dl) is " + volume.gallon + " Gallon (gal)");
            case "Liter":
                volume = Volume.fromLiter(quantity);
                return console.log(quantity + " Liter (l) is " + volume.gallon + " Gallon (gal)");
        }
    }

    return console.error("Error: Unknown measurement type");
};

//Converts the Imperial volume system into the Metric volume system
function ConvertVolumeToMetric(quantity, currentType, expectedType) {

    return console.error("Error: Unknown measurement type");
};

// ---- TEST START ----

//const mass = Mass.fromKilogram(1);
// console.log("1 kilogram to ounces: " + mass.ounce);
// console.log("1 kilogram to pounds: " + mass.pound);
// console.log("1 kilogram to grams: " + mass.gram);
//
// ConvertToMassImperial Test --
//                                |
//                                V
ConvertMassToImperial(28.35, "Gram", "Ounce");
ConvertMassToImperial(28.35, "Decagram", "Ounce");
ConvertMassToImperial(28.35, "Kilogram", "Ounce");
ConvertMassToImperial(1, "Gram", "Pound");
ConvertMassToImperial(1, "Decagram", "Pound");
ConvertMassToImperial(1, "Kilogram", "Pound");
//
// ConvertToMassMetric Test --
//                                |
//                                V
ConvertMassToMetric(1, "Ounce", "Gram");
ConvertMassToMetric(1, "Pound", "Gram");
ConvertMassToMetric(1, "Ounce", "Decagram");
ConvertMassToMetric(1, "Pound", "Decagram");
ConvertMassToMetric(1, "Ounce", "Kilogram");
ConvertMassToMetric(1, "Pound", "Kilogram");
//
// ConvertToVolumeImperial Test --
//                                |
//                                V
// Teaspoon
ConvertVolumeToImperial(1, "Milliliter", "Teaspoon");
ConvertVolumeToImperial(1, "Deciliter", "Teaspoon");
ConvertVolumeToImperial(1, "Centiliter", "Teaspoon");
ConvertVolumeToImperial(1, "Liter", "Teaspoon");
// Tablespoon
ConvertVolumeToImperial(1, "Milliliter", "Tablespoon");
ConvertVolumeToImperial(1, "Deciliter", "Tablespoon");
ConvertVolumeToImperial(1, "Centiliter", "Tablespoon");
ConvertVolumeToImperial(1, "Liter", "Tablespoon");
// Fluid ounce
ConvertVolumeToImperial(1, "Milliliter", "Fluid ounce");
ConvertVolumeToImperial(1, "Deciliter", "Fluid ounce");
ConvertVolumeToImperial(1, "Centiliter", "Fluid ounce");
ConvertVolumeToImperial(1, "Liter", "Fluid ounce");
// Cup
ConvertVolumeToImperial(1, "Milliliter", "Cup");
ConvertVolumeToImperial(1, "Deciliter", "Cup");
ConvertVolumeToImperial(1, "Centiliter", "Cup");
ConvertVolumeToImperial(1, "Liter", "Cup");
// Pint
ConvertVolumeToImperial(1, "Milliliter", "Pint");
ConvertVolumeToImperial(1, "Deciliter", "Pint");
ConvertVolumeToImperial(1, "Centiliter", "Pint");
ConvertVolumeToImperial(1, "Liter", "Pint");
// Quart
ConvertVolumeToImperial(1, "Milliliter", "Quart");
ConvertVolumeToImperial(1, "Deciliter", "Quart");
ConvertVolumeToImperial(1, "Centiliter", "Quart");
ConvertVolumeToImperial(1, "Liter", "Quart");
// Gallon
ConvertVolumeToImperial(1, "Milliliter", "Gallon");
ConvertVolumeToImperial(1, "Deciliter", "Gallon");
ConvertVolumeToImperial(1, "Centiliter", "Gallon");
ConvertVolumeToImperial(1, "Liter", "Gallon");
//
// ---- TEST END ----