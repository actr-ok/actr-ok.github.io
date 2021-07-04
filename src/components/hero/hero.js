import React, { Component } from 'react';
export default class Hero extends Component {
  render() {
    return (
      <React.Fragment>
          {/* hero
    ================================================== */}
<section id="hero" className="s-hero">
  <div className="s-hero__slider">
    <div className="s-hero__slide">
      <div className="s-hero__slide-bg" style={{backgroundImage: 'url("images/slide1-bg-3000.jpg")'}} />
      <div className="row s-hero__slide-content animate-this">
        <div className="column">
          <div className="s-hero__slide-meta">
            <span className="cat-links">
              <a href="#0">Lifestyle</a>
              <a href="#0">Design</a>
            </span>
            <span className="byline"> 
              Posted by 
              <span className="author">
                <a href="#0">Jonathan Doe</a>
              </span>
            </span>
          </div>
          <h1 className="s-hero__slide-text">
            <a href="#0">
              Tips and Ideas to Help You Start Freelancing.
            </a>
          </h1>
        </div>
      </div>
    </div> {/* end s-hero__slide */}
    <div className="s-hero__slide">
      <div className="s-hero__slide-bg" style={{backgroundImage: 'url("images/slide2-bg-3000.jpg")'}} />
      <div className="row s-hero__slide-content animate-this">
        <div className="column">
          <div className="s-hero__slide-meta">
            <span className="cat-links">
              <a href="#0">Work</a>
            </span>
            <span className="byline"> 
              Posted by 
              <span className="author">
                <a href="#0">Juan Dela Cruz</a>
              </span>
            </span>
          </div>
          <h1 className="s-hero__slide-text">
            <a href="#0">
              Minimalism: The Art of Keeping It Simple.
            </a>
          </h1>
        </div>
      </div>
    </div> {/* end s-hero__slide */}
    <div className='s-hero__slide" '>
      <div className="s-hero__slide-bg" style={{backgroundImage: 'url("images/slide3-bg-3000.jpg")'}} />
      <div className="row s-hero__slide-content animate-this">
        <div className="column">
          <div className="s-hero__slide-meta">
            <span className="cat-links">
              <a href="#0">Health</a>
              <a href="#0">Lifestyle</a>
            </span>
            <span className="byline"> 
              Posted by 
              <span className="author">
                <a href="#0">Jane Doe</a>
              </span>
            </span>
          </div>
          <h1 className="s-hero__slide-text">
            <a href="#0">
              10 Reasons Why Being in Nature Is Good For You.
            </a>
          </h1>
        </div>
      </div>
    </div> {/* end s-hero__slide */}
  </div> {/* end s-hero__slider */}
  <div className="s-hero__social hide-on-mobile-small">
    <p>Follow</p>
    <span />
    <ul className="s-hero__social-icons">
      <li><a href="#0"><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
      <li><a href="#0"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
      <li><a href="#0"><i className="fab fa-instagram" aria-hidden="true" /></a></li>
      <li><a href="#0"><i className="fab fa-dribbble" aria-hidden="true" /></a></li>
    </ul>
  </div> {/* end s-hero__social */}
  <div className="nav-arrows s-hero__nav-arrows">
    <button className="s-hero__arrow-prev">
      <svg viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" width={15} height={15}><path d="M1.5 7.5l4-4m-4 4l4 4m-4-4H14" stroke="currentColor" /></svg>
    </button>
    <button className="s-hero__arrow-next">
      <svg viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" width={15} height={15}><path d="M13.5 7.5l-4-4m4 4l-4 4m4-4H1" stroke="currentColor" /></svg>
    </button>
  </div> {/* end s-hero__arrows */}
</section> {/* end s-hero */}

      </React.Fragment>
    );
  }
}