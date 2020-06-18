// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
document.write('a：' + (a instanceof Array) + "</br>")
document.write('b：' + (b instanceof Array) + "</br>")
//TODO  b is arrary


// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
for(var i=0; i<a.length; i++){
    a[i] *= 2;
}
document.write(a + "</br>")
// TODO should output [2,4,6,8,10]


// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
var str1 = "" , str2 = "";
for(var i=0; i<colors.length; i++){
  str1 += colors[i] + ' '
  str2 += colors[i] + '+'
}
if(str2.length > 0){
  str2 = str2.substr(0,str2.length-1)
  str1 = str1.substr(0,str1.length-1)
}
document.write('ouput1：' + str1 + "</br>")
document.write('ouput2：' + str2 + "</br>")
document.write('ouput3：' + colors + "</br>")
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'


// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
function sortNumber(a,b){
    return b - a
}
var a = [5, 1, 8, 10, 4];
document.write(a.sort(sortNumber) + "</br>")
//TODO should output: [10,8,5,4,1]


// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var arr = a.sort();
var j = 0, count = 0, letter = arr[0], num = [], index = [];
index[0] = 0;
for(var i=0; i<arr.length; i++){
  if(arr[i] != letter){
    letter = arr[i];
    num[j++] = count;
    index[j] = i;
    count = 0;
  }
  count++;
}
num[j] = count;
max = Math.max.apply(null,num)
index_max = num.lastIndexOf(max)
document.write(arr[index[index_max]])
//TODO should output: 'a'
