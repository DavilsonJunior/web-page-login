import { SpinnerContainer } from './styles';

export function Spinner() {
  return (
    <SpinnerContainer>
      <h4 className="spinnerContainer">
        <div className="spinner" />
      </h4>
    </SpinnerContainer>
  );
}
