import * as React from 'react';
import { contactItemBuilder } from '..';
import { contactItemBuilderTestkitFactory } from '../../../testkit';
import { contactItemBuilderTestkitFactory as contactItemBuilderEnzymeTestkitFactory } from '../../../testkit/enzyme';
import { contactItemBuilderTestkitFactory as contactItemBuilderPuppeteerTestkitFactory } from '../../../testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function contactItemBuilderWithMandatoryProps() {
  contactItemBuilder({ id: '1', title: 'title' });
  contactItemBuilder({ id: 1, title: 'title' });
}

function contactItemBuilderWithAllProps() {
  const { disabled, id, value } = contactItemBuilder({
    id: '1',
    title: 'title',
    disabled: true,
    imageUrl: 'url',
    subtitle: 'substitle'
  });
}

async function testkits() {
  const testkit = contactItemBuilderTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div')
  });

  const enzymeTestkit = contactItemBuilderEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />)
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await contactItemBuilderPuppeteerTestkitFactory({
    dataHook: 'hook',
    page
  });
}
