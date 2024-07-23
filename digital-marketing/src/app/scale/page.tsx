import scaleImg from '../../../public/scalability.jpg';
import Hero from '@/components/hero';

export default function ScaleImg() {
  return (
    <Hero imgData={scaleImg} imgAlt='welding' title='Scalability on demand ' />
  );
}
