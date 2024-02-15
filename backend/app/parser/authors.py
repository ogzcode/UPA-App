def authors_parser(response):
    widget = response.find(id="sidebar").find_all(class_="widget")[3]
    authors = widget.find(class_="textwidget").find(class_="tabs_container").find_all(class_="block-item-small")

    authors_list = []

    for author in authors:
        image = author.find(class_="block-image").find("a").find("img")["src"]
        name = author.find("h2").find("a").text
        link = author.find("p").find("span").find("a")["href"]

        authors_list.append({
            "image": image,
            "name": name,
            "link": link
        })

    return authors_list