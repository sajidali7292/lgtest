import React from "react";
import Image from 'next/image';
import styles from 'scss/components/CTA.module.scss';
import Button from './UI/Button/index';
import BadgeRow from './UI/BadgeRow';
import { backgroundColors, sectionVariantsTop, sectionVariantsBottom } from './constants';


interface Props {
  title?: string;
  text?: string;
  textSize? :string;
  div?: string;
  buttons?: any;
  badgeObj?: any;
  className?: string;
  tag?: any;
  isReversed?: boolean;
  sectionRounded?: boolean;
  textCenterd?: boolean;
  fullBg?: boolean;
  imageBg?: any;
  secondColumnMiddle?: boolean;
  secondColumn?: any;
  id?: string;
  pt?: string;
  pb?: string;
  bg?: string;
}

function CTA({ title, text, textSize, div, buttons, badgeObj, className, tag, sectionRounded, isReversed, textCenterd, fullBg=false, imageBg, secondColumnMiddle, secondColumn, id, pt = 'md', pb = 'md', bg= 'white' }: Props): JSX.Element {
  
  const ptVariant = sectionVariantsTop[pt];
  const pBVariant = sectionVariantsBottom[pb];
  const bgVariant = backgroundColors[bg];

  const inlineStyles={ 
    backgroundImage: `url(${imageBg?.url})`,
    backgroundPosition: imageBg?.position ? imageBg.position:'center',
    backgroundSize: imageBg?.size ? imageBg.size:'cover',
    backgroundRepeat: imageBg?.repeat ? imageBg.repeat:'no-repeat'
  };

  return (
    <section
    style={ fullBg ? inlineStyles:null }
    id={id}
    className={`${styles.container} ${className ? styles[className] : ''} ${fullBg ? bgVariant:''} ${secondColumn ? styles.isSecondC:''}`}>
      <div
        style={ fullBg ? null:inlineStyles }
        className={`container ${styles.wrap} ${fullBg ? '':bgVariant} ${ptVariant} ${pBVariant} ${sectionRounded ? styles.sectRounded:''}`}>
        <div className={`flex justify-center ${isReversed ? 'flex-row-reverse':'flex-row'}`}>

          <div className={`flex flex-col ${secondColumnMiddle ? 'basis-5/12 sm:basis-full md:basis-6/12':'flex-1'}`}>
            { tag && <div className={`${styles.tag} tag tag_${tag.color}`}>{tag.name} {tag.span && <span>{tag.span}</span> }</div>}
            <h2 className={`${styles.title} ${textCenterd ? 'text-center':''}`}>{title}</h2>
            {text && <p key="cta-text" className={`${styles.text} ${textCenterd ? 'text-center':''} ${styles[textSize]}`}>{text}</p>}
            {div && <div className={`${styles.ctaText} ${textCenterd ? 'text-center':''}`}>{div}</div>}
            {buttons && (
              <div className={`${textCenterd ? styles.btn_centered:''} ${styles.buttons_wrap} flex flex-row`}>
                {buttons &&
                  buttons.map((button, index) => (
                    <Button buttonObj={button} key={index} />
                  ))
                }
              </div>
            )}
            {badgeObj && (
                <BadgeRow badgeObj={badgeObj}/>
              )}
          </div>

          {secondColumnMiddle && 
            <div className={`basis-1/12 hideMob column-2`}></div>
          }

          {secondColumn && 
            <div className={`flex flex-col ${secondColumnMiddle ? 'basis-5/12 sm:basis-full md:basis-6/12':'flex-1'}`}>
              { secondColumn.img && <Image className={`object-contain ${isReversed ? 'object-left':'object-right'}`}
                src={secondColumn.img.url} alt={secondColumn.img.alt}
                width={`${secondColumn.img.width ? secondColumn.img.width:'650'}`}
                height={`${secondColumn.img.height ? secondColumn.img.height:'650'}`}/>}
            </div>
          }

        </div>
      </div>
    </section>
  );
};

export default CTA;
