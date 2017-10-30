import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import logo from '../assets/img/record.svg';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
};

function SearchResult(props) {
  const { classes, result } = props;
  let uri =result.thumb
  if (!uri) uri = logo
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          src={uri}
          title={result.title}
        />
        <CardContent>
          <Typography type="headline" component="h2">
            {result.title}
          </Typography>
        </CardContent>
        <CardActions>
          <Button dense color="primary">
            Share
          </Button>
          <Button dense color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

SearchResult.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchResult);
