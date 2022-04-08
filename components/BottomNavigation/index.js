/* eslint-disable react-hooks/exhaustive-deps */
import { useRef } from "react"
import Box from "@mui/material/Box"
import BottomNavigation from "@mui/material/BottomNavigation"
import BottomNavigationAction from "@mui/material/BottomNavigationAction"
import Paper from "@mui/material/Paper"
import { styled } from "@mui/material/styles"

import SettingsIcon from "@mui/icons-material/Settings"
import { FiSend, FiEdit } from "react-icons/fi"
import PieChartIcon from "@mui/icons-material/PieChart"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"

import { useStore } from "@store/index"

export default function FixedBottomNavigation() {
  const ref = useRef(null)
  const { buttomNavigation, setButtomNavigation } = useStore()

  const menuList = [
    {
      key: "menuHome",
      label: "Write",
      icon: <FiEdit fontSize={"20px"} />,
    },
    {
      key: "menuCommunity",
      label: "Approval",
      icon: <CheckCircleIcon />,
    },
    {
      key: "menuCourse",
      label: "Report",
      icon: <FiSend fontSize={"20px"} />,
    },
    {
      key: "menuStatistic",
      label: "Statistic",
      icon: <PieChartIcon />,
    },
    {
      key: "menuSetting",
      label: "Setting",
      icon: <SettingsIcon />,
    },
  ]

  return (
    <Box sx={{ py: 3 }} ref={ref}>
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
        }}
        elevation={3}
      >
        <BottomNavigation
          style={{
            backgroundColor: "white",
          }}
          showLabels
          value={buttomNavigation}
          onChange={(e, newValue) => setButtomNavigation(newValue)}
        >
          {menuList.map((menu) => (
            <BottomNavigationAction
              key={menu.key}
              label={menu.label}
              icon={menu.icon}
              value={menu.link}
            />
          ))}
        </BottomNavigation>
      </Paper>
    </Box>
  )
}
