export default function drawHeart (
    context: CanvasRenderingContext2D | null,
    imagePath: string,
    x: number,
    y: number,
    width: number,
    height: number): void {
    if (context == null) {
        return;
    }

    const image: HTMLImageElement = new Image();
    image.src = imagePath;
    context.drawImage(image, x, y, width, height);
}
