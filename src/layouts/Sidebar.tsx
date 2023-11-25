export function Sidebar() {
  return (
    <>
      <aside className="sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col ml-1 lg:hidden">
        <SmallSidebarItem Icon={Home} title="home" url="/" />
      </aside>
    </>
  );
}

type SmallSidebarItemProps = {
    Icon: ElementType
    title= string 
    url = string
}

function SmallSidebarItem({ Icon, title, url }: SmallSidebarItemProps) {
  return (<>
    <a href=""></a>
  </>)
}
