import * as React from 'react';
import Splash from '..';
import { splashTestkitFactory } from '../../../testkit';
import { splashTestkitFactory as splashEnzymeTestkitFactory } from '../../../testkit/enzyme';
import { splashTestkitFactory as splashPuppeteerTestkitFactory } from '../../../testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function splashWithMandatoryProps() {
  return <Splash />;
}

function splashWithAllProps() {
  return (
    <Splash
      dataHook="dataHook"
      className="className"
      buttonText="buttonText"
    />
  );
}

async function testkits() {
  const testkit = splashTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = splashEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await splashPuppeteerTestkitFactory({
    dataHook: 'hook',
    page,
  });
}
