import create from "zustand"

const useStore = create((set) => ({
  buttomNavigation: 3,
  setButtomNavigation: (value) => set(() => ({ buttomNavigation: value })),
  tabNavigation: "submission",
  setTabNavigation: (value) => set(() => ({ tabNavigation: value })),
  selectedCalendar: "daily",
  setSelectedCalendar: (value) => set(() => ({ selectedCalendar: value })),
  viewType: "statistic",
  setViewType: (value) => set(() => ({ viewType: value })),
}))

export { useStore }
