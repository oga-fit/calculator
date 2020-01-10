const iifym = require("iifym.js");

/**
 * @param {Number} weight         Weight as a number.
 * @param {Number} height         Height as a number in metric.
 * @param {Number} age            Age as a number.
 * @param {String} gender         Gender as a string either "male" or "female".
 * @param {Boolean} isMetric      isMetric as Boolean.
 *
 * @returns {Number} Returns TDEE value.
 */
module.exports = ({ weight, height, age, gender, isMetric = true }) => {
  if (!weight) return console.error("'weight' is a required property!"); // Check if weight is given.
  if (!height) return console.error("'height' is a required property!"); // Check if height is given.
  if (!age) return console.error("'age' is a required property!"); // Check if height is given.
  if (!gender) return console.error("'gender' is a required property!"); // Check if height is given.

  const data = {
    gender,
    age,
    isMetric,
    cm: height,
    kg: weight,
    mifflinStJeor: true,
    bodyFatPercentage: null
  };

  const bmr = iifym.bmr(data);
  const tdee = iifym.tdee(bmr, 7);

  return tdee;
};
