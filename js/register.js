function validateUser() {
  const uname = $("#name").val();
  const password = $("#password").val();
  const confirmPassword = $("#confirm-password").val();
  const email = $("#email").val();
  const mobileNumber = $("#mobilenumber").val();
  const dob = $("#dob").val();
  const gender = $(".gender:checked").val();
  if (uname === "" || uname.length < 3) {
    return null;
  }
  if (password === "" || password.length < 6 || password.length > 13) {
    return null;
  }
  if (password !== confirmPassword) {
    return null;
  }
  const emailPattern =
    /^([a-zA-Z0-9.-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,8})(.[a-z]{2,8})?$/;
  if (!emailPattern.test(email) || email === "") {
    return null;
  }
  if (mobileNumber.length > 10 || mobileNumber.length < 10) {
    return null;
  }
  if (dob === "") {
    return null;
  }
  if (gender === undefined) {
    return null;
  }
  const registeredUser = {
    uname: uname,
    password: password,
    email: email,
    mobileNumber: mobileNumber,
    dob: dob,
    gender: gender,
  };
  return registeredUser;
}

function clearValue() {
  $("#name").val("");
  $("#password").val("");
  $("#confirm-password").val("");
  $("#email").val("");
  $("#mobilenumber").val("");
  $("#dob").val("");
  $("input[name='gender']").prop("checked", false);
}


$("#signup").click((e) => {
  e.preventDefault();
  const registeredUser = validateUser();
  if (registeredUser === null) {
  } else {
    $("#signup").attr("disabled", "disabled");
    $.ajax({
      method: "post",
      url: "/guvi-task/php/register.php",
      data: registeredUser,
      dataType: "json",
      async: true,
      success: function (response) {
        $("#signup").removeAttr("disabled");
        clearValue();
        if (response.status === true) {
          window.location.href = "../guvi-task/login.html";
        }
      },
    });
  }
});
