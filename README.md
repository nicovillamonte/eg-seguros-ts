
## Ejercicio inicial - introducción a TypeScript: Seguros

Esta es una implementación del ejemplo de Seguros implementado en NestJS con TypeScript.
Solamente es una traducción de lenguaje del [ejemplo de Seguros del docente Fernando Dodino](https://github.com/uqbar-project/eg-seguros-kotlin) desarrollado en kotlin.


Este ejercicio tiene dos propósitos

- contar cómo aconsejamos diseñar los casos de prueba utilizando Jest como framework de testing.
- entender las diferentes formas de corrección de errores, que se explica a continuación

## Dominio

![vehicle insurance](https://github.com/uqbar-project/eg-seguros-kotlin/raw/master/images/vehicles.png)

Un sistema de seguros de automotor define cuándo pagar un siniestro, las condiciones pueden variar:

- para los clientes normales, si no son morosos (la deuda debe ser 0)
- para las flotas de autos, se soporta una deuda de hasta $ 10.000 si el cliente tiene más de 5 vehículos ó hasta $ 5.000 en caso contrario

> Como requerimiento extra, los clientes normales deben registran las fechas en los que se consulta si se puede pagar un siniestro **solamente cuando tienen deuda** (sin duplicarlas, si un cliente con deuda consultó 3 veces el sábado pasado y 5 veces el lunes, debe figurar el sábado y el lunes como días en los que se realizó la consulta).

## Objetivo

Queremos entender diferentes metodologías para corregir errores.

Para ello se puede seguir la lectura en el [repositorio del ejemplo original en Kotlin](https://github.com/uqbar-project/eg-seguros-kotlin/), ya que no importa el lenguaje en el que se apliquen dichas técnicas, ya que sirven para el desarrollo y el testing en general.

## Ejecución
La ejecucion de este proyecto es meramente con propósito educativo. Por lo tanto la ejecución con el comando `npm start` solo comenzaría la ejecución de un programa que no tiene funcionalidad.<br><br>
Por lo tanto, para testear el código se debe ejecutar el siguiente comando:
```
npm test
```