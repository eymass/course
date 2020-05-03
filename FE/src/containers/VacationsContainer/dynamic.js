import DynamicComponent from "../../common/DynamicComponent";

const dynamic = DynamicComponent(() => import(/* webpackChunkName: "vacations" */ 'containers/VacationsContainer'));

export default dynamic;
