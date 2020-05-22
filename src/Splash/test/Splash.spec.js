import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import Splash from '../Splash';
import { splashPrivateDriverFactory } from './Splash.private.uni.driver';

describe(Splash.displayName, () => {
  const render = createRendererWithUniDriver(splashPrivateDriverFactory);

  afterEach(() => {
    cleanup();
  });

  it('should render', async () => {
    const { driver } = render(<Splash />);

    expect(await driver.exists()).toBe(true);
    expect(await driver.getButtonText()).toEqual('Click me!');
  });

  it('should increment', async () => {
    const { driver } = render(<Splash />);

    await driver.clickButton();
    await driver.clickButton();

    expect(await driver.getCountText()).toEqual(
      'You clicked this button even number (2) of times',
    );
  });

  it('should allow changing the button text', async () => {
    const { driver } = render(<Splash buttonText="Press me" />);

    expect(await driver.getButtonText()).toEqual('Press me');
  });
});
