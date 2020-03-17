import React from 'react';
import PageWrapper from "components/Common/PageWrapper";
import Card from "components/Common/Card/Card";
import Typography from "@material-ui/core/Typography";

const KeepItSimpleButPowerful = () => {
    return (<PageWrapper padding={`70px`} height={`100vh`}>
        <Card padding={`30px`}>
            <Typography variant="h3" component="h2" style={{ flex: 1 }}>Keep It Simple But Powerful</Typography>
            <img
                style={{ maxWidth: '50%' }}
                alt="logo"
                src={require('../../../assets/logo.png')}
            />
        </Card>
    </PageWrapper>);
};

KeepItSimpleButPowerful.propTypes = {};

export default KeepItSimpleButPowerful;
