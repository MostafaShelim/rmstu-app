import 'photoswipe/dist/default-skin/default-skin.css';
import 'photoswipe/dist/photoswipe.css';
import React from 'react';
import { Gallery, Item } from 'react-photoswipe-gallery';
import { Link } from 'react-router-dom';

const GalleryDetail = () => {
    const imageStyle = {
        width: '190px',
        height: '150px',
        cursor: 'pointer'
    }
    const url1 = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.IPdQITB523qzc6uQR6rgGgHaE8%26pid%3DApi&f=1";
    const url2 = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.d23ZRISyyv0f9vC_QF6nkgHaEK%26pid%3DApi&f=1";
    const url3 = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.ssZfUI8_yehzacZnKlhY0QHaEo%26pid%3DApi&f=1";
    return (
        <Gallery>
                <Item
                original= {url2}
                thumbnail={url2}
                width="1024"
                height="768"
                >
                    {({ ref, open }) => (
                        <img style = {imageStyle} ref={ref} onClick={open} src={url2} alt=""/>
                    )}
                </Item>
                <Item
                original= {url3}
                thumbnail={url3}
                width="1024"
                height="768"
                >
                    {({ ref, open }) => (
                        <img style = {imageStyle} ref={ref} onClick={open} src={url3} alt=""/>
                    )}
                </Item>
                <Item
                original= {url1}
                thumbnail={url1}
                width="1024"
                height="768"
                >
                    {({ ref, open }) => (
                        <img style = {imageStyle} ref={ref} onClick={open} src={url1} alt=""/>
                    )}
                </Item>
                <Item
                original= {url2}
                thumbnail={url2}
                width="1024"
                height="768"
                >
                    {({ ref, open }) => (
                        <img style = {imageStyle} ref={ref} onClick={open} src={url2} alt=""/>
                    )}
                </Item>
            
                <Item
                original= {url1}
                thumbnail={url1}
                width="1024"
                height="768"
                >
                    {({ ref, open }) => (
                        <img style = {imageStyle} ref={ref} onClick={open} src={url1} alt=""/>
                    )}
                </Item>
                
                <Item
                original= {url2}
                thumbnail={url2}
                width="1024"
                height="768"
                >
                    {({ ref, open }) => (
                        <img style = {imageStyle} ref={ref} onClick={open} src={url2} alt=""/>
                    )}
                </Item>
                <Item
                original= {url3}
                thumbnail={url3}
                width="1024"
                height="768"
                >
                    {({ ref, open }) => (
                        <img style = {imageStyle} ref={ref} onClick={open} src={url3} alt=""/>
                    )}
                </Item>
                <Item
                original= {url3}
                thumbnail={url3}
                width="1024"
                height="768"
                >
                    {({ ref, open }) => (
                        <img style = {imageStyle} ref={ref} onClick={open} src={url3} alt=""/>
                    )}
                </Item>
                <Item
                original= {url1}
                thumbnail={url1}
                width="1024"
                height="768"
                >
                    {({ ref, open }) => (
                        <img style = {imageStyle} ref={ref} onClick={open} src={url1} alt=""/>
                    )}
                </Item>
                <Item
                original= {url3}
                thumbnail={url3}
                width="1024"
                height="768"
                >
                    {({ ref, open }) => (
                        <img style = {imageStyle} ref={ref} onClick={open} src={url3} alt=""/>
                    )}
                </Item>
                <Item
                original= {url1}
                thumbnail={url1}
                width="1024"
                height="768"
                >
                    {({ ref, open }) => (
                        <img style = {imageStyle} ref={ref} onClick={open} src={url1} alt=""/>
                    )}
                </Item>
                <Item
                original= {url2}
                thumbnail={url2}
                width="1024"
                height="768"
                >
                    {({ ref, open }) => (
                        <img style = {imageStyle} ref={ref} onClick={open} src={url2} alt=""/>
                    )}
                </Item>
                <Item
                original= {url3}
                thumbnail={url3}
                width="1024"
                height="768"
                >
                    {({ ref, open }) => (
                        <img style = {imageStyle} ref={ref} onClick={open} src={url3} alt=""/>
                    )}
                </Item>
                <Item
                original= {url3}
                thumbnail={url3}
                width="1024"
                height="768"
                >
                    {({ ref, open }) => (
                        <img style = {imageStyle} ref={ref} onClick={open} src={url3} alt=""/>
                    )}
                </Item>
                <Item
                original= {url1}
                thumbnail={url1}
                width="1024"
                height="768"
                >
                    {({ ref, open }) => (
                        <img style = {imageStyle} ref={ref} onClick={open} src={url1} alt=""/>
                    )}
                </Item>
                <Item
                original= {url2}
                thumbnail={url2}
                width="1024"
                height="768"
                >
                    {({ ref, open }) => (
                        <img style = {imageStyle} ref={ref} onClick={open} src={url2} alt=""/>
                    )}
                </Item>
                <Item
                original= {url1}
                thumbnail={url1}
                width="1024"
                height="768"
                >
                    {({ ref, open }) => (
                        <img style = {imageStyle} ref={ref} onClick={open} src={url1} alt=""/>
                    )}
                </Item>
                <Item
                original= {url2}
                thumbnail={url2}
                width="1024"
                height="768"
                >
                    {({ ref, open }) => (
                        <img style = {imageStyle} ref={ref} onClick={open} src={url2} alt=""/>
                    )}
                </Item>
            </Gallery>
    );
};

export default GalleryDetail;