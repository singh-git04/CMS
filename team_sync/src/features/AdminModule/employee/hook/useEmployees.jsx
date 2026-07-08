import { keepPreviousData, useQuery } from "@tanstack/react-query"
import { getAllEmployee } from "../apis/employeeApi"

export let  useEmployee = (page)=>{

    let {data, isPending ,isFetching} = useQuery({
        queryKey: ["employee",page],
        queryFn:() => getAllEmployee(page),
        staleTime: 100000,
        placeholderData: keepPreviousData,
    })
 

    return {
         isPending,
         data,
         isFetching,
         keepPreviousData,
         
    }
}