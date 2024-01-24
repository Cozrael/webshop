import http from "../http-common";

const getAll = () => {
    return http.get('/termekek');
};

const TermekekService={
    getAll,
}
export default TermekekService;