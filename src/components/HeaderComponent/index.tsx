import Action from "./Action"
import Menu from "./Menu"

const HeaderComponent = () => {
  return (
    <div className="w-full h-14 px-10 shadow flex items-center justify-between bg-header-bg">
      <div className="text-2xl font-bold text-primary">FB</div>
      <div className="h-full">
        <Menu />
      </div>
      <div className="">
        <Action />
      </div>
    </div>
  )
}

export default HeaderComponent
