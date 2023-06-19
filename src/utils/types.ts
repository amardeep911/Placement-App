
type Token = {
    refresh: string;
    access: string;
  };
  
 

export type ReduxModel = {
    loading: boolean,
    error: string,
    success: boolean,
    accessToken: string,
    refreshToken: string,
    isAuth: boolean,
    navLoading: boolean,
};

export type loginDatatypes = {
    email: string,
    password: string,
}

export type registerDatatypes = {
    email: string,
    password: string,
    name: string,
    password2: string,
}