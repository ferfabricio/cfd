import React, { Component } from 'react'

const WIDTH = 900
const HEIGHT = 600
const STARTX = 50
const STARTY = 600

const graph0 = [
  [0, 0], [1, 0], [2, 0], [3, 2], [3, 0]
]

const graph1 = [
  [0, 0], [1, 1], [2, 3], [3, 11], [3, 0]
]

const graph2 = [
  [0, 0], [1, 3], [2, 6], [3, 12], [3, 0]
]

const graph3 = [
  [0, 0], [1, 4], [2, 9], [3, 12], [3, 0]
]

function calculate (values, size) {
  const a = values.map(value => {
    return [
      (value[0] * size) + STARTX,
      HEIGHT - (value[1] * size)
    ]
  })

  return a
}

function draw (ctx, { daysQuantity = 10, maxY = 20, size = 30 }) {
  console.log(ctx)
  ctx.fillStyle = 'rgb(0, 0, 200)'
  ctx.beginPath()
  ctx.moveTo(STARTX, STARTY)
  calculate(graph3, size).forEach(i => {
    ctx.lineTo(...i)
  })
  ctx.fill()

  ctx.fillStyle = 'rgba(0, 200, 0)';
  ctx.beginPath()
  ctx.moveTo(STARTX, STARTY)
  calculate(graph2, size).forEach(i => {
    ctx.lineTo(...i)
  })
  ctx.fill()

  ctx.fillStyle = 'rgb(200, 0, 0)'
  ctx.beginPath()
  ctx.moveTo(STARTX, STARTY)
  calculate(graph1, size).forEach(i => {
    ctx.lineTo(...i)
  })
  ctx.fill()

  ctx.fillStyle = 'rgb(200, 200, 0)'
  ctx.beginPath()
  ctx.moveTo(STARTX, STARTY)
  calculate(graph0, size).forEach(i => {
    ctx.lineTo(...i)
  })
  ctx.fill();

  [...Array(maxY+1).keys()].forEach(i => {
    ctx.beginPath()
    ctx.lineWidth = 0.1
    ctx.moveTo(STARTX, STARTY - (size * i))
    ctx.lineTo(STARTX + (daysQuantity * size), STARTY - (size * i))
    ctx.stroke()
  });

  [...Array(daysQuantity + 1).keys()].forEach(i => {
    ctx.beginPath()
    ctx.lineWidth = 0.1
    ctx.moveTo(STARTX + (size * i), STARTY)
    ctx.lineTo(STARTX + (size * i), STARTY - (size * maxY))
    ctx.stroke()
  })
}

class Graphic extends Component {
  constructor (props) {
    super(props)

    this.state = {
      size: 30
    }

    this.dray = this.draw.bind(this)
    this.handleDecrease = this.handleDecrease.bind(this)
    this.handleIncrease = this.handleIncrease.bind(this)
  }

  draw () {
    const { daysQuantity } = this.props
    const canvas = this.refs.grafico.getContext('2d')
    canvas.clearRect(0, 0, WIDTH, HEIGHT)
    draw(canvas, { daysQuantity, size: this.state.size })
  }

  componentDidMount() {
    this.draw()
  }

  handleDecrease (e) {
    e.preventDefault()
    this.setState({
      size: (this.state.size * 0.75)
    }, () => {
      this.draw()
    })
  }

  handleIncrease (e) {
    e.preventDefault()
    this.setState({
      size: (this.state.size * 1.25)
    }, () => {
      this.draw()
    })
  }

  render() {
    return <div>
      <canvas ref="grafico" width={WIDTH} height={HEIGHT} />
      <button onClick={this.handleIncrease}>+</button>
      <button onClick={this.handleDecrease}>-</button>
    </div>
  }
}

export default Graphic

