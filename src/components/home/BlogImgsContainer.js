import React from 'react'
import { useState } from 'react';

const BlogImgsContainer = (props) => {
    const { ourBlog, imgIndex, setImgIndex, opacity, display, handleCross } = props

    

    const [styleImg, setStyleImg] = useState({
        opacity: '1',
        transition: '0s'
    });

    const handleStyle_B_I_Slider = (T_F) => {
        setStyleImg({ ...styleImg, opacity: '0', transition: '0s' })
        if (T_F) {
            setImgIndex(imgIndex + 1)
        }
        else {
            setImgIndex(imgIndex - 1)
        }

        setTimeout(() => {

            setStyleImg({ ...styleImg, opacity: '1', transition: '.7s' })
        },100);
    }

    

    return (
        <>
            <div  style={{opacity: opacity, display: display}} className='blogImgsContainer' >
                <span style={{ display: imgIndex === 0 ? 'none' : 'flex' }} className="material-icons-outlined left_B_I_C_Arrow" onClick={() => { handleStyle_B_I_Slider(false) }} >
                    chevron_left
                </span>

                <img style={styleImg} src={ourBlog && `gallery/images/ourBlog/` + ourBlog[imgIndex].img} alt="img" />



                <span style={ourBlog && { display: imgIndex === ourBlog.length - 1 ? 'none' : 'flex' }} className="material-icons-outlined right_B_I_C_Arrow" onClick={() => { handleStyle_B_I_Slider(true) }}>
                    chevron_right
                </span>

                <div className="afterBlogImages">
                    <div className="imageNumber">
                        <h5>Click to view Full Image</h5>
                        <p>Image {imgIndex + 1} of {ourBlog && ourBlog.length}</p>
                    </div>

                    <span className="material-icons-outlined closeOfBlog" onClick={handleCross}  >
                        close
                    </span>
                </div>
            </div>

        </>
    )
}

export default BlogImgsContainer
