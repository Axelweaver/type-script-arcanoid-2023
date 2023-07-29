export default function drawCircle (
    context: CanvasRenderingContext2D | null,
    color: string,
    x: number,
    y: number,
    radius: number

): void {
    if (context == null) {
        return;
    }

    context.fillStyle = color;
    context.beginPath();
    context.arc(x, y, radius * 2, 0, 2 * Math.PI, false);
    context.fill();
}
