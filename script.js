// Obtener los elementos del DOM
const screen = document.getElementById('screen');
const buttons = document.querySelectorAll('button');
let currentInput = '';

// Función para actualizar la pantalla
function updateScreen() {
    screen.textContent = currentInput;
}

// Función para manejar los clics en los botones
buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        const buttonText = event.target.textContent;

        // Si el botón presionado es un número o un punto decimal
        if (button.classList.contains('number') || button.classList.contains('decimal')) {
            currentInput += buttonText;  // Agregar el número al input actual
        }

        // Si el botón presionado es un operador
        else if (button.classList.contains('operator')) {
            currentInput += ` ${buttonText} `;  // Agregar el operador con espacios para formato
        }

        // Si el botón es el igual, evalúa la operación
        else if (button.classList.contains('equals')) {
            try {
                currentInput = eval(currentInput).toString();  // Evalúa la expresión y la convierte a string
            } catch (error) {
                currentInput = 'Error';  // En caso de error en la operación
            }
        }

        // Si el botón es "C", borra la entrada
        else if (button.classList.contains('clear')) {
            currentInput = '';  // Limpia la pantalla
        }

        // Actualiza la pantalla con el valor actual
        updateScreen();
    });
});
