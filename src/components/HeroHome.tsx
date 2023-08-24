import React, { useState } from 'react';
import styles from 'scss/components/HeroHome.module.scss';
import AwardsSection from './AwardsSection';


interface Props {
  text?: string;
  id?: string;
  placeholder: string;
  buttonText: string;
}

function HeroHome({
  text = '',
  id,
  placeholder,
  buttonText,
}: Props): JSX.Element {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Perform action with the input value
    //console.log(inputValue);
  };

  return (
    <section
      {...(id && { id })} className={styles.hero}
    >
      <div className={`container ${styles.wrap}`}>
        <h1>
          <span className={`color-pink`}>Grow your Revenue</span> through Transparent <span className={`color-gray`}>&</span> Results-Driven SEO
        </h1>
        <p>{text}</p>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder={placeholder} value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          <button className={`${styles.pulse_animation} pulse_animation`} type="submit">
            {buttonText}
            <span>
              <img className={styles.logo} src={process.env.NEXT_PUBLIC_WORDPRESS_URL + '/wp-content/uploads/2023/02/Vector9.webp'} alt="Arrow" />
            </span>
          </button>
        </form>
        <div className={styles.accountCounter}>
          <p>
            <span>
              <img src={process.env.NEXT_PUBLIC_WORDPRESS_URL + '/wp-content/uploads/2023/02/Vector.svg'} alt="Icon" />
            </span>
            <span className={styles.counter_accounts}>+2425 accounts</span> created in the last 30 days
          </p>
        </div>
        <AwardsSection />
      </div>
    </section>
  );
}

export default HeroHome;