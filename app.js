function onScanSuccess(decodedText, decodedResult) {
    // Al detectar un código, mostramos el resultado
    document.getElementById('result').innerHTML = `
        <strong style="color: green;">¡Código detectado!</strong>
        <p>${decodedText}</p>
    `;
    // Aquí podrías enviar este dato a una base de datos
    console.log(`Código escaneado: ${decodedText}`, decodedResult);
}

function onScanFailure(error) {
    // Error silencioso para no saturar la consola durante el escaneo
}

// Configuración del escáner
let html5QrcodeScanner = new Html5QrcodeScanner(
    "reader", 
    { fps: 10, qrbox: {width: 250, height: 150} }, 
    /* verbose= */ false
);

html5QrcodeScanner.render(onScanSuccess, onScanFailure);