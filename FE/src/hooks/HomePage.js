import React, { useState } from 'react';
import DynamicForm from "./DynamicForm";
import PageWrapper from "../components/Common/PageWrapper";
import Switch from "@material-ui/core/Switch";
import Typography from "@material-ui/core/Typography";

const labels = ['First Name', 'Last Name'];

const HomePage = () => {

    const [isExtendedForm, setIsExtendedForm] = useState(false);

    const handleChangeExtended = (_isExtendedForm) => {setIsExtendedForm(!_isExtendedForm)};

    return (
        <PageWrapper>
            <Typography>Extended Form is {isExtendedForm ? `ON` : `OFF` }</Typography>
            <Switch
                checked={isExtendedForm}
                onChange={() => handleChangeExtended(isExtendedForm)}
                color="primary"
                name="checkedB"
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            <DynamicForm labels={labels} isExtendedForm={isExtendedForm} />
        </PageWrapper>
    );
};

export default HomePage;
