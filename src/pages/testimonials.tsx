import Head from 'next/head';
import { client } from 'client';
import TestimonialInfo from 'components/TestimonialInfo';

export default function Team() {
  const { useQuery } = client;
  const { generalSettings } = useQuery();

  const testimonialsData = useQuery().testimonials()?.nodes;
  // console.log(testimonialsData);

  return (
    <>

      <Head>
        <title>Meet the Team - {generalSettings.title}</title>
      </Head>

      <main className="content content-single">
        <div className="wrap_content wrap_content-extended">
          <h2>Testimonials</h2>

          <div className="flex flex-row flex-wrap">
            {testimonialsData.map((testimonial, index) => (
              <TestimonialInfo key={index} testimonial={testimonial} />
            ))}
          </div>
          <div>Test text</div>
        </div>
      </main>

    </>
  );
}
