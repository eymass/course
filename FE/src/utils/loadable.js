import React, { lazy, Suspense } from 'react';

/**
 * Lazy Suspense
 * @param importStatement
 * @param fallback
 */
const loadable = (importStatement, { fallback = null } = { fallback: null }) => {
  const LazyComponent = lazy(importStatement);

  return props => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

export default loadable;
