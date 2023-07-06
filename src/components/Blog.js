import React, { Component } from 'react';
import Slider from './Slider';

class Blog extends Component {

    render() {

        return (
            <div id="blog">
                <Slider
                    title="Blog"
                    size="slider-small"
                />
                <div id="content">
                    {/* Listado de articulos que vendran de la api */}
                </div>
            </div>
        );
    }
}

export default Blog;
