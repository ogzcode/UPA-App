def parse_pagination(response):
    pagination = response.find(id="main").find(
        "div", class_="block").find(class_="pagination")

    pagination_list = []

    current_page = pagination.find("span", class_="current")

    for page in pagination.find_all("a"):
        if len(pagination_list) == 0 and page.previous_sibling == current_page:
            pagination_list.append({
                "page": current_page.text,
                "link": "#"
            })

        pagination_list.append({
            "page": clean_text(page.text),
            "link": clean_href(page["href"])
        })

        if page.next_sibling == current_page:
            pagination_list.append({
                "page": current_page.text,
                "link": "#"
            })


    return pagination_list

def clean_text(text):
    if text.find("Next") != -1 or text.find("Last") != -1:
        return text.split(" ")[0]
    elif text.find("First") != -1 or text.find("Previous") != -1:
        return text.split(" ")[1]   
    else:
        return text
    
def clean_href(href):
    return href.split("/category/")[-1][:-1]
