import React from "react"

import { Box } from "@mui/material"

import BottomNavigation from "@components/BottomNavigation"
import Appbar from "@components/Appbar"

export const MainLayout = ({ children }) => {
  return (
    <>
      <Appbar />
      <Box my={0}>{children}</Box>
      <BottomNavigation />
    </>
  )
}

export default MainLayout
