import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../lib/redux_store/store"
import { toggleSideBar } from "../lib/redux_states/sidebar-slice/sidebarSlice"

const HomePage = () => {
    const dispatch = useDispatch<AppDispatch>()
    const {open} = useSelector((state: RootState) => state.sidebar)
    const toggle = () => {
        dispatch(toggleSideBar())
    }

    console.log(open, "--0-099999999");
    
  return (
    <button className="w-1/2 bg-blue-400" onClick={() => toggle()}>toggle</button>
  )
}

export default HomePage