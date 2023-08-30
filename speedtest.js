function performSpeedTest(callback) {
    const fileSizeMB = 100; // Tamanho do arquivo em MB
    const downloadTimeSeconds = 5; // Tempo estimado para baixar o arquivo em segundos

    const downloadSpeedMbps = (fileSizeMB / downloadTimeSeconds);

    // Simulação de um atraso para imitar o tempo necessário para realizar o teste
    setTimeout(() => {
        callback({
            downloadSpeed: downloadSpeedMbps,
            uploadSpeed: 0, // Simulando upload
            ping: 50 // Simulando um valor de ping em ms
        });
    }, 3000); // Tempo de simulação em milissegundos
}
