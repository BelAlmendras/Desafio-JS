//formulario

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const nameInput = document.getElementById('name');
    const subjectInput = document.getElementById('subject');
    const messageText = document.getElementById('message-text');
    
    const nameMessage = document.getElementById('name-message');
    const subjectMessage = document.getElementById('subject-message');
    const messageTextMessage = document.getElementById('message-text-message');
    const formMessage = document.getElementById('form-message');
    
    const regex = /^[a-zA-Z\s]+$/;
    
    let isValid = true;
    
    if (nameInput.value.trim() === '') {
        nameMessage.textContent = 'Debes escribir un nombre';
        nameMessage.className = 'error';
        isValid = false;
    } else if (!regex.test(nameInput.value)) {
        nameMessage.textContent = 'El nombre sólo puede contener letras y espacios.';
        nameMessage.className = 'error';
        isValid = false;
    } else {
        nameMessage.textContent = '';
    }

    if (subjectInput.value.trim() === '') {
        subjectMessage.textContent = 'El "asunto" está vacío.';
        subjectMessage.className = 'error';
        isValid = false;
    } else if (!regex.test(subjectInput.value)) {
        subjectMessage.textContent = 'El "asunto" sólo puede contener letras y espacios.';
        subjectMessage.className = 'error';
        isValid = false;
    } else {
        subjectMessage.textContent = '';
    }

    if (messageText.value.trim() === '') {
        messageTextMessage.textContent = 'Debes enviar un mensaje!.';
        messageTextMessage.className = 'error';
        isValid = false;
    } else if (!regex.test(messageText.value.replace(/\s+/g, ' '))) {
        messageTextMessage.textContent = 'El mensaje sólo puede contener letras y espacios.';
        messageTextMessage.className = 'error';
        isValid = false;
    } else {
        messageTextMessage.textContent = ''; 
    }

    if (isValid) {
        formMessage.textContent = '¡Formulario fue enviado exitosamente!';
        formMessage.className = 'success';
    } else {
        formMessage.textContent = ''; 
        formMessage.className = ''; 
    }
});

//Selector de Colores

document.querySelectorAll('.color-selector button').forEach(button => {
    button.addEventListener('click', () => {
        const color = button.getAttribute('data-color');
        const colorDisplay = document.getElementById('color-display');
        const colorCode = document.getElementById('color-code');
        
        colorDisplay.style.backgroundColor = color;
        colorCode.textContent = `Código RGB: ${color}`;
    });
});

//calculadora

document.addEventListener('DOMContentLoaded', function() {
    function calculate(operation) {
        const num1 = parseFloat(document.getElementById('num1').value) || 0;
        const num2 = parseFloat(document.getElementById('num2').value) || 0;
        let result;

        switch (operation) {
            case 'add':
                result = num1 + num2;
                break;
            case 'subtract':
                result = num1 - num2;
                result = result < 0 ? 0 : result;
                break;
            default:
                result = 0;
        }

        document.getElementById('resultados').textContent = `Resultado: ${result}`;
    }

    document.getElementById('addButton').addEventListener('click', function() {
        calculate('add');
    });
    document.getElementById('subtractButton').addEventListener('click', function() {
        calculate('subtract');
    });
});