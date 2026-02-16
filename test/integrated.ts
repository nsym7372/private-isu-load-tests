import initialize from "./initialize.ts";
import comment from "./comment.ts";
import postimage from "./postimage.ts";

export {initialize, comment, postimage}

export const options = {
    scenarios: {
        initialize: {
            executor: "shared-iterations",
            vus: 1,
            iterations: 1,
            exec: "initialize",
            maxDuration: "10s"
        },
        comment: {
            executor: "constant-vus",
            vus: 4,
            duration: "30s",
            exec: "comment",
            startTime: "12s"
        },
        postImage: {
            executor: "constant-vus",
            vus: 2,
            duration: "30s",
            exec: "postimage",
            startTime: "12s" 
        }
    }
}

export default function(){}