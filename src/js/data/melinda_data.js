const width = "1024";
const height = "768";

const loadingData = [
  {id:"background", src:"/assets/melinda/background-kitchen-ipadhd.png"},
  {id:"melinda_full", src:"/assets/melinda/melinda-c1p1-ipadhd.png"},
  {id:"melinda_hand", src:"/assets/melinda/melinda_hand.png"},
  {id:"text_hi", src:"/assets/melinda/hi_text.png"},
  {id:"text_melinda_intro", src:"/assets/melinda/text_melinda_intro.png"},
  {id:"text_adventure_with_friends", src:"/assets/melinda/text_adventure_with_friends.png"}
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
    id: "text_hi",
    children: [],
    scaleX: .75,
    scaleY: .75,
    x:width - 400,
    y:height / 4,
    rot: 0,
    img: {},
    a: 0,
    steps: [
      {
        wait: 3000,
        x: 0,
        y: 0,
        t: 500,
        sx: .75,
        sy: .75,
        easePow: 1,
        rot: 0,
        a: 1
      },
      {
        wait: 1000,
        x: 0,
        y: 0,
        t: 500,
        sx: .75,
        sy: .75,
        easePow: 1,
        rot: 0,
        a: 0
      }
    ]
  },
  {
    id: "text_melinda_intro",
    children: [],
    scaleX: .5,
    scaleY: .5,
    x: 50,
    y: 100,
    rot: 0,
    img: {},
    a: 0,
    steps: [
      {
        wait: 9000,
        x: 0,
        y: 0,
        t: 500,
        sx: .5,
        sy: .5,
        easePow: 1,
        rot: 0,
        a: 1
      },
      {
        wait: 1000,
        x: 0,
        y: 0,
        t: 500,
        sx: .5,
        sy: .5,
        easePow: 1,
        rot: 0,
        a: 0
      }
    ]
  },
  {
    id: "text_adventure_with_friends",
    children: [],
    scaleX: .5,
    scaleY: .5,
    x:width - 500,
    y:100,
    rot: 0,
    img: {},
    a: 0,
    steps: [
      {
        wait: 12000,
        x: 0,
        y: 0,
        t: 500,
        sx: .5,
        sy: .5,
        easePow: 1,
        rot: 0,
        a: 1
      },
      {
        wait: 2000,
        x: 0,
        y: 0,
        t: 500,
        sx: .5,
        sy: .5,
        easePow: 1,
        rot: 0,
        a: 0
      }
    ]
  },
  {
    id:"melinda_full",
    children: [
      {
        id: "melinda_eye",
        img: {src:"/assets/melinda_eye_closed.png"},
        scaleX: .5,
        scaleY: .5,
        x: 255,
        y: 200,
        a: 0,
        steps: []
      }
    ],
    scaleX: .75,
    scaleY: .75,
    anchorX: 0,
    anchorY: 0,
    x:width - 600,
    y:height,
    rot: 0,
    a: 1,
    img: {},
    steps: [
      {
        wait: 1000,
        x: 0,
        y: 0,
        t: 0,
        sx: .75,
        sy: .75,
        easePow: 0,
        rot: 0
      },
      {
        wait: 500,
        x: -50,
        y: -250,
        t: 1000,
        sx: .75,
        sy: .75,
        easePow: 3,
        rot: 0
      },
      {
        wait: 3000,
        x: 0,
        y: 250,
        t: 1000,
        sx: .75,
        sy: .75,
        easePow: 1,
        rot: 0
      },
      {
        wait: 0,
        x: 0,
        y: 0,
        t: 0,
        sx: .75,
        sy: .75,
        easePow: 1,
        rot: 0
      },
      {
        wait: 1000,
        x: 0,
        y: -800,
        t: 1000,
        sx: .75,
        sy: .75,
        easePow: 1,
        rot: 0
      },
      {
        wait: 3000,
        x: -250,
        y: 0,
        t: 1000,
        sx: .75,
        sy: .75,
        easePow: 1,
        rot: 0
      }
    ],
    clickable: [
      {
        childImg: {
          id: "melinda_eye",
          src: ""
        },
        steps: [
          {
            wait: 0,
            x: 0,
            y: 0,
            t: 200,
            sx: .5,
            sy: .5,
            easePow: 1,
            rot: 0,
            a: 1
          },
          {
            wait: 500,
            x: 0,
            y: 0,
            t: 200,
            sx: .5,
            sy: .5,
            easePow: 1,
            rot: 0,
            a: 0
          }
        ]
      }
    ]
  },
  {
    id:"melinda_hand",
    children: [],
    scaleX: .25,
    scaleY: .25,
    anchorX: 2,
    anchorY: 1.5,
    x:width - 275,
    y:height,
    img: {},
    a: 1,
    steps: [
      {
        wait: 3000,
        x: 0,
        y: 0,
        t: 0,
        sx: .25,
        sy: .25,
        easePow: 0,
        rot: 0
      },
      {
        wait: 100,
        x: 0,
        y: 0,
        t: 500,
        sx: .25,
        sy: .25,
        easePow: 3,
        rot: -25
      },
      {
        wait: 300,
        x: 0,
        y: 0,
        t: 500,
        sx: .25,
        sy: .25,
        easePow: 3,
        rot: 25
      },
      {
        wait: 300,
        x: 50,
        y: 150,
        t: 1000,
        sx: .25,
        sy: .25,
        easePow: 3,
        rot: 0
      },
    ]
  }
]

module.exports = {
  positionData,
  loadingData
}
