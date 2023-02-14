import { Testimonial as TestimonialType } from 'client';
import styles from 'scss/pages/team.module.scss';

interface TestimonialProps {
    testimonial: TestimonialType;
}

export default function Testimonial({ testimonial }: TestimonialProps) {
  return (
    <div className={`${styles.member} basis-3/12 px-4 pb-5`}>
      
      <h4>{testimonial?.testimonialAuthor}</h4>
      <div
        className="bio"
        dangerouslySetInnerHTML={{ __html: testimonial?.testimonialContent }}
      />
    </div>
  );
}