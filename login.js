var nilai = prompt("Masukan Nilai");
        var namaMhs = prompt("Masukan nama mahasiswa")

         if(nilai > 70){
            document.write(namaMhs + ' ' + 'Lulus' + ' : ' + nilai)
         } else if(nilai < 70){
            document.write(namaMhs + ' ' + 'Tidak Lulus' + ' : ' + nilai)
         }