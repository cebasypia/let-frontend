const SIDE_LENGTH = 80;

export const getResizedImage = (file: File): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const image = new Image();
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = (e) => {
      image.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = SIDE_LENGTH;
        canvas.height = SIDE_LENGTH;

        const ctx = canvas.getContext('2d');
        ctx?.drawImage(
          image,
          0,
          0,
          image.width,
          image.height,
          0,
          0,
          canvas.width,
          canvas.height,
        );

        // canvasから画像をbase64として取得する
        resolve(canvas.toDataURL('image/jpeg'));
      };
      if (typeof e?.target?.result === 'string') {
        image.src = e.target.result;
      } else {
        reject();
      }
    };
  });
};
