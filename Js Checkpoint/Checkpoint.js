
//Fonctions de manipulation des chaînes de caractères ://1
function inverserChaine(chaine) {
    return chaine.split("").reverse().join("");
}
//2
function compterCaracteres(chaine) {
    return chaine.length;
}
//3
function mettreMotsMajuscule(phrase) {
    return phrase.split("").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join("");
}

//Fonctions du tableau :
//1Rechercher le maximum et le minimum :
function trouverMaximum(tableau) {
    return Math.max(...tableau);
}

function trouverMinimum(tableau) {
    return Math.min(...tableau);
}
//2
function sommeTableau(tableau) {
    return tableau.reduce((acc, curr) => acc + curr, 0);
}

//3
function filtrerTableau(tableau, condition) {
    return tableau.filter(condition);
}


//Fonctions mathématiques :
//1Factorielle :
function factorielle(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorielle(n - 1);
    }
}
//2
function estNombrePremier(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
//3
function fibonacci(n) {
    let sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}
