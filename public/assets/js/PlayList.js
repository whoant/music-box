class PlayList{
    constructor(musics){
        this.listMusic = musics;
        this.index = 0;

        this.sound = new Howl({
            src: [musics[this.index].streaming], 
            format: ['mp3'],
            html5: true,

        });
    }

    add(music){
        this.listMusic.push({music});
    }

    remove(index){
        if (this.listMusic.length === 0) return false;
        this.listMusic.splice(index, 1);
        return true;
    }

    play() {
        this.sound.play();    
    }

    pause(){
        this.sound.pause();  
    }

    stop(){
        this.sound.stop();  
    }

    run(streaming){
        this.stop();
        
        this.sound = new Howl({
            src: [streaming], 
            format: ['mp3'],
            html5: true,
        });
    }

    playing(){
        return this.sound.playing();
    }

    playIndex(idMusic, streaming){
        this.stop();
        this.listMusic.forEach((item, i) => {
            if (item.id === idMusic) {
   
             this.index = i;
                return;
            }
        });
        this.sound = new Howl({
            src: [streaming], 
            format: ['mp3'],
            html5: true,
        });
    }

    mute(check){
        this.sound.mute(check);
    }

    seek(time = null){
        if (time === null) return this.sound.seek();
        this.sound.seek(time);
    }

    duration(){
        return this.sound.duration();
    }

    volume(vol = null){
        if (vol === null) return Howler.volume();
        Howler.volume(vol);
    }

    on(event, callback){
        this.sound.on(event, callback);
    }
    once(event, callback){
        this.sound.once(event, callback);
    }
    
    get curIndex(){
        return this.index;
    }

    infoMusic(index = null){
        if (index === null) index = this.index;
        return this.listMusic[index];
    }
    getMusicNext(){
        this.index = (this.index < this.listMusic.length - 1) ? ++this.index : 0;
        return this.listMusic[this.index];
    }
    getMusicPrev(){
        this.index = (this.index > 0) ? --this.index : this.listMusic.length - 1;
        return this.listMusic[this.index];
    }

    getListMusic(){
        return this.listMusic;
    }

}



