function somar(num1: number , num2: number):void{
    let soma = num1+num2;
    console.log("A soma é: "+soma);
}

function media(num1: number, num2: number, num3: number, num4: number, num5: number ):void{
    let media = (num1+num2+num3+num4+num5)/5;
    console.log("A média é: "+media);
}

function imc( peso:number, altura:number):void{
    if (altura===0){
        console.log('Aí não, Daniel... não pode dividir por 0!');
    }else{
        let imc =  peso/(altura**2);
        console.log("O IMC é: "+imc);
    }

}