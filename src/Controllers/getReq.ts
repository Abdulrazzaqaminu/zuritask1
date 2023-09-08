import { Request, Response } from "express";

export const getRequests = async (req: Request, res: Response) => {
    try {
        const { slack_name, track } = req.query;

        // Curernt Date
        let date: Date = new Date();
        let options: Intl.DateTimeFormatOptions = {
            weekday: "long"
        }
        let currentDay: string = date.toLocaleDateString("en-us", options);

        // UTC Time
        let utcTime: string;
        const hoursRange: number = 2;
        let time: number = date.getTime();
        let timeOffSet: number = date.getTimezoneOffset();
        const currentUTCHour: number = date.getUTCHours();

        const isWithinRange: boolean = currentUTCHour >= (24 - hoursRange) || currentUTCHour <= hoursRange;
        
        // Response
        res.status(200).json({
            "slack_name": slack_name,
            "current_day": currentDay,
            "utc_time": isWithinRange ? utcTime = new Date(time - timeOffSet*60*1000).toISOString() : 0,
            "track": track,
            "github_file_url": "https://github.com/Abdulrazzaqaminu/zuri-first-task/blob/main/src/Controllers/getReq.ts",
            "github_repo_url": "https://github.com/Abdulrazzaqaminu/zuri-first-task",
            "status": 200
        });
        
    } catch (error) {
        res.status(400)
    }
}