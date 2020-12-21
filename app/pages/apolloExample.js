import { gql } from '@apollo/client'
import { useQuery } from '@apollo/react-hooks'

const QUERY = gql`
query allFaqs {
    allFaqs{
      question
      answer
    }
  }
  
    
    `


export default function Faqs() {

    const { data } = useQuery(QUERY)


    return (
        <div>
            {data && data.allFaqs.map(faq => {
                <div> {console.log(faq.question)}</div>
            })}
        </div>
    )
}
