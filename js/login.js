// ! EventListeners
$("#signin").click((e) => {
  e.preventDefault();
  const email = $("#emailid").val();
  const password = $("#password").val();
  if (email === "" || email.length < 3) {
    return;
  }
  if (password === "" || password.length < 6 || password.length > 13) {
    return;
  }
  const userData = {
    email: email,
    password: password,
  };
  $.ajax({
    method: "post",
    url: "/guvi-task/php/login.php",
    data: userData,
    dataType: "json",
    async: true,
    success: function (response) {
      if (response.status) {
        if (localStorage.getItem("user")) localStorage.removeItem("user");
        localStorage.setItem("user", JSON.stringify(response.uid));
        window.location.href = "../guvi-task/profile.html";
      } else {
      }
    },
  });
});
