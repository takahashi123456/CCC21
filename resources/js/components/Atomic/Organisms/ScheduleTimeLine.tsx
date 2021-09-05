import React from "react";
import {ArticleCard} from "@/components/Atomic/Molecules/ArticleCard";
import {Schedule} from "@/types";

export const ScheduleTimeLine: React.FC<{ schedules: Schedule[], per_page?: number }> = (props) => {
    const schedules = props.schedules;

    return (
        <>
            {schedules.map((schedule, i) => {
                return (<ArticleCard key={i} schedule={schedule}/>)
            })}
        </>
    )
};
