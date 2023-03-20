// var penumpang = []
// var tambahPenumpang = function (namaPenumpang, penumpang){
//     if (penumpang.length == 0){
//         penumpang.push(namapenumpang);
//         return penumpang;
//     }else{
//         for (i=0; 1 <penumpang.length; i++){
//             if(penumpang[i] == undefined){
//                 if (penumpang.includes(namaPenumpang)){
//                     console.log("penumpang dengan nama" + namaPenumpang + "Sudah ada." );
//                 }
//                 return penumpang;
//             }else if (namaPenumpang == penumpang [i]){
//                 console.log(`penumpang tersebut suda di dalam pesawat.`);
//                 return penumpang;
//             }else if (i == penumpang.length - 1){
//                 penumpang.push(namaPenumpang)
//                 return penumpang;
//             }




//             }
//         }
//     }
// tambahPenumpang('aim gelap', penumpang);



var penumpang = [] //berfungsi untuk
var tambahPenumpang = function (namaPenumpang, penumpang) {
    if(penumpang.length == 0){ //untuk menghitung isi panjangnya data
       penumpang.push(namaPenumpang); //untuk menambah data ke dalam array
       return penumpang; //untuk mengulang isi array & keluar dari function
    }else{
        for(i = 0; i < penumpang.length; i++){ //untuk mencari ulang isi panjang data yang sudah di isi
            if(penumpang[i] == undefined){ //jika isi penumpang kosong/undefined
                penumpang[i] = namaPenumpang; //menambahkan isi kursi yang kosong
                return penumpang; //mengembalikan isi array & keluar dari function
            }else if(namaPenumpang == penumpang[i]){ //untuk mencari data sama yang telah diinput datanya
                console.log(namaPenumpang + ' sudah didalam angkot'); //memberikan informasi data yang sama/sudah ada
                return penumpang; //mengembalikan isi array & keluar dari function
            }else if(i == penumpang.length -1){ //karena i nilainya 0, dan penumpang.length mempunyai nilai 1. fungsi - 1 setelah penumpang.length adalah untuk menyamakan nilai i dan penumpang.length
             penumpang.push(namaPenumpang); //menambah nama penumpang
             return penumpang; //mengembalikan isi array & keluar dari function   

            }

        }
    }
}


