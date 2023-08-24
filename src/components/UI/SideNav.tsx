import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from 'scss/components/SideNav.module.scss';
import { client } from 'client';


interface SideNavProps {
    postCat: any;
}

function SideNav({ 
    postCat,
    }: SideNavProps): JSX.Element {
    const [isLoadingStatus, setLoadingStatus] = useState(false);
    useEffect(() => {
        setLoadingStatus(true);
        headingsFunction();
        window.addEventListener('scroll', isStickyNav);
        return () => {
            window.removeEventListener('scroll', isStickyNav);
        };
    }, []);

    const { useQuery } = client;
    const postsObj = useQuery().posts({where: {categoryId: postCat}, first: 4});
    //const postsObj = useQuery().posts({first: 4});

    const headingsFunction = (e) => {
        let headingsElements = Array.from( document.getElementById('singleContent').getElementsByTagName('h2') );
        let sideElements = document.getElementById('navSide');
        sideElements.innerHTML = '';
        let index = 0;
        headingsElements.forEach(element => {
            let headingText = element.innerHTML.toLowerCase().replaceAll('?', '').replaceAll('.', '').replaceAll(' ', '-');
            var linkHeading = document.createElement('a');
            linkHeading.textContent = element.innerHTML;
            linkHeading.setAttribute('href', '#'+headingText);
            if(index === 0){
                linkHeading.classList.add('active');
            }
            sideElements.appendChild(linkHeading);
            element.setAttribute('id', headingText);
            element.classList.add('sectionToScroll');
            //console.log(headingText);
            index++;
        });

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                const id = entry.target.getAttribute("id");
                //console.log(id);
                if (entry.isIntersecting) {
                    document.querySelectorAll(".active").forEach((z) => {
                        z.classList.remove("active")
                    });
                    document.querySelector(`a[href="#${id}"]`).classList.add("active");
                }
            });
        });
    
        // Track all sections that have an `id` applied
        document.querySelectorAll('h2[id]').forEach((element) => {
            observer.observe(element);
            //console.log('check: ',element);
        });

        //console.log( headingsElements );
        //console.log( 'tester' );
        setLoadingStatus(false);
        
    };

    const isStickyNav = (e) => {
        let stickySide = document.getElementById('sideSection');
        let stickySideParent = document.getElementById('sideSection').parentElement;
        let sectionHeight = (stickySideParent as HTMLElement).offsetHeight;
        let sectionPos = (stickySide as HTMLElement).offsetTop;
        let sectionPosParent = (stickySideParent as HTMLElement).offsetTop;
        let sectionWidthParent = (stickySideParent as HTMLElement).offsetWidth;
        stickySide.style.width = sectionWidthParent+'px';
        let sectionDistance = sectionPosParent+sectionPos;
        let pageScroll = document.getElementsByTagName("html")[0].scrollTop;
        //console.log('sect',sectionDistance);
        //console.log('page',pageScroll);
        if( pageScroll >= sectionDistance ){
            if( pageScroll <= sectionHeight ){
                stickySide.classList.add('fixed');
                stickySide.classList.add('top-24');
                stickySide.classList.remove('absolute');
                stickySide.classList.remove('bottom-0');
            }else{
                stickySide.classList.remove('fixed');
                stickySide.classList.remove('top-24');
                stickySide.classList.add('absolute');
                stickySide.classList.add('bottom-0');
            }
        }else{
            stickySide.classList.remove('fixed');
            stickySide.classList.remove('absolute');
        }
    }

    if (isLoadingStatus) return <p>Loading...</p>
    
    
    return (
        <div id={`sideSection`} className={`${styles.listWrap} flex flex-col py-10 px-9 rounded-md gap-12 top-24 bg-white`}>
            <div className={`${styles.headingsList}`}>
                <div id={`navSide`} className={`${styles.navList} flex flex-col gap-6 list`}>
                    
                </div>
            </div>

            {postsObj.edges &&
                <div className={`${styles.postsRelated}`}>
                    <>
                        <div className={`${styles.headingTitle}`}><span>RELATED ARTICLES</span></div>
                        <div className={`${styles.postsList} flex flex-col gap-6`}>
                            {postsObj.edges.map((post, index) => (
                                <Link key={post.node.title({format: 'RENDERED'})} href={`${post.node.uri}`} passHref>
                                    <a className={`${styles.postList}`} href={`${post.node.uri}`}>
                                        <span dangerouslySetInnerHTML={{ __html: post.node?.title({format: 'RENDERED'}) }} ></span>
                                        {renderDate(post.node.date)}
                                    </a>
                                </Link>
                            ))}
                        </div>
                    </>
                </div>
            }
        </div>
    );

    function renderDate(date) {
        const customDate = new Date(date);
        //const stringDate = <span> On {customDate.toLocaleString('default', { month: 'short' })} {customDate.getDate()} ,{customDate.getFullYear()}</span>
        return <span className={`${styles.postDate}`}>{customDate.toLocaleString('default', { month: 'short' })} {customDate.getDate()} ,{customDate.getFullYear()}</span>;
    }
}

export default SideNav;
