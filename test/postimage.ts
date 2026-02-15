import http from "k6/http";
import { parseHTML } from "k6/html";
import { url } from "./config.ts";

const testImage = open("drink_beer_bin.png", "b");

export default function () {
    const res = http.post(url("/login"), {
        account_name: "isu002",
        password: "isu002"
    });

    const doc = parseHTML(res.body as string);
    const token = doc.find('input[name="csrf_token"]').first().attr('value');

    http.post(url("/"), {
        csrf_token: token ?? "",
        file: http.file(testImage, "drink_beer_bin.png", "image/png"),
        body: "Posted by k6"
    });
}