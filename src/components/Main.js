import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FeaturedPost from './FeaturedPost';

const useStyles = makeStyles(theme => ({
  post: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
}));

export default function Main(props) {
  const classes = useStyles();
  const { posts } = props;

  return (
    <Grid item>
      <Grid container spacing={2}>
      {posts.map(post => (
        <FeaturedPost className={classes.post} key={post.title} post={post} />
      ))}
      </Grid>
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.array,
  title: PropTypes.string,
};
