//FUNÇÃO PARA RETORNAR DA API DO GOOGLE A LATITUDE E LONGITUDE
//USADA PARA ADICIONAR 'MARKERS' EM GOOGLE MAPS.

function googleApis() {

    //ARRAY CONTENDO INFORMAÇÕES DO LOCAL
    var address = [
        {
            "NOME_FANTASIA": "JUVEVE",
            "CEP_NUMERO": "80030-001, 1134"
        },
        {
            "NOME_FANTASIA": "RUA XV DAS FLORES",
            "CEP_NUMERO": "80020-310, 123"
        }
    ]
    var objectAddress = [];

    for(let i = 0; i < address.length; i++){
        if (address[i].CEP_NUMERO != null) {
            var googleEndereco = `https://maps.googleapis.com/maps/api/geocode/json?address=${address[i].NOME_FANTASIA}+${address[i].CEP_NUMERO}&key=[ADICIONAR-GOOGLE-API-KEY]`;

            $.ajax({
                method: "GET",
                dataType: "JSON",
                url: googleEndereco,
                async: false,
                cache: false,
                success: function (result) {
                    var enderecoN = {
                        tooltip: result.results[0].formatted_address,
                        location: result.results[0].geometry.location,
                    }

                    objectAddress.push(enderecoN);
                    console.log('OBJECT-)', objectAddress);
                },
                error: function (erro) {
                    console.log("ERRO -)", address[i], " - ", address[i]);
                },
            })
        } else {
            console.log("ERRO -)", address[i]);
            return false;
        }
    }
}

googleApis();

