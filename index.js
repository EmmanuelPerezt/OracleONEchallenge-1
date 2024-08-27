document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('input-text');
    const encryptButton = document.getElementById('encrypt');
    const decryptButton = document.getElementById('decrypt');
    const outputPlaceholder = document.querySelector('.output-placeholder');
    const outputMessage = document.createElement('textarea');
    outputMessage.setAttribute('readonly', true);
    outputMessage.style.width = '100%';
    outputMessage.style.height = '150px';
    outputMessage.style.padding = '10px';
    outputMessage.style.fontSize = '18px';
    outputMessage.style.border = '2px solid #ccc';
    outputMessage.style.borderRadius = '8px';
    outputMessage.style.resize = 'none';

    // Reglas de encriptación
    const encryptionKeys = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    // Función para encriptar el texto
    function encrypt(text) {
        return text.replace(/[eioua]/g, (match) => encryptionKeys[match]);
    }

    // Función para desencriptar el texto
    function decrypt(text) {
        return text
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');
    }

    // Función para mostrar el resultado
    function displayResult(result) {
        outputMessage.value = result;
        outputPlaceholder.innerHTML = ''; // Limpiar el contenido actual
        outputPlaceholder.appendChild(outputMessage); // Mostrar el resultado
    }

    // Validar el texto de entrada
    function validateInput(text) {
        return /^[a-z\s]+$/.test(text); // Solo minúsculas y espacios
    }

    // Evento para encriptar el texto
    encryptButton.addEventListener('click', () => {
        const text = inputText.value.trim();
        if (!validateInput(text)) {
            alert('Por favor, ingrese solo letras minúsculas y sin acentos.');
            return;
        }
        const encryptedText = encrypt(text);
        displayResult(encryptedText);
    });

    // Evento para desencriptar el texto
    decryptButton.addEventListener('click', () => {
        const text = inputText.value.trim();
        if (!validateInput(text)) {
            alert('Por favor, ingrese solo letras minúsculas y sin acentos.');
            return;
        }
        const decryptedText = decrypt(text);
        displayResult(decryptedText);
    });
});
