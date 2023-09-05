import React from "react";
import { Container } from "react-bootstrap";

function Home() {
  return (
    <>
      {/* The container component containing about info about Lumi La Boutique clothing brand to display on the landing page */}
      <Container className="infoContainer py-5">
        <h3 className="text-center mb-5 ">Who we are:</h3>
        <div className="mb-5">
          <h5 className="aboutInfo">
            Discover Lumi La Boutique: Where Style Meets Identity
          </h5>
          <p>
            Welcome to Lumi La Boutique, where fashion is an expression of your
            unique identity. <br />
            We don't just sell clothes; we offer a way to confidently showcase
            who you are. <br />
            Step into a world where every piece tells a story, and every outfit
            reflects your individuality.
          </p>
        </div>
        <div className="mb-5">
          <h5 className="aboutInfo">Our Journey:</h5>
          <p>
            Founded 2020, Lumi La Boutique started as a vision to revolutionize
            fashion.
            <br />
            Our mission is to provide clothing that empowers, intrigues, and
            uplifts.
            <br />
            From our humble beginnings, we've grown into a brand that's
            synonymous with authenticity and innovation.
          </p>
        </div>
        <div className="mb-5">
          <h5 className="aboutInfo">What We Believe:</h5>
          <p>
            Lumi La Boutique believes that fashion is a language - a powerful
            tool for self-expression.
            <br />
            Our designs are more than fabric; they're statements of confidence
            and creativity.
            <br />
            We're not just chasing trends; we're setting them.
          </p>
        </div>
        <div className="mb-5">
          <h5 className="aboutInfo">Crafting Excellence:</h5>
          <p>
            Precision and passion intertwine in every stitch at Lumi La
            Boutique.
            <br />
            Our skilled designers and artisans pour their expertise into
            creating pieces that are not only visually stunning but also
            comfortable and enduring.
            <br />
            Quality isn't a choice; it's a standard.
          </p>
        </div>
        <div className="mb-5">
          <h5 className="aboutInfo">Sustainability at Heart:</h5>
          <p>
            We're not just fashion-forward; we're future-forward.
            <br />
            Sustainability is the cornerstone of our brand.
            <br />
            From sourcing eco-friendly materials to eco-conscious packaging,
            we're committed to reducing our footprint without compromising on
            style.
          </p>
        </div>
        <div className="mb-5">
          <h5 className="aboutInfo">For Everyone:</h5>
          <p>
            Lumi La Boutique celebrates diversity.
            <br />
            Our pieces are designed for every body, every gender, every style.
            <br />
            Fashion is a universal language, and we're here to ensure everyone
            has a voice.
          </p>
        </div>
        <div className="mb-5">
          <h5 className="aboutInfo">Join the Movement:</h5>
          <p>
            Be a part of the Lumi La Boutique community.
            <br />
            Explore our latest collection that captures the essence of now and
            the intrigue of what's next.
            <br />
            Follow us on social media for style inspiration, exclusive previews,
            and a glimpse into the artistry behind our creations.
            <br />
            Unveil your inner style with Lumi La Boutique.
            <br />
            Dress authentically. Live boldly. Welcome to a new era of
            self-expression.
            <br />
            Elevate your identity with Lumi La Boutique.
          </p>
        </div>
      </Container>
    </>
  );
}

export default Home;
