const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const typing = document.getElementById("typing");
const stars = document.getElementById("stars");

const text = `Untuk Dude...

Kalau kamu sedang membaca surat ini...

Terima kasih.

Terima kasih karena kamu masih bertahan sampai hari ini.

Aku tahu perjalananmu tidak selalu mudah.

Ada hari ketika kamu merasa lelah.

Ada hari ketika kamu ingin menyerah.

Ada mimpi yang belum tercapai.

Ada harapan yang masih tertunda.

Tapi lihatlah...

Kamu masih di sini.

Dan itu adalah kemenangan.

Jangan pernah membenci dirimu sendiri.

Karena kamu sudah berjuang sejauh ini.

Teruslah melangkah.

Pelan juga tidak apa-apa.

Yang penting jangan berhenti.

Suatu hari nanti...

Semua usaha, air mata, dan doa yang kamu simpan akan menemukan jalannya.

Tetaplah menjadi orang baik.

Tetap rendah hati.

Tetap bermimpi.

Dan jangan pernah menyerah.

🌙

— Dari Dude, untuk Dude ❤️`;

let i = 0;

function typeWriter() {
    if (i < text.length) {
        typing.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 32);
    }
}

openBtn.onclick = () => {
    envelope.style.display = "none";
    letter.style.display = "block";
    typing.innerHTML = "";
    i = 0;
    typeWriter();
};

closeBtn.onclick = () => {
    letter.style.display = "none";
    envelope.style.display = "block";
};

function createStar(){

    const star=document.createElement("div");

    star.className="star";

    const size=Math.random()*4+2;

    star.style.width=size+"px";
    star.style.height=size+"px";

    star.style.left=Math.random()*100+"vw";
    star.style.top=Math.random()*100+"vh";

    star.style.animationDuration=(2+Math.random()*4)+"s";

    stars.appendChild(star);

}

for(let s=0;s<150;s++){
    createStar();
}
