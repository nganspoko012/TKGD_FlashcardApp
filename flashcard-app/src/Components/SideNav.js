import '../style.css'
import SideNavItem from './SideNavItem'
import UserInfo from './UserInfo/UserInfo'

const userInfo = {
    email: "nganspoko012@gmail.com",
    displayName: "Ngân Võ"
};

export default function SideNav() {
    return (
        <nav className="side-nav">
            <UserInfo user={userInfo} />
            <SideNavItem iconName='layers' content='Học phần' />
            <SideNavItem iconName='receipt' content='Template' />
            <SideNavItem iconName='insert_chart_outlined' content='Thống kê' />
            <SideNavItem iconName='settings' content='Tùy chỉnh' />
            <SideNavItem iconName='exit_to_app' content='Đăng xuất' />
        </nav>
    )
}