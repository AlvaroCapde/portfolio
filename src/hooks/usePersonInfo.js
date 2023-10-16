import {useMemo} from "react";

export const usePersonInfo = (nameSlug) => {
    console.log(nameSlug)
    return useMemo(() => {
        const nameInfo = {
            "alvaro": {
                "name": "Alvaro",
                "age": 30,
                "location": "London"
            },
            "manuel": {
                "name": "Manuel",
                "age": 20,
                "location": "Paris"
            },
        }
        return nameInfo[nameSlug]}, [nameSlug])
}