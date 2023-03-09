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
    console.log(inputValue);
  };

  return (
    <section
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...(id && { id })}
      className={styles.hero}
    >
      <div className={styles.wrap}>
        <h1>
          <span className={styles.pink}>Grow your Revenue</span> through Transparent <span className={styles.grey}>&</span> Results-Driven SEO
        </h1>
        <p>{text}</p>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder={placeholder} value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          <button type="submit">
            <a className={styles.pulse_animation}>
              {buttonText}
              <span>
                <img className={styles.logo} src={process.env.NEXT_PUBLIC_WORDPRESS_URL + '/wp-content/uploads/2023/02/Vector9.webp'} alt="Arrow" />
              </span>
            </a>
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