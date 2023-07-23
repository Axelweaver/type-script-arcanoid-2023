export default function drawRect(
    context: CanvasRenderingContext2D | null,
    color: string,
    x: number,
    y: number,
    width: number,
    height: number){

        if(!context){
            return;
        }
        
        context.fillStyle = color;
        context.beginPath();
        context.rect(x, y, width, height);
        context.fill();
        context.stroke();            


}