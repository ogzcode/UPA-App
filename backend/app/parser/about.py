def about_parser(response):
    main = response.find(id="main").find(class_="post-entry")
    content = []

    for p in main.find_all("p"):
        text = p.text.strip()
        if text:
            content.append(text)
    
    return content