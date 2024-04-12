function submitReport() {
    navigator.geolocation.getCurrentPosition(function (position) {
        var userLat = position.coords.latitude;
        var userLng = position.coords.longitude;

    });

    window.location.href = 'confirmacao.html';
}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
        .then(function (registration) {
            console.log('Service Worker registrado com sucesso:', registration);

        })
        .catch(function (error) {
            console.log('Falha ao registrar o Service Worker:', error);

        });
} else {
    console.log("falha ao instalar o service worker")
}
// Função para buscar o endereço com base no CEP
async function fetchAddressByCEP(cep) {

    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();

    if (data.erro) {
        console.error('CEP inválido');
        return;
    }
    document.getElementById('street').value = data.logradouro;

    console.error('Erro ao buscar o endereço:', error);

}

// Adiciona evento de alteração no campo de CEP
document.getElementById('cep').addEventListener('change', function (event) {
    const cep = event.target.value.replace(/\D/g, ''); // Remove caracteres não numéricos
    if (cep.length === 8) {
        fetchAddressByCEP(cep);
    }
});