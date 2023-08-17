function submitHandle() {
  const companyName = document.getElementById("companyName").value;
  const contactName = document.getElementById("contactName").value;
  const contactNumber = document.getElementById("contactNumber").value;
  const chairCount = document.getElementById("chairCount").value;

  if (companyName === "") {
    window.alert("Please enter the company name.");
  } else if (contactName === "") {
    window.alert("Please enter the contact name.");
  } else if (contactNumber === "") {
    window.alert("Please enter the contact number.");
  } else if (chairCount < 1) {
    window.alert("Table amount must be at least 1.");
  } else if (chairCount > 10) {
    window.alert("Table amount cannot exceed 10.");
  } else {
    window.alert("Your registration is recorded");
  }
}
