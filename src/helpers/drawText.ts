export default function drawText (
    context: CanvasRenderingContext2D | null,
    color: string,
    font: string,
    x: number,
    y: number,
    text: string,
    align: CanvasTextAlign = 'left'): void {
    if (context == null) {
        return;
    }

    context.fillStyle = color;
    context.font = font;
    context.textAlign = align;
    context.textBaseline = 'middle';
    context.fillText(text, x, y);
}
