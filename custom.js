let mahasiswaArray = [];

inputManual(
  "Febri Azimi Alfirmansyah",
  "220602020",
  "Malang, 04 Februari 2004",
  "Jl.Panglima Sudirman Blk GT No.41 Gresik",
  "Universitas Muhammadiyah Gresik",
  "assets/image/foto azmii.jpg"
);
inputManual(
  "Muhammad Nur Wahab",
  "220602033",
  "Gresik, 7 April 2004",
  "Jl.Panglima Sudirman Gang 6 No 29 Gresik",
  "Universitas Muhammadiyah Gresik",
  "assets/image/profil wahab.jpg"
);
inputManual(
  "M.Daffa Naufaldi Waluyo",
  "220602030",
  "Krian, 8 Juni 2004",
  "Alam singgasana blok H12 Cerme Gresik",
  "Universitas Muhammadiyah Gresik",
  "assets/image/foto daffa.jpg"
);
inputManual(
  "Muhammad Fachrur Rozi",
  "220602005",
  "Gresik, 21 Januari 2004",
  "Jl raya Desa Tambak Beras RT 13 RW 01 Gresik",
  "Universitas Muhammadiyah Gresik",
  "assets/image/pp panjuls.png"
);
inputManual(
  "Muhammad Javier Asmadinata",
  "220602010",
  "Surabaya, 23 Januari 2004",
  "Oma Indah Menganti blok H2 no 07 Gresik",
  "Universitas Muhammadiyah Gresik",
  "assets/image/foto nata.jpg"
);
inputManual(
  "Eka Adi Rahmatullah",
  "220602034",
  "Bojonegoro, 30 Mei 2004",
  "Jln. Ir.Ibrahim Zahier ll Gang 3A Gresik",
  "Universitas Muhammadiyah Gresik",
  "assets/image/foto eka.jpg"
);
inputManual(
  "Ahmad Febriansyah",
  "220602035",
  "Pongo,16 Februari 2004",
  "Jl. Raya Brantas no 51 blok A GKB Gresik",
  "Universitas Muhammadiyah Gresik",
  "assets/image/foto riyan.jpg"
);

document.addEventListener("DOMContentLoaded", function () {
  // Panggil fungsi tampilkanManual() di sini
  updateBiodataDisplay();
});

function inputManual(
  nama,
  nim,
  ttl,
  alamat,
  pendidikan,
  foto = "assets/image/empty.jpg"
) {
  let mahasiswa = {
    nama: nama,
    nim: nim,
    ttl: ttl,
    alamat: alamat,
    pendidikan: pendidikan,
    foto: foto,
  };

  mahasiswaArray.push(mahasiswa);
}

function tambahMahasiswa() {
  let nama = document.getElementById("nama").value;
  let nim = document.getElementById("nim").value;
  let ttl = document.getElementById("ttl").value;
  let alamat = document.getElementById("alamat").value;
  let pendidikan = document.getElementById("pendidikan").value;
  let fotoInput = document.getElementById("foto").files[0];

  if (fotoInput) {
    let reader = new FileReader();
    reader.onload = function (e) {
      let fotoURL = e.target.result;
      let mahasiswa = {
        nama: nama,
        nim: nim,
        ttl: ttl,
        alamat: alamat,
        pendidikan: pendidikan,
        foto: fotoURL,
      };

      mahasiswaArray.push(mahasiswa);

      var biodataElement = createBiodata(mahasiswa);
      biodataContainer.appendChild(biodataElement);
      alert("Data Mahasiswa Berhasil Ditambahkan!");
      updateBiodataDisplay();

      //Mengosongkan TextField
      clearFormFields();
    };
    reader.readAsDataURL(fotoInput);
  } else {
    alert("Harap upload foto profil.");
  }
}

function editMahasiswa() {
  let nama = document.getElementById("nama").value;
  let nim = document.getElementById("nim").value;
  let ttl = document.getElementById("ttl").value;
  let alamat = document.getElementById("alamat").value;
  let pendidikan = document.getElementById("pendidikan").value;
  let fotoInput = document.getElementById("foto").files[0];

  let mahasiswa = {
    nama: nama,
    nim: nim,
    ttl: ttl,
    alamat: alamat,
    pendidikan: pendidikan,
  };

  for (let index = 0; index < mahasiswaArray.length; index++) {
    if (mahasiswaArray[index].nim == nim) {
      mahasiswaArray[index].nama = mahasiswa.nama;
      mahasiswaArray[index].nim = mahasiswa.nim;
      mahasiswaArray[index].ttl = mahasiswa.ttl;
      mahasiswaArray[index].alamat = mahasiswa.alamat;
      mahasiswaArray[index].pendidikan = mahasiswa.pendidikan;

      if (fotoInput) {
        let reader = new FileReader();
        reader.onload = function (e) {
          mahasiswaArray[index].foto = e.target.result;
          updateBiodataDisplay();
          alert("Telah Terganti Sempurna!");

          clearFormFields();
        };
        reader.readAsDataURL(fotoInput);
      } else {
        alert("Harap Upload Foto Profile");
      }

      return;
    }
  }

  alert("Mahasiswa dengan NIM tersebut tidak ditemukan.");
}

// const cssStyle = `
// background: #dbd5f9;
// max-width: 190px;
// width: 100%;
// height: 190px;
// margin: 0 auto;
// border-radius: 50%;
// padding: 5px;
// position: relative;
// `;

function createBiodata(data) {
  let biodataDiv = document.createElement("div");
  let nim = document.getElementById("nim").value;
  biodataDiv.className = nim;

  //biodataDiv.style.cssText = cssStyle; // Terapkan gaya CSS

  biodataDiv.innerHTML = `
      <div class="team_member" style="margin-block: 2em; padding-block: 2em; border: 0px solid #000; border-radius: 0;border-sizing: border-box; height: 620px; padding:20px">
      <img class="rounded-circle sam" src="${data.foto}" alt="" style="background: #dbd5f9; max-width: 190px; width: 100%; height: 190px; margin: 0 auto; padding: 5px; position: relative;">
      <h3>${data.nama}</h3>
      <h2>Teknik Informatika A-PG</h2>
      <span>${data.nim}</span>
      <p>
        <h4>TANGGAL LAHIR :</h4>
      </p>
      ${data.ttl}
      <p>
        <h4>ALAMAT :</h4>
      </p>
      ${data.alamat}
      <p>
        <h4>PENDIDIKAN :</h4>
      </p>
      ${data.pendidikan}
      </div>
    `;

  return biodataDiv;
}

//Fungsi Hapus Mahasiswa
function hapusMahasiswa() {
  let nim = document.getElementById("NimHps").value;
  let indexToRemove = mahasiswaArray.findIndex(
    (mahasiswaArray) => mahasiswaArray.nim === nim
  );

  if (indexToRemove !== -1) {
    // Hapus mahasiswa dari array
    mahasiswaArray.splice(indexToRemove, 1);

    // Hapus elemen dari DOM
    let biodataDiv = document.getElementById(nim);
    biodataDiv.remove();

    alert("Data Mahasiswa NIM " + nim + " Telah Terhapus!");
    updateBiodataDisplay();
    // Perbarui DOM dengan elemen-elemen yang tersisa
  } else {
    alert("Mahasiswa dengan NIM tersebut tidak ditemukan.");
  }

  document.getElementById("NimHps").value = "";
}

function updateBiodataDisplay() {
  // Bersihkan kontainer
  let biodataContainer = document.getElementById("biodataContainer");
  biodataContainer.innerHTML = "";

  mahasiswaArray.forEach((mahasiswa) => {
    let biodataDiv = createBiodata(mahasiswa);
    biodataDiv.id = mahasiswa.nim;
    biodataContainer.appendChild(biodataDiv);
  });

  //Mengosongkan TextField
  document.getElementById("NimHps").value = "";
}

function clearFormFields() {
  document.getElementById("nama").value = "";
  document.getElementById("nim").value = "";
  document.getElementById("ttl").value = "";
  document.getElementById("alamat").value = "";
  document.getElementById("pendidikan").value = "";
  document.getElementById("foto").value = "";
}
