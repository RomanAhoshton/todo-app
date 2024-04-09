import { Dimmer, Loader } from "semantic-ui-react";

const LoaderC = () => {
  return (
    <Dimmer active>
      <Loader size="massive">Loading</Loader>
    </Dimmer>
  );
};

export default LoaderC;
