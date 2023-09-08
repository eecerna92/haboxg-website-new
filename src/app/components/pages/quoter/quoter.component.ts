import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-quoter',
  templateUrl: './quoter.component.html',
  styleUrls: ['./quoter.component.scss']
})
export class QuoterComponent implements OnInit {

  allItems: any[]
  _tipoCambio: number = 8
  __desaduanaje: number = 28
  __tarifaPeso: number = 28

  _arancel: number = 0
  __flete: number = 0
  __aranceles: number = 0
  __IVA: number = 0
  __seguro: number = 0
  __totalCompra: number = 0
  __total: number = 0

  isUSA: boolean = true
  importaciones: string='USA'
  moneda: string = 'USD'

  FormQuoterGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.allItems = [
      { valor: 15, Name: 'Accesorio de Aseo Personal: 15%' },
      { valor: 15, Name: 'Accesorio de Cámara: 15%' },
      { valor: 15, Name: 'Accesorio de Carro: 15%' },
      { valor: 15, Name: 'Accesorio de Cocina: 15%' },
      { valor: 0, Name: 'Accesorio de Computacion: 0%' },
      { valor: 15, Name: 'Accesorio de Musica: 15%' },
      { valor: 15, Name: 'Accesorio de Oficina: 15%' },
      { valor: 15, Name: 'Accesorio de Telefonia: 15%' },
      { valor: 15, Name: 'Accesorio Deportivo: 15%' },
      { valor: 0, Name: 'Accesorio Electrico: 0%' },
      { valor: 15, Name: 'Articulos de Cuero: 15%' },
      { valor: 15, Name: 'Articulos de Fiesta: 15%' },
      { valor: 0, Name: 'Audífonos: 0%' },
      { valor: 15, Name: 'Bateria de Carro: 15%' },
      { valor: 15, Name: 'Bicicleta: 15%' },
      { valor: 0, Name: 'Bocinas de Carro: 0%' },
      { valor: 15, Name: 'Bolsas: 15%' },
      { valor: 15, Name: 'Cables: 15%' },
      { valor: 0, Name: 'Camara Fotografica: 0%' },
      { valor: 10, Name: 'Cartucho de tinta (Simple): 10%' },
      { valor: 10, Name: 'Cartucho de Tinta C/Chip: 10%' },
      { valor: 15, Name: 'Catalogos: 15%' },
      { valor: 13, Name: 'CDs: 10% +3% IPSA' },
      { valor: 0, Name: 'Celulares: 0%' },
      { valor: 5, Name: 'Cinta de Impresora: 5%' },
      { valor: 0, Name: 'Computadoras: 0%' },
      { valor: 15, Name: 'Consola de Videojuegos: 15%' },
      { valor: 15, Name: 'Cosmeticos: 15%' },
      { valor: 15, Name: 'Cuadernos: 15%' },
      { valor: 0, Name: 'Discos Duros Vacios: 0%' },
      { valor: 18, Name: 'DVD Player: 15% +3% IPSA' },
      { valor: 15, Name: 'Edredon: 15%' },
      { valor: 15, Name: 'Electrodomesticos: 15%' },
      { valor: 0, Name: 'Equipo Medico: 0%' },
      { valor: 15, Name: 'Estuche de Cuero: 15%' },
      { valor: 15, Name: 'Estuche Partes Plasticas: 15%' },
      { valor: 15, Name: 'Etiquetas de Papel o Carton: 15%' },
      { valor: 10, Name: 'Etiquetas de Tela: 10%' },
      { valor: 15, Name: 'Grabadoras: 15%' },
      { valor: 0, Name: 'Herramientas de Mano: 0%' },
      { valor: 0, Name: 'Impresoras: 0%' },
      { valor: 15, Name: 'Joyeria/Bisuteria: 15%' },
      { valor: 15, Name: 'Juguetes: 15%' },
      { valor: 0, Name: 'Laptop: 0%' },
      { valor: 15, Name: 'Lentes: 15%' },
      { valor: 0, Name: 'Lentes (solo aro): 0%' },
      { valor: 5, Name: 'Lentes de Contacto: 5%' },
      { valor: 15, Name: 'Lentes de Sol: 15%' },
      { valor: 0, Name: 'Libros: 0%' },
      { valor: 5, Name: 'Llaves: 5%' },
      { valor: 15, Name: 'Luces Navideñas: 15%' },
      { valor: 15, Name: 'Mascarillas: 15%' },
      { valor: 15, Name: 'Material Impreso: 15%' },
      { valor: 15, Name: 'Material Promocional: 15%' },
      { valor: 15, Name: 'Medicamentos/Suplementos Alimenticios: 15%' },
      { valor: 15, Name: 'MP3 (iPod): 15%' },
      { valor: 15, Name: 'Muebles de Casa: 15%' },
      { valor: 10, Name: 'Partes de Bicicleta: 10%' },
      { valor: 0, Name: 'Partes Industriales: 0%' },
      { valor: 15, Name: 'Poster: 15%' },
      { valor: 15, Name: 'Radio de Carro: 15%' },
      { valor: 15, Name: 'Reloj de Pulsera/Pared: 15%' },
      { valor: 0, Name: 'Reloj Inteligente/SmartWatch: 0%' },
      { valor: 10, Name: 'Repuestos de Carro: 10%' },
      { valor: 0, Name: 'Repuestos de Helicoptero: 0%' },
      { valor: 0, Name: 'Repuestos de Motor de Carro: 0%' },
      { valor: 0, Name: 'Repuestos Electronicos: 0%' },
      { valor: 15, Name: 'Ropa: 15%' },
      { valor: 0, Name: 'Scanner: 0%' },
      { valor: 0, Name: 'Software de PC: 0%' },
      { valor: 0, Name: 'Tablets (iPad): 0%' },
      { valor: 15, Name: 'Tarjetas de Invitaciones: 15%' },
      { valor: 0, Name: 'Videocamara: 0%' },
      { valor: 18, Name: 'Videocintas: 15% +3% IPSA' },
      { valor: 3, Name: 'Videojuegos CD/DVD/BlueRay- 0% +3% IPSA' },
      { valor: 18, Name: 'Videojuegos Cassette: 15% +3% IPSA' },
      { valor: 15, Name: 'Zapatos: 15%' }
    ]
  }

  ngOnInit(): void {
    this.FormQuoterGroup = this.formBuilder.group({
      _Mercancia: [],
      _Peso: [0, [Validators.required]],
      _Compra: [0, [Validators.required]],
      _Shipping: [0]
    });
  }

  get Mercancia() {
    return this.FormQuoterGroup.get('_Mercancia');
  }
  get Peso() {
    return this.FormQuoterGroup.get('_Peso');
  }
  get Compra() {
    return this.FormQuoterGroup.get('_Compra');
  }
  get Shipping() {
    return this.FormQuoterGroup.get('_Shipping');
  }

  calcular() {
    //1.- Convertir arancel a decimal   
    let vArrancel = this._arancel / 100.00;

    //2.- Flete
    this.__flete = this.Peso.value * this.__tarifaPeso

    //2.-Calcular Arranceles
    this.__aranceles = (this.__totalCompra + (this.Peso.value * this._tipoCambio * 2)) * vArrancel

    //3.- Calcular IVA
    this.__IVA = ((this.__totalCompra + (this.Peso.value * this._tipoCambio * 2)) + this.__aranceles) * 0.12

    //4.- Calcular Seguro
    this.__seguro = this.__totalCompra * 0.02

    //5.- Calcular Total 
    this.__total = this.__flete + this.__aranceles + this.__IVA + this.__seguro + this.__desaduanaje

  }

  compraChange() {
    this.__totalCompra = this.Compra.value * this._tipoCambio
    this.calcular()
  }

  shippingChange() {
    this.__totalCompra += this.Shipping.value * this._tipoCambio
    this.calcular()
  }

  onMercaderiaChange() {
    this._arancel = this.Mercancia.value
  }
  onImportacionesChange(){
    if (this.importaciones === "USA") {
      this._tipoCambio = 8
      this.__tarifaPeso = 28
      this.moneda='USD'
    }
    else {
      this._tipoCambio = 0.30
      this.__tarifaPeso = 45
      this.moneda='MEX'
    }
    this.calcular()
  }
}
