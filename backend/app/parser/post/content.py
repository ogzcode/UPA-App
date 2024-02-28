from bs4 import Tag
import re


def parse_content(response):
    content = []
    for child in response.contents:
        if child.name == "p" and isinstance(child, Tag):
            style_value = child.get("style")

            if style_value and "text-align: right" in style_value:
                content.append(parse_p_tag(child))
                break
            else:
                result = parse_p_tag(child)
                if isinstance(result, list):
                    content.extend(result)
                else:
                    content.append(result)
        elif child.name == "blockquote":
            content.append({
                "type": "blockquote",
                "content": clear_text(child.get_text())
            })
        elif child.name == "ul":
            content.append({
                "type": "list",
                "content": [clear_text(li.get_text()) for li in child.find_all("li")]
            })
        elif child.name == "ol":
            content.append({
                "type": "list",
                "content": [clear_text(li.get_text()) for li in child.find_all("li")]
            })

    return content


def parse_p_tag(response):
    previous_sibling = response.find_previous_sibling()

    # Eğer bir önceki kardeşi bir resim ise ve bu paragrafın içinde em etiketi varsa bu resmin alt başlığıdır.
    if previous_sibling is not None and previous_sibling.find("img") is not None and response.find("em") is not None:
        return {
            "type": "image-caption",
            "content": clear_text(response.find("em").get_text()),
        }

    if response.find("img") is not None:
        return {
            "type": "image",
            "content": response.find("img")["src"]
        }
    elif response.contents[0].name == "strong":
        # Eğer paragrafın içinde strong etiketi varsa bu bir alt başlıktır.
        inner_text = response.get_text().replace(response.find("strong").get_text(), "")
        if inner_text.strip() != "":
            return [
                {
                    "type": "subtitle",
                    "content": clear_text(response.find("strong").get_text())
                },
                {
                    "type": "paragraph",
                    "content": clear_text(inner_text)
                }
            ]
        else:
            return {
                "type": "header",
                "content": clear_text(response.find("strong").get_text())
            }
    else:
        return {
            "type": "paragraph",
            "content": clear_text(response.get_text())
        }

def clear_text(text):
    return re.sub(r'\[.*?\]', '', text)