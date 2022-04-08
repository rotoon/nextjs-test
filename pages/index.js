import { Box, Tab, Tabs, Stack, IconButton } from "@mui/material"

import { TabContext, TabList, TabPanel } from "@mui/lab"
import BarChartIcon from "@mui/icons-material/BarChart"
import ListIcon from "@mui/icons-material/List"

import Daily from "@components/Daily"
import Weekly from "@components/Weekly"

import { useStore } from "@store/index"

export default function Home() {
  const {
    tabNavigation,
    setTabNavigation,
    selectedCalendar,
    setSelectedCalendar,
    viewType,
    setViewType,
  } = useStore()

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={tabNavigation}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={(event, newValue) => {
              setTabNavigation(newValue)
            }}
            variant="fullWidth"
          >
            <Tab label="Submission" value="submission" />
            <Tab label="Engagement" value="engagement" />
          </TabList>
        </Box>
        <TabPanel value="submission">Submission</TabPanel>
        <TabPanel value="engagement" sx={{ p: 0 }}>
          <TabContext value={selectedCalendar}>
            <Box display="flex" justifyContent="space-around">
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={(event, newValue) => {
                    setSelectedCalendar(newValue)
                  }}
                >
                  <Tab label="Daily" value="daily" />
                  <Tab label="Weekly" value="weekly" />
                  <Tab label="Monthly" value="monthly" />
                </TabList>
              </Box>
              <Stack direction="row">
                <IconButton
                  color={viewType === "statistic" ? "primary" : "inherit"}
                  onClick={() => setViewType("statistic")}
                >
                  <BarChartIcon />
                </IconButton>
                <IconButton
                  color={viewType === "list" ? "primary" : "inherit"}
                  onClick={() => setViewType("list")}
                >
                  <ListIcon />
                </IconButton>
              </Stack>
            </Box>

            <TabPanel value="daily" sx={{ p: 2 }}>
              <Daily />
            </TabPanel>
            <TabPanel value="weekly" sx={{ p: 2 }}>
              <Weekly />
            </TabPanel>
            <TabPanel value="monthly">Monthly</TabPanel>
          </TabContext>
        </TabPanel>
      </TabContext>
    </Box>
  )
}
