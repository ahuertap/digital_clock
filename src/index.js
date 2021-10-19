/**
 * Add a zero if the time is lower than 10
 *
 * @param {number} i
 * @returns {string} formatted time
 */
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function startTime() {
  const today = new Date();
  const hr = today.getHours();
  let min = today.getMinutes();
  console.log(min);
  let sec = today.getSeconds();
  console.log(sec);

  min = checkTime(min);
  sec = checkTime(sec);

  document.getElementById('clock').innerHTML = `${hr} : ${min} : ${sec}`;

  setTimeout(function() {
    startTime();
  }, 1000);
}

startTime();
