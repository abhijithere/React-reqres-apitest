import Cookies from 'universal-cookie';

export const checkAuthentication=()=>{
    const Cookie = new Cookies();

    const token = Cookie.get('token');

    if(token){
        return true;
    }else{
        return false;
    }

}