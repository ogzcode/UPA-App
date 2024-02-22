from bs4 import Tag


def parse_content(response):
    content = []
    for child in response.contents:
        if child.name == "p" and isinstance(child, Tag):
            style_value = child.get("style")

            if style_value  and "text-align: right" in style_value:
                content.append(parse_p_tag(child))
                break
            else:
                content.append(parse_p_tag(child))
        elif child.name == "blockquote":
            content.append({
                "type": "blockquote",
                "content": child.get_text()
            })
        elif child.name == "ul":
            content.append({
                "type": "list",
                "content": [li.get_text() for li in child.find_all("li")]
            })
        elif child.name == "ol":
            content.append({
                "type": "list",
                "content": [li.get_text() for li in child.find_all("li")]
            })

    return content


def parse_p_tag(response):
    previous_sibling = response.find_previous_sibling()

    if previous_sibling is not None and previous_sibling.find("img") is not None:
        return {
            "type": "image-caption",
            "content": response.find("em").get_text()
        }

    if response.find("img") is not None:
        return {
            "type": "image",
            "content": response.find("img")["src"]
        }
    elif response.find("a") is not None and not response.find("a")["href"].startswith("#"):
        return {
            "type": "link",
            "content": response.find("a")["href"]
        }
    elif response.find("strong") is not None:
        return {
            "type": "header",
            "content": response.get_text()
        }
    else:
        return {
            "type": "paragraph",
            "content": response.get_text()
        }
