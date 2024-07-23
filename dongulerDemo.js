var kullanicilar=[
    {email:"engindemirog@gmail.com",sifre:"123456"},
    {email: "derindemirog@gmail.com", sifre:"123456"}
]

var tivitler= [
    {email:"engindemirog@gmail.com",tivit:"bugün hava çok güzel"},
    {email:"engindemirog@gmail.com",sifre:"bugün hava çok güzel 2"},
    {email: "derindemirog@gmail.com", sifre:"kapıyı ben açacağım"}
]

var email = prompt("email?")
var sifre = prompt("sifre?")

function kullaniciVarmi(email,sifre){
    for(i=0;i<kullanicilar.length;i++){
        if((kullanicilar[i].email==email && kullanicilar[i].sifre==sifre)){
            return true;
        }
    }
    return false;
}
function giris(){
    if(kullaniciVarmi(email,sifre)){
        console.log(tivitler)
    }else{
        console.log("Kullanıcı adı veya şifre hatalı")
    }
}

giris(email,sifre)