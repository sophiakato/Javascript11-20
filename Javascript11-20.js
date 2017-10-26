
//Eleventh Method:
// Given an array of ints, return true if 6 appears as either the first or
// last element in the array. The array will be length 1 or more.


function firstLast6(arr){
    var x =arr.length;
    var six = 6;
    var y = arr[0];

    if(y !==six && arr[x-1] !==6){
        return false;
    } else{
        return true;
    }

}


//Twelfth Function:
// Given an array of length 2, return true if it contains a 2 or a 3.

function has23(arr){
    var three = 3;
    var two = 2;
    var x = arr[0];
    var y = arr[1];

    if(x==three||y==three){
        return true;
    }
    if(x==two||y==two){
        return true;
    }
    if(x!==three||two && y!==three||two){
        return false;
    }
}

//Thirteenth Method:
// Given an int array length 3, if there is a 2 in the array immediately followed by a 3, set the 3 element to 0. Return the changed array.


function fix23(arr){
    var three = 3;
    var two = 2;
    var x = arr[0];
    var y = arr[1];
    var z = arr[2];

    if(y!=three&&z!=three){
        return arr;
    }
    if(x==two&&y==three){
        return [x, "0", z];
    }
    if(y==two&&z==three){
        return [x, y, "0"];
    }

}

//Fourteenth Method:
// Given a string, count the number of words
// ending in 'y' or 'z' -- so the 'y' in "heavy" and the
// 'z' in "fez" count, but not the 'y' in "yellow" (not case sensitive).
// We'll say that a y or z is at the end of a word if there is a space (“ “) immediately following it.


function countYZ(str){
    var count=0;
    var length = str.length;
    var newString = str.toLowerCase();

    for(i = 1; i < length; i++){
        if(newString[i]== " " && newString[i-1]== "y") {
            count ++;
        }
        if(newString[i]== " " && newString[i-1]=="z"){
            count ++;
        }
    }
    if(newString[length-1]=="y"||newString[length-1]=="z"){
        count ++;
    }
    return count;
}

//Fifteenth Method:
// 5. endOther
// Given two strings, return true if either of the strings appears
// at the very end of the other string, ignoring upper/lower case differences
// (in other words, the computation should not be "case sensitive"). Note: str.toLowerCase() returns the lowercase version of a string.

function endOther(str1, str2) {
    var lowercase1 = str1.toLowerCase();
    var lowercase2 = str2.toLowerCase();

    if(lowercase1.endsWith(lowercase2) || lowercase2.endsWith(lowercase1)) {
        return true;
    } else {
        return false;
    }
}

//Sixteenth Method:
//6. starOut
// Return a version of the given string, where for every star (*) in
// the string the star and the chars immediately to its left and right are gone. So "ab*cd" yields "ad" and "ab**cd" also yields "ad".


function starOut(str) {
    var x = str.length;
    var string = "";

    for(i=0; i < x; i++) {
        if(str[i] !== "*" && str[i - 1] !== "*" && str[i + 1] !== "*") {
            var string = string + str[i];
        }
    }
    return string;
}

//Seventeenth Method:
//
// A sandwich is two pieces of bread with something
// in between. Return the string that is between the first
// and last appearance of "bread" in the given string, or return the
// empty string "" if there are not two pieces of bread.

//REMEMBER THAT IF BREAD ISNT FOUND, RETURNSPRING WILL RETURN AS -1

function getSandwich(str) {
    var firstBread = str.indexOf("bread");
    var lastBread = str.lastIndexOf("bread");
    var returnString = str.substring(firstBread+5, lastBread);
    if(firstBread==lastBread){
        return "";
    } else{
        return returnString;
    }
}




//Eighteenth Method:
// Given a non-empty array, return true if there
//     is a place to split the array so that the sum
// of the numbers on one side is equal to the sum of
// the numbers on the other side.


function canBalance(arr){
    var firstSum = 0;
    var secondSum = 0;
    var length = arr.length;

    for(var i = 0; i < length; i++) {
        secondSum = secondSum + arr[i];
    }
    for(var j = 0; j < length; j++){
        if(firstSum == secondSum){
            return true;
        }
        secondSum = secondSum - arr[j];
        firstSum = firstSum + arr[j];
    }
    return false;
}


//Nineteenth Method:
//9. countClumps
// Say that a "clump" in an array is a series of
// 2 or more adjacent elements of the same value.
//     Return the number of clumps in the given array.

function countClumps(arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i - 1]&&arr[i]!==arr[i+1]) {
            count++;
        }
    }
    return count;
}

//
// Twentieth Method:
// Given three ints, a b c, one of them is small,
//     one is medium and one is large. Return true if the
//     three values are evenly spaced, so the difference between
// small and medium is the same as the difference between medium and large.
//


function evenlySpaced(a, b, c){
    var absAB = Math.abs(b-a);
    var absBC = Math.abs(c-b);
    var absAC = Math.abs(c-a);
    if(a==b&&b==c){
        return true;
    }
    if(a!==b&&b!==c) {
        if (absAB == absBC||absAB==absAC || absBC==absAC) {
            return true;
        }
    }
    return false;
}

// function tester() {
//     document.getElementById("output").innerHTML = countYZ("fez day");
//
//     //document.getElementById("output").innerHTML = sleep_in(true, false);
//     //document.getElementById("output").innerHTML = monkey_trouble(false, false);
//     //document.getElementById("output").innerHTML = string_times("Wassup", 3);
//     //document.getElementById("output").innerHTML = front_times("Wassup", 3);
// }
