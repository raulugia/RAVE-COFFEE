import userIcon from '../assets/accountCard/user-icon.svg'
import orderIcon from '../assets/accountCard/orders-icon.svg'
import passwordIcon from '../assets/accountCard/password.svg'
import wholesaleIphone from '../assets/wholesale_iphone.jpg'
import wholesaleBox from '../assets/wholesale_box.png'
import wholesaleFallingBeans from '../assets/wholesale_fallingbeans.png'
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
        imgSource: wholesaleIphone
    },
    {
        header: "ROASTED FRESH",
        text: "We freshly roast and despatch your wholesale coffee the next working day after your online order. Coffee for Filter or Espresso machines, roasted and ground to order.",
        imgSource: wholesaleBox
    },
    {
        header: "FREE UK DELIVERY",
        text: "We despatch bulk coffee beans via UK courier on a Tracked 24 service to make sure your parcel arrives in good time. Rave are the best wholesale coffee suppliers UK wide.",
        imgSource: wholesaleFallingBeans
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

const subscription_questions = [
    {
        question: "Am I locked into my monthly coffee Subscription?",
        answer: "No, of course not. You can cancel at anytime directly from your customer portal."
    },
    {
        question: "Can I buy the coffee subscription as a gift?",
        answer: "Yes you can. On the personaliser just select 'Gift', you can select the duration and when you would like it delivered."
    },
    {
        question: "I want my gift subscription to arrive on a specific day, how can I do this?",
        answer: "You are also able to select the date that you want to subscription to start on. We will do our best to despatch the coffee to arrive on this date."
    },
    {
        question: "I want the first delivery gift wrapped, is that something you can do for me?",
        answer: "Yes just select gift wrap and leave a personnel message and we'll take care of it for you."
    },
    {
        question: "What is a Coffee Subscription?",
        answer: "Coffee subscriptions are a service that sends clients repeated delivery of high-quality coffee beans or grounds. Coffee subscription services can be tailored to each customer's specific specifications, such as roast level, flavour profiles, and delivery frequency. With direct deliveries from coffee roasters, customers can enjoy a consistent supply of fresh and tasty coffee, eliminating the need to run out or make numerous visits to the supermarket. Furthermore, many coffee subscription services provide unusual coffee blends and types that may not be accessible in local stores, allowing customers to experiment with new specialty coffee from around the world. Overall, a coffee subscription is a wonderful method for coffee enthusiasts to ensure they always have access to their favourite beverage while also discovering new and amazing coffee experiences."
    },
    {
        question: "How Do I Choose the Best Coffee Subscription Service?",
        answer: "When it comes to choosing the best coffee subscription service in the UK, there are a few things to consider. Firstly, it's important to think about the quality and origin of the coffee. Do you want coffee that is ethically sourced and sustainable? Or are you more interested in a particular flavour profile or roast level? Another factor to consider is the frequency and flexibility of deliveries. Do you want a monthly delivery or would you prefer to receive coffee more frequently? Can you skip or pause deliveries if you need to? Does the subscription service offer a grind size that is ideal for your brew method? It's important to choose a service that fits with your specific needs and lifestyle."
    },
    {
        question: "Can I customise my coffee subscription?",
        answer: "At Rave Coffee, we understand that selecting the perfect coffee can be perplexing. With everyone having their own distinct taste preferences and brewing methods, it can be difficult to choose the right option. But rest assured, we've got you covered! We offer a range of customised options to ensure that you always get the perfect cup of coffee. When you sign up for a subscription with us, you can select your preferred roast degree, which ranges from light to dark, as well as your chosen flavour profile, which can be fruity, nutty, or chocolatey. We also provide a variety of single-origin coffees and blends, giving you plenty of options to explore different regions and flavours. But if you're still uncertain about which option to choose, don't worry! Our coffee experts are always available to provide recommendations based on your taste preferences and brewing method. You could also take our Coffee Quiz to discover your perfect brew. And if you change your mind, updating your personalization options is easy via your online account. We believe that every cup of coffee should be tailored to your specific taste preferences, which is why we work hard to make our customizable subscription service a reality. Join our community of coffee lovers today and discover the perfect cup of coffee for you!"
    }
]

const footerLinks_col1 = [
    {
        header: "About",
        links: [
            { text: "1% For The Planet", to: "#" },
            { text: "About", to: "/about" },
            { text: "Brew Guides", to: "#" },
            { text: "Blog", to: "#" },
            { text: "Careers", to: "#" },
            { text: "Coffee Club Archives", to: "#" },
            { text: "Growing Regions", to: "#" },
            { text: "Knowledge Base", to: "#" },
        ]
    },
    {
        header: "Wholesale",
        links: [
            { text: "Wholesale Coffee", to: "/wholesale" },
            { text: "Sign Up", to: "/register" },
            { text: "Login", to: "/login" },
        ] 
    }
]

const footerLinks_col2 = [
    {
        header: "Help",
        links: [
            { text: "FAQ", to: "#" },
            { text: "Contact", to: "#" },
            { text: "Roasting My Order", to: "#" },
            { text: "Delivery & Returns", to: "#" },
            { text: "Terms & Conditions", to: "#" },
            { text: "Rewards & Referrals", to: "#" },
        ]
    },
]

const home_card_text = {
    header: "Speciality Coffee Roasters UK",
    text: [
        "We are a group of coffee nerds obsessed with all things, well, coffee! We love it all, from sourcing the very best beans to roasting, profiling, and, of course, brewing coffee to perfection.  We’re also pretty fanatical about getting your order roasted and posted the very same day so you can enjoy the freshest roasted coffee available to humanity!",
        "We're always searching the world for the most exciting coffees that we think you’ll love. With an ever-changing and evolving lineup of coffee, there really is something for every coffee lover. Whether you’re an espresso enthusiast or a filter fanatic, we have it all;" ,
        "Specialty coffee Blends, Single-origin, Organic coffee or Rare micro lots. Also, If it’s pods, decaf, or syrup that floats your boat, that’s fine with us, too. We serve great coffee, not moral judgment.  If you like a team that doesn’t take itself too seriously, you’re in the right coffee roastery. Join the Rave!"
    ]
}

export {aboutText, wholesaleText, wholesale_commercial_text, wholesale_cards_text, accountNavCardData, subscription_main_text, subscription_cards_text, subscription_questions, footerLinks_col1, footerLinks_col2, home_card_text};