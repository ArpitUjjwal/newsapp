import React, { Component } from 'react'

export class NewsItem extends Component {


    render() {
        let { title, description, imageUrl, newsUrl, author, date, name } = this.props;
        return (
            <div className="my-3">
                <div style={{ backgroundColor: '#fff3f4' }} className="card">
                    <span className="position-absolute top-0 translate-middle rounded-pill badge" style={{ left: '80%', zIndex: '1', backgroundColor: '#B00000' }}>{name}<span className="visually-hidden">unread messages</span></span>
                    <img src={imageUrl ? imageUrl : "https://images.news18.com/ibnlive/uploads/2021/09/shutterstock_2033764355-163081415716x9.jpg"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">By {author ? author : "Anonymous"} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm text-light rounded-pill" style={{ backgroundColor: '#3366ff' }}>Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
