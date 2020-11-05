
import {service} from "@/utils/request"

export function login(data){
    return service({
        url:"/user/api/mend/business/user/login",
        method:"post",
        data
    })
}