import { Area } from "react-easy-crop";

export const createImage = (url:string) =>
    new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image();
    image.addEventListener("load", () => resolve(image));
    image.addEventListener("error", (error) => reject(error));
    image.setAttribute("crossOrigin", "anonymous"); 
    image.src = url;
});

export const getRadianAngle = (degreeValue:number)  => (degreeValue * Math.PI) / 180;

export function rotateSize(width: number, height: number, rotation: number) {
    const rotRad = getRadianAngle(rotation);
    return {
      width:
        Math.abs(Math.cos(rotRad) * width) + Math.abs(Math.sin(rotRad) * height),
      height:
        Math.abs(Math.sin(rotRad) * width) + Math.abs(Math.cos(rotRad) * height),
    };
}

export async function getCroppedImg(
    imageSrc:string,
    rotation: 0,
    pixelCrop?:Area,
  ) {
    const image = await createImage(imageSrc);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    if(!pixelCrop) return null;
    if (!ctx) return null;
  
    const rotRad = getRadianAngle(rotation);
  
    const { width: bBoxWidth, height: bBoxHeight } = rotateSize(
      image.width,
      image.height,
      rotation
    );
  
    canvas.width = bBoxWidth;
    canvas.height = bBoxHeight;
  
    ctx.translate(bBoxWidth / 2, bBoxHeight / 2);
    ctx.rotate(rotRad);
    ctx.scale(1, 1);
    ctx.translate(-image.width / 2, -image.height / 2);
  
    ctx.drawImage(image, 0, 0);
  
    const data = ctx.getImageData(
      pixelCrop.x,
      pixelCrop.y,
      pixelCrop.width,
      pixelCrop.height
    );
  
    canvas.width = pixelCrop.width;
    canvas.height = pixelCrop.height;
  
    ctx.putImageData(data, 0, 0);

    console.log(canvas.toDataURL('image/jpeg'));

    return new Promise<Blob>((resolve, reject) => {
      canvas.toBlob((file) => {
        if(file) resolve(file);
        }, "image/jpeg");
    });
  }