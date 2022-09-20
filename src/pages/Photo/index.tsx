import photoAssets from './photo.json';
import Gallery from 'react-photo-gallery';
import style from './Photos.module.scss';
import Footer from 'components/Footer';

export default function Photo() {
  const photos = photoAssets;
  
  return (
    <div className={style.photo__wrapper}>
      <Gallery photos={photos} direction={'column'} margin={4} columns={2} />
      <Footer />
    </div>
  );
}
