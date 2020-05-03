import DynamicComponent from "../../common/DynamicComponent";

const dynamic = DynamicComponent(() => import(/* webpackChunkName: "profile" */ 'containers/ProfileContainer'));

export default dynamic;
