import React from "react";
import Image from 'next/image';
import styles from 'scss/components/BasicForm.module.scss';
import Button from '../UI/Button/index';
import BadgeRow from '../UI/BadgeRow';
import Submit from '../UI/Submit/index';
import { backgroundColors, sectionVariantsTop, sectionVariantsBottom, widthVariations } from '../constants';
import Heading, { HeadingProps } from '../Heading';


interface Props {
    title?: string;
    description?: string;
    headingLevel?: string;
    form?: any;
    submitBtn?: any;
    pt?: string;
    pb?: string;
    bg?: string;
}

function BasicForm({ 
        title = '',
        description = '',
        headingLevel = 'h2',
        form,
        submitBtn,
        pt = 'md',
        pb = 'md',
        bg= 'white'
    }: Props): JSX.Element {
  
    const ptVariant = sectionVariantsTop[pt];
    const pBVariant = sectionVariantsBottom[pb];
    const bgVariant = backgroundColors[bg];

    const checkInput = (event) => {
        console.log(event.target.nextSibling);
        if(event.target.value.length == 0 && event.target.required ){
            event.target.nextSibling.style.display = 'block'
        }else{
            event.target.nextSibling.style.display = 'none'
        }
    }

    return (
        <section className={`${styles.formSection} ${bgVariant} ${bg}`}>
            <div className={`container ${styles.wrap} ${ptVariant} ${pBVariant}`}>
                {title && (
                    <Heading level={headingLevel} className={`${styles.title} text-center`}>
                        {title}
                    </Heading>
                )}
                {description &&
                    <p className={`${styles.description} text-center`}
                    dangerouslySetInnerHTML={{__html: description}}></p>
                }
                <div className={`${styles.formWrap}`}>
                    <form
                    action="#" autoComplete="off" aria-label="Search form 2 rounded-md"
                    data-hs-cf-bound="true" data-gtm-form-interact-id="0"
                    className={`w-full relative flex flex-row flex-wrap gap-y-8 md:gap-y-12`}>
                        {form.map((field, index) => (
                            <div
                            key={`${field?.ffieldLabel}-${index}`}
                            className={`${styles.fieldWrap} ${widthVariations[field?.ffieldWidth]} px-2 md:px-5`}>
                                <label htmlFor={field?.ffieldLabel?.replace(' ', '')} className={``}>
                                    {field?.ffieldLabel}
                                    {field?.ffieldRequired &&
                                        <span>*</span>
                                    }
                                </label>
                                {field?.ffieldForm == 'text' && (
                                    <input
                                        type={field?.ffieldLabel?.replace(' ', '')} id={field?.ffieldLabel?.replace(' ', '')} placeholder={field?.ffieldPlaceholder}
                                        name={field?.ffieldLabel?.replace(' ', '')} aria-label={field?.ffieldLabel} data-gtm-form-interact-field-id="0"
                                        required={field?.ffieldRequired ? true:false} className={`${styles.fieldForm} w-full focus:outline-none bg-transparent border-b border-white py-2 md:py-3`}
                                        onChange = {checkInput}
                                    />

                                )}
                                {field?.ffieldForm == 'textarea' && (
                                    <textarea
                                        type={field?.ffieldLabel?.replace(' ', '')} id={field?.ffieldLabel?.replace(' ', '')} placeholder={field?.ffieldPlaceholder}
                                        name={field?.ffieldLabel?.replace(' ', '')} aria-label={field?.ffieldLabel} data-gtm-form-interact-field-id="0"
                                        required={field?.ffieldRequired ? true:false} className={`${styles.fieldForm} w-full focus:outline-none bg-transparent border-b border-white py-2 md:py-3`}
                                        onChange = {checkInput}
                                    />
                                )}
                                {field?.ffieldRequired &&
                                    <span className="text-center pt-4">Please complete this required field.</span>
                                }
                            </div>
                        ))}
                        
                        <div className={`w-full`}>
                            <Submit buttonObj={submitBtn} />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default BasicForm;
