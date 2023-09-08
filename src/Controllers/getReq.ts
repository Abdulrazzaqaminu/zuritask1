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
        let time: string = date.toISOString();
        let timeWitNoMilli: Date = new Date(time);
        timeWitNoMilli.setMilliseconds(0);
        let utcTime = timeWitNoMilli.toISOString().replace(/\.\d+Z$/, 'Z');;
        
        // Response
        res.status(200).json({
            "slack_name": slack_name,
            "current_day": currentDay,
            "utc_time": utcTime,
            "track": track,
            "github_file_url": "https://github.com/Abdulrazzaqaminu/zuritask1/blob/main/src/Controllers/getReq.ts",
            "github_repo_url": "https://github.com/Abdulrazzaqaminu/zuritask1",
            "status": 200
        });
        
    } catch (error) {
        res.status(400)
    }
}
