import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import PageWrapper from "components/Common/PageWrapper";
import LoginLayout from "components/Login/LoginLayout";
import LoginForm from "components/Login/LoginForm";
import useStyles from "./styles";

const LoginPage = ({ dispatchPasswordChange, dispatchUsernameChange, dispatchAuthenticate }) => {

    const handleUsernameChange = (e) => dispatchUsernameChange(e.target.value);

    const handlePasswordChange = (e) => dispatchPasswordChange(e.target.value);

    const classes = useStyles();

    return (
        <PageWrapper height="100vh" textAlign="center" width="100%">
            <LoginLayout>
                <Card
                    classes={{ root: classes.cardRoot }}
                    className={classes.loginCard}
                >
                    <CardContent classes={{ root: classes.cardContentRoot }}>
                        <div className={classes.logoLoginRoot}>
                            <img
                                alt="logo"
                                className={classes.logoLogin}
                                src={require('../../../assets/logo.png')}
                            />
                        </div>
                        <LoginForm
                            forgotPasswordClass={classes.forgotPasswordClass}
                            handlePasswordChange={handlePasswordChange}
                            submit={dispatchAuthenticate}
                            handleUsernameChange={handleUsernameChange}
                            formControlClass={classes.formControl}
                            inputClass={classes.input}
                        />
                    </CardContent>
                </Card>
            </LoginLayout>
        </PageWrapper>
    );
};

LoginPage.propTypes = {
    dispatchUsernameChange: PropTypes.func,
    dispatchPasswordChange: PropTypes.func,
    dispatchAuthenticate: PropTypes.func,
    classes: PropTypes.object.isRequired,
};

export default memo(LoginPage);
