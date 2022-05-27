import { useQuery } from "react-query";
import { getPosts } from "../api/rest/requests";

export const usePostsList = () => {

    const {data} = useQuery(['posts'], () => getPosts());

    return { data };
};