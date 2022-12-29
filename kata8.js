// DESCRIPTION:
// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

function getSum( a,b )
{
  let n;
  if (a > b) {
    n = a - b + 1;
  } else if ( a < 0  && b > 0 ) {
    n = -a + 1 + b;
  } else if (b < 0 && a > 0 ) {
    n = -b + 1 + a;
  } else if (a < 0 && b < 0) {
    n = -a + b + 1;
  } else if (a === 0 && b > 0) {
    n = b + 1;
  } else if (a === 0 && b < 0) {
    n = -b + 1;
  } else if (a < 0 && b === 0) {
    n = -a + b + 1;
  } else if (a > 0 && b > 0) {
    n = b - a + 1;
  } else {
    n = b + 1
  }
  return ((n * (a + b)) / 2)
}

function GetSum2( a,b )
{
  tmp = 0;
  
  if(a < b)
    while(a <= b) tmp += a++;
  else
    while(a >= b) tmp += a--;
      
  return tmp;
}
