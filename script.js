let app = new Vue({
  el: '#drum-machine',
  data: {
    title: 'Stranger Sounds',
    display: 'Sound',
    keypads: [
    { key: 'Q',
      keyID: 81,
      url: 'https://res.cloudinary.com/dwhgf9jyv/video/upload/v1540563790/StrangerSounds/Drum.mp3',
      name: 'Drum' },

    { key: 'W',
      keyID: 87,
      url: 'https://res.cloudinary.com/dwhgf9jyv/video/upload/v1540567280/StrangerSounds/friends.mp3',
      name: 'Friends' },

    { key: 'E',
      keyID: 69,
      url: 'https://res.cloudinary.com/dwhgf9jyv/video/upload/v1540391274/StrangerSounds/stranger_things-mail.mp3',
      name: 'Synth86' },

    { key: 'A',
      keyID: 65,
      url: 'https://res.cloudinary.com/dwhgf9jyv/video/upload/v1540391274/StrangerSounds/stranger_things_2.mp3',
      name: 'Synth1' },

    { key: 'S',
      keyID: 83,
      url: 'https://res.cloudinary.com/dwhgf9jyv/video/upload/v1540562876/StrangerSounds/synth2.mp3',
      name: 'Synth2' },

    { key: 'D',
      keyID: 68,
      url: 'https://res.cloudinary.com/dwhgf9jyv/video/upload/v1540564500/StrangerSounds/Mouth_Breather.mp3',
      name: 'Mouth Breather' },

    { key: 'Z',
      keyID: 90,
      url: 'https://res.cloudinary.com/dwhgf9jyv/video/upload/v1540391273/StrangerSounds/stranger_things_purr.mp3',
      name: 'Dustin\'s Purr' },

    { key: 'X',
      keyID: 88,
      url: 'https://res.cloudinary.com/dwhgf9jyv/video/upload/v1540563356/StrangerSounds/IntroSynth.mp3',
      name: 'Intro Synth' },

    { key: 'C',
      keyID: 67,
      url: 'https://res.cloudinary.com/dwhgf9jyv/video/upload/v1540563970/StrangerSounds/africaClip.mp3',
      name: 'Bless the Rains' }] },



  methods: {
    click: function (e) {
      e.target.firstElementChild.currentTime = 0;
      e.target.firstElementChild.play();
      e.target.classList.add('playing');
      let pressed = this.keypads.filter(obj => obj.keyID == e.target.id);
      let displayS = document.getElementById('display');
      displayS.textContent = pressed[0].name;
    },
    handleKey: function (e) {
      let key = e.key.toUpperCase();
      let pressed = this.keypads.filter(obj => obj.key == key);
      document.getElementById(pressed[0].keyID).click();
    },
    removeClass: function (e) {
      if (e.propertyName !== 'transform') return;
      e.target.classList.remove('playing');
    } },

  created: function () {
    document.addEventListener('keydown', this.handleKey);
  },
  mounted: function () {
    let keys = document.querySelectorAll('.drum-pad');
    keys.forEach(key => key.addEventListener('transitionend', this.removeClass));
  } });
