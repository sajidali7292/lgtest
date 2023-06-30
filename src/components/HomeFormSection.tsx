import React from 'react';
import styles from 'scss/components/HubspotForm.module.scss';
import Image from 'next/image'
import dynamic from 'next/dynamic'
import $ from 'jquery';
import HubspotForm from 'react-hubspot-form';
import { sectionVariantsTop, sectionVariantsBottom } from './constants';

interface ClientLogo {
  client_logo?: {
    url: string;
    alt: string;
  };
}

interface Props {
  className?: string;
  title?: string;
  text?: string;
  photo?: {
    url: string;
    alt: string;
  };
  client_name?: string;
  client_position?: string;
  form_logos?: ClientLogo[];
  hubspotFormProps?: any;
  pt?: string;
  pb?: string;
}

function HomeFormSection({
  className,
  title,
  text,
  photo,
  client_name,
  client_position,
  form_logos,
  hubspotFormProps,
  pt = 'md',
  pb = 'md'
}: Props): JSX.Element {
  
  const ptVariant = sectionVariantsTop[pt];
  const pBVariant = sectionVariantsBottom[pb];

  const handleFormReady = (form: any) => {
    hubspotFormProps?.onReady && hubspotFormProps.onReady(form);
  };

  return (
    <section className={`${styles.LaHome_form} ${className ? styles[className] : ''}`} style={{ backgroundColor: '#3E255A' }}>
      <div className={`container ${styles.container} ${ptVariant} ${pBVariant}`}>
        <div className="flex flex-row flex-wrap">
          <div className={`basis-full lg:basis-6/12`}>
            <h2 className={`${styles.title}`}>{title}</h2>
            <Image
                src={process.env.NEXT_PUBLIC_WORDPRESS_URL + '/wp-content/uploads/2023/03/svgexport-13.svg'}
                alt="Quote Icon"
                className={`${styles.quote}`}
                width={29}
                height={22}
            />
            <p className={`${styles.txt}`}>{text}</p>
            <div className={`flex flex-row flex-wrap justify-center items-center ${styles.client_wrap}`}>
              <div className="flex-auto hidden lg:block"></div>
              <div className="basis-1/4 lg:flex-none">
                <Image
                    src={photo.url}
                    alt={photo.alt}
                    className={`${styles.quote}`}
                    width={62}
                    height={62}
                />
              </div>
              <div className={`basis-3/4 lg:flex-3 ${styles.cliet_txt_wrapper}`}>
                <div className={`${styles.mpClientName}`}>{client_name}</div>
                <div className={`${styles.mpClientPosition}`}>{client_position}</div>
              </div>
            </div>
            <div className={`${styles.form_logos} justify-center flex flex-row`}>
              {form_logos.map((clientlogo, index) => (
                <div className="basis-3/12" key={index}>
                  <img src={clientlogo.client_logo.url} alt={clientlogo.client_logo.alt} />
                </div>
              ))}
            </div>
          </div>
          <div className="basis-1/12 hidden lg:block"></div>
          <div className={`basis-full lg:basis-5/12`}>
            <div className={`${styles.wrapper}`}>
              <div className={`${styles.form_container}`}>
                <div className={`${styles.get_starte_img}`}>
                  <Image
                      src={process.env.NEXT_PUBLIC_WORDPRESS_URL + '/wp-content/uploads/2023/03/svgexport-14.svg'}
                      alt="Get Started"
                      className={`${styles.mpGetS}`}
                      width={90}
                      height={66}
                  />
                </div>
                <div className={`common_form_wrapper`}>
                  {hubspotFormProps && (
                    <HubspotForm
                      portalId={hubspotFormProps.portalId}
                      formId={hubspotFormProps.formId}
                      css={hubspotFormProps.css}
                      onSubmit={hubspotFormProps.onSubmit}
                      loading={hubspotFormProps.loading}
                      onReady={handleFormReady}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeFormSection;