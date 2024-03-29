import { useState, useEffect } from "react";
import { Box, Grid, TextField } from "@mui/material";
import { getMovies } from "../../service/movies";
import "./index.css";

const Youtube = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const response = await getMovies();
    setMovies(response);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <Box m={3}>
      <Grid container spacing={3}>
        <Grid item md={2} className="border-right">
          <div className="m-5">
            <img
              src="https://1000marcas.net/wp-content/uploads/2020/02/YouTube-logo.png"
              className="img-fluid img-logo"
              alt="logo"
            />
            <div className="mt-5">
              <h6>MENU</h6>
              <ul>
                <li>
                  <a href="/">
                    <i className="fa-solid fa-house"></i>&nbsp;Home
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fa-solid fa-fire"></i>&nbsp;Trending
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fa-brands fa-youtube"></i>&nbsp;Subscriptions
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fa-solid fa-podcast"></i>&nbsp;Live
                  </a>
                </li>
              </ul>
              <h6 className="mt-5">LIBRARY</h6>
              <ul>
                <li>
                  <a href="/">
                    <i className="fa-solid fa-clock"></i>&nbsp;History
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fa-solid fa-barcode"></i>&nbsp;Queue
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fa-solid fa-heart"></i>&nbsp;Likes
                  </a>
                </li>
              </ul>

              <h6 className="mt-5">EXTRA</h6>
              <ul>
                <li>
                  <a href="/">
                    <i className="fa-solid fa-circle-question"></i>
                    &nbsp;Settings
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fa-solid fa-gear"></i>&nbsp;Help
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fa-solid fa-comments"></i>&nbsp;Feedback
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Grid>
        <Grid item md={10}>
          <Grid container spacing={3}>
            <Grid item md={4}>
              <TextField type="text" label="Username" fullWidth size="small" />
            </Grid>
            <Grid item md={8} sx={{ textAlign: "right" }}>
              <img
                src="https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/people19.png"
                className="img-profile"
                alt=""
              />
            </Grid>
          </Grid>
          {movies.length > 0 &&
            movies.map((movie) => (
              <Grid item md={3}>
                <video
                  onmouseover="this.play()"
                  onmouseout="this.pause()"
                  controls
                  muted
                  poster={movie.wallpaper}
                  class="video"
                >
                  <source src={movie.video_link} />
                </video>
                <h5 classname="title">{movie.name}</h5>
                <p classname="subtitle">{movie.director}</p>
              </Grid>
            ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Youtube;