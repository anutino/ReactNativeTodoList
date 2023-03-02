
export const folderColors = ['#ff2400', '#9400d3', '#009B76',
  '#00BFFF', '#0E294B', '#641349', '#FF1493']

export const Tasks = [
  {
    title: 'Today',
    color: folderColors[0],
    subtasks: [
      { item: "Read book", isSelected: false },
      { item: "Write article", isSelected: false },
      { item: "Go to swim", isSelected: false }
    ]
  },
  {
    title: 'To cook',
    color: folderColors[2],
    subtasks: [
      { item: "Bread", isSelected: true },
      { item: "Cookies", isSelected: true },
      { item: "Cake", isSelected: true }
    ]
  }
]