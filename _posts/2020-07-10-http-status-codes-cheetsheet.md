---
title: 'Http status codes cheetsheet :neckbeard:'
date: 2020-07-10T00:00:00.000Z
tags:
  - http
categories:
  - cheetsheet
---

## 1xx :bowtie:
  * For getting **Information** about the API.
    <details>
        <summary>Read More</summary>
        Request has been received and the server is continuing the process.
    </details>

## 2xx :smile:
  * Used in case of **Success**
    <details>
        <summary>Read More</summary>
        Request was received successfully and is completely understandable by the server and is accepted.
    </details>

## 3xx :fearful:
  * Used for **Redirection**
    <details>
        <summary>Read More</summary>
        Further action must be taken for completing the request.
    </details>  

## 4xx :sob:
  * For showing **Client Error**
    <details>
        <summary>Read More</summary>
        Syntax of the request was not right or the request cannot be fullfilled.
    </details>  

## 5xx :scream:
  * For showing **Server Error**
    <details>
        <summary>Read More</summary>
        Server failed to fulfill a valid request from client.
    </details>  

| Status Code | Description                     |
| ----------- | ------------------------------- |
| 100         | Continue                        |
| 101         | Switching Protocols             |
| 102         | Processing                      |
| 103         | Early Hints                     |
| 104-199     | Unassigned                      |
| 200         | OK                              |
| 201         | Created                         |
| 202         | Accepted                        |
| 203         | Non-Authoritative Information   |
| 204         | No Content                      |
| 205         | Reset Content                   |
| 206         | Partial Content                 |
| 207         | Multi-Status                    |
| 208         | Already Reported                |
| 209-225     | Unassigned                      |
| 226         | IM Used                         |
| 227-299     | Unassigned                      |
| 300         | Multiple Choices                |
| 301         | Moved Permanently               |
| 302         | Found                           |
| 303         | See Other                       |
| 304         | Not Modified                    |
| 305         | Use Proxy                       |
| 306         | Unused                          |
| 307         | Temporary Redirect              |
| 308         | Permanent Redirect              |
| 309-399     | Unassigned                      |
| 400         | Bad Request                     |
| 401         | Unauthorized                    |
| 402         | Payment Required                |
| 403         | Forbidden                       |
| 404         | Not Found                       |
| 405         | Method Not Allowed              |
| 406         | Not Acceptable                  |
| 407         | Proxy Authentication Required   |
| 408         | Request Timeout                 |
| 409         | Conflict                        |
| 410         | Gone                            |
| 411         | Length Required                 |
| 412         | Precondition Failed             |
| 413         | Payload Too Large               |
| 414         | URI Too Long                    |
| 415         | Unsupported Media Type          |
| 416         | Range Not Satisfiable           |
| 417         | Expectation Failed              |
| 418-420     | Unassigned                      |
| 421         | Misdirected Request             |
| 422         | Unprocessable Entity            |
| 423         | Locked                          |
| 424         | Failed Dependency               |
| 425         | Too Early                       |
| 426         | Upgrade Required                |
| 427         | Unassigned                      |
| 428         | Precondition Required           |
| 429         | Too Many Requests               |
| 430         | Unassigned                      |
| 431         | Request Header Fields Too Large |
| 432-450     | Unassigned                      |
| 451         | Unavailable For Legal Reasons   |
| 452-499     | Unassigned                      |
| 500         | Internal Server Error           |
| 501         | Not Implemented                 |
| 502         | Bad Gateway                     |
| 503         | Service Unavailable             |
| 504         | Gateway Timeout                 |
| 505         | HTTP Version Not Supported      |
| 506         | Variant Also Negotiates         |
| 507         | Insufficient Storage            |
| 508         | Loop Detected                   |
| 509         | Unassigned                      |
| 510         | Not Extended                    |
| 511         | Network Authentication Required |
| 512-599     | Unassigned                      |



<style>
.cy{ background: #33bfff; }
.gr{ background: #8bc34a; }
.pr{ background: #ffc107; }
.re{ background: #b23c17; color: #fff}
.pi{ background: #ff5722; color: #fff}
td:nth-child(1){
    font-weight: 900;
    border-right-color: transparent;
    border-color: #fff;
    color: #323;
}
.darkmode td:nth-child(1){
    color: black;
}
.darkmode td,.darkmode th{
    border-color: #fff;
}
</style>
<script>
var table = document.querySelector("table");
for (var i = 0, row; row = table.rows[i]; i++)
{ for (var j = 0, col; col = row.cells[j]; j++) {
    if(col.innerText[0] == "1"){
        col.classList.add("cy")
    }
        if(col.innerText[0] == "2"){
        col.classList.add("gr")
    }
        if(col.innerText[0] == "3"){
        col.classList.add("pr")
    }
        if(col.innerText[0] == "4"){
        col.classList.add("re")
    }
        if(col.innerText[0] == "5"){
        col.classList.add("pi")
    }
}  
}
</script>