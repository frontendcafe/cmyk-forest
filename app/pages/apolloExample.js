import React, { useState } from 'react'
import { gql } from '@apollo/client'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { Input } from 'postcss'

const QUERY = gql`
query allFaqs {
    allFaqs{
        id
      question
      answer
    }
  } 
    `

const CREATE_FAQ = gql`
mutation createFaq ($data: FaqCreateInput) {
    createFaq(data: $data) {
      id
      question
      answer
    }
  }
`

const DELETE_FAQ = gql`
mutation deleteFaq ($id: ID!) {
    deleteFaq(id: $id) {
      id
    }
  }


`
export default function Faqs() {

    const { data, loading } = useQuery(QUERY)
    const [createFaq] = useMutation(CREATE_FAQ)
    const [deleteFaq] = useMutation(DELETE_FAQ)

    const [input, setInput] = useState({
        question: '',
        answer: ''
    })

    const onChange = (e) => {
        setInput({
            ...input,
            [event.target.name]: e.target.value
        })
        console.log(input)
    }

    const onSubmit = (e) => {

        const { question, answer } = input
        try {
            createFaq({
                variables: {
                    data: {
                        question,
                        answer
                    }

                }
            })

        } catch (error) {
            console.error(error)
        }

    }

    const onDelete = (value) => {

        try {
            deleteFaq({
                variables: {
                    id: value
                }
            })
            window.location.reload(true);

        } catch (error) {
            console.error(error)
        }

    }


    return (
        <div>
            {loading ? <div style={{ textAlign: "center" }}>"cargando..."</div> :
                <>{data && data.allFaqs.map(faq => (
                    <div style={{ textAlign: "center", fontSize: "50px", color: "black", backgroundColor: "blue", display: 'flex', justifyContent: 'space-around' }}>
                        {faq.question + " " + faq.answer}
                        <button onClick={() => onDelete(faq.id)}>
                            BORRAR
                        </button>
                    </div>

                ))}</>}

            <div className="flex justify-center">
                <form onSubmit={onSubmit}>
                    <input className='bg-gray-200 shadow-inner rounded-l p-2 flex-1' value={input.question} type='text' id='question' name='question' placeholder='Enter the question' onChange={onChange} />
                    <input className='bg-gray-200 shadow-inner rounded-l p-2 flex-1' value={input.answer} type='text' id='answer' name='answer' placeholder='Enter the answer' onChange={onChange} />
                    <button type='submit' className='bg-yellow-600 hover:bg-yellow-700 duration-300 text-white shadow p-2 rounded-r'>Crear FAQ</button>
                </form>
            </div>


        </div >
    )
}
