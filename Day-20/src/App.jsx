import './App.css'
import Card from './components/Card';

function App() {

  const cardData = [
    {
      name: "cardOne",
      subscription: "FREE",
      price: "$0/month",
      planDetails: [
        {
          option: "Single User",
          isActive: true,
        },
        {
          option: "50GB Storage",
          isActive: true,
        },
        {
          option: "Unlimited Public Projects",
          isActive: true,
        },
        {
          option: "Community Access",
          isActive: true,
        },
        {
          option: "Unlimited Private Projects",
          isActive: false,
        },
        {
          option: "Dedicated Phone Support",
          isActive: false,
        },
        {
          option: "Free Subdomain",
          isActive: false,
        },
        {
          option: "Monthly Status Reports",
          isActive: false,
        },
      ]
    },
    {
        name: "cardTwo",
        subscription: "PLUS",
        price: "$9/month",
        planDetails: [
          {
            option: "5 Users",
            isActive: true,
          },
          {
            option: "50GB Storage",
            isActive: true,
          },
          {
            option: "Unlimited Public Projects",
            isActive: true,
          },
          {
            option: "Community Access",
            isActive: true,
          },
          {
            option: "Unlimited Private Projects",
            isActive: true,
          },
          {
            option: "Dedicated Phone Support",
            isActive: true,
          },
          {
            option: "Free Subdomain",
            isActive: true,
          },
          {
            option: "Monthly Status Reports",
            isActive: false,
          },
        ]
      },
      {
        name: "cardThree",
        subscription: "PRO",
        price: "$49/month",
        planDetails: [
          {
            option: "Unlimited Users",
            isActive: true,
          },
          {
            option: "50GB Storage",
            isActive: true,
          },
          {
            option: "Unlimited Public Projects",
            isActive: true,
          },
          {
            option: "Community Access",
            isActive: true,
          },
          {
            option: "Unlimited Private Projects",
            isActive: true,
          },
          {
            option: "Dedicated Phone Support",
            isActive: true,
          },
          {
            option: "Free Subdomain",
            isActive: true,
          },
          {
            option: "Monthly Status Reports",
            isActive: true,
          },
        ]
      },
  ];

  return (
    <>
    <div className='card-container'>
      {
        cardData.map((data, index) => <Card key={index} data = {data} />)
      }
    </div>
    </>
  )
}

export default App
