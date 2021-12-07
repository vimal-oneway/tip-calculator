// getting percent value

var percent;

function BtnValue(Btn) {
  percent = Btn;
  console.log(percent);
}

function addPercent(percent1) {
  percent = percent1;
}

// to run the myFunction while input changes
document.getElementById("bill").onchange = function () {
  myFunction();
};
document.getElementById("person").onchange = function () {
  myFunction();
};

//reset btn function

// main function
function myFunction() {
  people = Number(document.getElementById("person").value);
  bill = Number(document.getElementById("bill").value);
  console.log(bill, percent, people);

  // checking the input values
  if (bill == 0 || people == 0 || percent == undefined) {
    // checking bill  is 0
    if (bill == 0) {
      document.getElementById("billAlert").innerHTML = `can't be zero`;
    }

    // checking percent is 0
    if (percent == undefined) {
      document.getElementById("btnAlert").innerHTML = `can't be zero`;
    }

    // checking people is 0
    if (people == 0) {
      document.getElementById("perAlert").innerHTML = `can't be zero`;
    }

    // checking bill  is not 0
    if (bill !== 0) {
      document.getElementById("billAlert").innerHTML = ``;
    }

    // checking percent is not  0
    if (percent !== undefined) {
      document.getElementById("btnAlert").innerHTML = ``;
    }

    // checking people is not 0
    if (people !== 0) {
      document.getElementById("perAlert").innerHTML = ``;
    }
  }

  // calculation part
  else {
    // else clear all the alerts
    document.getElementById("billAlert").innerHTML = "";
    document.getElementById("btnAlert").innerHTML = "";
    document.getElementById("perAlert").innerHTML = "";

    // output varabile assigns

    var tipDisplay = document.getElementById("tipAm").value;

    // calculation of tip calculator
    var tipValue = (bill * percent) / 100 / people;
    var finalBill = bill / people + tipValue;
    console.log(finalBill);

    // output showing part
    var tipAmount = document.querySelector("#tipAm");
    var totalBillWithTip = document.querySelector("#TotalAm");

    // setting only 2 digits after the decimal point
    tipAmount.innerHTML = "&#36;" + tipValue.toFixed(2);
    totalBillWithTip.innerHTML = "&#36;" + finalBill.toFixed(2);

    reset();
  }
}

// functions for reset btn
function reset() {
  if (bill !== 0 || people !== 0 || percent !== undefined) {
    document.getElementById("reset1").disabled = false;
    document.getElementById("reset1").style.backgroundColor =
      "hsl(172, 67%, 45%)";
  } else {
    document.getElementById("reset1").disabled = true;
    document.getElementById("reset1").style.backgroundColor =
      " hsl(186, 14%, 43%)";
  }
}

function hover() {
  document.getElementById("reset1").style.backgroundColor =
    "hsl(185, 41%, 84%)";
}
function noHover() {
  document.getElementById("reset1").style.backgroundColor =
    "hsl(172, 67%, 45%)";
}

// reset code
function clr() {
  document.getElementById("reset1").style.backgroundColor =
    " hsl(186, 14%, 43%)";

  // clearing input values

  document.getElementById("bill").value = "";
  document.getElementById("person").value = "";
  percent = undefined;

  // alert items reseting code
  document.getElementById("billAlert").innerHTML = "";
  document.getElementById("btnAlert").innerHTML = "";
  document.getElementById("perAlert").innerHTML = "";

  // Amount reseting code
  document.querySelector("#TotalAm").innerHTML = `&#36;00.00`;
  document.querySelector("#tipAm").innerHTML = `&#36;00.00`;
}
