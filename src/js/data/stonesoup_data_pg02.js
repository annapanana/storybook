const width = "1024";
const height = "768";

const loadingData = [
  {id:"background", src:"/assets/stonesoup/pg02/pg02_BG.png"},
  {id:"treen_branch_01", src:"/assets/stonesoup/pg02/pg02_MG_Tree02_Branch01.png"},
  {id:"treen_branch_02", src:"/assets/stonesoup/pg02/pg02_MG_Tree02_Branch02.png"},
  {id:"treen_branch_03", src:"/assets/stonesoup/pg02/pg02_MG_Tree02_Branch03.png"},
  {id:"treen_branch_04", src:"/assets/stonesoup/pg02/pg02_MG_Tree02_Branch04.png"},
  {id:"treen_branch_05", src:"/assets/stonesoup/pg02/pg02_MG_Tree02_Branch05.png"},
  {id:"tree_trunk", src:"/assets/stonesoup/pg02/pg02_MG_Tree02_Trunk.png"},
  {id:"raccoon_hat", src:"/assets/stonesoup/pg02/pg02_FG_Hat.png"},
  {id:"raccoon_scarf", src:"/assets/stonesoup/pg02/pg02_FG_Scarf.png"},
  {id:"raccoon_gloves", src:"/assets/stonesoup/pg02/pg02_FG_Gloves.png"},
  {id:"frame", src:"/assets/stonesoup/pg02/pg02_Frame_Text.png"},
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
    x:500,
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
          id: "raccoon_scarf",
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
    x:700,
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
          id: "raccoon_gloves",
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
  },
  {
    id:"tree_trunk",
    children: [],
    scaleX: .25,
    scaleY: .25,
    anchorX: 2,
    anchorY: 1,
    x:600,
    y:height,
    rot: 0,
    img: {},
    a: 1,
    steps: []
  },
  {
    id:"treen_branch_01",
    children: [],
    scaleX: .25,
    scaleY: .25,
    x:490,
    y:420,
    anchorX: 2,
    anchorY: 1,
    rot: 30,
    img: {},
    a: 1,
    steps: []
  },
  {
    id:"treen_branch_02",
    children: [],
    scaleX: .25,
    scaleY: .25,
    x:680,
    y:350,
    anchorX: 2,
    anchorY: 1,
    rot: -30,
    img: {},
    a: 1,
    steps: []
  },
  {
    id:"treen_branch_03",
    children: [],
    scaleX: .25,
    scaleY: .25,
    x:550,
    y:300,
    anchorX: 2,
    anchorY: 1,
    rot: 0,
    img: {},
    a: 1,
    steps: []
  },
  {
    id:"treen_branch_04",
    children: [],
    scaleX: .25,
    scaleY: .25,
    x:670,
    y:450,
    anchorX: 2,
    anchorY: 1,
    rot: 0,
    img: {},
    a: 1,
    steps: []
  },
  {
    id:"treen_branch_05",
    children: [],
    scaleX: .25,
    scaleY: .25,
    x:700,
    y:600,
    anchorX: 2,
    anchorY: 1,
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
