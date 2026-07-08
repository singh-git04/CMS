import { axiosInstance } from "../../../../config/axiosInstance"

export let getAllEmployee =async (page  
    
) => {

    try {
        let res =await axiosInstance.get(`/employee?page=${page}`)
        
        return res.data.data
        
        
    } catch (error) {
        console.log('error in all employee api', error);
        
    }
}

export let createEmployee = async (employeeData)=>{
    try {
        let res = await axiosInstance.post('/employee/create',employeeData)
        
        return res.data.data
        console.log(res);
    } catch (error) {
        console.log('error from create api', error);
        
    }
}

export let updateEmployee = async(empId, data)=>{

    try {
        let res = await axiosInstance.patch(`/employee/update/${empId},data`)
        return res
        console.log(res);
        
    } catch (error) {
        console.log('error from updataEmployee');
        
    }
}

createEmployee()
getAllEmployee()