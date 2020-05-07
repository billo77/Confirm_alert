document.addEventListener("DOMContentLoaded", function (event) {

  var e = document.querySelector("#jumpmenu");
  e.addEventListener("change", function () {

    selectedURL = this.options[this.options.selectedIndex].value;
    if (this.value != "null") {
      var confirmLeave = confirm("do you want to continue ?");

      // if the answer OK
      if (confirmLeave == true) {
        document.location.href = selectedURL;
      }

      // if the answer Cancel
      else {
        return false;
      }
    }
  });
});