var num1 = prompt("Ingrese el numero 1: ");
var num2 =prompt ("Ingrese el numero 2: ");
var num3 = prompt("Ingrese el numero 3: ");

num1 = parseInt(num1);
num2 = parseInt(num2);
num3 = parseInt(num3);

if (num1 == num2 && num1 == num3) {
    document.write("Ingreso el mismo numero: " + num1);
}
else {

    if (num1 > num2) {
        if (num1 > num3) {
            document.write("El numero mayor es: " + num1);
        }

    }
    else {
        if (num1 < num2) {
            if (num2 > num3) {
                document.write("El numero mayor es: " + num2);
            }
            else {
                document.write("El numero mayor es: " + num3);
            }
        }
    }
}

