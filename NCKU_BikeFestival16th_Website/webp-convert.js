// ref: https://medium.com/@mingjunlu/image-optimization-using-webp-72d5641213c9
import imagemin from 'imagemin'
import webp from 'imagemin-webp'

const convertImages = async () => {
  const files = ['./src/assets/*.{jpg,png}'];
  const config = {
    destination: './src/assets',
    plugins: [webp({ quality: 75 })],
  };

  console.log('開始轉換圖片...');
  await imagemin(files, config);
  console.log('已將圖片轉成 WebP！');
};

convertImages();