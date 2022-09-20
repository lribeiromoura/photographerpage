import photoAssets from './photo.json';
import Footer from '../../components/Footer';
import style from './Home.module.scss';

export default function index() {
  const photos = photoAssets;

  return (
    <section className={style.section__perfil}>
      <img className={style.photo__perfil} src={photos[0].src} />
      <p className={style.text__perfil}>
        Olá, sou Lucas Shtorache fotógrafo e videomaker localizado em Santos/SP.
        Atuo na area desde 2018 e meu foco é ajudar artistas e marcas a criarem
        sua identidade visual através de fotos e videos.
      </p>
      <div className={style.footer__section}>
        <Footer />
      </div>
    </section>
  );
}
