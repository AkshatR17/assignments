/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {

    const startime = Date.now();

    while (Date.now() - startime < milliseconds) {
        
    }

    return new Promise((resolve, reject) => {
        resolve();
    });
}

module.exports = sleep;
