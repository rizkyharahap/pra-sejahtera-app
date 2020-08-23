import React, { } from 'react';
import Fitur from './Fitur';
import Hero from './Hero';
import Timeline from './Timeline';
import Contact from './Contact';
import { ReactComponent as WaveTop } from '../../assets/images/wave-top.svg';
import { ReactComponent as WaveBottom } from '../../assets/images/wave-bottom.svg';
import { submissionType } from '../RequestSubmission/SubmissionData';

const Home = () => (
  <>
    <Hero />
    <section className="min-h-screen w-full bg-teal-400" id="fitur">
      <WaveTop />
      <div className="py-16 md:py-0 px-4 sm:px-16 md:px-24 lg:px-32 xl:px-40 relative flex flex-wrap items-center justify-around ">
        {submissionType.map((item) => (
          <Fitur
            keys={item.title}
            title={item.title}
            image={item.image}
            text={item.text}
            link={item.link}
            tag={item.tag}
          />
        ))}
      </div>
      <WaveBottom fill="#FFF" />
    </section>
    <Timeline />
    <Contact />
  </>
);

export default Home;
