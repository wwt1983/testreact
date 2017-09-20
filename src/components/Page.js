import React, {PropTypes} from 'react';

var Page = React.createClass({
    onYearBtnClick: function (e) {
        console.log(e.target.innerText);
        this.props.getPhotos(Number(e.target.innerText));
    },
    render:function () {
        return (
            <div>
                <p>
                    <button onClick={this.onYearBtnClick}>2017</button>
                    <button onClick={this.onYearBtnClick}>2016</button>
                </p>
                <p>У тебя {this.props.photos.length} фото за {this.props.year} год</p>
            </div>
        );
    }
});


Page.propTypes = {
    year: PropTypes.number.isRequired,
    photos: PropTypes.array.isRequired,
    getPhotos: PropTypes.func.isRequired
};
module.exports  = Page;
