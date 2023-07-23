export default function drawCircle(
    context: CanvasRenderingContext2D,
    color: string,
    x: number,
    y: number,
    radius: number

){
    context.fillStyle = color
    context.beginPath()
    context.arc(x, y, radius, 0, 2 * Math.PI, false)
    context.fill()
}