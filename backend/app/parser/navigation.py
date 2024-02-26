def parse_navigation(response):
    nav = response.find(id="wrapper-navigation").find(id="menu-alt-menu")
    li_list = nav.find_all('li')

    nav_list = []

    for li in li_list:
        a = li.find('a')

        #If there is a category in the link, we only get the category name. 
        #Because we will add it to the end of BASE_URL
        if a["href"].find("category") != -1:
            url = a["href"].split("/category/")[1].replace("/", "")

            nav_list.append({
            'title': a.text[0] + turkish_lower(a.text[1:]),
            'url': url
        })

    return nav_list

def turkish_lower (text):
    turkish_letters = {'İ': 'i', 'I': 'ı', 'Ğ': 'ğ', 'Ü': 'ü', 'Ş': 'ş', 'Ö': 'ö', 'Ç': 'ç'}
    for uppercase, lowercase in turkish_letters.items():
        text = text.replace(uppercase, lowercase)
    return text.lower()