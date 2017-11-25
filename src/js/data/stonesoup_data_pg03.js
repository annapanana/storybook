const width = "1024";
const height = "768";

const loadingData = [
  {id:"background", src:"/assets/stonesoup/pg03/pg03_BG_Background.png"},
  {id:"bg_walls", src:"/assets/stonesoup/pg03/pg03_BG_Walls.png"},
  {id:"fg_box", src:"/assets/stonesoup/pg03/pg03_FG_Box.png"},
  {id:"sack_backs", src:"/assets/stonesoup/pg03/pg03_MG_SackBacks.png"},
  {id:"sack_front_01", src:"/assets/stonesoup/pg03/pg03_MG_SackFront01.png"},
  {id:"sack_front_02", src:"/assets/stonesoup/pg03/pg03_MG_SackFront02.png"},
  {id:"sack_front_03", src:"/assets/stonesoup/pg03/pg03_MG_SackFront03.png"},
  {id:"sack_front_04", src:"/assets/stonesoup/pg03/pg03_MG_SackFront04.png"},
  {id:"sack_pins", src:"/assets/stonesoup/pg03/pg03_MG_SackPins.png"},
  {id:"pipe_blue", src:"/assets/stonesoup/pg03/pg03_MG_PipeBlue.png"},
  {id:"pipe_red_front", src:"/assets/stonesoup/pg03/pg03_MG_PipeRed_Front.png"},
  {id:"pipe_red", src:"/assets/stonesoup/pg03/pg03_MG_PipeRed.png"},
  {id:"pipe_yellow_front", src:"/assets/stonesoup/pg03/pg03_MG_PipeYellow_Front.png"},
  {id:"pipe_yellow", src:"/assets/stonesoup/pg03/pg03_MG_PipeYellow.png"},
  {id:"pipe_green_front", src:"/assets/stonesoup/pg03/pg03_MG_PipeGreen_Front.png"},
  {id:"pipe_green", src:"/assets/stonesoup/pg03/pg03_MG_PipeGreen.png"},
  {id:"fg_pigeon_hat", src:"/assets/stonesoup/pg03/pg03_FG_PigeonHat.png"},
  {id:"fg_pigeon_scarf", src:"/assets/stonesoup/pg03/pg03_FG_PigeonScarf.png"},
  {id:"skunk_baby_01", src:"/assets/stonesoup/pg03/pg03_FG_SkunkBaby01.png"},
  {id:"skunk_baby_02", src:"/assets/stonesoup/pg03/pg03_FG_SkunkBaby02.png"},
  {id:"skunk_blue", src:"/assets/stonesoup/pg03/pg03_FG_SkunkBlue.png"},
  {id:"skunk_yellow", src:"/assets/stonesoup/pg03/pg03_FG_SkunkYellow.png"},
  {id:"squirrel_blue", src:"/assets/stonesoup/pg03/pg03_FG_SquirrelBlue.png"},
  {id:"squirrel_ear_muffs", src:"/assets/stonesoup/pg03/pg03_FG_SquirrelEarMuffs.png"},
  {id:"squirrel_green", src:"/assets/stonesoup/pg03/pg03_FG_SquirrelGreen.png"},
  {id:"squirrel_pink", src:"/assets/stonesoup/pg03/pg03_FG_SquirrelPink.png"},
  {id:"squirrel_purple", src:"/assets/stonesoup/pg03/pg03_FG_SquirrelPurple.png"},
  {id:"frame", src:"/assets/stonesoup/pg03/pg03_Frame.png"}
]

const clickableSteps = [
  {
    wait: 0,
    x: 0,
    y: 0,
    t: 100,
    sx: .28,
    sy: .28,
    easePow: 3,
    rot: 0
  },
  {
    wait: 150,
    x: 0,
    y: 0,
    t: 100,
    sx: .25,
    sy: .25,
    easePow: 3,
    rot: 0
  }
]

const positionData = [
  {
    id:"background",
    children: [],
    scaleX: .5,
    scaleY: .5,
    x:0,
    y:0,
    rot: 0,
    img: {},
    a: 1,
    steps: []
  },
  {
    id:"bg_walls",
    children: [],
    scaleX: .5,
    scaleY: .5,
    x:0,
    y:0,
    rot: 0,
    img: {},
    a: 1,
    steps: []
  },
  {
    id:"fg_box",
    children: [],
    scaleX: .25,
    scaleY: .25,
    anchorX: 1,
    anchorY: 1,
    x:width,
    y:height,
    rot: 0,
    img: {},
    a: 1,
    steps: []
  },
  {
    id:"sack_backs",
    children: [],
    scaleX: .25,
    scaleY: .25,
    x:0,
    y:50,
    rot: 0,
    img: {},
    a: 1,
    steps: []
  },
  {
    id:"sack_front_01",
    children: [],
    scaleX: .25,
    scaleY: .25,
    x:68,
    y:205,
    rot: 0,
    img: {},
    a: 1,
    steps: []
  },
  {
    id:"sack_front_02",
    children: [],
    scaleX: .25,
    scaleY: .25,
    x:300,
    y:265,
    rot: 0,
    img: {},
    a: 1,
    steps: []
  },
  {
    id:"sack_front_03",
    children: [],
    scaleX: .25,
    scaleY: .25,
    x:545,
    y:275,
    rot: 0,
    img: {},
    a: 1,
    steps: []
  },
  {
    id:"sack_front_04",
    children: [],
    scaleX: .25,
    scaleY: .25,
    x:775,
    y:220,
    rot: 0,
    img: {},
    a: 1,
    steps: []
  },
  {
    id:"sack_pins",
    children: [],
    scaleX: .25,
    scaleY: .25,
    x:0,
    y:100,
    rot: 0,
    img: {},
    a: 1,
    steps: []
  },
  {
    id:"fg_pigeon_hat",
    children: [],
    scaleX: .25,
    scaleY: .25,
    x:0,
    y:0,
    rot: 0,
    img: {},
    a: 1,
    steps: [],
    clickable: [
      {
        childImg: {
          id: "fg_pigeon_hat",
          src: ""
        },
        audio:"/assets/stonesoup/pg03/P3_SFX_StartledPigeon_02.mp3",
        steps: clickableSteps
      }
    ]
  },
  {
    id:"fg_pigeon_scarf",
    children: [],
    scaleX: .25,
    scaleY: .25,
    x:0,
    y:105,
    rot: 0,
    img: {},
    a: 1,
    steps: [],
    clickable: [
      {
        childImg: {
          id: "fg_pigeon_scarf",
          src: ""
        },
        audio:"/assets/stonesoup/pg03/audio/P3_SFX_StartledPigeon_03.mp3",
        steps: clickableSteps
      }
    ]
  },
  {
    id:"skunk_baby_01",
    children: [],
    scaleX: .25,
    scaleY: .25,
    x:275,
    y:height - 75,
    anchorX: 2,
    anchorY: 1,
    rot: 0,
    img: {},
    a: 1,
    steps: [],
    clickable: [{
      childImg: {
        id: "skunk_baby_01",
        src: ""
      },
      audio:"/assets/stonesoup/pg03/audio/P3_SFX_Startled_Skunk_02.mp3",
      steps: clickableSteps
    }]
  },
  {
    id:"skunk_baby_02",
    children: [],
    scaleX: .25,
    scaleY: .25,
    x:350,
    y:height - 75,
    anchorX: 2,
    anchorY: 1,
    rot: 0,
    img: {},
    a: 1,
    steps: [],
    clickable: [{
      childImg: {
        id: "skunk_baby_02",
        src: ""
      },
      audio:"/assets/stonesoup/pg03/audio/P3_SFX_Startled_Skunk_03.mp3",
      steps: clickableSteps
    }]
  },
  {
    id:"skunk_blue",
    children: [],
    scaleX: .25,
    scaleY: .25,
    x:width/2,
    y:height,
    anchorX: 2,
    anchorY: 1,
    rot: 0,
    img: {},
    a: 1,
    steps: [],
    clickable: [{
      childImg: {
        id: "skunk_blue",
        src: ""
      },
      audio:"/assets/stonesoup/pg03/audio/P3_SFX_Startled_Skunk_04.mp3",
      steps: clickableSteps
    }]
  },
  {
    id:"skunk_yellow",
    children: [],
    scaleX: .25,
    scaleY: .25,
    anchorX: 2,
    anchorY: 1,
    x:100,
    y:height - 50,
    rot: 0,
    img: {},
    a: 1,
    steps: [],
    clickable: [{
      childImg: {
        id: "skunk_yellow",
        src: ""
      },
      audio:"/assets/stonesoup/pg03/audio/P3_SFX_Startled_Skunk_05.mp3",
      steps: clickableSteps
    }]
  },
  {
    id:"squirrel_blue",
    children: [],
    scaleX: .25,
    scaleY: .25,
    x:width - 250,
    y:height,
    anchorX: 2,
    anchorY: 1,
    rot: 0,
    img: {},
    a: 1,
    steps: [],
    clickable: [{
      childImg: {
        id: "squirrel_blue",
        src: ""
      },
      audio:"/assets/stonesoup/pg03/audio/P3_SFX_StartledRaccoon_02.mp3",
      steps: clickableSteps
    }]
  },
  {
    id:"squirrel_ear_muffs",
    children: [],
    scaleX: .25,
    scaleY: .25,
    x:width - 50,
    y:height - 100,
    anchorX: 2,
    anchorY: 1,
    rot: 0,
    img: {},
    a: 1,
    steps: [],
    clickable: [{
      childImg: {
        id: "squirrel_ear_muffs",
        src: ""
      },
      audio:"/assets/stonesoup/pg03/audio/P3_SFX_StartledRaccoon_03.mp3",
      steps: clickableSteps
    }]
  },
  {
    id:"squirrel_green",
    children: [],
    scaleX: .25,
    scaleY: .25,
    x:width - 50,
    y:height - 25,
    anchorX: 2,
    anchorY: 1,
    rot: 0,
    img: {},
    a: 1,
    steps: [],
    clickable: [{
      childImg: {
        id: "squirrel_green",
        src: ""
      },
      audio:"/assets/stonesoup/pg03/audio/P3_SFX_StartledRaccoon_04.mp3",
      steps: clickableSteps
    }]
  },
  {
    id:"squirrel_pink",
    children: [],
    scaleX: .25,
    scaleY: .25,
    x:width - 100,
    y:height,
    anchorX: 2,
    anchorY: 1,
    rot: 0,
    img: {},
    a: 1,
    steps: [],
    clickable: [{
      childImg: {
        id: "squirrel_pink",
        src: ""
      },
      audio:"/assets/stonesoup/pg03/audio/P3_SFX_StartledRaccoon_02.mp3",
      steps: clickableSteps
    }]
  },
  {
    id:"squirrel_purple",
    children: [],
    scaleX: .25,
    scaleY: .25,
    x:width,
    y:275,
    anchorX: 1,
    anchorY: 1,
    rot: 0,
    img: {},
    a: 1,
    steps: [],
    clickable: [{
      childImg: {
        id: "squirrel_purple",
        src: ""
      },
      audio:"/assets/stonesoup/pg03/audio/P3_SFX_StartledRaccoon_03.mp3",
      steps: clickableSteps
    }]
  },
  {
    id:"pipe_blue",
    children: [],
    scaleX: .22,
    scaleY: .22,
    anchorX: 1,
    anchorY: 1,
    x:width,
    y:750,
    rot: 0,
    img: {},
    a: 1,
    steps: []
  },
  {
    id:"pipe_red",
    children: [],
    scaleX: .25,
    scaleY: .25,
    x:0,
    y:0,
    rot: 0,
    img: {},
    a: 1,
    steps: []
  },
  {
    id:"pipe_yellow",
    children: [],
    scaleX: .25,
    scaleY: .25,
    x:0,
    y:200,
    rot: 0,
    img: {},
    a: 1,
    steps: []
  },
  {
    id:"pipe_red_front",
    children: [],
    scaleX: .25,
    scaleY: .25,
    x:0,
    y:0,
    rot: 0,
    img: {},
    a: 1,
    steps: []
  },
  {
    id:"pipe_yellow_front",
    children: [],
    scaleX: .25,
    scaleY: .25,
    x:0,
    y:200,
    rot: 0,
    img: {},
    a: 1,
    steps: []
  },
  {
    id:"pipe_green_front",
    children: [],
    scaleX: .25,
    scaleY: .25,
    x:width,
    y:300,
    anchorX: 1,
    anchorY: 1,
    rot: 0,
    img: {},
    a: 1,
    steps: []
  },
  {
    id:"pipe_green",
    children: [],
    scaleX: .25,
    scaleY: .25,
    x:width,
    y:300,
    anchorX: 1,
    anchorY: 1,
    rot: 0,
    img: {},
    a: 1,
    steps: []
  },
  {
    id:"frame",
    children: [],
    scaleX: .5,
    scaleY: .5,
    x:0,
    y:0,
    rot: 0,
    img: {},
    a: 1,
    steps: []
  }
]

module.exports = {
  positionData,
  loadingData
}
