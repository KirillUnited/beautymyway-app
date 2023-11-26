import { LoadingOverlay } from '@mantine/core';

function Loading() {
  return <LoadingOverlay loaderProps={{color: '#2b3632', size: 40}}  visible={true} zIndex={1000} overlayProps={{ blur: 2 }} />;
}

export default Loading;