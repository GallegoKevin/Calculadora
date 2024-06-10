# CALCULADORA

![Captura](https://i.ibb.co/5BGHJCR/calculadora-01.png)

## Archivos: 
- **index.html / HTML:** Estructura HTML de la calculadora.
- **styles.css / CSS :** Estilos de apariencia, diseño, colores, entre otros.
- **app.js / JAVASCRIPT:** Lógica de la calculadora, manejo de eventos y cálculos.

## Funcionalidades: 

- **Operaciones básicas:**  Permite realizar operaciones que impliquen `(+)`, `(-)`, `(*)` y `(/)`.
- **Operación de borrado:** Permite borrar un dígito a la vez utilizando `"CE"` o borrar todo con `"C"`.
- **Operación de igual:** Permite calcular el resultado de la operación y muestra la respuesta en el display.
- **Operaciones con paréntesis (" `(` ` )` "):** Permite operaciones que impliquen paréntesis para agrupar operaciones, multiplicar, etc.
- **Operaciones con decimales (" `.` "):** Permite realizar operaciones que impliquen numeros decimales.

## Funciones JavaScript:

### Variables:

- `display`: Muestra el resultado de la calculadora.
- `buttons`: Botones de la calculadora.
- `clearBtn`: Botón de limpiar toda la entrada.
- `clearEntryBtn`: Botón de borrar el último carácter.
- `equalBtn`: Botón de igual.

### Listeners:

- `buttons.forEach(button => {
    button.addEventListener('click', () => handleButtonClick(button.textContent));
  })`: Escucha el evento de clic en todos los botones de la calculadora y llama a `handleButtonClick` con el texto del botón.
- `clearBtn.addEventListener('click', clearDisplay)`: Escucha el evento de clic en el botón "C" y llama a `clearDisplay`.
- `clearEntryBtn.addEventListener('click', deleteLast)`: Escucha el evento de clic en el botón "CE" y llama a `deleteLast`.
- `equalBtn.addEventListener('click', calculateResult)`: Escucha el evento de clic en el botón "=" y llama a `calculateResult`.

### Functions:

- `handleButtonClick(char)`: Maneja el click en los botones de la calculadora.
- `clearDisplay()`: Limpia el display de la calculadora.
- `deleteLast()`: Elimina el último carácter del display.
- `calculateResult()`: Calcula el resultado de la expresión ingresada.
- `appendCharacter(char)`: Añade un carácter al display según las reglas de la calculadora.
- `isOperator(char)`: Verifica si un carácter es un operador matemático.
- `getCurrentNumber()`: Obtiene el número actual ingresado en el display.


## DEMOSTRACIÓN

![Demo](https://i.ibb.co/XpkZVqj/Mi-V-deo-online-video-cutter-com-1.gif)

