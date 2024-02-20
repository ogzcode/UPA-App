from .heading import parse_heading
from .content import parse_content

def parse_post(response):
    main = response.find(id="main")
    header = parse_heading(main.find(class_="post-heading"))
    thumb = main.find(class_="post-thumb").find("img")["src"]
    content = parse_content(main.find(class_="post-entry"))

    return {
        "header": header,
        "thumb": thumb,
        "content": content
    }
