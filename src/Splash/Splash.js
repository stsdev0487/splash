import React from 'react';
import PropTypes from 'prop-types';
import DefaultLogo from './logo.svg';
import DefaultHero from './hero.png';
import styles from './Splash.st.css';

/** Splash Screen with logo */
class Splash extends React.PureComponent {
  render() {
    const {
      height,
      backgroundColor,
      logo,
      hero,
      heroText,
      heroTextStyle,
      footerText,
      footerTextStyle,
    } = this.props;

    return (
      <div {...styles('root')} style={{ backgroundColor, height }}>
        <div className={styles.header}>
          <img src={logo} className={styles.logo} alt="logo" />
        </div>
        <div className={styles.section}>
          <div className={styles.heroContainer}>
            <img src={hero} className={styles.hero} alt="hero" />
          </div>
          <span className={styles.heroText} style={heroTextStyle}>
            {heroText}
          </span>
        </div>
        <div className={styles.footer}>
          <span className={styles.footertext} style={footerTextStyle}>
            {footerText}
          </span>
        </div>
      </div>
    );
  }
}

Splash.displayName = 'Splash';

Splash.propTypes = {
  /** Height of the container */
  height: PropTypes.string,

  /** Background color of the container */
  backgroundColor: PropTypes.any,

  /** Text for the hero */
  heroText: PropTypes.string,

  /** Text for the footer */
  footerText: PropTypes.string,

  /** Image source for the logo */
  logo: PropTypes.any,

  /** Image source for the hero */
  hero: PropTypes.any,

  /** Style of the hero text */
  heroTextStyle: PropTypes.object,

  /** Text color of the the footer */
  footerTextColor: PropTypes.string,
};

Splash.defaultProps = {
  height: '100vh',
  backgroundColor: '#d94433',
  footerText:
    'Imagine Coucil Society @2020 All rights reserved. All respective copyrights belong to their respective owners.',
  footerTextColor: { color: '#ffffff' },
  heroText:
    'On-demand, clean label snacks with dope packaging and fun unique products coming soon to a door near you',
  heroTextColor: { color: '#ffffff' },
  logo: DefaultLogo,
  hero: DefaultHero,
};

export default Splash;
