alertMe.addEventListener("click", function (e) {
    const alertMe = document.querySelector("#alertMe");
    alert("Button Clicked!");
});


const toggleColorBtn = document.querySelector("#change-background-button");

    toggleColorBtn.addEventListener("click", function (e) {
        console.log(document.body);
        document.body.classList.toggle("red-background");
    });
