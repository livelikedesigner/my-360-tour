var APP_DATA = {
  "scenes": [
    {
      "id": "0-scene-1-360-ff",
      "name": "scene 1 360 ff",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3990458089307722
      },
      "linkHotspots": [
        {
          "yaw": 0.6207825328831937,
          "pitch": 0.788877431229718,
          "rotation": 7.853981633974483,
          "target": "1-scene-2-360-ff"
        },
        {
          "yaw": 0.6930462173327889,
          "pitch": 0.4396141821501569,
          "rotation": 5.497787143782138,
          "target": "2-scene-3-360-ff"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-scene-2-360-ff",
      "name": "scene 2 360 ff",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.010451595499997524,
        "pitch": 0,
        "fov": 1.3990458089307722
      },
      "linkHotspots": [
        {
          "yaw": -2.5730103203228154,
          "pitch": 0.5413492176828925,
          "rotation": 0,
          "target": "2-scene-3-360-ff"
        },
        {
          "yaw": 2.472386826823607,
          "pitch": 0.6281725329327781,
          "rotation": 0,
          "target": "0-scene-1-360-ff"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-scene-3-360-ff",
      "name": "scene 3 360 ff",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -1.6273901260431884,
        "pitch": 0.007421993681326455,
        "fov": 1.3990458089307722
      },
      "linkHotspots": [
        {
          "yaw": 1.3050646134344213,
          "pitch": 0.3262091211615754,
          "rotation": 0,
          "target": "1-scene-2-360-ff"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "The Curve Men's Toilet",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
