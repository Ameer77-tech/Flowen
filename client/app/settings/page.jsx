import AppSideBar from "@/components/SideBar"
import Main from "./components/Main"

const page = async () => {
    return (
        <>
     <div className="h-screen w-screen flex justify-start">
      <AppSideBar />
      <Main />
    </div>
        </>
    )
}
export default page