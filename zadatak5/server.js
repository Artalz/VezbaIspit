let artikli = [
    {
        "id": 1,
        "naziv": "Mleko",
        "cena": 120,
        "imeKompanije": "Imlek"
    },
    {
        "id": 2,
        "naziv": "Jogurt",
        "cena": 100,
        "imeKompanije": "Moja Kravica"
    },
    {
        "id": 3,
        "naziv": "Pepsi",
        "cena": 150,
        "imeKompanije": "Coca Cola"
    }
]

function dodajArtikal(id,naziv,cena,imeKompanije){
    let noviArtikal = {
        "id": id,
        "naziv": naziv,
        "cena": cena,
        "imeKompanije": imeKompanije
    };
    artikli.push(noviArtikal);
}

function sviArtikli(imeKompanije){
    let pomocna = [];
    for(let i = 0; i < artikli.length; i++){
        if(artikli[i].imeKompanije == imeKompanije){
            pomocna.push(artikli[i]);
            return pomocna;
        }else{
            return artikli;
        }
    }
}

function obrisiArtikal(id){
    let novi = [];
    for(let i=0; i < artikli.length; i++){
        if(artikli[i].id != id){
            novi.push(artikli[i])
        }
    }
    artikli = novi
    return novi
}

function izmeniArtikal(id, naziv, cena, imeKompanije){
    for (let i = 0; i < artikli.length; i++){
        if (artikli[i].id == id){
            artikli[i].naziv = naziv;
            artikli[i].cena = cena;
            artikli[i].imeKompanije = imeKompanije;
        }
    }
}