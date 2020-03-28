import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import {localeData} from "../../../utils/languageDefaults";

export const getTheme = (type = 'dark', fontFamily = localeData.en.fontFamily) =>
    createMuiTheme({
        palette: {
            type,
            primary: blue,
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
