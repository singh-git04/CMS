import { useForm } from "react-hook-form";
import { useNavigate} from 'react-router';
import {useDispatch} from 'react-redux'
import { loginEmployee } from "../state/auth/authAction";

export let useAuth = ()=>{
  let navigate = useNavigate();
  let dispatch = useDispatch();

     const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onRegisterSubmit = (data) => {
    console.log(data);
  };

   const onLoginSubmit = (data) => {
     dispatch(loginEmployee(data))
  };

  return{
    register,
    handleSubmit,
    watch,
    errors,
    onRegisterSubmit,
    onLoginSubmit,
    navigate,
  }
}