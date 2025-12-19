"use client";

import { useTranslations } from 'next-intl';
import { CONTACT_INFO } from '@/config/constants';

interface FooterProps {
  variant?: 'default' | 'two';
}

export function Footer({ variant = 'two' }: FooterProps) {
  const t = useTranslations();
  
  if (variant === 'default') {
    return (
      <footer className="site-footer">
        <div className="site-footer__bg" style={{ backgroundImage: 'url(/assets/images/backgrounds/site-footer-bg.jpg)' }}>
        </div>
        <div className="site-footer__bottom">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="site-footer__bottom-inner">
                  <div className="site-footer__copyright">
                    <p className="site-footer__copyright-text">© Copyright GREEN GOLD SEEDS PRIVATE LIMITED. All Rights Reserved</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
  return (
    <footer className="site-footer-two">
      <div className="site-footer-two__top">
        <div className="container">
          <div className="footer-widget-two__newsletter wow fadeInUp" data-wow-delay="200ms">
            <div className="footer-widget-two__newsletter-bg" style={{ backgroundImage: 'url(/assets/images/backgrounds/footer-widget-two-newsletter-bg.jpg)' }}>
            </div>
            <h3 className="footer-widget-two__newsletter-title" dangerouslySetInnerHTML={{ __html: t('footer.newsletter.title') }} />
            <form className="footer-widget-two__newsletter-form mc-form" data-url="MC_FORM_URL" noValidate>
              <div className="footer-widget-two__newsletter-form-input-box">
                <input type="email" placeholder={t('about.enterEmail')} name="EMAIL" />
              </div>
              <button type="submit" className="footer-widget-two__newsletter-btn thm-btn">
                {t('common.subscribe')}
                <i className="fal fa-long-arrow-right" />
                <span className="hover-btn hover-bx" />
                <span className="hover-btn hover-bx2" />
                <span className="hover-btn hover-bx3" />
                <span className="hover-btn hover-bx4" />
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="site-footer-two__bottom">
        <div className="container">
          <div className="site-footer-two__bottom-inner">
            <p className="site-footer-two__bottom-text">© Copyright GREEN GOLD SEEDS PRIVATE LIMITED. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

