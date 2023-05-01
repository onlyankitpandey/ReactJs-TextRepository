import {
  Box,
  Container,
  Typography,
  makeStyles,
} from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  mainBox: {
    padding: "150px 0 80px",
    position: "relative",
    [theme.breakpoints.only("xs")]: {
      padding: "80px 0",
    },
    "& .hedingBox": {
      "& h2": {
        color: theme.palette.primary.main
      }
    },
    "& .textBox": {
      marginTop:"10px",
      "& p": {
        color: theme.palette.primary.main
      }
    }
  }
}))



const Terms = () => {
  const classes = useStyles()
  return (
    <>
      <Container>
        <Box className={classes.mainBox}>
          <Box className='hedingBox'>
            <Typography variant="h2">Terms & Conditions</Typography>
          </Box>
          <Box className='textBox'>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet diam ipsum mattis. Nec dolor id in urna, et. Lorem orci, scelerisque tempor, massa rhoncus, non. Scelerisque in faucibus volutpat purus nisi, odio. Nascetur vel venenatis velit interdum.
            </Typography>
            <Typography variant="body2">
              Dictum amet viverra varius viverra suspendisse. Elementum dolor quam facilisis duis mattis in sociis. Tristique erat urna, non faucibus penatibus et sit sollicitudin. Senectus malesuada amet enim, egestas posuere neque egestas. Tortor bibendum mi quam in urna dignissim facilisi egestas et. Facilisis arcu vitae bibendum vitae sed convallis. Ut vitae praesent enim aenean nibh ut amet tellus enim. Rhoncus.
            </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet diam ipsum mattis. Nec dolor id in urna, et. Lorem orci, scelerisque tempor, massa rhoncus, non. Scelerisque in faucibus volutpat purus nisi, odio. Nascetur vel venenatis velit interdum. Dictum amet viverra varius viverra suspendisse. Elementum dolor quam facilisis duis mattis in sociis. Tristique erat urna, non faucibus penatibus et sit sollicitudin. Senectus malesuada amet enim, egestas posuere neque egestas. Tortor bibendum mi quam in urna dignissim facilisi egestas et. Facilisis arcu vitae bibendum vitae sed convallis. Ut vitae praesent enim aenean nibh ut amet tellus enim. Rhoncus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet diam ipsum mattis. Nec dolor id in urna, et.
            </Typography>
            <Typography variant="body2">
              Dictum amet viverra varius viverra suspendisse. Elementum dolor quam facilisis duis mattis in sociis. Tristique erat urna, non faucibus penatibus et sit sollicitudin. Senectus malesuada amet enim, egestas posuere neque egestas. Tortor bibendum mi quam in urna dignissim facilisi egestas et. Facilisis arcu vitae bibendum vitae sed convallis. Ut vitae praesent enim aenean nibh ut amet tellus enim. Rhoncus.
            </Typography>
          </Box>
        </Box>
      </Container>

    </>
  )
}

export default Terms