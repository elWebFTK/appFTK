function myFunction() {
    // Get the checkbox
    var checkBox = document.getElementById("myCheck");
    // Get the output text
    var inputchk = document.getElementById("Folio_Membresia");

    // If the checkbox is checked, display the output text and set required attribute
    if (checkBox.checked == true) {
      inputchk.removeAttribute("disabled");
      inputchk.setAttribute("required", "required");
    } else {
      inputchk.setAttribute("disabled", "disabled");
      inputchk.removeAttribute("required");
    }
  }
