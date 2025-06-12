'use client';

import { useState } from 'react';

import {
  Box,
  Tabs,
  Tab,
  Menu,
  MenuItem,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
  styled
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import FeatureManagement from './FeatureManagement';

const tabData = [
  { label: 'Academics', path: 'academics' },
  { label: 'Student', path: 'student' },
  { label: 'Transportation', path: 'transportation' },
  { label: 'Exam', path: 'exam' },
  { label: 'HR', path: 'hr' },
];

const FeatureLayout = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const [anchorEl, setAnchorEl] = useState(null);
  const [featureType, setFeatureType] = useState('academics');

  const handleMenuOpen = e => setAnchorEl(e.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  const handleTabChange = (value) => setFeatureType(tabData[value].path);
  const handleMenuClick = (path) => {
    setFeatureType(path);
    handleMenuClose();
  };

  const currentTab = tabData.findIndex(tab => tab.path === featureType);

  return (
    <Box sx={{ py: 6, bgcolor: 'grey.50', px: { xs: 2, sm: 10, md: 15, lg: 20 } }}>
      {/* Heading */}
      <Box sx={{ py: 3, textAlign: "center" }}>
        <Box sx={{ display: "flex", justifyContent: "center", mb: 3, gap: "10px" }}>
          <img src="./SecurityIcon.svg" alt="" style={{ animation: "pulse 1.5s infinite ease-in-out" }} />
          <Typography sx={{
            color: "#2FC7A1",
            fontSize: "14px",
            fontWeight: 400,
            animation: "pulse 1.5s infinite ease-in-out"
          }}>
            EDU2ALL FEATURE
          </Typography>
          <img src="./SecurityIcon.svg" alt="" style={{ animation: "pulse 1.5s infinite ease-in-out" }} />
        </Box>

        <Typography sx={{
          color: "#0E2A46",
          fontSize: { xs: "15", sm: "25px", md: "35px", lg: "45px" },
          fontWeight: 700,
          px: 3,
          lineHeight: { xs: "25px", sm: "40px", md: "50px", lg: "60px" },
        }}>
          50+ Powerful Modules For Seamless School Management
        </Typography>
      </Box>

      {/* Tabs / Menu */}
      {isMobile ? (
        <>
          <IconButton onClick={handleMenuOpen}>
            <MenuIcon />
            <Typography sx={{ ml: 1 }}>{tabData[currentTab]?.label || 'Menu'}</Typography>
          </IconButton>

          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
            {tabData.map((tab, idx) => (
              <MenuItem
                key={idx}
                onClick={() => handleMenuClick(tab.path)}
                selected={featureType === tab.path}
              >
                {tab.label} Management
              </MenuItem>
            ))}
          </Menu>
        </>
      ) : (
        <Tabs
          value={currentTab}
          onChange={(e, value) => handleTabChange(value)}
          centered
         
        >
          {tabData.map((tab, idx) => (
            <FeatureTabs
              key={idx}
              label={`${tab.label} Management`}
              sx={{ fontWeight: 500,color:"gray"}}
            />
          ))}
        </Tabs>
      )}

      {/* Feature Management Renderer */}
      <Box sx={{ py: 2 }}>
        <FeatureManagement featureType={featureType} />
      </Box>
    </Box>
  );
};

export default FeatureLayout;

const FeatureTabs=styled(Tab)`
&:hover{
color:black;
}

`