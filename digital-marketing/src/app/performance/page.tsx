import performanceImg from '../../../public/performace_3.jpg';
import Hero from '@/components/hero';

export default function PerformancePage() {
  return (
    <Hero
      imgData={performanceImg}
      imgAlt='welding'
      title='We serve high performance cloud'
    />
  );
}
