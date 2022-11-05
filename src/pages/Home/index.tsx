import photoAssets from './photo.json';
import Footer from '../../components/Footer';
import style from './Home.module.scss';
import { Divider, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function index() {
  const photos = photoAssets;
  const matches = useMediaQuery('(max-width:1000px)');
  return (
    <>
      <section >
        <div className={style.section__perfil}>
          <img className={style.photo__perfil} src={photos[0].src} />
          <Divider orientation={matches ? 'horizontal' : 'vertical'} variant="middle" flexItem sx={{margin: '24px'}}/>
          <div className={style.text__wrapper}>
            <Typography variant="body1" gutterBottom>
              Me chamo Lucas Shtorache sou fotográfo e videomaker baseado em
              Santos/SP.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Já trabalhei com diversos artistas como: Bayside Kings, Gloria, Black Pantera, Sepultura, Ghostmane, While She Sleeps, Surra, Bullet Bane dentre outros do cenário nacional e internacional.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Trabalho não apenas na area da musicas mas também em outros seguimentos,
              como gastronomia e marcas.
            </Typography>
          </div>
        </div>
      </section>
      <section className={style.footer__section}>
        <Footer />
      </section>
    </>
  );
}
