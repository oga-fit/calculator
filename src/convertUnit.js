/**
 * Convert Metric to Imperial
 * @param {Number} [cm] - Centimeter as a Number
 * @param {Number} [kg] - Kilogram as a Number
 */
export const toImperial = (cm, kg) => {
  if (cm) {
    let inches = +(180 * 0.393700787).toFixed(0);
    const feet = Math.floor(inches / 12);
    inches %= 12;

    return `${feet}'${inches}"`;
  } else if (kg) {
    return Math.round(Number(kg) * 2.20462262185);
  } else {
    return console.error('Minimum of 1 property required "cm || kg"');
  }
};

/**
 * Convert Imperial to Metric
 * @param {Number} [ft] - Feet as a Number
 * @param {Number} [inch] - Inches as a Number
 * @param {Number} [ftInch] - Length in the x'x" format
 * @param {Number} [lbs] - Weight in lbs as a Number
 *
 * @returns {Number} - Length in CM or weight in KG
 */
export const toMetric = (ft, inch, ftInch, lbs) => {
  const pattern = /^(?!$|.*\'[^\x22]+$)(?:([0-9]+)\')?(?:([0-9]+)\x22?)?$/; // Deconstruct ft (') inch (") format to numbers.

  if (ft) {
    return feet * 30.48; // Convert ft to cm
  } else if (ft && inch) {
    return feet * 30.48 + inches * 2.54; // Convert ft & inches to cm
  } else if (ftInch) {
    const feet = ftInch.match(pattern)[0];
    const inches = ftInch.match(pattern)[1];

    return feet * 30.48 + inches * 2.54;
  } else if (lbs) {
    return Math.round(Number(lbs) * 0.45359237);
  } else {
    return console.error(
      'Minimum of 1 property required "ft || ft & inch || ftInch || lbs"'
    );
  }
};
