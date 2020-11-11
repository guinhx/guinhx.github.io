let input = document.getElementById("creation-input");
let footer = document.getElementById("creation-footer");
let commentBtn = document.getElementById("btn-comment");
let cancelBtn = document.getElementById("btn-cancel");

let contBox = document.getElementById("cont-box");

validateCommentBtn();

input.addEventListener("focusin", () => {
    footer.style.display = "block";
});

input.addEventListener("keyup", () => {
    validateCommentBtn();
});

cancelBtn.addEventListener("mousedown", () => {
    footer.style.display = "none";
    input.value = "";
    validateCommentBtn();
});

commentBtn.addEventListener("mousedown", () => {
    let comment = input.value;
    if(comment.length > 0) {//append
        $.get("../view/fragment/comment-fragment.html", function (data) {
            let correctData = data
            .replaceAll("{0}", "Houtarou Oreki")
            .replaceAll("{1}", "1 second ago")
            .replaceAll("{2}", comment)
            .replaceAll("{3}", "1");
            contBox.innerHTML += correctData;
            $('[data-toggle="tooltip"]').tooltip()
        });
        input.value = "";
        validateCommentBtn();
    }
});

function validateCommentBtn() {
    let lenght = input.value.length;
    if(lenght > 0) {
        commentBtn.style.backgroundColor = "red";
    }else{
        commentBtn.style.backgroundColor = "gray";
    }
}