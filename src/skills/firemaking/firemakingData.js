const firemakingData = [
  {
    "Logs": "Normal Logs",
    "Level": 1,
    "DLC": null,
    "Burn Time": "2s",
    "Without Bonfire": {
      "XP": 19
    },
    "With Bonfire": {
      "XP": 19.95
    },
    "Bonfire Bonus": "5%",
    "Bonfire Time": "20s"
  },
  {
    "Logs": "Oak Logs",
    "Level": 10,
    "DLC": null,
    "Burn Time": "2s",
    "Without Bonfire": {
      "XP": 39
    },
    "With Bonfire": {
      "XP": 42.9
    },
    "Bonfire Bonus": "10%",
    "Bonfire Time": "30s"
  },
  {
    "Logs": "Willow Logs",
    "Level": 25,
    "DLC": null,
    "Burn Time": "3s",
    "Without Bonfire": {
      "XP": 52
    },
    "With Bonfire": {
      "XP": 59.8
    },
    "Bonfire Bonus": "15%",
    "Bonfire Time": "40s"
  },
  {
    "Logs": "Teak Logs",
    "Level": 35,
    "DLC": null,
    "Burn Time": "4s",
    "Without Bonfire": {
      "XP": 84
    },
    "With Bonfire": {
      "XP": 100.8
    },
    "Bonfire Bonus": "20%",
    "Bonfire Time": "50s"
  },
  {
    "Logs": "Unholy Logs",
    "Level": 40,
    "DLC": "aod",
    "Burn Time": "5s",
    "Without Bonfire": {
      "XP": 94
    },
    "With Bonfire": {
      "XP": 112.8
    },
    "Bonfire Bonus": "20%",
    "Bonfire Time": "55s"
  },
  {
    "Logs": "Maple Logs",
    "Level": 45,
    "DLC": null,
    "Burn Time": "5s",
    "Without Bonfire": {
      "XP": 104
    },
    "With Bonfire": {
      "XP": 130
    },
    "Bonfire Bonus": "25%",
    "Bonfire Time": "1m"
  },
  {
    "Logs": "Mahogany Logs",
    "Level": 55,
    "DLC": null,
    "Burn Time": "6s",
    "Without Bonfire": {
      "XP": 130
    },
    "With Bonfire": {
      "XP": 169
    },
    "Bonfire Bonus": "30%",
    "Bonfire Time": "1m 10s"
  },
  {
    "Logs": "Yew Logs",
    "Level": 60,
    "DLC": null,
    "Burn Time": "7s",
    "Without Bonfire": {
      "XP": 195
    },
    "With Bonfire": {
      "XP": 263.25
    },
    "Bonfire Bonus": "35%",
    "Bonfire Time": "1m 20s"
  },
  {
    "Logs": "Cursed Logs",
    "Level": 65,
    "DLC": "aod",
    "Burn Time": "9s",
    "Without Bonfire": {
      "XP": 252
    },
    "With Bonfire": {
      "XP": 340.2
    },
    "Bonfire Bonus": "35%",
    "Bonfire Time": "1m 25s"
  },
  {
    "Logs": "Magic Logs",
    "Level": 75,
    "DLC": null,
    "Burn Time": "10s",
    "Without Bonfire": {
      "XP": 292
    },
    "With Bonfire": {
      "XP": 408.8
    },
    "Bonfire Bonus": "40%",
    "Bonfire Time": "1m 30s"
  },
  {
    "Logs": "Redwood Logs",
    "Level": 90,
    "DLC": null,
    "Burn Time": "15s",
    "Without Bonfire": {
      "XP": 364
    },
    "With Bonfire": {
      "XP": 527.8
    },
    "Bonfire Bonus": "45%",
    "Bonfire Time": "1m 40s"
  },
  {
    "Logs": "Spruce Logs",
    "Level": 100,
    "DLC": "toth",
    "Burn Time": "18s",
    "Without Bonfire": {
      "XP": 583
    },
    "With Bonfire": {
      "XP": 874.5
    },
    "Bonfire Bonus": "50%",
    "Bonfire Time": "2m"
  },
  {
    "Logs": "Hornbeam Logs",
    "Level": 102,
    "DLC": "toth",
    "Burn Time": "22s",
    "Without Bonfire": {
      "XP": 770
    },
    "With Bonfire": {
      "XP": 1193.5
    },
    "Bonfire Bonus": "55%",
    "Bonfire Time": "2m 20s"
  },
  {
    "Logs": "Grove Logs",
    "Level": 105,
    "DLC": "toth",
    "Burn Time": "25s",
    "Without Bonfire": {
      "XP": 960
    },
    "With Bonfire": {
      "XP": 1536
    },
    "Bonfire Bonus": "60%",
    "Bonfire Time": "2m 40s"
  },
  {
    "Logs": "Linden Logs",
    "Level": 108,
    "DLC": "toth",
    "Burn Time": "15s",
    "Without Bonfire": {
      "XP": 633
    },
    "With Bonfire": {
      "XP": 1044.45
    },
    "Bonfire Bonus": "65%",
    "Bonfire Time": "3m"
  },
  {
    "Logs": "Elderwood Logs",
    "Level": 110,
    "DLC": "toth",
    "Burn Time": "27s",
    "Without Bonfire": {
      "XP": 1224
    },
    "With Bonfire": {
      "XP": 2080.8
    },
    "Bonfire Bonus": "70%",
    "Bonfire Time": "3m 20s"
  },
  {
    "Logs": "Red Oak Logs",
    "Level": 112,
    "DLC": "toth",
    "Burn Time": "35s",
    "Without Bonfire": {
      "XP": 1813
    },
    "With Bonfire": {
      "XP": 3172.75
    },
    "Bonfire Bonus": "75%",
    "Bonfire Time": "3m 40s"
  },
  {
    "Logs": "Revenant Logs",
    "Level": 115,
    "DLC": "toth",
    "Burn Time": "30s",
    "Without Bonfire": {
      "XP": 1741
    },
    "With Bonfire": {
      "XP": 3133.8
    },
    "Bonfire Bonus": "80%",
    "Bonfire Time": "4m"
  },
  {
    "Logs": "Mystic Logs",
    "Level": 118,
    "DLC": "toth",
    "Burn Time": "25s",
    "Without Bonfire": {
      "XP": 1610
    },
    "With Bonfire": {
      "XP": 2978.5
    },
    "Bonfire Bonus": "85%",
    "Bonfire Time": "4m 20s"
  },
  {
    "Logs": "Carrion Logs",
    "Level": 120,
    "DLC": "toth",
    "Burn Time": "40s",
    "Without Bonfire": {
      "XP": 2687
    },
    "With Bonfire": {
      "XP": 5105.3
    },
    "Bonfire Bonus": "90%",
    "Bonfire Time": "4m 40s"
  }
]

export default firemakingData;
