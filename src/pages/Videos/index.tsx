import videosAssets from './videos.json';
import style from './Videos.module.scss';
import Footer from 'components/Footer';
import { Box, Typography } from '@mui/material';
import { Video } from '../../@types/video';

export default function Videos() {
  const videos:Video[] = videosAssets;
  
  return (
    <div className={style.video__wrapper}>
      {
        videos.map((video) => <Box key={video.src} className={style.video__box}>
          <Typography  variant="h5" className={style.text__style}>{video.title}</Typography>
          <iframe width="720" height="405" src={video.src} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
          </iframe>
        </Box>)
      }
      <Footer />
    </div>
  );
}
