const dataMakanan =[
{
  foto:"img/mieayam.jpeg", 
  nama: 'Mie ayam',
  harga: "Rp16.000"
}, 
{
  foto:"img/baksourat.jpg", 
  nama: 'Bakso Urat', 
  harga: "Rp20.000"
}, 
{
  foto:"img/aqua.jfif",
  nama:'Aqua',
  harga:"Rp2000"
},
{
  foto:"img/bakso.jpg", 
  nama: 'Bakso biasa', 
  harga: "Rp15.000"
}, 
{
  foto:"img/makanan6.jpg", 
  nama: 'Nasi goreng', 
  harga: "Rp15.000"
},  
{
  foto:"img/ayamgoyeng.jpg", 
  nama: 'Nasi Ayam', 
  harga: "Rp10.000"
}, 
{
  foto:"img/mie.jpg", 
  nama: 'Mie Sehat', 
  harga: "Rp10.000"
},  
{
  foto:"img/seblak.jpg", 
  nama: 'Seblak Mercon',
  harga: "Rp8.000"
},  
{
  foto:"img/teh.jpg", 
  nama: 'Es_Teh', 
  harga: "Rp4.500"
},   
{
  foto:"img/escampur.jpg", 
  nama: 'ABCD', 
  harga: "Rp10.000"
 },
 ];
const card = document.querySelector("body");
for(let data of dataMakanan){
  card.innerHTML += `
<nav class="navbar navbar-dark btn-secondary fixed-top">
    <nav class="navbar ">
      <a class="navbar-brand" >
        <img src="img/logo.png" width="40" height="40" class="d-inline-block align-top" alt="">
        Tangan Handal
      </a>
   <div class="dropdown">
  <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Menu
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="menu.html">Sarapan</a>
    <a class="dropdown-item" href="#">Mie ayam</a>
    <a class="dropdown-item" href="#">Bakso Urat</a>
    <a class="dropdown-item" href="#">Bakso Biasa</a>
    <a class="dropdown-item" href="#">Aqua</a>
    <a class="dropdown-item" href="#">Nasi Goreng</a>
    <a class="dropdown-item" href="#">Nasi Ayam</a>
    <a class="dropdown-item" href="#">mie sehat</a>
    <a class="dropdown-item" href="#">seblak</a>
    <a class="dropdown-item" href="#">Es teh</a>
    <a class="dropdown-item" href="#">Es_campur</a>
    <a class="dropdown-item" href="web.html">Home</a>
  </div>
</div>

<div class="dropdown">
  <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Catering
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Pernikahan</a>
    <a class="dropdown-item" href="#">Ultang tahun</a>
    <a class="dropdown-item" href="#">Arisan</a>
  </div>  
</div>

<div class="dropdown">
  <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Info
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="http://instagram.com/wahyuxtiramisu/?hl=id">Instagram</a>
    <a class="dropdown-item" href="#">Facebook</a>
    <a class="dropdown-item" href="#">Contact</a>
  </div>
</div>
        <a class="btn btn-primary align-top" href="form.html" role="button" >Order Now</a>

        </nav>
        <nav class="navbar ">
  <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
</nav>

      </nav>

    <div class="box-makanan ">
      <img src="${data.foto}" style="height:200px; width:300px;">
          <h5 class="card-title">${data.nama}</h5>
          <p class="card-text">${data.harga}</p>
          <a href="#" class="btn">Beli</a>
       
  </div>
 <!-- Footer -->
<footer>
  <div class="container text-center">
    <div class="row">
      <div class="col-sm-12">
        <p>&copy;Copyright  2019 | built by. <a href="http://instagram.com/wahyuxtiramisu/?hl=id">Wahyu Sanjaya</a>. </p>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <a href="https://www.youtube.com/channel/UCydmuo5shwgWKF5DVHAx7Jw" class="btn btn-danger">Subscribe My Channel</a>
      </div>
    </div>
  </div>
</footer>
<!-- Akhir footer -->


   `;
}
