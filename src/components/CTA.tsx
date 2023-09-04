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
  images?: any;
  badgeObj?: any;
  className?: string;
  tag?: any;
  isReversed?: boolean;
  sectionRounded?: boolean;
  textCenterd?: boolean;
  fullBg?: boolean;
  imageBg?: any;
  columnsSize?: string;
  secondColumn?: any;
  sColumnButtons?: any;
  id?: string;
  pt?: string;
  pb?: string;
  bg?: string;
}

function CTA({ title, text, textSize, div, buttons, images, badgeObj, className, tag, sectionRounded, isReversed, textCenterd, fullBg=false, imageBg, columnsSize, secondColumn, sColumnButtons, id, pt = 'md', pb = 'md', bg= 'white' }: Props): JSX.Element {
  
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
    className={`${styles.container} ${className} ${className ? styles[className] : ''} ${fullBg ? bgVariant:''} ${secondColumn ? styles.isSecondC:''}`}>
      <div
        style={ fullBg ? null:inlineStyles }
        className={`container ${styles.wrap} ${fullBg ? '':bgVariant} ${ptVariant} ${pBVariant} ${sectionRounded ? styles.sectRounded:''}`}>
        <div className={`flex justify-center flex-wrap ${isReversed ? 'flex-row-reverse':'flex-row'}`}>

          <div className={`
            flex flex-col ${columnsSize == 'first' ? 'md:py-0 basis-full md:basis-6/12 lg:basis-8/12 justify-center' : columnsSize == 'last' ? 'py-5 md:py-0 basis-full md:basis-6/12 lg:basis-5/12':'flex-1'}
            ${columnsSize == 'last' ? isReversed ? 'md:pl-4 lg:pl-0':'md:pr-4 lg:pr-0' :''}
          `}>
            { tag && <div className={`${styles.tag} tag tag_${tag.color}`}>{tag.name} {tag.span && <span>{tag.span}</span> }</div>}
            {title && <h2 className={`${styles.title} ${textCenterd ? 'text-center':''}`}>{title}</h2>}
            {text && <div key="cta-text" className={`${styles.text} ${textCenterd ? 'text-center '+styles.centerDiv:''} ${styles[textSize]}`} dangerouslySetInnerHTML={{ __html: text }}></div>}
            {div && <div className={`${styles.ctaText} ${textCenterd ? 'text-center':''}`}>{div}</div>}
            {buttons && (
              <div className={`${textCenterd ? styles.btn_centered:''} ${styles.buttons_wrap} flex flex-row flex-wrap`}>
                {buttons &&
                  buttons.map((button, index) => (
                    <Button buttonObj={button} key={index} />
                  ))
                }
              </div>
            )}
            {images && (
              <div className={`flex flex-row flex-wrap justify-between pt-16`}>
                {images &&
                  images.map((imageCTA, index) => (
                    <div key={`${index}-${imageCTA.image.altText}`} className={`${imageCTA.imageDisplay == 'mobile' ? 'block md:hidden':'hidden md:block'} w-full relative h-128`}>
                      <Image className={`object-contain`}
                      src={imageCTA.image.sourceUrl()} alt={`${imageCTA.image.altText ? imageCTA.image.altText:'Image loop #'+index}`}
                      layout='fill'/>
                    </div>
                  ))
                }
              </div>
            )}
            {badgeObj && (
                <BadgeRow badgeObj={badgeObj}/>
              )}
          </div>

          {/* {secondColumnMiddle && 
            <div className={`hidden lg:block column-2 basis-1/12`}></div>
          } */}

          {secondColumn && 
            <div className={`
              flex flex-col ${columnsSize == 'first' ? 'md:py-0 basis-full md:basis-6/12 lg:basis-4/12': columnsSize= 'last' ? 'py-5 md:py-0 basis-full md:basis-6/12 lg:basis-6/12':'flex-1'}
              ${columnsSize == 'last' ? isReversed ? 'md:pr-4 lg:pr-0':'md:pl-4 lg:pl-0' :''}
            `}>
              { secondColumn.img && <Image className={`object-contain ${isReversed ? 'object-left':'object-right'}`}
                src={secondColumn.img.url} alt={secondColumn.img.alt}
                width={`${secondColumn.img.width ? secondColumn.img.width:'650'}`}
                height={`${secondColumn.img.height ? secondColumn.img.height:'650'}`}/>}
                {sColumnButtons && (
                  <div className={`${textCenterd ? styles.btn_centered:''} flex flex-row flex-wrap`}>
                    {sColumnButtons &&
                      sColumnButtons.map((button, index) => (
                        <Button buttonObj={button} key={index} />
                      ))
                    }
                  </div>
                )}
            </div>
          }

        </div>
      </div>
    </section>
  );
};

export default CTA;
