"use client";

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { CONTACT_INFO } from '@/config/constants';
import { IMAGE_PATHS } from '@/config/images';

interface FooterProps {
  variant?: 'default' | 'two';
}

export function Footer({ variant = 'default' }: FooterProps) {
  const t = useTranslations();
  
  return (
    <footer className="site-footer">
      <div className="site-footer__bg" style={{ backgroundImage: 'url(/assets/images/backgrounds/site-footer-bg.jpg)' }}>
      </div>
      <div className="site-footer__top">
        <div className="container">
          <div className="site-footer__top-inner">
            <div className="row">
              <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                <div className="footer-widget__about">
                  <div className="footer-widget__about-logo">
                    <Link href="/"><img src={IMAGE_PATHS.logo11} alt="" style={{ width: '160px', height: '50px', objectFit: 'contain' }} /></Link>
                  </div>
                  <p className="footer-widget__about-text">{t('footer.about.text')}</p>
                  <div className="footer-widget__payment">
                    <h3>{t('footer.about.weAccept')}</h3>
                    <div className="footer-widget__payment-card">
                      <a href="/checkout"><img
                          src="/assets/images/resources/footer-widget-payment-card-1.jpg"
                          alt="" /></a>
                      <a href="/checkout"><img
                          src="/assets/images/resources/footer-widget-payment-card-2.jpg"
                          alt="" /></a>
                      <a href="/checkout"><img
                          src="/assets/images/resources/footer-widget-payment-card-3.jpg"
                          alt="" /></a>
                      <a href="/checkout"><img
                          src="/assets/images/resources/footer-widget-payment-card-4.jpg"
                          alt="" /></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                <div className="footer-widget__links">
                  <h4 className="footer-widget__title">{t('footer.quickLinks.title')}</h4>
                  <ul className="footer-widget__links-list list-unstyled">
                    <li><span className="fas fa-wheat"></span><Link href="/about">{t('footer.quickLinks.aboutUs')}</Link></li>
                    <li><span className="fas fa-wheat"></span><Link href="/services">{t('footer.quickLinks.services')}</Link></li>
                    <li><span className="fas fa-wheat"></span><Link href="/products">{t('footer.quickLinks.portfolio')}</Link></li>
                    <li><span className="fas fa-wheat"></span><Link href="/faq">{t('footer.quickLinks.helpFaqs')}</Link></li>
                    <li><span className="fas fa-wheat"></span><Link href="/contact">{t('footer.quickLinks.contactUs')}</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                <div className="footer-widget__services">
                  <h4 className="footer-widget__title">{t('footer.ourProducts.title')}</h4>
                  <ul className="footer-widget__links-list list-unstyled">
                    <li><span className="fas fa-wheat"></span><Link href="/products">{t('footer.ourProducts.organicProcessed')}</Link></li>
                    <li><span className="fas fa-wheat"></span><Link href="/products">{t('footer.ourProducts.dairyProducts')}</Link></li>
                    <li><span className="fas fa-wheat"></span><Link href="/products">{t('footer.ourProducts.livestockProducts')}</Link></li>
                    <li><span className="fas fa-wheat"></span><Link href="/products">{t('footer.ourProducts.cropsGrains')}</Link></li>
                    <li><span className="fas fa-wheat"></span><Link href="/products">{t('footer.ourProducts.freshVegetables')}</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                <div className="footer-widget__contact">
                  <h3 className="footer-widget__title">{t('footer.contactUs.title')}</h3>
                  <ul className="footer-widget__contact-list list-unstyled">
                    <li>
                      <div className="icon">
                        <span className="icon-pin"></span>
                      </div>
                      <p>{t('contact.location')}</p>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-call"></span>
                      </div>
                      <p>
                        <a href={CONTACT_INFO.phoneHref}>{CONTACT_INFO.phoneDisplay}</a><br />
                        <a href={CONTACT_INFO.phoneHref}>{CONTACT_INFO.phoneDisplay}</a>
                      </p>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-email"></span>
                      </div>
                      <p>
                        <a href={CONTACT_INFO.emailHref}>{CONTACT_INFO.email}</a><br />
                        <a href={CONTACT_INFO.emailHref}>{CONTACT_INFO.email}</a>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="site-footer__bottom">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="site-footer__bottom-inner">
                <div className="site-footer__copyright">
                  <p className="site-footer__copyright-text">Copyright@ 2025 <Link href="/">Green Gold Seeds</Link>. All Rights Reserved.</p>
                </div>
                <div className="site-footer__bottom-menu-box">
                  <ul className="list-unstyled site-footer__bottom-menu">
                    <li><Link href="/about">{t('footer.termsOfService')}</Link></li>
                    <li><Link href="/about">{t('footer.privacyPolicy')}</Link></li>
                    <li><Link href="/about">{t('footer.support')}</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

