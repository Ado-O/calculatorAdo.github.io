$(document).ready(function() {
    // stores input od korsnika
    var inputs = [""];
    // sacuvati trenutni input
    var totalString;

    var operators1 = ["+", "-", "/", "*"];
    var operators2 = ["."];
    var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    /*** dodavanje input **/
    function getValue(input) {

        if (operators2.includes(inputs[inputs.length - 1]) === true && input === ".") {
            console.log("Duplicate '.'");
        } else if (inputs.length === 1 && operators1.includes(input) === false) {
            inputs.push(input);
        } else if (operators1.includes(inputs[inputs.length - 1]) === false) {
            inputs.push(input);
        } else if (nums.includes(Number(input))) {
            inputs.push(input);
        }
        update();
    }

    /**** ako na rezultat dodas broj ***/
    function update() {
        totalString = inputs.join("");
        $("#steps").html(totalString);
    }

    /*** izlaz rezultata ***/
    function getTotal() {
        totalString = inputs.join("");
        $("#steps").html(eval(totalString)); // eval vrsi obracun na izlazu
    }

    // kada korisnik izvrsi onclik button 
    $("a").on("click", function() {
        // sa "this" osluckujemo koji je button u pitanju
        if (this.id === "deleteAll") {
            inputs = [""];
            update();
        } else if (this.id === "backOne") {
            inputs.pop();
            update();
        } else if (this.id === "total") {
            getTotal();
        } else {
            //ako korisnik unose nesta sto ne zadrzi navedene 
            if (inputs[inputs.length - 1].indexOf("+", "-", "/", "*", ".") === -1) {
                getValue(this.id);
            } else {
                getValue(this.id);
            }
        }
    });

});