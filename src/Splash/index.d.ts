import * as React from 'react';

export interface SplashProps {
  dataHook?: string;
  className?: string;
  buttonText?: string;
}

export default class Splash extends React.PureComponent<SplashProps>{}
