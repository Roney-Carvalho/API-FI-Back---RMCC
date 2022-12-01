import { UserController } from "./controller/UserController"
import { SistemaRMCCController } from "./controller/UserController"

export const Routes = [{
    method: "get",
    route: "/UserRMCC",
    controller: UserController,
    action: "all"
}, {
    method: "get",
    route: "/UserRMCC/:id",
    controller: UserController,
    action: "one"
}, {
    method: "post",
    route: "/UserRMCC",
    controller: UserController,
    action: "save"
}, {
    method: "delete",
    route: "/UserRMCC/:id",
    controller: UserController,
    action: "remove"
}, {
    method: "get",
    route: "/SistemaRMCC",
    controller: SistemaRMCCController,
    action: "all"
}, {
    method: "get",
    route: "/SistemaRMCC/:id",
    controller: SistemaRMCCController,
    action: "one"
}, {
    method: "post",
    route: "/SistemaRMCC",
    controller: SistemaRMCCController,
    action: "save"
}, {
    method: "delete",
    route: "/SistemaRMCC/:id",
    controller: SistemaRMCCController,
    action: "remove"
}]
