const blockFoto = document.getElementById("img");
const bigImg = document.getElementById("big-img");

const leftShowFoto = () => {
    blockFoto.style.backgroundImage = `url("https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403")`;

    bigImg.setAttribute(
        "src",
        "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403"
    );
    bigImg.src =
        "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403";
    console.log(blockFoto);
};

function rightShowFoto() {
    blockFoto.style.backgroundImage = `url("https://upload.wikimedia.org/wikipedia/commons/1/15/Cat_August_2010-4.jpg")`;
    bigImg.setAttribute(
        "src",
        "https://upload.wikimedia.org/wikipedia/commons/1/15/Cat_August_2010-4.jpg"
    );
    bigImg.src =
        "https://upload.wikimedia.org/wikipedia/commons/1/15/Cat_August_2010-4.jpg"

};
