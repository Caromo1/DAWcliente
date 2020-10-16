class coche{
    constructor(marca,modelo,fabricacion){
        this.marca = marca;
        this.modelo = modelo;
        this.fabricacion = fabricacion;
    }
}

const coche1=new coche("ford","a3",2013);

console.log(coche1);

getedad() {
    return 2020 - this.fabricacion;
};

console.log(getedad());

const coche = {
    marca="ford",
    modelo="kuga",
    fabricacion=2019
};
const coche2 = {
    marca="Mercedes",
    modelo="amg cla",
    fabricacion=2020
};
const coche3 = {
    marca="bmw",
    modelo="m3",
    fabricacion=2011
};
const coche4 = {
    marca="Audi",
    modelo="a2",
    fabricacion=2013
};

console.log(coche,coche1,coche2,coche3,coche4);
