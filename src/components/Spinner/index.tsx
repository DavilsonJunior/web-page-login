import { SpinnerContainer } from './styles';

interface SpinnerProps {
  theme?: 'dark' | 'light';
}

export function Spinner({ theme = 'light' }: SpinnerProps) {
  return (
    <SpinnerContainer themeSpinner={theme}>
      <h4 className="spinnerContainer">
        <div className="spinner" />
      </h4>
    </SpinnerContainer>
  );
}
