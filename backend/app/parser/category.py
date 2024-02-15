def category_parser(response):
    block = response.find(id="main").find("div" , class_="block")
    header = block.find("h3").text.replace("\t", "").strip()[:-1]

    posts = block.find_all(class_="block-item-big")

    posts_list = []

    for post in posts:
        image = post.find(class_="block-image").find("a").find("img")["src"]
        title = post.find("h2").find("a").text
        link = post.find("h2").find("a")["href"]
        content = post.find("p").text
        create_date = post.find(class_="block-meta").find(class_="heading-date").text

        posts_list.append({
            "image": image,
            "title": title,
            "link": link,
            "content": content,
            "create_date": create_date
        })

    return {
        "header": header,
        "posts": posts_list
    }
    