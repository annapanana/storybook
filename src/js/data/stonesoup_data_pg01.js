const width = "1024";
const height = "768";
const assetSrc = "https://s3-us-west-2.amazonaws.com/uproot";

const loadingData = [
  {id:"background", src:`${assetSrc}/assets/stonesoup/pg01/pg01_BG.png`},
  {id:"middleground", src:"/assets/stonesoup/pg01/pg01_MG.png"},
  {id:"raccoon_gloves", src:"/assets/stonesoup/pg01/pg01_FG_Gloves.png"},
  {id:"raccoon_scarf", src:"/assets/stonesoup/pg01/pg01_FG_Scarf.png"},
  {id:"raccoon_hat", src:"/assets/stonesoup/pg01/pg01_FG_Hat.png"},
  {id:"frame", src:"/assets/stonesoup/pg01/pg01_FrameAndText.png"}
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
    id:"middleground",
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
    id:"raccoon_hat",
    children: [],
    scaleX: .24,
    scaleY: .24,
    x:250,
    y:height,
    rot: 0,
    anchorX: 2,
    anchorY: 1,
    img: {},
    a: 1,
    steps: [],
    clickable: [
      {
        childImg: {
          id: "raccoon_hat",
          src: ""
        },
        steps: [
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
            sx: .24,
            sy: .24,
            easePow: 3,
            rot: 0
          },
        ]
      }
    ]
  },
  {
    id:"raccoon_scarf",
    children: [],
    scaleX: .24,
    scaleY: .24,
    x:380,
    y:height,
    rot: 0,
    anchorX: 2,
    anchorY: 1,
    img: {},
    a: 1,
    steps: [],
    clickable: [
      {
        childImg: {
          id: "raccoon_hat",
          src: ""
        },
        steps: [
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
            sx: .24,
            sy: .24,
            easePow: 3,
            rot: 0
          },
        ]
      }
    ]
  },
  {
    id:"raccoon_gloves",
    children: [],
    scaleX: .24,
    scaleY: .24,
    x:550,
    y:height,
    rot: 0,
    anchorX: 2,
    anchorY: 1,
    img: {},
    a: 1,
    steps: [],
    clickable: [
      {
        childImg: {
          id: "raccoon_hat",
          src: ""
        },
        steps: [
          {
            wait: 0,
            x: 0,
            y: 0,
            t: 100,
            sx: .28,
            sy: .28,
            easePow: 1,
            rot: 0
          },
          {
            wait: 150,
            x: 0,
            y: 0,
            t: 100,
            sx: .24,
            sy: .24,
            easePow: 1,
            rot: 0
          },
        ]
      }
    ]
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
