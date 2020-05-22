import { splashDriverFactory as publicDriverFactory } from '../Splash.uni.driver';

export const splashPrivateDriverFactory = (base, body) => {
  return {
    ...publicDriverFactory(base, body),

    // Add here driver methods that considered "private"
  };
};
