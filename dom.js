var intro1=document.getElementById("intro1");

var mesaj=document.getElementById("mesaj");

mesaj.innerHTML=intro1.innerHTML;

var tumlisteler=document.getElementsByTagName("ul");

var sehirler=tumlisteler[0]

tumElemanlar=sehirler.getElementsByTagName("li");

// for(i=0;i<tumElemanlar.length;i++){
//     alert(tumElemanlar[i].innerHTML);
// }

var classElemanlari= document.getElementsByClassName("intro1");

//alert(classElemanlari[0].innerHTML);