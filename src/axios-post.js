import axios from "axios";

axios
  .post("/user", {
    firstName: "Fred",
    lastName: "Bread",
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// Performing multiple concurrent requests
function getUserAccount() {
  return axios.get("/user/12345");
}

function getUserPermissions() {
  return axios.get("/user/12345/permissions");
}

Promise.all([getUserAccount(), getUserPermissions()]).then(function (results) {
  const acct = results[0];
  const perm = results[1];
});
