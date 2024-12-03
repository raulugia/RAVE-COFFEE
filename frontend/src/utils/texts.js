import userIcon from '../assets/accountCard/user-icon.svg'
import orderIcon from '../assets/accountCard/orders-icon.svg'
import passwordIcon from '../assets/accountCard/password.svg'
import beans from '../assets/beans.svg'
import bike from '../assets/bike.svg'
import man from '../assets/man.svg'


const aboutText = [
    "At this point we could rave on about company pedigree and vision for the future (blah blah yawn) but that's simply not our way. Much better that you get to know us - we'd love for you to come in and let us show you how committed we are to a better coffee experience.",
    "Yes - we are coffee roasters but we're more than that and if you want to know more, read on or get in touch (otherwise the route to good coffee is simply the Shop tab at the top).",
    "It's probably worth dropping into conversation we continuously strive to source the best quality raw product possible. Looking in all sorts of direction globally. We aim to source coffee that scores 82 points or above on the SCA scale for quality for all of our blends; and 84+ for our single origins as a minimum starting point.",
    "A word on our pricing. Yes, we seem cheap for people who strive for the best quality speciality coffee, we get that. We believe that you the consumer shouldn't have to pay extortionate amounts just because the coffee is expensive. Our packaging may not be as sexy as the next roaster, but we believe the coffee is what you should pay for, not the box it might come in.  We are looking into a 'sexy packaging' optional upgrade for all our products in the near future, worry not!",
    "We also actually like our staff. Yep. We believe in the simple philosophy that happy passionate staff in a fun working environment equals satisfied customers.",
    "We're very proud of the personable service you'll experience in the thriving cafe attached to our roastery -  it's like we've got our own little coffee community going on. Don't just take our word for it though, come park yourself inside for a brew and see us all in action.",
    "Alright... enough already. We'll put the trumpet down. In a nutshell we simply want to serve you the best coffee you've ever had. Now how's that for company vision?!!",
]

const wholesaleText = [
    "Rave Coffee is the ideal wholesale coffee company for all your bulk coffee needs. We source green coffee from around the world and freshly roast and dispatch it daily. Not only do you get great coffee but also the support from your dedicated account managers.",
    "Rave supply wholesale coffee beans, compostable coffee pods, commercial coffee machines and cafe supplies, UK wide. We are Soil Association certified organic coffee roasters providing wholesale organic coffee beans.",
    "From a few bags to bulk supply direct to cafes, hotels and offices. You can purchase quality coffee directly from our wholesale website, just follow the links to create your account. We deliver bulk coffee orders free in the UK, with a minimum order requirement.",
]

const wholesale_commercial_text = [
    "We've partnered with leading coffee machine manufacturers to provide flexible options for your commercial espresso machine.",
    "Whether you're looking to lease, rent, or purchase outright, we have a range of packages to suit your needs. Our selection includes high-quality commercial coffee machines, grinders, and hot water boilers. Our team is ready to give you a personal recommendation based on your needs.",
    "You can own a machine from as little as £30 per week. We also offer a complete 3-year care package. This package covers water filtration, PSSR examinations, and the recommended service schedules. This will give you peace of mind and will keep your espresso machine in tip-top condition.",
]

const wholesale_training_text = [
    "Whether you're opening your first café or looking to revamp your coffee offering, Rave is here to help you achieve coffee greatness! Our dedicated Wholesale coffee team is ready to provide the training and support you need to start and soar.",
    "We will help you choose the right coffee and equipment for your business. We can also design your menu. We will assist you in dialling in espresso, steaming milk, and serving the best coffee in the UK.",
    "With years of experience in hospitality and speciality coffee, our coffee-keen crew make Rave the ideal wholesale coffee partner to set you up for success and tackle any challenges along the way. If you have any questions about how we can help contact us at wholesale@ravecoffee.co.uk or click below.",
]

const wholesale_cards_text = [
    {
        header: "ORDER WHOLESALE COFFEE",
        text: "Click below to access wholesale coffee supplies and pricing online. Create an account, log in and you can shop online instantly, no need for pre-approval.",
        imgSource: "wholesaleIphone"
    },
    {
        header: "ROASTED FRESH",
        text: "We freshly roast and despatch your wholesale coffee the next working day after your online order. Coffee for Filter or Espresso machines, roasted and ground to order.",
        imgSource: "wholesaleBox"
    },
    {
        header: "FREE UK DELIVERY",
        text: "We despatch bulk coffee beans via UK courier on a Tracked 24 service to make sure your parcel arrives in good time. Rave are the best wholesale coffee suppliers UK wide.",
        imgSource: "wholesaleShipping"
    },
]

const accountNavCardData = [
    {
        route: "/account/details",
        text: "ACCOUNT",
        iconPath: userIcon,
    },
    {
        route: "/account/orders",
        text: "ORDERS",
        iconPath: orderIcon,
    },
    {
        route: "/account/change-password",
        text: "PASSWORD",
        iconPath: passwordIcon,
    },
]

const subscription_main_text = "Our coffee subscription is more than just brilliant coffee. It’s an apprenticeship – teaching you about coffee with every cup. With techniques, knowledge, tips and fun. Because we believe the more you know about coffee the more you enjoy it. You don’t need all the pomp and fancy words to be a coffee connoisseur, there’s an arabica whizz-kid in each and every one of us."

const subscription_cards_text = [
    {
        header: "Sustainable and ethical coffee",
        text: "You'll receive an exciting and delicious coffee each month as well as your monthly coffee tuition. We’re proud to offer an ethical coffee subscription: we use ethically sourced beans and pay fair prices for them.",
        imgSrc: beans,
        imgAlt: "coffee beans"
    },
    {
        header: "Coffee delivered to your door",
        text: "Delivered to home or office, your freshly roasted coffee subscription box will arrive via Royal Mail Tracked service and will fit conveniently through the letterbox.",
        imgSrc: bike,
        imgAlt: "coffee bean riding a bike"
    },
    {
        header: "You're in control",
        text: "Pause, skip or cancel with no commitment. You have full control over your coffee subscription service through our online portal, that's why it's the best coffee subscription UK wide.",
        imgSrc: man,
        imgAlt: "man"
    },
]

export {aboutText, wholesaleText, wholesale_commercial_text, wholesale_cards_text, accountNavCardData, subscription_main_text, subscription_cards_text};