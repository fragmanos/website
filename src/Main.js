import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Markdown from './Markdown';

const useStyles = makeStyles((theme) => ({
    markdown: {
        ...theme.typography.body2,
        padding: theme.spacing(3, 0),
    },
}));

export default function Main(props) {
    const classes = useStyles();
    const { title, posts } = props;

    posts.map((post) => (
        console.log("----",
            fetch(post)
                .then(r => r.text())
            // .then(text => console.log(text))
        )
    ));

    return (
        <Grid item xs={12} md={8}>
            <Typography variant="h6" gutterBottom>
                {title}
            </Typography>
            <Divider />
            {posts.map((post) => (
                <Markdown
                    options={{ forceBlock: true }}
                    className={classes.markdown} key={post.substring(0, 10)}>
                    {/* {fetch(post).then(r => r.text())} */}
                    {post}
                </Markdown>
            ))}
        </Grid>
    );
}

Main.propTypes = {
    posts: PropTypes.array,
    title: PropTypes.string,
};