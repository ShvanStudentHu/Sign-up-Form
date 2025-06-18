document
  .getElementById("user-info")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const firstName = formData.get("fname");

    console.log(firstName);
  });

const a = () => {
  console.log("hi");
};
