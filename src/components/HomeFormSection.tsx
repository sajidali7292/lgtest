import React from 'react';
import styles from 'scss/components/HubspotForm.module.scss';
import HubspotForm from 'react-hubspot-form';

interface ClientLogo {
  client_logo?: {
    url: string;
    alt: string;
  };
}

interface Props {
  title?: string;
  text?: string;
  photo?: {
    url: string;
    alt: string;
  };
  client_name?: string;
  client_position?: string;
  form_logos?: ClientLogo[];
  hubspotFormProps?: {
    portalId: string;
    formId: string;
    css?: string;
    onSubmit?: () => void;
    loading?: JSX.Element;
    onReady?: (form: Record<string, any>) => void;
  };
}

function HomeFormSection({
  title,
  text,
  photo,
  client_name,
  client_position,
  form_logos,
  hubspotFormProps,
}: Props): JSX.Element {
  const handleFormReady = (form: any) => {
    hubspotFormProps?.onReady && hubspotFormProps.onReady(form);
  };

  return (
    <section className={`${styles.LaHome_form}`} style={{ backgroundColor: '#3E255A' }}>
      <div className={styles.container}>
        <div className="flex flex-row">
          <div className="md:basis-full basis-6/12">
            <h2 className={`${styles.title}`}>{title}</h2>
            <img src={process.env.NEXT_PUBLIC_WORDPRESS_URL + '/wp-content/uploads/2023/03/svgexport-13.svg'} className={`${styles.quote}`} alt='quote mark' />
            <p className={`${styles.txt}`}>{text}</p>
            <div className="flex flex-row">
              <div className="basis-3/12">
                <img src={photo.url} alt={photo.alt} />
              </div>
              <div className="basis-7/12">
                <div className={`${styles.mpClientName}`}>{client_name}</div>
                <div className={`${styles.mpClientPosition}`}>{client_position}</div>
              </div>
            </div>
            <div className={`${styles.form_logos} flex flex-row`}>
              {form_logos.map((clientlogo, index) => (
                <div className="md:basis-auto basis-3/12" key={index}>
                  <img src={clientlogo.client_logo.url} alt={clientlogo.client_logo.alt} />
                </div>
              ))}
            </div>
          </div>
          <div className="md:basis-full basis-1/12"></div>
          <div className="md:basis-full basis-5/12">
            <div className={`${styles.mpformWp}`}>
              <div className={`${styles.mpGetStarted}`}><img src={process.env.NEXT_PUBLIC_WORDPRESS_URL + '/wp-content/uploads/2023/03/svgexport-14.svg'} alt="Get Started" className={`${styles.mpGetS}`} /></div>
              <div className={`${styles.mp__formSec}`}>
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
    </section>
  );
}

export default HomeFormSection;