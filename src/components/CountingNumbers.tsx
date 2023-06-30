import React, { useRef, useEffect, useState } from "react";
import styles from 'scss/components/CountingNumbers.module.scss';
import Button from './UI/Button/index';
import { sectionVariantsTop, sectionVariantsBottom } from './constants';


interface Props {
    title?: string;
    targets?: number[];
    labels?: string[];
    id?: string;
    button?: any;
    pt?: string;
    pb?: string;
}

function CountingNumbers ({
    title,
    targets,
    labels,
    id,
    button,
    pt = 'md',
    pb = 'md'
}: Props): JSX.Element {
  
  const ptVariant = sectionVariantsTop[pt];
  const pBVariant = sectionVariantsBottom[pb];

  const counterRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [inViewport, setInViewport] = useState(false);
  

  useEffect(() => {
    const handleScroll = () => {
      if (counterRefs.current.length > 0) {
        const currentScrollPos = window.pageYOffset + window.innerHeight;
        const counters = counterRefs.current;
        counters.forEach((counter, index) => {
          if (counter && counter.offsetTop < currentScrollPos) {
            if (!counter.classList.contains("counted")) {
              counter.classList.add("counted");
              const targetNumber = parseInt(
                counter.getAttribute("data-target") || "0"
              );
              let count = 0;
              const interval = setInterval(() => {
                counter.innerText = new Intl.NumberFormat('en-US').format(count);
                count += Math.ceil(targetNumber / 50);
                if (count > targetNumber) {
                  clearInterval(interval);
                  counter.innerText = new Intl.NumberFormat('en-US').format(targetNumber) + "+";
                } else {
                  counter.innerText = new Intl.NumberFormat('en-US').format(count) + "+";
                }
              }, 25);
            }
          }
        });
      }
    };
       

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section {...(id && { id })}
    className={styles.countingNumbers_home}>
      <div className={`container ${styles.counting_numbers} ${ptVariant} ${pBVariant}`}>
        <h2>{title}</h2>
        <div className={`flex flex-row`}>
          {targets.map((target, index) => (
            <React.Fragment key={index}>
              <div className="basis-1/4">
                <div
                  ref={(ref) => counterRefs.current.push(ref)}
                  data-target={target}
                  className={`counter ${inViewport ? "counted" : ""} ${styles.numbers}`}
                >
                  0
                </div>
                <div className={styles.labels}>{labels[index]}</div>
              </div>
            </React.Fragment>
          ))}  
        </div>
        {button && (
          <Button buttonObj={button} />
        )}
      </div>
    </section>
  );
};

export default CountingNumbers;
