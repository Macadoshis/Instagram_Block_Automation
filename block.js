var fn = function (search, list) {
    fetch("https://www.instagram.com/graphql/query", {
        "headers": {
            "accept": "*/*",
            "accept-language": "en-US,en;q=0.9,fr-FR;q=0.8,fr;q=0.7",
            "content-type": "application/x-www-form-urlencoded",
            "priority": "u=1, i",
            "sec-ch-prefers-color-scheme": "light",
            "sec-ch-ua": "\"Google Chrome\";v=\"131\", \"Chromium\";v=\"131\", \"Not_A Brand\";v=\"24\"",
            "sec-ch-ua-full-version-list": "\"Google Chrome\";v=\"131.0.6778.86\", \"Chromium\";v=\"131.0.6778.86\", \"Not_A Brand\";v=\"24.0.0.0\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-model": "\"\"",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-ch-ua-platform-version": "\"10.0.0\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-asbd-id": "129477",
            "x-bloks-version-id": "bf7a90e9c6e23a385cfb6253e5eeb5d72806040868912d5bef7cec02fd3630c5",
            "x-csrftoken": "lQkanvhzG5U4sdJlIxajk2",
            "x-fb-friendly-name": "PolarisSearchBoxRefetchableQuery",
            "x-fb-lsd": "lWOTpllG0qewXlfczsageV",
            "x-ig-app-id": "936619743392459",
            "cookie": "csrftoken=lQkanvhzG5U4sdJlIxajk2; mid=Zf3ICgALAAFYy6wWLCPawZO8fKNN; ps_n=1; ps_l=1; fbm_124024574287414=base_domain=.instagram.com; fbsr_124024574287414=0e2xGUbjvDnC6LFqeNsfUms8tMaW4jjq9f-j69zp9lo.eyJ1c2VyX2lkIjoiODIzNzM1MTA2IiwiY29kZSI6IkFRQXRfOTZBeEkzaUhQT1NlRVBCZk8taksyYXJHaGQ2UHphQ0QzcGs1VDhvWnJ0YjRhSUJ2R2puaURNVFpYZ09aTy1NSVJMTjhDeTVuZXBjMEhZaDYxeHZOUldDX0U5WmJJUnRBbjlSSW9uSFlzRnlIUkp2UEk1bGx1Y0ZCYWl5VFhpaGJHR0RtMWZhTzlpeUlyRFJkUVlBZ2VSWDBJTklDM0lEbVVHWUh0V1llZzhJdjZZa3Ryd2xqOGZmYmxSakc4azlhSTRsa2trbWFnLW9oZXc5akgtVWFnam9iN3Y3cm9rTklOVWhsUHdNZWJIa0hWSGc0dW1pem41YUp1RzVpSlN6MGplRHlJNUFfYUlXOG52azdfc0g3T3Y5cnl6eHN1S0QxMmJ4MU1BSUZhR19xR3JjT3RpNEJfU0hGbHZNLWpzIiwib2F1dGhfdG9rZW4iOiJFQUFCd3pMaXhuallCTzhpbFBseXNLQW4zUTJ3OEVpaDZKclNaQzZjbERKc0JHNXNKcHUxeVlZaVQwWkJXYW85VGJsZFpDUVZFRVZWajFKcEd0d2dhdzlJUE4xTTB6SnRkRTNJaU5lZ2dDWkJ6N2MyaWFkVThzWkExRTRoT2lpZUZSMUQ3OGZ3czE3Tk00cnFuN2dSMk02amdaQWQ0bUR5cnNvS0RvWkFmeUE0SjUyNTNxc1lQUFJEVUt3QXpaQnpWd2hzSyIsImFsZ29yaXRobSI6IkhNQUMtU0hBMjU2IiwiaXNzdWVkX2F0IjoxNzIzNDAyNTY4fQ; datr=Rgm5ZpoSMTaXNoVdk_nPtM4y; ig_did=DFA13FA3-9983-42FE-9014-AB8404CBD3A6; ig_nrcb=1; dpr=1.25; sessionid=1500299342%3AiB7VNyFVhBtTGQ%3A4%3AAYeEwJJ-hdXwZwyUVh7KnytN7Wi96jgCHWsISzkS0Q; ds_user_id=1500299342; oo=v1%7C3%3A1732592553; wd=1536x406; rur=\"NCG\\0541500299342\\0541764136041:01f72bb269765ea0ef40abb7e1b9ceddd1eabdb0376586d342a09e480cacd8249ca70d09\"",
            "Referer": "https://www.instagram.com/",
            "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": "av=17841400340283442&__d=www&__user=0&__a=1&__req=27&__hs=20053.HYP%3Ainstagram_web_pkg.2.1..0.1&dpr=1&__ccg=EXCELLENT&__rev=1018485576&__s=rvf72b%3Amgvjqf%3Aezm35y&__hsi=7441460317675163242&__dyn=7xeUjG1mxu1syUbFp41twpUnwgU7SbzEdF8aUco2qwJxS0k24o1DU2_CwjE1EE2Cw8G11wBz81s8hwGxu786a3a1YwBgao6C0Mo2iyo7u3ifK0EUjwGzEaE2iwNwmE7G4-5o4q3y1Sw5XCwLyESE7i3vwDwHg2ZwrUdUbGwmk0zU8oC1Iwqo5q3e3zhA6bwIxeUnAwCAxW1oCz8rwHwGwa6EymUhw&__csr=gogqY9ghtNZ9NmnPRZr9tQgBOuHWtbHObXHaRYKlkGQil2OJlFrXGyn8h58FERdyk-Htqbl929nAyHGXHn_GtkVfyuiQmqbgydz9RjDAAWzFqxqmSuA8AHAGmmU_QuiUYx5HCB8CjnG9ABwWxaA5oCmUy26U01gsAUcA3K17wVw5vw4iwnqCg3ywcu1wO0o82no0vRhFQ2C0U-0vW0oYjaVkVovw4AClw8i1Ct3XgtgS5CipFQ20aOe0LWdy8loS0EVK52wjWwo83bw-hUK1QIJwdq1wg3GClwLwGw1CJw0psE1U80EW1Kw&__comet_req=7&fb_dtsg=NAcNjN4ETb8jnC84M6N-uXd0nAaDo8vKuyBonclgHIueIrozIfBrcpg%3A17864955220006059%3A1732596958&jazoest=26384&lsd=lWOTpllG0qewXlfczsageV&__spin_r=1018485576&__spin_b=trunk&__spin_t=1732599995&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=PolarisSearchBoxRefetchableQuery&variables=%7B%22data%22%3A%7B%22context%22%3A%22blended%22%2C%22include_reel%22%3A%22true%22%2C%22query%22%3A%22" + search + "%22%2C%22rank_token%22%3A%22%22%2C%22search_surface%22%3A%22web_top_search%22%7D%2C%22hasQuery%22%3Atrue%7D&server_timestamps=true&doc_id=9153895011291216",
        "method": "POST"
    }).then(response => response.text()).then(data => {
        JSON.parse(data)['data']['xdt_api__v1__fbsearch__topsearch_connection']['users'].map(o => o['user']['username']).forEach(r => list.push(r));
    });
}

var liste = [];
for (var search of['a', 'b', 'c', 'd', 'e', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z']) {
    fn(search, liste);
}
setTimeout(() => [...new Set(liste)].forEach(r => console.log(r)), 5000);