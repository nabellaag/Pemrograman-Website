<?php
//1. Latihan pertama start php
echo "<h1>Hello World coding php pertama</h1><br>";

//2. Latihan variabel
$bilangan_satu =  30;
$bilangan2 = 14;
$keterangan = "Bilangan";
//menampilkan variabel
echo $keterangan." satu = ".$bilangan_satu." dan ".$keterangan. " dua = ".$bilangan2;

//3. Latihan Operator 
$hasil = $bilangan_satu + $bilangan2;
echo "<br>";
echo " Hasil ".$bilangan_satu." + ".$bilangan2." = ".$hasil;

//4. Latihan 4 control flow
$nilai = 100;
$nilai_huruf = "";

if ($nilai >= 90) {
    $nilai_huruf = "A";
} elseif ($nilai < 90 && $nilai >=80){
    $nilai_huruf = "B";
} else {
    $nilai_huruf = "C";
}

echo "<br>";
echo "Nilai Anda adalah ".$nilai_huruf;

//5. Variabel Array
$mobil = array('Toyota', 'BMW', 'Honda');
echo "<br>";
print_r($mobil);
echo "<br>";
echo "Mobil Sultan ".$mobil[1];

//6. Perulangan
for($i=0; $i < count($mobil); $i++){
    echo "<br>";
    echo "<br>";
    echo "Data mobil ke ".$i." adalah ".$mobil[$i];
}
