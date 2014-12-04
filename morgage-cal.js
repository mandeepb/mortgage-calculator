//The code


//the formula: c = ((r * p) / (1 - (Math.pow((1 + r), (-p))))
//@param p float amount borrowed
//@param r Interest rate as percentage
//@param n Loan's term in years
function calculateMorgage(p, r, n) {

  //to convert percent to decimal
  r = percentToDecimal(r);

  //convert years to months
  n = yearsToMonths(n);

  var pmt = ((r * p) / (1 - (Math.pow((1 + r), (-n)))));
  return (parseFloat(pmt.toFixed(2)));
}

//to convert percent to decimal
function percentToDecimal (percent) {
  return (percent/12)/100;
}

 //convert years to months
function yearsToMonths (year) {
  return (year * 12);
}

// to retrieve data on page
function postpayments(payment) {

    var htmlEl = document.getElementById('outMonthly');

    htmlEl.innerText = "$" + payment;

}

//disable btn on page load

var cost = document.getElementById('value').value;
var btn = document.getElementById('btnCalculate');
if (cost == '') {
  btn.disabled = true;
  btn.classList.add('disable');
}


// var input_box = document.getElementById("inDown");
// var input_box = document.getElementsByTagName('input');
var input_box = document.getElementsByClassName('input_box');
// var input_box = document.querySelectorAll("input[type=text]");

for( var i=0; i < input_box.length; i++) {
  input_box[i].onclick = function() {
    console.log('test');
    btn.disabled = false;
    btn.classList.remove('disable');
  };
}
//enable btn when clicking in input field
// submitting data on click

btn.onclick = function () {

  var cost = document.getElementById('value').value;
  var downPayment = document.getElementById('inDown').value;
  var interest = document.getElementById('apr').value;
  var term = document.getElementById('period').value;
  var amountBorrowed = cost - downPayment;

  var pmt = calculateMorgage(amountBorrowed, interest, term);

  postpayments(pmt);
};


