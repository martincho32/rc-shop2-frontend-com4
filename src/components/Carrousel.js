import React from 'react';
import car1 from '../images/car1.jpg';
import car2 from '../images/car2.jpg';
import car3 from '../images/car3.jpg';

class Carrousel extends React.Component {
    /* constructor(props) {
        super(props);
    } */
    render() {
        return (
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={car1} class="d-block w-100 img-fluid" alt="image alternative"/>
                        </div>
                        <div class="carousel-item">
                            <img src={car2} class="d-block w-100 img-fluid" alt="image alternative"/>
                        </div>
                        <div class="carousel-item">
                            <img src={car3} class="d-block w-100 img-fluid" alt="image alternative"/>
                        </div>
                </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                </div>
                        );
                        }
                    }
                    
                    
export default Carrousel;