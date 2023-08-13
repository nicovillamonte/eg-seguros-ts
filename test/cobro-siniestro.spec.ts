import { ClienteNormal, Flota } from '../src/domain/cliente';

describe('Tests Cobro Siniestro', () => {
  describe('Dado un cliente normal', () => {
    it('si no es moroso puede cobrar siniestro y no debe registrar la consulta del libre deuda', () => {
      // Arrange
      const clienteNoMoroso = new ClienteNormal();
      // Assert
      expect(clienteNoMoroso.puedeCobrarSiniestro()).toBe(true);
      expect(clienteNoMoroso.tieneConsultas(new Date())).toBe(false);
    });

    it('si tiene deuda no puede cobrar siniestro y debe registrar la consulta del libre deuda', () => {
      // Arrange
      const clienteMoroso = new ClienteNormal();
      // Act
      clienteMoroso.facturar(10);
      // Assert
      expect(clienteMoroso.puedeCobrarSiniestro()).toBe(false);
      expect(clienteMoroso.tieneConsultas(new Date())).toBe(true);
    });
  });

  describe('Dada una flota con muchos autos', () => {
    it('si tiene mucha deuda no puede cobrar siniestro', () => {
      // Arrange
      const flotaMuchaDeudaMuchosAutos = new Flota(6);
      // Act
      flotaMuchaDeudaMuchosAutos.facturar(10001);
      // Assert
      expect(flotaMuchaDeudaMuchosAutos.puedeCobrarSiniestro()).toBe(false);
    });

    it('si no tiene poca deuda puede cobrar siniestro', () => {
      // Arrange
      const flotaPocaDeudaMuchosAutos = new Flota(6);
      // Act
      flotaPocaDeudaMuchosAutos.facturar(10000);
      // Assert
      expect(flotaPocaDeudaMuchosAutos.puedeCobrarSiniestro()).toBe(true);
    });
  });

  describe('Dada una flota con pocos autos', () => {
    it('si tiene mucha deuda no puede cobrar siniestro', () => {
      // Arrange
      const flotaMuchaDeudaPocosAutos = new Flota(5);
      // Act
      flotaMuchaDeudaPocosAutos.facturar(5001);
      // Assert
      expect(flotaMuchaDeudaPocosAutos.puedeCobrarSiniestro()).toBe(false);
    });

    it('si no tiene poca deuda puede cobrar siniestro', () => {
      // Arrange
      const flotaPocaDeudaPocosAutos = new Flota(5);
      // Act
      flotaPocaDeudaPocosAutos.facturar(5000);
      // Assert
      expect(flotaPocaDeudaPocosAutos.puedeCobrarSiniestro()).toBe(true);
    });
  });
});
