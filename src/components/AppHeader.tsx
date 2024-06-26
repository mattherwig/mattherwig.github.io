import React from 'react';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faSave, faSquareEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Heading from '../core/Heading';
import Link from '../core/Link';

import classes from './AppHeader.module.css';

const AppHeader = () => {
  return (
    <header className={classes.container}>
      <Heading level={1} className={classes.titleContent}>
        <span className={classes.firstname}>Matt</span>
        <span className={classes.lastname}>Herwig</span>
      </Heading>
      <div className={classes.subContent}>
        <div className={classes.subInnerContent}>
          <div className={classes.leftSubContent}>
            <Link
              href="mailto:herwig.matt@gmail.com"
              target="_blank"
              title="Email"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faSquareEnvelope} size="2xl" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/mattherwig/"
              target="_blank"
              title="LinkedIn"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2xl" />
            </Link>
          </div>
          <p className={classes.subtitle}>Software Developer</p>
          <div className={classes.rightSubContent}>
            <Link
              href="https://github.com/mattherwig"
              target="_blank"
              title="Github"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithubSquare} size="2xl" />
            </Link>
            <Link href="/documents/resume.pdf" target="_blank" title="Resume">
              <FontAwesomeIcon icon={faSave} size="2xl" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
