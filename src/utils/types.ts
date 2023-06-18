export type ReduxModel = {
    auth: boolean,
    user: string,
    accessToken: string,
    refreshToken: string,
    loading: boolean,
    error: string,
    success: boolean,
};

export type registerDatatypes = {
    email: string,
    password: string,
    name: string,
    password2: string,
}