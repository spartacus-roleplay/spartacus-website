function nbcar(ch) {
    var nb = 0;
    for (var i = 0; i < ch.length; i++) {
        if (ch[i].toUpperCase() >= "A" && ch[i].toUpperCase() <= "Z") {
            nb++;
        }
    }
    return nb;
}

function verif() {
    cin = document.getElementById("cin").value;
    if (isNaN(cin) || (cin.length !== 8 && cin[0]!== 1 && cin[0]!== 0)) {
        alert("check your id card!");
        return false; 
    }

    var np = document.getElementById("np").value;
    if (nbcar(np) < 3) {
        alert("check your first name and your last name!");
        return false;
    }  
    var telp = document.getElementById("telp").value;
    if (isNaN(telp) || (telp.length !== 8 )) {
        alert("check your phone number!");
        return false; 
    }

    var cnt = document.getElementById("cnt").value;
    if (nbcar(cnt) < 3) {
        alert("check your country!");
        return false;
    }
    var dn = document.getElementById("dn").value;
    if (isNaN(dn) || (Number(dn)== 0 )) {
        alert("you need to give a number > 0 to donate");
        return false; 
    }

    var c1 = document.getElementById("visa").checked;
    var c2 = document.getElementById("mc").checked;
    var c3 = document.getElementById("bit").checked;
    var c4 = document.getElementById("pp").checked;

    if ((!c1 && !c2 && !c3 &&!c4)) {
        alert("you need to check your payment Method!");
        return false;
    }

    return true; 
}