export abstract class Cliente {
  protected deuda = 0;

  abstract puedeCobrarSiniestro(): boolean;

  esMoroso() {
    return this.deuda > 0;
  }

  facturar(monto: number) {
    this.deuda += monto;
  }
}

const MAXIMO_FLOTA_MUCHOS_AUTOS = 10000;
const MAXIMO_FLOTA_POCOS_AUTOS = 5000;
const LIMITE_MUCHOS_AUTOS = 5;

export class Flota extends Cliente {
  constructor(public autos: number) {
    super();
  }

  puedeCobrarSiniestro() {
    return this.deuda <= this.maximoPermitido();
  }

  maximoPermitido() {
    return this.autos <= LIMITE_MUCHOS_AUTOS
      ? MAXIMO_FLOTA_POCOS_AUTOS
      : MAXIMO_FLOTA_MUCHOS_AUTOS;
  }
}

export class ClienteNormal extends Cliente {
  private diasDeConsulta: Date[] = [];

  registrarConsulta() {
    if (this.esMoroso() && !this.tieneConsultas(new Date())) {
      this.diasDeConsulta.push(new Date());
    }
  }

  tieneConsultas(dia: Date) {
    return this.diasDeConsulta.some(
      (date) => date.toDateString() === dia.toDateString(),
    );
  }

  puedeCobrarSiniestro(): boolean {
    this.registrarConsulta();
    return !this.esMoroso();
  }
}
