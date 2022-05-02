const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  const numActivity = Number(sampleActivity);
  if (typeof sampleActivity !== 'string' || 
  !numActivity || numActivity > 15 || 
  numActivity < 0 ){
   return false; 
  }else{
    const n = MODERN_ACTIVITY/numActivity;
    const k = 0.693/HALF_LIFE_PERIOD;
    const rezult = Math.ceil(Math.log(n)/k);
    return rezult;
  }
}

module.exports = {
  dateSample
};
