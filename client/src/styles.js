import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(()  => ({
    appBar: {
         borderRadius: 15,
         margin: '30px 0',
         display: 'flex'
    },
    heading: {
         color: '#fff',
         marginBottom: '30px',
         paddingTop: '30px',
         fontFamily: 'Oswald',
         textTransform: 'uppercase',
    }
}));  