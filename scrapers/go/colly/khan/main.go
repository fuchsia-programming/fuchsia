package main

import (
	"fmt"
	"log"
	"regexp"

	"github.com/gocolly/colly/v2"
)

func main() {
	allowed := "www.khanacademy.org"
	url := "https://%s/profile/%s/"

	// Instantiate default collector
	c := colly.NewCollector(
		// Visit only domains: khanacademy.org
		colly.AllowedDomains(allowed),
	)

	// Before making a request print "Visiting ..."
	c.OnRequest(func(r *colly.Request) {
		fmt.Println("Visiting", r.URL.String())
	})

	c.OnError(func(_ *colly.Response, err error) {
		log.Println("Something went wrong:", err)
	})

	c.OnXML("//div[@id='footer']/following::script[contains(.,'prefersReducedMotion')]", func(e *colly.XMLElement) {
		re := regexp.MustCompile("points\":(\\d+),\"prefersReducedMotion")
		res := re.FindAllStringSubmatch(e.Text, -1)
		if len(res) > 0 {
			fmt.Println(res[0][1])
		} else {
			fmt.Println("Not found")
		}

	})
	// Start scraping on https://khanacademy.org
	err := c.Visit(fmt.Sprintf(url, allowed, "XSLTGod"))

	if err != nil {
		log.Fatal(err)
	}
}
