// const iifym = require("iifym.js");
import iifym from "iifym.js";

/**
 * @param {Object} config - TDEE calculator parameters
 * @param {Number} config.weight - Weight as a number.
 * @param {Number} config.height - Height as a number in metric.
 * @param {Number} config.age - Age as a number.
 * @param {String} config.gender - Gender as a string either "male" or "female".
 * @param {Boolean} [config.isMetric=true] - isMetric as Boolean.
 *
 * @returns {Number} Returns TDEE value.
 */
const tdee = ({ weight, height, age, gender, isMetric = true }) => {
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

export default tdee;
