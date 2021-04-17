---

---
# Anarcho Cosmic Activist Books

## Website


### Books

#### To add a new book

* Go to the [admin page](http://acabooks.org.uk/admin)
* Login with your details
* Go to [Books](https://acabooks.org.uk/admin/#/sections/books-aa77876e-9a60-4af9-b824-d5c5696c258d/) in the menu
* Click/tap **Create New**, then **Books**
* Fill in the details

#### To mark a book as taken

* Go to [Books](https://acabooks.org.uk/admin/#/sections/books-aa77876e-9a60-4af9-b824-d5c5696c258d/) in the menu
* Click on the book
* Toggle the **Taken** section

### Posts and pages

* Go to either posts (for [blog posts](http://acabooks.org.uk/blog/)) or pages for the Home page, blog page or books page.
* Edit or add new (if it asks use a template)
* Save as a draft
* Click preview (the picture of an eye by **Save Draft**) to view the post before publishing

### General config

* In the admin menu go to *Config* under **Other data**.
* Change the setting there
* Avoid editing anything past and including **Repositry** unless you know what you are doing.

To access data from here use [Liquid tags](https://shopify.github.io/liquid/). For example, to use the description:

```yml
{{ site.description }}
```

### Navigation bar

To change the pages in the navigation bar

* In the admin menu go to *Navigation bar* under **Other data**.
* Change order or add new pages.
* Best to use relative links. E.g. /blog/ not http://acabooks.org.uk/blog/
