// You are the "computer expert" of a local Athletic Association (C.A.A.). Many teams of runners come to compete. Each time you get a string of all race results of every team who has run. For example here is a string showing the individual results of a team of 5 runners:
//     "01|15|59, 1|47|6, 01|17|20, 1|32|34, 2|3|17"
// Each part of the string is of the form: h|m|s where h, m, s (h for hour, m for minutes, s for seconds) are positive or null integer (represented as strings) with one or two digits. There are no traps in this format.
//     To compacd ire the results of the teams you are asked for giving three statistics; range, average and median.
//     Range : difference between the lowest and highest values. In {4, 6, 9, 3, 7} the lowest value is 3, and the highest is 9, so the range is 9 − 3 = 6.
// Mean or Average : To calculate mean, add together all of the numbers in a set and then divide the sum by the total count of numbers.
//     Median : In statistics, the median is the number separating the higher half of a data sample from the lower half. The median of a finite list of numbers can be found by arranging all the observations from lowest value to highest value and picking the middle one (e.g., the median of {3, 3, 5, 9, 11} is 5) when there is an odd number of observations. If there is an even number of observations, then there is no single middle value; the median is then defined to be the mean of the two middle values (the median of {3, 5, 6, 9} is (5 + 6) / 2 = 5.5).
// Your task is to return a string giving these 3 values. For the example given above, the string result will be.
// "Range: 00|47|18 Average: 01|35|15 Median: 01|32|34"
// of the form:
//     "Range: hh|mm|ss Average: hh|mm|ss Median: hh|mm|ss"
// where hh, mm, ss are integers (represented by strings) with each 2 digits.

function stat(str) {
    // split the initial array into array of length that equals number of times passed in. Ex: ["01|15|59", "1|47|16", "01|17|20"]
    const timesArr = str.split(", ");

    // call func's to output formatted statistics
    console.log(rangeHandler(timesArr) + averageHandler(timesArr));
}

function averageHandler(arr) {
    // the number of different times given
    const numOfTimes = arr.length;
    // calculate the times (in seconds) and then get sum of all the times using reduce method
    const timesInSec = arrayOfSeconds(arr).reduce((total, time) => total + time);

    // calculate the average time in sec
    let averageInSec = Math.floor(timesInSec / numOfTimes);
    let hour = Math.floor(averageInSec / 3600).toString();
    let min = Math.floor((averageInSec %= 3600) / 60).toString();
    let sec = Math.floor(averageInSec % 60).toString();

    hour.length === 1 ? hour = "0" + hour : null;
    min.length === 1 ? min = "0" + min : null;
    sec.length === 1 ? sec = "0" + sec : null;

    return "Average: " + hour + "|" + min + "|" + sec + " ";
}

function rangeHandler(arr) {
    // splits first elememt pf array into hour, min, and sec of time to use as initial values of highest and lowest times
    const initialValues = arr[0].split("|");
    // converting total time into seconds so doing necessary calculations then adding them together
    let lowestTime = parseInt(initialValues[0] * 3600) + parseInt(initialValues[1] * 60) + parseInt(initialValues[2]);
    let highestTime = parseInt(initialValues[0] * 3600) + parseInt(initialValues[1] * 60) + parseInt(initialValues[2]);

    // skip index 0 b/c it has already been made the initial highest and lowest time
    for (let i = 1; i < arr.length; i++) {
        let arrOfHrMinSec = arr[i].split("|");
        let seconds = parseInt(arrOfHrMinSec[0] * 3600) + parseInt(arrOfHrMinSec[1] * 60) + parseInt(arrOfHrMinSec[2]);

        if (seconds > highestTime) {
            highestTime = seconds;
        } else if (seconds < lowestTime) {
            lowestTime = seconds;
        }
    }

    // solving range by subtracting highest time and lowest time
    let rangeInSec = highestTime - lowestTime;
    // calculations to find hour, min and sec of range time
    let hour = Math.floor(rangeInSec / 3600).toString();
    let min = Math.floor((rangeInSec %= 3600) / 60).toString();
    let sec = Math.floor(rangeInSec % 60).toString();

    // checking if any of the time lengths are only 1 and if so adding a '0' in front to output correct format: hh|mm|ss
    hour.length === 1 ? hour = "0" + hour : null;
    min.length === 1 ? min = "0" + min : null;
    sec.length === 1 ? sec = "0" + sec : null;

    if (numOfTimes === 2) {
        return "Median: " + hour + "|" + min + "|" + sec;
    } else {
        return "Average: " + hour + "|" + min + "|" + sec + " ";
    }
}

function medianHandler(arr) {
    // the number of different times given
    const numOfTimes = arr.length;
    // calculate the times (in seconds) and then sort to make array have times sorted from lowest to highest
    const timesInSec = arrayOfSeconds(arr).sort();

    if (numOfTimes % 2 != 0) {
        const desiredTimeIndex = Math.ceil(numOfTimes / 2);

        let hour = Math.floor(timesInSec[desiredTimeIndex] / 3600).toString();
        let min = Math.floor((timesInSec[desiredTimeIndex] %= 3600) / 60).toString();
        let sec = Math.floor(timesInSec[desiredTimeIndex] % 60).toString();

        hour.length === 1 ? hour = "0" + hour : null;
        min.length === 1 ? min = "0" + min : null;
        sec.length === 1 ? sec = "0" + sec : null;

        return "Median: " + hour + "|" + min + "|" + sec;
    }
}

function arrayOfSeconds(arr) {
    // returns an array with all times converted to seconds
    return arr.map(time => {
        let arrOfHrMinSec = time.split("|");
        return parseInt(arrOfHrMinSec[0] * 3600) + parseInt(arrOfHrMinSec[1] * 60) + parseInt(arrOfHrMinSec[2]);;
    });
}

function medianHandler(arr) {
    const numOfTimes = arr.length;
    const timesInSec = arrayOfSeconds(arr).sort();

    // if array length is odd, only have to pick out middle time and return that as the median
    if (numOfTimes % 2 != 0) {
        // floor here b/c we want the lower index
        const desiredTimeIndex = Math.floor(numOfTimes / 2);

        let hour = Math.floor(timesInSec[desiredTimeIndex] / 3600).toString();
        let min = Math.floor((timesInSec[desiredTimeIndex] %= 3600) / 60).toString();
        let sec = Math.floor(timesInSec[desiredTimeIndex] % 60).toString();

        hour.length === 1 ? hour = "0" + hour : null;
        min.length === 1 ? min = "0" + min : null;
        sec.length === 1 ? sec = "0" + sec : null;

        return "Median: " + hour + "|" + min + "|" + sec;
    } else {
        // else here in the case the array is of even length, have to taket the average of the two middle times to get the median
        const firstTimeIndex = (numOfTimes / 2) - 1;
        const secondTimeIndex = numOfTimes / 2;
        const middleTimesArr = [arr.sort()[firstTimeIndex], arr.sort()[secondTimeIndex]]

        // make use of the averageHandler to solve for the median in the case of even length array
        return averageHandler(middleTimesArr);
    }
}
