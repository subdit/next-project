import homeImg from '../../public/digital_marketing_cloud.jpg';
import Hero from '@/components/hero';

export default function Home() {
  return (
    <Hero
      imgData={homeImg}
      imgAlt={'Cloud digital'}
      title={'Digital Cloud Hosting Platform'}
    />
  );
}
