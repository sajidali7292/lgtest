import React from 'react';
import styles from 'scss/components/Paths.module.scss';
import Button from './UI/Button/index';


interface PathProps {
  tag?: string;
  title?: string;
  txt?: string;
  button?: any;
  img?: {
    url?: string;
  };
}

interface Props {
  title?: string;
  paths?: PathProps[];
}

function Paths({ title, paths }: Props): JSX.Element {
  return (
    <section className={styles.paths}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className={styles.paths_title}>{title}</h2>
          </div>
        </div>
        <div className="flex flex-row">
          {paths.map((path, index) => (
            <div className="sm:basis-full md:basis-6/12 basis-1/12" key={`path-${index}`}>
              <div
                className={`${styles.pathimg_1} bg_img`}
                style={{ backgroundImage: `url(${path.img.url})` }}
              >
                <div className={styles.path_sub1}>{path.tag}</div>
                <div className={styles.path_ttl}>{path.title}</div>
                <div className={styles.path_txt}>{path.txt}</div>
                {path.button && <Button buttonObj={path.button} />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Paths;