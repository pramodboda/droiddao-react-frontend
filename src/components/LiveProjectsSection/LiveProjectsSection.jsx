import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import ProjectCard from "../ProjectCard/ProjectCard";
import Typography from "@mui/material/Typography";

import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SearchIcon from "@mui/icons-material/Search";

import "./LiveProjectsSection.css";

import "swiper/css";
import "swiper/css/navigation";

export default function LiveProjectsSection() {
  const LiveProjectsSwiperRef = useRef(null);
  return (
    <div className="live-projects-section">
      <div className="droiddao-container">
        <ListItem sx={{ mb: "30px" }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{ fontWeight: "bold", mr: "50px" }}
          >
            Live Projects
          </Typography>

          <Button
            href="#text-buttons"
            endIcon={<ChevronRightIcon />}
            sx={{ mr: "15px" }}
          >
            View All
          </Button>
          <TextField
            label="Search"
            variant="filled"
            size="small"
            InputProps={{
              endAdornment: <SearchIcon />,
            }}
          />
        </ListItem>

        <Swiper
          modules={[Navigation]}
          spaceBetween={15}
          slidesPerView={4}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          className="live-projects-swiper"
          ref={LiveProjectsSwiperRef}
        >
          <SwiperSlide key={`slide1`}>
            <ProjectCard cardType="" />
          </SwiperSlide>
          <SwiperSlide key={`slide2`}>
            <ProjectCard cardType="live" />
          </SwiperSlide>
          <SwiperSlide key={`slide3`}>
            <ProjectCard cardType="live" />
          </SwiperSlide>
          <SwiperSlide key={`slide4`}>
            <ProjectCard cardType="live" />
          </SwiperSlide>
          <SwiperSlide key={`slide5`}>
            <ProjectCard cardType="live" />
          </SwiperSlide>
          <SwiperSlide key={`slide6`}>
            <ProjectCard cardType="live" />
          </SwiperSlide>
          <SwiperSlide key={`slide7`}>
            <ProjectCard cardType="live" />
          </SwiperSlide>
          <SwiperSlide key={`slide8`}>
            <ProjectCard cardType="live" />
          </SwiperSlide>
        </Swiper>

        <div className="slider-controls clearfix">
          <div
            id="previousButton"
            onClick={() => LiveProjectsSwiperRef.current.swiper.slidePrev()}
            className="prev-btn"
          >
            <ArrowBackIosNewIcon />
          </div>
          <div
            id="nextButton"
            onClick={() => LiveProjectsSwiperRef.current.swiper.slideNext()}
            className="next-btn"
          >
            <ArrowForwardIosIcon />
          </div>
        </div>

        {/* <ul className="project-cards clearfix">
          <li>
            <ProjectCard />
          </li>
          <li>
            <ProjectCard />
          </li>
          <li>
            <ProjectCard />
          </li>
          <li>
            <ProjectCard />
          </li>
          <li>
            <ProjectCard />
          </li>
        </ul> */}
      </div>
    </div>
  );
}
