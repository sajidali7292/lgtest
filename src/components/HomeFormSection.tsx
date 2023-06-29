import React from 'react';
import styles from 'scss/components/HubspotForm.module.scss';
import Image from 'next/image'
import dynamic from 'next/dynamic'
import $ from 'jquery';

const HubspotForm = dynamic(
  () => import('react-hubspot-form'),
  { ssr: false }
)

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
}: Props): JSX.Element {
  const handleFormReady = (form: any) => {
    hubspotFormProps?.onReady && hubspotFormProps.onReady(form);
  };

  return (
    <section className={`${styles.LaHome_form} ${className ? styles[className] : ''}`} style={{ backgroundColor: '#3E255A' }}>
      <div className={`${styles.container} container`}>
        <div className="flex flex-row">
          <div className="basis-6/12">
            <h2 className={`${styles.title}`}>{title}</h2>
            <Image
                src={process.env.NEXT_PUBLIC_WORDPRESS_URL + '/wp-content/uploads/2023/03/svgexport-13.svg'}
                alt="Quote Icon"
                className={`${styles.quote}`}
                width={29}
                height={22}
            />
            <p className={`${styles.txt}`}>{text}</p>
            <div className={`flex flex-row justify-center ${styles.client_wrap}`}>
              <div className="flex-auto"></div>
              <div className="flex-none">
                <Image
                    src={photo.url}
                    alt={photo.alt}
                    className={`${styles.quote}`}
                    width={62}
                    height={62}
                />
              </div>
              <div className={`flex-3 ${styles.cliet_txt_wrapper}`}>
                <div className={`${styles.mpClientName}`}>{client_name}</div>
                <div className={`${styles.mpClientPosition}`}>{client_position}</div>
              </div>
            </div>
            <div className={`${styles.form_logos} justify-center flex flex-row`}>
              {form_logos.map((clientlogo, index) => (
                <div className="basis-auto lg:basis-3/12" key={index}>
                  <img src={clientlogo.client_logo.url} alt={clientlogo.client_logo.alt} />
                </div>
              ))}
            </div>
          </div>
          <div className="basis-1/12"></div>
          <div className={`basis-5/12`}>
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
                  
                  <HubspotForm
                    portalId='7038850'
                    formId='19865112-5d46-46ff-93f8-3bf9013e7656'
                    onSubmit={() => console.log('form submitted')}
                    loading={<div>Loading...</div>}
                    onReady={(form: any) => {
                      console.log('form ready', form);
                      //custom code of the form here
                        $('.hs_budget_available_to_spend').wrap('<div class="budget_btn"></div>')
                        $('.hs_services_that_interest_you').wrap('<div class="services_btn"></div>')
                        $('.budget_btn').append('<div id="budget-radio" class="budget-btn">Budget</div>');
                        $('.services_btn').append("<div id='select_btn' class='servicesIntin' value='Services you&#39;re interested in'>Services you&#39;re interested in</div>");
                        $('.hbspt-form input[type=hidden]').closest('fieldset').hide();                                    
                        $('.hs_services_that_interest_you').hide();
                        $('.hs_budget_available_to_spend').hide();
                        $( "#budget-radio" ).click(function(event) {
                            $(this).toggleClass("selected");
                        });
                        $( "#select_btn" ).click(function(event) {
                            $(this).toggleClass("selected");
                        });
                        $("input[type='radio']").wrap('<label class="custom-radio"></label>');
                        $('.custom-radio').append('<span class="checkmark"></span>');
                        $('.hs-form-radio').wrap('<div class="li-bg"></div>');
                        $('.li-bg').click(function(event){                                        
                            $('.li-bg').removeClass('active');
                            $(this).addClass('active');
                            $("#budget-radio").addClass('budactive');
                        });
                        $('.custom-radio').click(function(event) {
                            $('.custom-radio').removeClass('checked');
                            $(this).addClass('checked');
                        });
                        $("input[type='checkbox']").change(function(){
                            if($(this).is(":checked")){
                                $(this).parent().addClass("active");
          
                              }else{
                                $(this).parent().removeClass("active");
                            }
                        });
                        $(document).on('click', "input[type='radio']", function() {
                            var target = $("#budget-radio");
                            target.html($(this).val());                                    
                        });
          
                        $('input[type="checkbox"]').on('change', function() {
          
                            var tags = $('.hs-form-checkbox-display > input[type="checkbox"]:checked')
                            .map(function() {
                                return $(this).val();
                            }).get().join(', ');
          
                            if(tags.length === 0){
                                $("#select_btn").html('Services you&#39;re interested in');
                                $("#select_btn").removeClass('budactive');
                            }else{
                                $("#select_btn").html(tags);
                                $("#select_btn").addClass('budactive');
                            } 
                        });
          
                        $(document).click(function(e){
                            var containerS = $("#select_btn");
                            var dropdownS = $('.hs_services_that_interest_you');
                            if(!containerS.is(e.target) && containerS.has(e.target).length === 0){
                                dropdownS.hide();
                                containerS.removeClass("selected");
                            }else{
                                dropdownS.toggle();
                            }
                            if(!dropdownS.is(e.target) && dropdownS.has(e.target).length === 1){
                                dropdownS.show();
                                containerS.addClass("selected");
                            }                                     
                        });
          
                        $(document).click(function(e){
                            var containerB = $("#budget-radio");
                            var dropdownB = $('.hs_budget_available_to_spend');
                            var submit = $('.hs-button');
                            if(!containerB.is(e.target) && containerB.has(e.target).length === 0){
                                dropdownB.hide();
                                containerB.removeClass("selected");
                            }else{
                                dropdownB.toggle();
                            }
                            if(!dropdownB.is(e.target) && dropdownB.has(e.target).length === 1){
                                dropdownB.show();
                                containerB.addClass("selected");
                            }
                            if(!submit.is(e.target) && submit.has(e.target).length === 1){
          
                            }                                    
                        });
                    }}
                  />
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