import { PageWrapper } from "@/components/layout/PageWrapper";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";

export function HomeContent() {
  return (
    <PageWrapper>
      {/* Banner One Start */}
      <Section className="banner-one">
        <div
          className="banner-one__shape-bg"
          style={{ backgroundImage: "url(assets/images/shapes/banner-one-shape-bg.png)" }}
        />
        <div className="banner-one__shape-4 float-bob-x">
          <img src="assets/images/shapes/banner-one-shape-4.png" alt="" />
        </div>
        <div className="banner-one__shape-5 float-bob-y">
          <img src="assets/images/shapes/banner-one-shape-5.png" alt="" />
        </div>
        <div className="banner-one__shape-6">
          <img src="assets/images/shapes/banner-one-shape-6.png" alt="" />
        </div>
        <div className="banner-one__shape-7 img-bounce">
          <img src="assets/images/shapes/banner-one-shape-7.png" alt="" />
        </div>
        <div className="banner-one__shape-8 float-bob-y">
          <img src="assets/images/shapes/banner-one-shape-8.png" alt="" />
        </div>
        <Container>
          <div className="banner-one__inner">
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="banner-one__left">
                  <div className="banner-one__title-box">
                    <div className="banner-one__sub-title">
                      <p>get to know about us</p>
                    </div>
                    <h2 className="banner-one__title">
                      Welcome to <span>Ajeet Seeds</span>
                      <br />
                      Pvt. Ltd.
                    </h2>
                  </div>
                  <p className="banner-one__text">
                    Ajeet Seeds plays a vital role in producing and supplying high-quality hybrid seeds to farmers at
                    affordable prices.
                  </p>
                  <div className="banner-one__thm-and-other-btn-box">
                    <div className="banner-one__btn-box">
                      <Button href="/about">Discover More</Button>
                    </div>
                    <div className="banner-one__video-link">
                      <a href="https://www.youtube.com/watch?v=Get7rqXYrbQ" className="video-popup">
                        <div className="banner-one__video-icon">
                          <span className="fa fa-play" />
                          <i className="ripple" />
                        </div>
                      </a>
                      <h4 className="banner-one__video-title">Watch Video</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="banner-one__right">
                  <div className="banner-one__img-box">
                    <div className="banner-one__img">
                      <img src="assets/images/resources/banner-one-img-1.png" alt="" />
                      <div className="banner-one__img-shape-box rotate-me">
                        <div className="banner-one__img-shape-1">
                          <div className="banner-one__img-shape-2" />
                        </div>
                        <div className="banner-one__shape-1">
                          <img src="assets/images/shapes/banner-one-shape-1.png" alt="" />
                        </div>
                        <div className="banner-one__shape-2 rotate-me">
                          <img src="assets/images/shapes/banner-one-shape-2.png" alt="" />
                        </div>
                        <div className="banner-one__shape-3">
                          <img src="assets/images/shapes/banner-one-shape-3.png" alt="" />
                        </div>
                      </div>
                      <div className="banner-one__discount-box">
                        <h3>50%</h3>
                        <p>Discount</p>
                      </div>
                      <div className="banner-one__client-review">
                        <div className="banner-one__client-review-img">
                          <img src="assets/images/resources/banner-one-review-img.jpg" alt="" />
                        </div>
                        <div className="banner-one__client-review-text">
                          <h4>Review</h4>
                        </div>
                        <div className="banner-one__client-review-client-info">
                          <p className="banner-one__client-review-client-name">Alisa Olivia/</p>
                          <div className="banner-one__client-review-star">
                            <span className="icon-pointed-star" />
                            <span className="icon-pointed-star" />
                            <span className="icon-pointed-star" />
                            <span className="icon-pointed-star" />
                          </div>
                        </div>
                      </div>
                      <div className="banner-one__happy-customer">
                        <ul className="list-unstyled banner-one__happy-customer-list">
                          <li>
                            <div className="banner-one__happy-customer-img">
                              <img src="assets/images/resources/banner-one-happy-customer-img-1-1.jpg" alt="" />
                            </div>
                          </li>
                          <li>
                            <div className="banner-one__happy-customer-img">
                              <img src="assets/images/resources/banner-one-happy-customer-img-1-2.jpg" alt="" />
                            </div>
                          </li>
                          <li>
                            <div className="banner-one__happy-customer-img">
                              <div className="banner-one__happy-customer-plus">
                                <i className="fas fa-plus" />
                              </div>
                            </div>
                          </li>
                        </ul>
                        <div className="banner-one__happy-customer-count-box">
                          <div className="banner-one__happy-customer-count-box-inner count-box">
                            <p className="count-text" data-stop={2000} data-speed={3000}>
                              00
                            </p>
                            <span>+</span>
                          </div>
                          <p className="banner-one__happy-customer-text">Happy Customers</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
      {/*Banner One End */}

      {/*Feature One Start */}
      <Section className="feature-one">
        <Container>
          <div className="row">
            {/*Feature One Single Start*/}
            <div className="col-xl-4 col-lg-4">
              <div className="feature-one__single wow fadeInLeft" data-wow-delay="100ms">
                <div className="feature-one__icon">
                  <span className="icon-farming" />
                </div>
                <div className="feature-one__content">
                  <h3 className="feature-one__title">Pure &amp; Organic Farming</h3>
                  <p className="feature-one__text">Grow Naturally, Eat Healthy</p>
                </div>
              </div>
            </div>
            {/*Feature One Single End*/}
            {/*Feature One Single Start*/}
            <div className="col-xl-4 col-lg-4">
              <div className="feature-one__single-two wow fadeInUp" data-wow-delay="100ms">
                <div className="feature-one__single-two-bg-color">
                  <div
                    className="feature-one__single-two-bg"
                    style={{ backgroundImage: "url(assets/images/backgrounds/feature-one-single-two-bg.jpg)" }}
                  />
                </div>
                <ul className="feature-one__ratting list-unstyled">
                  <li>
                    <span className="icon-pointed-star" />
                  </li>
                  <li>
                    <span className="icon-pointed-star" />
                  </li>
                  <li>
                    <span className="icon-pointed-star" />
                  </li>
                  <li>
                    <span className="icon-pointed-star" />
                  </li>
                  <li>
                    <span className="icon-pointed-star" />
                  </li>
                </ul>
                <div className="feature-one__single-two-shape-1">
                  <img src="assets/images/shapes/feature-one-single-two-shape-1.png" alt="feature-one-single-two-shape-1" />
                </div>
                <div className="feature-one__single-two-shape-2">
                  <img src="assets/images/shapes/feature-one-single-two-shape-2.png" alt="feature-one-single-two-shape-2" />
                </div>
                <div className="feature-one__icon-two">
                  <span className="icon-trophy" />
                </div>
                <span className="feature-one__award-year">2025</span>
                <h3 className="feature-one__title-two">
                  Quality in Organic
                  <br />
                  Harvests
                </h3>
              </div>
            </div>
            {/*Feature One Single End*/}
            {/*Feature One Single Start*/}
            <div className="col-xl-4 col-lg-4">
              <div className="feature-one__single wow fadeInRight" data-wow-delay="100ms">
                <div className="feature-one__icon">
                  <span className="icon-sustainable" />
                </div>
                <div className="feature-one__content">
                  <h3 className="feature-one__title">Innovation in Sustainable Farming</h3>
                  <p className="feature-one__text">Commitment to Green Grow</p>
                </div>
              </div>
            </div>
            {/*Feature One Single End*/}
          </div>
        </Container>
      </Section>
      {/*Feature One End */}

      {/*About One Start */}
      <Section className="about-one">
        <Container>
          <div className="row">
            <div className="col-xl-6">
              <div className="about-one__left wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                <div className="about-one__img">
                  <img src="assets/images/resources/about-one-image-1.jpg" alt="about-one-image-1" />
                  <div className="about-one__crop-harvest">
                    <div className="about-one__crop-harvest-icon">
                      <span className="icon-tractor" />
                    </div>
                    <h3 className="about-one__crop-harvest-title">
                      Crops
                      <br />
                      Harvested
                    </h3>
                    <div className="about-one__crop-harvest-count count-box">
                      <h3 className="count-text" data-stop="6.9" data-speed={1500} />
                      <span>M+</span>
                    </div>
                  </div>
                  <div className="about-one__img-shape-1 float-bob-y">
                    <img src="assets/images/shapes/about-one-img-shape-1.png" alt="about-one-img-shape-1" />
                  </div>
                  <div className="about-one__shape-1 float-bob-x">
                    <img src="assets/images/shapes/about-one-shape-1.png" alt="about-one-shape-1" />
                  </div>
                </div>
                <div className="about-one__field-box">
                  <div className="about-one__count-box count-box">
                    <h3 className="count-text" data-stop={600} data-speed={1500} />
                    <span>+</span>
                  </div>
                  <p className="about-one__field-text">Fields of Growth</p>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="about-one__right">
                <SectionTitle tagline="get to know about us" title="Welcome to Ajeet Seeds\nPvt. Ltd." align="left" />
                <p className="about-one__text">
                  Ajeet Seeds plays a vital role in producing and supplying high-quality hybrid seeds to farmers at
                  affordable prices. Ajeet Seeds markets premium quality seeds for Cotton, Corn, Rice, Millet, Wheat,
                  Pulses, Oilseeds, and a complete spectrum of vegetables.
                </p>
                <p className="about-one__text" style={{ marginTop: "20px" }}>
                  Ajeet Seeds Pvt. Ltd. (ASPL), the flagship company of the Padmakar Mulay Group of Companies, had a
                  humble beginning on May 13, 1986. Over the years, our portfolio has expanded to include a wide range
                  of vegetables, corn, and rice.
                </p>
                <h4 className="about-one__title-1">With a strong commitment</h4>
                <div className="about-one__points-box-and-since">
                  <ul className="about-one__points list-unstyled">
                    <li>
                      <div className="icon">
                        <span className="fas fa-wheat" />
                      </div>
                      <p>
                        Premium quality seeds, eco
                        <br />
                        -friendly fertilizers
                      </p>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="fas fa-wheat" />
                      </div>
                      <p>
                        Automation to maximize yield
                        <br />
                        and efficiency.
                      </p>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="fas fa-wheat" />
                      </div>
                      <p>
                        Building strong communities
                        <br />
                        with training
                      </p>
                    </li>
                  </ul>
                  <div className="about-one__since-box">
                    <div className="about-one__since-icon">
                      <span className="icon-harvester" />
                    </div>
                    <h5 className="about-one__since-title">Harvesting since</h5>
                    <h4 className="about-one__since-year">2000</h4>
                  </div>
                </div>
                <div className="about-one__btn-and-video">
                  <div className="about-one__btn-box">
                    <Button href="/about">More About Us</Button>
                  </div>
                  <div className="about-one__video-box">
                    <div className="about-one__video-link">
                      <a href="https://www.youtube.com/watch?v=Get7rqXYrbQ" className="video-popup">
                        <div className="about-one__video-icon">
                          <span className="fas fa-play" />
                          <i className="ripple" />
                        </div>
                      </a>
                    </div>
                    <p className="about-one__video-text">Watch Our Story</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
      {/*About One End */}

      {/*Author One Start */}
      <Section className="author-one">
        <Container>
          <div className="row">
            <div className="col-xl-3">
              <div className="author-one__Vission-mission">
                <h4 className="author-one__Vission-mission-title">Vision & Mission </h4>
                <ul className="author-one__Vission-mission-point list-unstyled">
                  <li>
                    <p>
                      <b>Our Vision:</b> To acquire and apply the latest technologies to enhance crop productivity.
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>Our Mission:</b> To provide high-quality seeds with the right genotype, at the right time, and
                      at an affordable price.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="author-one__img-box">
                <div className="author-one__img">
                  <img src="assets/images/resources/author-one-img-1.png" alt="author-one-img-1" />
                </div>
                <div className="author-one__text-box">
                  <div className="author-one__text-box-shape-1">
                    <img src="assets/images/shapes/author-one-text-box-shape-1.png" alt="author-one-text-box-shape-1" />
                  </div>
                  <p className="author-one__text">Driving Excellence in Agriculture</p>
                  <div className="author-one__info">
                    <h4>Sameer Mulay</h4>
                    <p>MANAGING DIRECTOR</p>
                  </div>
                  <div className="author-one__sign">{/* <img src="assets/images/resources/author-one-sign.png" alt="author-one-sign" /> */}</div>
                </div>
                <div className="author-one__img-shape">
                  <img src="assets/images/shapes/author-one-img-shape.png" alt="author-one-img-shape" />
                </div>
                <div className="author-one__ratting-box">
                  <div className="author-one__ratting-box-shape float-bob-x">
                    <img src="assets/images/shapes/author-one-ratting-box-shape.png" alt="author-one-ratting-box-shape" />
                  </div>
                  <div className="author-one__ratting-box-content">
                    <span className="author-one__ratting-title">Top Rated</span>
                    <div className="author-one__ratting">
                      <span className="icon-pointed-star" />
                      <span className="icon-pointed-star" />
                      <span className="icon-pointed-star" />
                      <span className="icon-pointed-star" />
                      <span className="icon-pointed-star" />
                    </div>
                    <p className="author-one__ratting-text count-box">
                      From <span className="count-text" data-stop="2.5" data-speed={1500} />
                      Million
                      <br />
                      Customers
                    </p>
                    <div className="author-one__ratting-text-two">
                      <span>4.9 out of 5</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="author-one__Vission-mission">
                <h4 className="author-one__Vission-mission-title">Our Mission </h4>
                <ul className="author-one__Vission-mission-point list-unstyled">
                  <li>
                    <p>Ensure efficient use of resources</p>
                  </li>
                  <li>
                    <p>Help farmers grow better crops</p>
                  </li>
                  <li>
                    <p>Make sustainable farming easy</p>
                  </li>
                  <li>
                    <p>Provide tools &amp; knowledge</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>
      {/*Author One End */}

      {/*Services One Start */}
      <Section className="services-one">
        <Container>
          <SectionTitle tagline="What We Do" title="Delivering Smart Sustainable And\nInnovative Farming Solutions" />
          <div className="row">
            {/*Services One Single Start*/}
            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
              <div className="services-one__single">
                <div className="services-one__single-inner">
                  <div
                    className="services-one__single-bg"
                    style={{ backgroundImage: "url(assets/images/backgrounds/services-one-single-bg-1.jpg)" }}
                  />
                  <div className="services-one__btn-box">
                    <Button href="/about">Read More</Button>
                  </div>
                  <div
                    className="services-one__single-bg-shape"
                    style={{ backgroundImage: "url(assets/images/shapes/services-one-single-bg-shape.png)" }}
                  />
                  <div className="services-one__icon">
                    <span className="icon-farming" />
                  </div>
                  <h3 className="services-one__title">
                    <a href="https://dreamlayout.mnsithub.com/html/farmology/main-html/services-details.html">
                      Organic Farming Solutions
                    </a>
                  </h3>
                  <p className="services-one__text">
                    Eco-friendly fertilizers &amp; natural crop protection. Soil care, water conservation &amp; renewable
                    methods.
                  </p>
                  <div className="services-one__read-more">
                    <a href="/#">
                      Read More<span className="fas fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/*Services One Single End*/}
            {/*Services One Single Start*/}
            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="200ms">
              <div className="services-one__single">
                <div className="services-one__single-inner">
                  <div
                    className="services-one__single-bg"
                    style={{ backgroundImage: "url(assets/images/backgrounds/services-one-single-bg-2.jpg)" }}
                  />
                  <div className="services-one__btn-box">
                    <Button href="/about">Read More</Button>
                  </div>
                  <div
                    className="services-one__single-bg-shape"
                    style={{ backgroundImage: "url(assets/images/shapes/services-one-single-bg-shape.png)" }}
                  />
                  <div className="services-one__icon">
                    <span className="icon-precision-agriculture" />
                  </div>
                  <h3 className="services-one__title">
                    <a href="https://dreamlayout.mnsithub.com/html/farmology/main-html/services-details.html">
                      Smart Agriculture Technology
                    </a>
                  </h3>
                  <p className="services-one__text">
                    Eco-friendly fertilizers &amp; natural crop protection. Soil care, water conservation &amp; renewable
                    methods.
                  </p>
                  <div className="services-one__read-more">
                    <a href="/#">
                      Read More<span className="fas fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/*Services One Single End*/}
            {/*Services One Single Start*/}
            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="100ms">
              <div className="services-one__single">
                <div className="services-one__single-inner">
                  <div
                    className="services-one__single-bg"
                    style={{ backgroundImage: "url(assets/images/backgrounds/services-one-single-bg-3.jpg)" }}
                  />
                  <div className="services-one__btn-box">
                    <Button href="/about">Read More</Button>
                  </div>
                  <div
                    className="services-one__single-bg-shape"
                    style={{ backgroundImage: "url(assets/images/shapes/services-one-single-bg-shape.png)" }}
                  />
                  <div className="services-one__icon">
                    <span className="icon-seeding" />
                  </div>
                  <h3 className="services-one__title">
                    <a href="https://dreamlayout.mnsithub.com/html/farmology/main-html/services-details.html">
                      High-Quality Seeds &amp; Crops
                    </a>
                  </h3>
                  <p className="services-one__text">
                    Eco-friendly fertilizers &amp; natural crop protection. Soil care, water conservation &amp; renewable
                    methods.
                  </p>
                  <div className="services-one__read-more">
                    <a href="/#">
                      Read More<span className="fas fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/*Services One Single End*/}
            {/*Services One Single Start*/}
            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="200ms">
              <div className="services-one__single">
                <div className="services-one__single-inner">
                  <div
                    className="services-one__single-bg"
                    style={{ backgroundImage: "url(assets/images/backgrounds/services-one-single-bg-4.jpg)" }}
                  />
                  <div className="services-one__btn-box">
                    <Button href="/about">Read More</Button>
                  </div>
                  <div
                    className="services-one__single-bg-shape"
                    style={{ backgroundImage: "url(assets/images/shapes/services-one-single-bg-shape.png)" }}
                  />
                  <div className="services-one__icon">
                    <span className="icon-farmer" />
                  </div>
                  <h3 className="services-one__title">
                    <a href="https://dreamlayout.mnsithub.com/html/farmology/main-html/services-details.html">
                      Farmer Training &amp; Support
                    </a>
                  </h3>
                  <p className="services-one__text">
                    Eco-friendly fertilizers &amp; natural crop protection. Soil care, water conservation &amp; renewable
                    methods.
                  </p>
                  <div className="services-one__read-more">
                    <a href="/#">
                      Read More<span className="fas fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/*Services One Single End*/}
          </div>
        </Container>
      </Section>
      {/*Services One End */}

      {/*Video One Start*/}
      <Section className="video-one">
        <div
          className="video-one__bg jarallax"
          data-jarallax
          data-speed="0.2"
          data-imgposition="50% 0%"
          style={{ backgroundImage: "url(assets/images/backgrounds/video-one-bg.jpg)" }}
        />
        <Container>
          <div className="row">
            <div className="col-xl-12">
              <div className="video-one__inner">
                <div className="video-one__video-link">
                  <a href="https://www.youtube.com/watch?v=3Ww2TP_tU7o" className="video-popup">
                    <div className="video-one__icon">
                      <span className="fa fa-play" />
                      <i className="ripple" />
                    </div>
                  </a>
                </div>
                <p className="video-one__sub-title">Watch the video</p>
                <h2 className="video-one__title">
                  Agriculture Matters to the
                  <br />
                  Future of Development
                </h2>
                <div className="video-one__round-text">
                  <div className="video-one__curved-circle">Always 100% Fresh from Our Fields</div>
                </div>
                <div className="video-one__round-text-2">
                  <div className="video-one__curved-circle-2">Always 100% Fresh from Our Fields</div>
                </div>
              </div>
            </div>
          </div>
          <div className="brand-one">
            <div className="brand-one__carousel swiper-container">
              <div className="swiper-wrapper">
                {/*Start Brand One Single*/}
                <div className="swiper-slide">
                  <div className="brand-one__single">
                    <a href="/#">
                      <img src="assets/images/brand/brand-1-1.png" alt="" />
                    </a>
                  </div>
                </div>
                {/*End Brand One Single*/}
                {/*Start Brand One Single*/}
                <div className="swiper-slide">
                  <div className="brand-one__single">
                    <a href="/#">
                      <img src="assets/images/brand/brand-1-2.png" alt="" />
                    </a>
                  </div>
                </div>
                {/*End Brand One Single*/}
                {/*Start Brand One Single*/}
                <div className="swiper-slide">
                  <div className="brand-one__single">
                    <a href="/#">
                      <img src="assets/images/brand/brand-1-3.png" alt="" />
                    </a>
                  </div>
                </div>
                {/*End Brand One Single*/}
                {/*Start Brand One Single*/}
                <div className="swiper-slide">
                  <div className="brand-one__single">
                    <a href="/#">
                      <img src="assets/images/brand/brand-1-4.png" alt="" />
                    </a>
                  </div>
                </div>
                {/*End Brand One Single*/}
                {/*Start Brand One Single*/}
                <div className="swiper-slide">
                  <div className="brand-one__single">
                    <a href="/#">
                      <img src="assets/images/brand/brand-1-5.png" alt="" />
                    </a>
                  </div>
                </div>
                {/*End Brand One Single*/}
              </div>
            </div>
          </div>
        </Container>
      </Section>
      {/*Video One End*/}

      {/*Products One Start*/}
      <Section className="products-one">
        <Container>
          <SectionTitle tagline="Our Fresh Products" title="Bringing Nature's Best Harvest\nStraight To You." />
          <div className="row">
            {/*Products One Single Start*/}
            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
              <div className="products-one__single">
                <div className="products-one__img-box">
                  <div className="products-one__img">
                    <img src="assets/images/products/products-1-1.jpg" alt="" />
                  </div>
                </div>
                <div className="products-one__content">
                  <div className="products-one__icon-and-title">
                    <h3 className="products-one__title">
                      <a href="product-details.html">Fresh Vegetables</a>
                    </h3>
                    <div className="products-one__icon">
                      <span className="icon-vegetable" />
                    </div>
                  </div>
                  <div className="products-one__text-and-read-more">
                    <div
                      className="products-one__text-and-read-more-bg"
                      style={{ backgroundImage: "url(assets/images/shapes/products-one-text-bg.png)" }}
                    />
                    <p className="products-one__text">
                      Our vegetables are cultivated naturally to bring you the best of every season.
                    </p>
                    <div className="products-one__read-more">
                      <a href="product-details.html">
                        Read More<span className="fas fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Products One Single End*/}
            {/*Products One Single Start*/}
            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="200ms">
              <div className="products-one__single">
                <div className="products-one__img-box">
                  <div className="products-one__img">
                    <img src="assets/images/products/products-1-2.jpg" alt="" />
                  </div>
                </div>
                <div className="products-one__content">
                  <div className="products-one__icon-and-title">
                    <h3 className="products-one__title">
                      <a href="product-details.html">Dairy Product</a>
                    </h3>
                    <div className="products-one__icon">
                      <span className="icon-cow" />
                    </div>
                  </div>
                  <div className="products-one__text-and-read-more">
                    <div
                      className="products-one__text-and-read-more-bg"
                      style={{ backgroundImage: "url(assets/images/shapes/products-one-text-bg.png)" }}
                    />
                    <p className="products-one__text">
                      From fresh milk to our dairy products ensure farm-fresh quality every day.
                    </p>
                    <div className="products-one__read-more">
                      <a href="product-details.html">
                        Read More<span className="fas fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Products One Single End*/}
            {/*Products One Single Start*/}
            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="100ms">
              <div className="products-one__single">
                <div className="products-one__img-box">
                  <div className="products-one__img">
                    <img src="assets/images/products/products-1-3.jpg" alt="" />
                  </div>
                </div>
                <div className="products-one__content">
                  <div className="products-one__icon-and-title">
                    <h3 className="products-one__title">
                      <a href="product-details.html">Livestock Product</a>
                    </h3>
                    <div className="products-one__icon">
                      <span className="icon-hen-1" />
                    </div>
                  </div>
                  <div className="products-one__text-and-read-more">
                    <div
                      className="products-one__text-and-read-more-bg"
                      style={{ backgroundImage: "url(assets/images/shapes/products-one-text-bg.png)" }}
                    />
                    <p className="products-one__text">
                      From organic eggs, our Livestock Product ensure farm-fresh quality every day.
                    </p>
                    <div className="products-one__read-more">
                      <a href="product-details.html">
                        Read More<span className="fas fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Products One Single End*/}
            {/*Products One Single Start*/}
            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="200ms">
              <div className="products-one__single">
                <div className="products-one__img-box">
                  <div className="products-one__img">
                    <img src="assets/images/products/products-1-4.jpg" alt="" />
                  </div>
                </div>
                <div className="products-one__content">
                  <div className="products-one__icon-and-title">
                    <h3 className="products-one__title">
                      <a href="product-details.html">Organic Fruits</a>
                    </h3>
                    <div className="products-one__icon">
                      <span className="icon-healthy-food" />
                    </div>
                  </div>
                  <div className="products-one__text-and-read-more">
                    <div
                      className="products-one__text-and-read-more-bg"
                      style={{ backgroundImage: "url(assets/images/shapes/products-one-text-bg.png)" }}
                    />
                    <p className="products-one__text">
                      Handpicked from our orchards fruits are packed with freshness and nutrients.
                    </p>
                    <div className="products-one__read-more">
                      <a href="product-details.html">
                        Read More<span className="fas fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Products One Single End*/}
          </div>
        </Container>
      </Section>
      {/*Products One End*/}

      {/*Counter One Start*/}
      <Section className="counter-one">
        <div className="counter-one__bg-color" />
        <Container>
          <div className="counter-one__inner">
            <div className="row">
              {/*Counter One Single Start*/}
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="counter-one__single">
                  <div className="counter-one__icon">
                    <span className="icon-farmer" />
                  </div>
                  <div className="counter-one__count-box count-box">
                    <h3 className="count-text" data-stop={2000} data-speed={3000}>
                      00
                    </h3>
                    <span>+</span>
                  </div>
                  <p className="counter-one__text">Happy Customers</p>
                </div>
              </div>
              {/*Counter One Single End*/}
              {/*Counter One Single Start*/}
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="counter-one__single">
                  <div className="counter-one__icon">
                    <span className="icon-tractor" />
                  </div>
                  <div className="counter-one__count-box count-box">
                    <h3 className="count-text" data-stop={600} data-speed={3000}>
                      00
                    </h3>
                    <span>+</span>
                  </div>
                  <p className="counter-one__text">Fields of Growth</p>
                </div>
              </div>
              {/*Counter One Single End*/}
              {/*Counter One Single Start*/}
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="counter-one__single">
                  <div className="counter-one__icon">
                    <span className="icon-farming" />
                  </div>
                  <div className="counter-one__count-box count-box">
                    <h3 className="count-text" data-stop="6.9" data-speed={3000}>
                      00
                    </h3>
                    <span>M+</span>
                  </div>
                  <p className="counter-one__text">Crops Harvested</p>
                </div>
              </div>
              {/*Counter One Single End*/}
              {/*Counter One Single Start*/}
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="counter-one__single">
                  <div className="counter-one__icon">
                    <span className="icon-award" />
                  </div>
                  <div className="counter-one__count-box count-box">
                    <h3 className="count-text" data-stop={25} data-speed={3000}>
                      00
                    </h3>
                    <span>+</span>
                  </div>
                  <p className="counter-one__text">Years of Experience</p>
                </div>
              </div>
              {/*Counter One Single End*/}
            </div>
          </div>
        </Container>
      </Section>
      {/*Counter One End*/}

      {/*Testimonial One Start*/}
      <Section className="testimonial-one">
        <div
          className="testimonial-one__bg jarallax"
          data-jarallax
          data-speed="0.2"
          data-imgposition="50% 0%"
          style={{ backgroundImage: "url(assets/images/backgrounds/testimonial-one-bg.jpg)" }}
        />
        <Container>
          <SectionTitle tagline="Testimonials" title="What Our Clients Say" />
          <div className="row">
            {/*Testimonial One Single Start*/}
            <div className="col-xl-4 col-lg-4">
              <div className="testimonial-one__single">
                <div className="testimonial-one__img">
                  <img src="assets/images/testimonial/testimonial-1-1.jpg" alt="" />
                </div>
                <div className="testimonial-one__content">
                  <div className="testimonial-one__content-bg" style={{ backgroundImage: "url(assets/images/backgrounds/testimonial-one-text-box-bg.jpg)" }} />
                  <div className="testimonial-one__ratting">
                    <span className="icon-pointed-star" />
                    <span className="icon-pointed-star" />
                    <span className="icon-pointed-star" />
                    <span className="icon-pointed-star" />
                    <span className="icon-pointed-star" />
                  </div>
                  <p className="testimonial-one__text">
                    "Ajeet Seeds has transformed our farming practices. Their high-quality seeds and expert guidance
                    have significantly increased our crop yields. Highly recommended!"
                  </p>
                  <h4 className="testimonial-one__name">Rajesh Kumar</h4>
                  <p className="testimonial-one__designation">Farmer, Maharashtra</p>
                </div>
              </div>
            </div>
            {/*Testimonial One Single End*/}
            {/*Testimonial One Single Start*/}
            <div className="col-xl-4 col-lg-4">
              <div className="testimonial-one__single">
                <div className="testimonial-one__img">
                  <img src="assets/images/testimonial/testimonial-1-2.jpg" alt="" />
                </div>
                <div className="testimonial-one__content">
                  <div className="testimonial-one__content-bg" style={{ backgroundImage: "url(assets/images/backgrounds/testimonial-one-text-box-bg.jpg)" }} />
                  <div className="testimonial-one__ratting">
                    <span className="icon-pointed-star" />
                    <span className="icon-pointed-star" />
                    <span className="icon-pointed-star" />
                    <span className="icon-pointed-star" />
                    <span className="icon-pointed-star" />
                  </div>
                  <p className="testimonial-one__text">
                    "The support and quality from Ajeet Seeds is unmatched. Their sustainable farming solutions have
                    helped us grow better crops while protecting the environment."
                  </p>
                  <h4 className="testimonial-one__name">Priya Sharma</h4>
                  <p className="testimonial-one__designation">Agricultural Consultant</p>
                </div>
              </div>
            </div>
            {/*Testimonial One Single End*/}
            {/*Testimonial One Single Start*/}
            <div className="col-xl-4 col-lg-4">
              <div className="testimonial-one__single">
                <div className="testimonial-one__img">
                  <img src="assets/images/testimonial/testimonial-1-3.jpg" alt="" />
                </div>
                <div className="testimonial-one__content">
                  <div className="testimonial-one__content-bg" style={{ backgroundImage: "url(assets/images/backgrounds/testimonial-one-text-box-bg.jpg)" }} />
                  <div className="testimonial-one__ratting">
                    <span className="icon-pointed-star" />
                    <span className="icon-pointed-star" />
                    <span className="icon-pointed-star" />
                    <span className="icon-pointed-star" />
                    <span className="icon-pointed-star" />
                  </div>
                  <p className="testimonial-one__text">
                    "Excellent service and premium quality seeds. Ajeet Seeds has been our trusted partner for years,
                    and they never disappoint."
                  </p>
                  <h4 className="testimonial-one__name">Amit Patel</h4>
                  <p className="testimonial-one__designation">Farm Owner, Gujarat</p>
                </div>
              </div>
            </div>
            {/*Testimonial One Single End*/}
          </div>
        </Container>
      </Section>
      {/*Testimonial One End*/}

      {/*Blog One Start*/}
      <Section className="blog-one">
        <Container>
          <SectionTitle tagline="Our Blog" title="Latest News & Updates" />
          <div className="row">
            {/*Blog One Single Start*/}
            <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
              <div className="blog-one__single">
                <div className="blog-one__img">
                  <img src="assets/images/blog/blog-1-1.jpg" alt="" />
                  <div className="blog-one__date">
                    <p>
                      15 <span>Jan</span>
                    </p>
                  </div>
                </div>
                <div className="blog-one__content">
                  <div className="blog-one__content-bg-shape" style={{ backgroundImage: "url(assets/images/shapes/blog-one-content-bg-shape.png)" }} />
                  <ul className="blog-one__meta list-unstyled">
                    <li>
                      <a href="/blog">
                        <span className="fas fa-user" />
                        Admin
                      </a>
                    </li>
                    <li>
                      <a href="/blog">
                        <span className="fas fa-comments" />
                        Comment
                      </a>
                    </li>
                  </ul>
                  <h3 className="blog-one__title">
                    <a href="/blog">How Technology is Changing Farming</a>
                  </h3>
                  <p className="blog-one__text">
                    Learn how organic vegetables benefit your health and the planet at the same time.
                  </p>
                </div>
                <div className="blog-one__read-more">
                  <a href="/blog">
                    Read More<span className="fas fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            {/*Blog One Single End*/}
            {/*Blog One Single Start*/}
            <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
              <div className="blog-one__single">
                <div className="blog-one__img">
                  <img src="assets/images/blog/blog-1-2.jpg" alt="" />
                  <div className="blog-one__date">
                    <p>
                      20 <span>Jan</span>
                    </p>
                  </div>
                </div>
                <div className="blog-one__content">
                  <div className="blog-one__content-bg-shape" style={{ backgroundImage: "url(assets/images/shapes/blog-one-content-bg-shape.png)" }} />
                  <ul className="blog-one__meta list-unstyled">
                    <li>
                      <a href="/blog">
                        <span className="fas fa-user" />
                        Admin
                      </a>
                    </li>
                    <li>
                      <a href="/blog">
                        <span className="fas fa-comments" />
                        Comment
                      </a>
                    </li>
                  </ul>
                  <h3 className="blog-one__title">
                    <a href="/blog">Sustainable Farming Practices</a>
                  </h3>
                  <p className="blog-one__text">
                    Discover the latest sustainable farming techniques that are revolutionizing agriculture.
                  </p>
                </div>
                <div className="blog-one__read-more">
                  <a href="/blog">
                    Read More<span className="fas fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            {/*Blog One Single End*/}
            {/*Blog One Single Start*/}
            <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="300ms">
              <div className="blog-one__single">
                <div className="blog-one__img">
                  <img src="assets/images/blog/blog-1-3.jpg" alt="" />
                  <div className="blog-one__date">
                    <p>
                      25 <span>Jan</span>
                    </p>
                  </div>
                </div>
                <div className="blog-one__content">
                  <div className="blog-one__content-bg-shape" style={{ backgroundImage: "url(assets/images/shapes/blog-one-content-bg-shape.png)" }} />
                  <ul className="blog-one__meta list-unstyled">
                    <li>
                      <a href="/blog">
                        <span className="fas fa-user" />
                        Admin
                      </a>
                    </li>
                    <li>
                      <a href="/blog">
                        <span className="fas fa-comments" />
                        Comment
                      </a>
                    </li>
                  </ul>
                  <h3 className="blog-one__title">
                    <a href="/blog">Organic Seeds for Better Harvest</a>
                  </h3>
                  <p className="blog-one__text">
                    Explore how organic seeds can improve your crop yield and contribute to sustainable agriculture.
                  </p>
                </div>
                <div className="blog-one__read-more">
                  <a href="/blog">
                    Read More<span className="fas fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            {/*Blog One Single End*/}
          </div>
        </Container>
      </Section>
      {/*Blog One End */}
    </PageWrapper>
  );
}
