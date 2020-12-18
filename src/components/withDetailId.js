import React from 'react';
import { useParams } from 'react-router-dom';

const withDetailId = WrappedComponent => props => {
  const { detailId } = useParams();
  return (
      <WrappedComponent
          detailId={detailId}
          {...props}
      />
  );
}

export default withDetailId;
