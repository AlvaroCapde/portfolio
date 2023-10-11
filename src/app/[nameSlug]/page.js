'use client'
import {usePersonInfo} from "@/hooks/usePersonInfo";
export default function Page({params}){

    const nameInfo = usePersonInfo(params.nameSlug)

    return (
       <div>{nameInfo?.name}</div>
    )
}
