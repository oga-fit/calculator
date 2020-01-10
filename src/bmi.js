/**
 * @param {Number} weight         Weight as a number.
 * @param {Number} height         Height as a number in cm.
 *
 * @returns {Number} Returns BMI value.
 */
module.exports = ({ weight, height }) => {
  if (!weight) return console.error("'Weight' is a required property!"); // Check if weight is given.
  if (!height) return console.error("'Height' is a required property!"); // Check if height is given.

  // Calculate BMI using weight and height.
  // TODO take in account age and gender.
  const bmi = Number((weight / (height / 100)) ^ 2).toFixed(2);

  // Return the bmi value.
  return bmi;
};
