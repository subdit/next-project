import scaleImg from '../../../public/Scalability_3.jpg';
import Hero from '@/components/hero';

export default function ScaleImg() {
  return (
    <Hero
      imgData={scaleImg}
      imgAlt='Scal cloud'
      title='Scalability on demand '
    />
  );
}
