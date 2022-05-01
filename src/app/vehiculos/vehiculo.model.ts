export class Vehiculo {
    id: Number;
    marca: String;
    linea: String;
    referencia: String;
    modelo: Number;
    kilometraje: Number;
    color: String;
    imagen: String;
  
    constructor(id: Number, marca: String, linea: String, referencia: String,
      modelo: Number, kilometraje: Number, color: String, imagen: String) {
      this.id = id ?? '';
      this.marca = marca ?? '';
      this.linea = linea ?? '';
      this.referencia = referencia ?? '';
      this.modelo = modelo ?? '';
      this.kilometraje = kilometraje ?? '';
      this.color = color ?? '';
      this.imagen = imagen ?? '';
    }
  }