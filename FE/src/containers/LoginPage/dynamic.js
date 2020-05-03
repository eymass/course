import DynamicComponent from "../../common/DynamicComponent";

const dynamic = DynamicComponent(() => import(/* webpackChunkName: "login" */ 'containers/LoginPage'));

export default dynamic;
