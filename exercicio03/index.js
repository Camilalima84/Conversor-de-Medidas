
let valor = parseFloat(prompt("Digite um valor em metros:"))
const escolha = prompt("Escolha qual a unidade esse valor deve ser convertida: \n1-Milímetros(mm) \n2-centímetro (cm) \n3-decímetro (dm) \n4-decâmetro (dam) \n5-hectômetro (hm) \n6-quilômetro (km)" ) 

switch (escolha) {
    case "1":
     
        alert( valor + " metros equivalem a" + (valor * 1000) + " milímetros.")
        break;

    case "2":

        alert(valor + "metros equivalem a" + "  " +  (valor * 100) + "  " +  "centímetro (cm)")
        break;

    case "3":

        alert(valor + "metros equivalem a" +  "  " + (valor * 10) +  "  " + "decímetro (dm)")
        break;

    case "4":

        alert(valor + "metros equivalem a" + "  " +  (valor /  10) +  "  " + "decâmetro (dam)")
        break;

    case "5":

        alert(valor + "metros equivalem a" +  "  " + (valor /  100) + "  " + "hectômetro (hm)")
        break;

    case "6":

        alert(valor + "metros equivalem a" + "  " + (valor /  1000) + "  " + "quilômetro (km) ")
        break;


    default:
        alert("")
        break;
}