import React from 'react';
import { Camera } from 'lucide-react';
import TextAnimation from '@/components/ui/TextAnimation';
import ScrollReveal from '@/components/ui/ScrollReveal';
import ImageOrVideo from '@/components/ui/ImageOrVideo';

interface WorkItem {
  id: string;
  title: string;
  category: string;
  description: string;
  imageSrc: string;
}

const workItems: WorkItem[] = [
  {
    id: '1',
    title: 'Full Valet Service',
    category: 'Full Valet',
    description: 'Thorough interior and exterior valeting bringing your car back to a clean, fresh finish.',
    imageSrc: '',
  },
  {
    id: '2',
    title: 'Interior Valet & Deep Clean',
    category: 'Interior Valet',
    description: 'Careful interior vacuuming, upholstery cleaning, and cabin freshening.',
    imageSrc: '',
  },
  {
    id: '3',
    title: 'Exterior Polish & Mopping',
    category: 'Exterior Polish',
    description: 'Quality exterior polish including mopping to restore a smooth, clean shine.',
    imageSrc: '',
  },
  {
    id: '4',
    title: 'Standard Valet Care',
    category: 'Standard Valet',
    description: 'Regular mobile valeting for maintaining vehicle cleanliness inside and out.',
    imageSrc: '',
  },
  {
    id: '5',
    title: 'Wash & Shammy Clean',
    category: 'Wash & Shammy',
    description: 'Hand wash and shammy dry for a streak-free exterior clean.',
    imageSrc: '',
  },
  {
    id: '6',
    title: 'Weekly & Monthly Regular Valets',
    category: 'Regular Maintenance',
    description: 'Convenient ongoing mobile valeting service scheduled at your home or workplace.',
    imageSrc: '',
  },
];

export default function WorkSection(): React.JSX.Element {
  return (
    <section id="work" aria-label="Our Work Section" className="">
      <div className="flex flex-col gap-8 mx-auto w-content-width">
        <div className="flex flex-col items-center gap-2">
          <div className="px-3 py-1 mb-1 text-sm card rounded w-fit">
            <p>Our Gallery</p>
          </div>

          <TextAnimation
            text="Recent Detailing Projects"
            variant="slide-up"
            gradientText={true}
            tag="h2"
            className="md:max-w-8/10 text-6xl 2xl:text-7xl leading-[1.15] font-semibold text-center text-balance"
          />

          <TextAnimation
            text="Explore our gallery of completed mobile car valeting and detailing work across the region."
            variant="slide-up"
            gradientText={false}
            tag="p"
            className="md:max-w-7/10 text-lg md:text-xl leading-snug text-center text-balance"
          />
        </div>

        <ScrollReveal variant="fade">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col card rounded overflow-hidden transition-all duration-300 hover:border-foreground/30"
              >
                <div className="relative w-full aspect-[4/3] bg-background-accent/50 flex items-center justify-center overflow-hidden border-b border-accent/20">
                  {item.imageSrc ? (
                    <ImageOrVideo
                      imageSrc={item.imageSrc}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center p-6 text-center gap-3">
                      <div className="flex items-center justify-center size-12 primary-button rounded">
                        <Camera className="size-6 text-primary-cta-text" strokeWidth={1.5} />
                      </div>
                      <span className="text-xs uppercase tracking-wider font-semibold text-accent">
                        Photo Space
                      </span>
                    </div>
                  )}
                  <div className="absolute top-3 left-3 px-2.5 py-1 text-xs card rounded bg-background/80 backdrop-blur-sm">
                    {item.category}
                  </div>
                </div>

                <div className="flex flex-col gap-2 p-5 flex-grow">
                  <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-accent leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}