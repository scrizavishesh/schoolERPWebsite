'use client';

import { Box, Grid, Typography, Paper, Stack } from "@mui/material";
import { styled } from "@mui/system";
import CirclePattern from "@/components/CirclePattern";
import { useState } from "react";
import * as modules from '../../app/data/module';

const allModules = {
  academics: modules.academicsModules,
  student: modules.studentModules,
  transportation: modules.transportationModules,
  exam: modules.examModules,
  hr: modules.hrModules,
};

const HoverCard = styled(Paper)(({ theme }) => ({

    padding: theme.spacing(6),
    borderRadius: theme.spacing(6),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
height:"200px",
width:"350px",
    transition: "all 0.3s ease",
    cursor: "pointer",
    "&:hover": {
        backgroundColor: "#04857A",
        color: "#fff",
        transform: "scale(1.05)",
        "& .MuiTypography-root": {
            color: "#fff !important",
        },
    },
}));

const FeatureManagement = ({ featureType }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const modulesToRender = allModules[featureType] || [];

  return (
    <Box sx={{ py: 5 }}>
<Grid container spacing={3} sx={{ maxWidth: "1200px", mx: "auto" }}>
  {modulesToRender.map((item, index) => (
    <Grid item xs={12} sm={6} md={4} key={index}>
      <HoverCard
        elevation={2}
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
        sx={{ height: "100%", display: "flex", flexDirection: "column" }}
      >
        <Stack spacing={2} sx={{ flexGrow: 1 }}>
          <CirclePattern imageSrc={item.imageSrc} hovered={hoveredIndex === index} />
          <Typography sx={{ color: '#0E2A46', fontWeight: 700, fontSize: '20px' }}>
            {item.title}
          </Typography>
          <Typography sx={{ color: '#4D5756', fontWeight: 400, fontSize: '16px' }}>
            {item.desc}
          </Typography>
        </Stack>
      </HoverCard>
    </Grid>
  ))}
</Grid>




    </Box>
  );
};

export default FeatureManagement;
