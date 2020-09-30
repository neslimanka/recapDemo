var kullanicilar = [
  {
    email: "karahuyukneslihan@gmail.com",
    sifre: "12345",
  },
  {
    email: "mozturk357@gmail.com",
    sifre: "56789",
  },
];

var twitler = [
  { email: "karahuyukneslihan@gmail.com", twit: "Bugun haba çok güzel" },
  { email: "neslihankarahuyuk@gmail.com", twit: "Bugun hava cok güzel 2" },
  { email: "mozturk357@gmail.com", twit: "Bugun hava yağmurlu" },
];

var email = prompt("email?");
var sifre = prompt("şifre?");

function giris() {
  if (
    (email == kullanicilar[0].email && sifre == kullanicilar[0].sifre) ||
    (email == kullanicilar[1].email && sifre == kullanicilar[1].sifre)
  ) {
    console.log(twitler);
  } else {
    console.log("Kullanıcı adı veya şifresi hatalıdır");
  }
}

giris(email,sifre)
