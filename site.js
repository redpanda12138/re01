function sayHello(){
    window.alert("仅Home, My Music, 陈奕迅歌单有效");
}

function playMusic(temp){
    var music = document.getElementById('player');
    music.src = temp;
}