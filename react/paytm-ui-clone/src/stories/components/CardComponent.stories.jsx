
// Follow this guide to learn how to get started.
// https://storybook.js.org/docs/get-started/frameworks/react-vite

import CardComponent from '../../components/CardComponent';

const meta={
    title:'Components/CardComponent',
    component:CardComponent
}
export default meta
export const Test1={
    args:{
        cardDetails:{
            "title": "Next Payout",
            "amount": "2,312.23",
            "orders": 23,
            "nextPaymentDate": 999,
            "isFirst": true
        },
    },
}
export const Primary=()=>(<CardComponent cardDetails={{title:"Next Payout",
    amount:'2,312.23',orders:23,
    nextPaymentDate:'Today, 4:00pm' ,
    isFirst:true}}/>)
export const Secondary=()=>(<CardComponent cardDetails={{title:"Next Payout",
    amount:'2,312.23',orders:23,
    nextPaymentDate:'Today, 4:00pm' ,
    isFirst:true}}/>)