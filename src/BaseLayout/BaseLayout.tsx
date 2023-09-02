import { Header } from "@src/components/Header/Header"
import { Outlet } from "react-router-dom"

export const BaseLayout = () => {

  return(
    <> 
      <Header />

      <Outlet />

      <footer>

      </footer>
    </>
  )
}