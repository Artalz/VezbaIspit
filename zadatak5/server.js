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