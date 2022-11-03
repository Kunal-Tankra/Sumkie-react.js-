import React from 'react'
import { Link } from 'react-router-dom'

const OurBlogCard = (props) => {
    const { ourBlog, index, setImgIndex, setOpacity, setDisplay } = props

    const handleSearch = ()=>{
        setImgIndex(index)
        setDisplay('block')
        setTimeout(() => {
            
            setOpacity("1")
        }, );
    }

    return (
        <div className="blogImageBox">
            <div className="imageContainerBlog">
                <img  src={`gallery/images/ourBlog/` + ourBlog.img} alt="img" />

                    <div className="showImages">
                        <span className="material-icons-outlined " onClick={handleSearch}>
                            search
                        </span>
                        <span className="material-icons-outlined ">
                            link
                        </span>

                    </div>

            </div>

            <p>{ourBlog.date}</p>
            <Link to="/">

                <h4>{ourBlog.summery}</h4>
            </Link>
        </div>
  )
}

export default OurBlogCard
