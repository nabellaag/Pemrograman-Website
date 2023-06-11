//1. Buat fungsi untuk materi event
function eventSatu() {
    alert("Hello World");
    
}

function gantiGambar(img) {
    img.src='/img/jay1.jpg';
}

function gantiGambarDua(img) {
    img.src='/img/jay.jpg';
}
//2.materi operator
function cekLogin() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username == 'park' && password == '1234') {
        alert('Login Berhasil');
    } else {
        alert('Login Gagal');
    }
}
//3. Materi Operator 2
function cekNilai(param) {
    let nilai = param.value;
    let info = document.getElementById("info");

    info.style.fontSize = '24px'; 
    if (nilai > 60) {
        info.innerText = 'Anda Lulus';
        info.style.color = 'green';
    } else {
        info.innerText = 'Anda Tidak Lulus';
        info.style.color = 'red';
    }
}

//4. Materi operator 3
let day = new Date().getDay();
let namahari ;
switch (day) {
    case 1:
        namahari = 'Senin';
        break;
    case 2:
        namahari = 'Selasa';
        break;
    case 3:
        namahari = 'Rabu';
        break;
    case 4:
        namahari = 'Kamis';
        break;
    case 5:
        namahari = 'Jumat';
        break;
    default:
        namahari = 'Tidak ada';
        break;
}

document.getElementById('namahari').innerHTML = "Hari ini adalah hari " + namahari;

//5. Perulangan

let namaOrang = ['Jay', 'Suga', 'Seokjin'];

let teks = '';

for (let index = 0; index < namaOrang.length; index++) {
    teks += "- "+namaOrang[index]+ " <br>";
    
}

document.getElementById('nama_orang').innerHTML = teks;