
export default function drawText(
    context: CanvasRenderingContext2D | null,
    color: string,
    font: string,
    x: number,
    y: number,
    text: string,
    align: CanvasTextAlign){

        if(!context){
            return;
        }

        context.fillStyle = color;
        context.font = font;
        context.textAlign = align || 'left';
        context.textBaseline = 'middle';
        context.fillText(text, x, y);           
}