const dizi=[1,2,3,4]

const kareDizisi=[]

dizi.forEach(sayi=>{
    console.log(sayi);
    kareDizisi.push(sayi*sayi);
})

console.log(kareDizisi);

//map

const mapDizi = dizi.map(sayi=> sayi*3)

console.log(mapDizi);

//filter

const filtreliDizi=dizi.filter(sayi=>sayi>2)

console.log(filtreliDizi);

//reduce

const toplam=dizi.reduce((acc,sayi)=>{
    return acc+sayi;
})

console.log(toplam);