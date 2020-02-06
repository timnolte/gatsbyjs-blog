import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Button, CardActionArea } from 'gatsby-theme-material-ui';

const useStyles = makeStyles({
  cardMedia: {
    height: 240,
  },
});

export default function FeaturedPost(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card raised className={classes.card}>
        <CardMedia className={classes.cardMedia} image={post.image} title={post.imageTitle} />
        <CardContent>
          <Typography component="h2" variant="h5">
            {post.title}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary" gutterBottom>
            {post.date}
          </Typography>
          <Typography variant="body2" color="textSecondary" paragraph>
            {post.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button color="secondary">
            Read more
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.object,
};
