function calculateAmount(tipPercent) {
  var amount = document.getElementById("amount").value;
  var numberOfPeople = document.getElementById("numberOfPeople").value;

  if (numberOfPeople === "") {

    document.getElementById("numberOfPeople").style.borderColor =
      "rgba(255, 51, 51)";
    document.getElementById("error").style.display = "flex";
    
  } else {

    document.getElementById("numberOfPeople").style.borderColor = "";
    document.getElementById("error").style.display = "";


    if (tipPercent === "custom") {
      var tipPercent = document.getElementById("customTipAmount").value;
    }
    amount = document.getElementById("amount").value;
    numberOfPeople = document.getElementById("numberOfPeople").value;
    console.log(amount + " " + numberOfPeople);

    var tipAmountPerPerson = (amount * tipPercent) / 100 / numberOfPeople;
    var totalPerPerson = amount / numberOfPeople + tipAmountPerPerson;
    document.getElementById("tipAmountPerPerson").innerHTML =
      tipAmountPerPerson.toFixed(2);
    document.getElementById("totalPerPerson").innerHTML =
      totalPerPerson.toFixed(2);
  }
}
