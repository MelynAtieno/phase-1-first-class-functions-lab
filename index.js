// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2);
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (multiply) {
    return function (num) {
      return multiply * num;
    };
  };


const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)
        
const selectDifferentDrivers = function (drivers, driverNames) {
    return driverNames(drivers);
  };   


