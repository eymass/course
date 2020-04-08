import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import {localeData} from "../../../utils/languageDefaults";

export const getTheme = (type = 'light', fontFamily = localeData.en.fontFamily) =>
    createMuiTheme({
        palette: {
            type,
            primary: {
                light: '#e5a929',
                main: '#f4932f',
                dark: '#8f4c15',
                contrastText: '#fff',
            },
            secondary: red,
            error: {
                light: '#e57373',
                main: '#f44336',
                dark: '#d32f2f',
                contrastText: '#fff',
            },
            tonalOffset: 0.1,
        },
        typography: {
            fontFamily,
        }
    });
