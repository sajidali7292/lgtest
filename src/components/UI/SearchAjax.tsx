import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from 'scss/components/SearchAjax.module.scss';
import { client } from 'client';


interface SearchAjaxProps {
}

function SearchAjax({ 
    }: SearchAjaxProps): JSX.Element {
    
    const { useQuery } = client;
    const usedQuery = useQuery();
    const [postsObj, setpostsObj] = useState(false);
    const [isSearched, setisSearched] = useState(false);
    const [isMapping, setisMapping] = useState(true);

    const searchAjax = event => {
        //console.log(event.target.value);
        if(event.target.value.length > 2){
            setTimeout(() => {
                setpostsObj ( usedQuery.posts({where: {search: event.target.value}, first: 8}) );
                setisSearched(true);
            }, 200);
        }else{
            setisSearched(false);
        }
    };

    return (
        <div className={`${styles.searchWrap} flex flex-row flex-wrap items-center gap-2 ${isSearched ? styles.saerchedWrap:''}`}>
            <div className={`${styles.searchForm} w-full relative`}>
                <form
                    action="#" autocomplete="off" aria-label="Search form 2 rounded-md"
                    data-hs-cf-bound="true" data-gtm-form-interact-id="0"
                    className={`w-full relative rounded-md`}>
                    <input
                        type="search" id="search" placeholder="Search blog..."
                        name="search" aria-label="Search input 2"
                        autocomplete="off" data-gtm-form-interact-field-id="0"
                        className={`w-full py-3 pl-14 pr-2 rounded-md focus:outline-none`}
                        onChange = {searchAjax}
                    />
                    <label for={`search`} className={`absolute top-1/2 -translate-y-1/2 left-4 leading-none opacity-50 focus:opacity-1`}>
                        <Image 
                            src={`${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/07/Vector2.png`}
                            width='20'
                            height='20'
                        />
                    </label>
                    <input
                        type="submit" aria-hidden="true" aria-label="Hidden button"
                        className={`hidden`}
                    />
                </form>
                {isSearched && 
                    <div className={`${styles.searchedWrap} flex flex-col gap-5 px-5 pt-6 pb-8 w-full bg-white absolute top-full rounded-b-md`}>
                        {postsObj.edges.length > 0 ?
                            (
                                <>
                                <div className={`${styles.searchedTitle}`}>Post Blogs</div>
                                {postsObj.edges.map((post, index) => (
                                    post.node.uri ? (
                                        <Link key={`${post.node.uri}`} href={`${post.node.uri}`} passHref>
                                            <a className={`${styles.postList}`} href={`${post.node.uri}`}>
                                                <span dangerouslySetInnerHTML={{ __html: post.node?.title({format: 'RENDERED'}) }} ></span>
                                                {renderDate(post.node.date)}
                                            </a>
                                        </Link>
                                    ):(
                                        <div>Loading...</div>
                                    )
                                ))}
                                </>
                            ):(
                                <div>Nothing Founded</div>
                            )
                        }
                    </div>
                }
            </div>
        </div>
    );

    function renderDate(date) {
        const customDate = new Date(date);
        //const stringDate = <span> On {customDate.toLocaleString('default', { month: 'short' })} {customDate.getDate()} ,{customDate.getFullYear()}</span>
        return <span className={`${styles.postDate}`}>{customDate.toLocaleString('default', { month: 'short' })} {customDate.getDate()} ,{customDate.getFullYear()}</span>;
    }
}

export default SearchAjax;
