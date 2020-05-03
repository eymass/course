import React, {lazy, Suspense} from 'react';
import PropTypes from 'prop-types';
import CircularProgress from "@material-ui/core/CircularProgress";

const DynamicComponent = (dynamicImport) => {

    const Component = lazy(dynamicImport);

    return props =>
        <Suspense fallback={<CircularProgress />}>
            <Component {...props} />
        </Suspense>

};

DynamicComponent.propTypes = {
    dynamicImport: PropTypes.func,
};

export default DynamicComponent;
