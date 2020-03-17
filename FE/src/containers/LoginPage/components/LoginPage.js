import React from 'react';
import PropTypes from 'prop-types';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import PageWrapper from "components/Common/PageWrapper";
import LoginLayout from "components/Login/LoginLayout";
import ErrorMessage from "components/Common/ErrorMessage";
import LoginForm from "components/Login/LoginForm";

const LoginPage = ({ classes, dispatchPasswordChange, dispatchUsernameChange, dispatchAuthenticate, error }) => {

    const handleUsernameChange = (e) => dispatchUsernameChange(e.target.value);

    const handlePasswordChange = (e) => dispatchPasswordChange(e.target.value);

    const submit = () => dispatchAuthenticate();

    return (
        <div>
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
                                src={require('../../../assets/logo.jpg')}
                            />
                        </div>
                        <LoginForm
                            forgotPasswordClass={classes.forgotPasswordClass}
                            handlePasswordChange={handlePasswordChange}
                            submit={submit}
                            handleUsernameChange={handleUsernameChange}
                            formControlClass={classes.formControl}
                            inputClass={classes.input}
                        />
                    </CardContent>
                </Card>
                <ErrorMessage error={error} messageHeight="16px" marginTop="2%" />
            </LoginLayout>
        </PageWrapper>
        </div>);
};

LoginPage.propTypes = {
    dispatchUsernameChange: PropTypes.func,
    dispatchPasswordChange: PropTypes.func,
    dispatchAuthenticate: PropTypes.func,
    classes: PropTypes.object.isRequired,
    error: PropTypes.string,
};

export default LoginPage;
