import DynamicComponent from "../../common/DynamicComponent";

const dynamic = DynamicComponent(() => import(/* webpackChunkName: "vacationDetails" */ 'containers/VacationDetailsContainer'));

export default dynamic;
