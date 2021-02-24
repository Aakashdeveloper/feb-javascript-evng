localStorage
> persistant Storage
> wrt to browser
> we have to remove manully

localStorage.setItem('mytoken','8776786buhvb76g78')
undefined
localStorage.getItem('mytoken')
"8776786buhvb76g78"
localStorage.removeItem('mytoken')
undefined


sessionStorage
> temp Storage
> save wrt to tab

sessionStorage.setItem('mycity','delhi')
undefined
sessionStorage.getItem("mycity")
"delhi"
sessionStorage.removeItem("mycity")


cookies
> save wrt to website
> expire time

document.cookie
"_ga=GA1.2.1880173027.1602255983; city=London; _gid=GA1.2.595532263.1613922018; origin=delhi; _gat_gtag_UA_131256843_1=1"
document.cookie="country=India"
"country=India"
document.cookie
"_ga=GA1.2.1880173027.1602255983; city=London; _gid=GA1.2.595532263.1613922018; origin=delhi; country=India"

document.cookie="country1=Uk;expires=Tue, 23 Feb 2021 01:00:00 UTC"
