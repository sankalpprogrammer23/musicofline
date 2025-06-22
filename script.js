const songs = [
  "asitwas.mp3",
  "letme.mp3",
];

const playlistDiv = document.getElementById('playlist');
const audioPlayer = document.getElementById('audioPlayer');
const searchInput = document.getElementById('searchInput');

function renderSongs(filter = "") {
  playlistDiv.innerHTML = "";
  songs.filter(song => song.toLowerCase().includes(filter.toLowerCase()))
       .forEach(song => {
         const div = document.createElement("div");
         div.className = "song";
         div.innerText = song.replace(".mp3", "").replace(/-/g, " ");
         div.onclick = () => {
           audioPlayer.src = `songs/${song}`;
           audioPlayer.play();
         };
         playlistDiv.appendChild(div);
       });
}

searchInput.addEventListener("input", () => {
  renderSongs(searchInput.value);
});

renderSongs();
