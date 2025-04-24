function add() {
    let task = document.getElementById("txt1").value;
    let date = document.getElementById("date").value;
    let obj = new Date(date);
    let option = { year: 'numeric', month: 'long', day: 'numeric' };
    let formattedDate = obj.toLocaleDateString('en-us', option);
    let div = document.createElement("div");

    let h3 = document.createElement("h2");
    h3.innerText = task;
    let p = document.createElement("p");
    p.innerText = formattedDate
    let img = document.createElement("img");
    let check = document.createElement("input");
    check.style.width = "20px";
    check.style.height = "20px";
    check.style.borderRadius = "50%";
    check.style.border = "2px solid #000";
    img.src = "delete.png";
    div.style.display = "flex";
    div.style.justifyContent = "space-around";
    div.style.alignItems = "center";
    div.style.flexFlow = "row wrap";
    div.style.width = "10%"

    div.append(check)
    div.append(h3)
    div.append(p)
    div.append(img);
    let main = document.getElementById("task");
    main.append(div);

    img.addEventListener("click", function () {
        let a = confirm("Do you really want to remove this?");
        if (a) {
            div.remove();
        }
    });

    check.addEventListener("change", function () {
        if (check.checked) {
            h3.style.textDecoration = " line-through";
            p.style.textDecoration = " line-through";
        } else {
            h3.style.textDecoration = "none"
            p.style.textDecoration = "none"
        }
    });
}