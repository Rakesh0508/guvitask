$(document).ready(() => {
  fetchAndUpdateDetails();
});

$("#logout").click(() => {
  localStorage.removeItem("uid");
  window.location.href = "../php-task/login.html";
});

function fetchAndUpdateDetails() {
  let user = localStorage.getItem("user");
  user = JSON.parse(uid);
  if (user === null) {
    window.history.go(-1);
  } else {
    $.ajax({
      method: "get",
      url: "/guvi-task/php/profile.php",
      data: { uid: uid },
      dataType: "json",
      async: true,
      success: function (response) {
        if (response.status) {
          oldUserId = response.email;
          setTimeout(() => {
          }, 3000);
          $("#name").val(response.name);
          $("#gender").val(response.gender);
          $("#dob").val(response.dob);
          $("#email").val(response.email);
          $("#mobile").val(response.mobile);
        } else {
          window.location.href = "../guvi-task/login.html";
        }
      },
    });
  }
}
