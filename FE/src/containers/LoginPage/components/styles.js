import {makeStyles} from "@material-ui/styles";

const imageWidth = '220px';
const minFormControlWidth = '40vh';

const useStyles = makeStyles(() => ({
  loginCard: {
    display: 'flex',
  },
  loginImage: {
    backgroundSize: 'unset',
    width: imageWidth,
    height: '100%',
  },
  formControl: {
    minWidth: minFormControlWidth,
  },
  cardRoot: {
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  logoLogin: {
    width: '115px',
  },
  logoLoginRoot: {
    display: 'block',
    textAlign: 'center',
  },
  forgotPasswordClass: {
    color: '#91BCE3',
    textAlign: 'center',
    fontSize: '12px',
    marginTop: '5px',
    fontWeight: 500,
  },
  cardContentRoot: {
    textAlign: 'left',
    paddingBottom: '0',
  },
}));

export default useStyles;
