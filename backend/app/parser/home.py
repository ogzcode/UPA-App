def home_page_parser(response):
    main = response.find(id="main").find(id="wrapper-slides")
    captions = main.find_all(class_="nivo-html-caption")
    images = main.find(class_="nivoSlider").find_all("a")

    posts = []

    for i, image in enumerate(images):
        img_href = image.find("img")["src"]
        caption = captions[i]

        header = caption.find("h1").find("a").text
        link = caption.find("h1").find("a")["href"]
        content = caption.find("p").text.replace("»", "").strip()

        posts.append({
            "image": img_href,
            "header": header,
            "link": link,
            "content": content
        })

    return posts
