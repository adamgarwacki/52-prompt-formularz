function podajDane() {
    let name = prompt("Imię:");

    if (name === null) {
        document.getElementById("name").value = "Błąd!";
    } else if (name === "") {
        document.getElementById("name").value = "Błąd!"
    } else {
        document.getElementById("name").value = name;
    }

    let surname = prompt("Nazwisko:");

    if (surname === null) {
        document.getElementById("surname").value = "Błąd!";
    } else if (surname === "") {
        document.getElementById("surname").value = "Błąd!"
    } else {
        document.getElementById("surname").value = surname;
    }

    let email = prompt("Adres e-mail:");

    if (email === null) {
        document.getElementById("e-mail").value = "Błąd!";
    } else if (email === "") {
        document.getElementById("e-mail").value = "Błąd!"
    } else {
        document.getElementById("e-mail").value = email;
    }
}