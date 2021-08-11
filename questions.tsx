import { useState } from "react"

interface IQuestion {
    question: string,
    type: string,
    options: {
        display: string,
        value: boolean | string,
        isRejection: boolean
    }[]
}

interface IQuestions {
    questions: IQuestion[];
    className: string;
    closeQuestions: () => void;
}

export default function Questions({ questions, className, closeQuestions }: IQuestions) {

    const [questionNumber, setQuestionNumber] = useState(0);
    const [answers, setAnswers] = useState([]);

    const onClick = (option: {
        display: string,
        value: boolean | string,
        isRejection: boolean
    }, questionNumber: number) => {
        const copiedAnswers = answers;
        if (option.value && option.isRejection) {
            setQuestionNumber(questions.length + 1)
        }
        else {
            if (answers[questionNumber] !== undefined) {
                copiedAnswers[questionNumber] = option.value;
                setAnswers(copiedAnswers);
            }
            else {
                setAnswers(currentAnswers => [...currentAnswers, option.value])
            }
            setQuestionNumber(questionNumber + 1)
        }
    }

    let displayAnswer: string;
    if (typeof (answers[questionNumber]) === 'boolean') {
        if (answers[questionNumber]) {
            displayAnswer = 'Yes';
        }
        else {
            displayAnswer = 'No'
        }
    }
    else {
        displayAnswer = answers[questionNumber];
    }

    return <div className={className}>
        {questionNumber < questions.length && <><span className="text-center text-4xl font-bold mb-2 text-pine-green uppercase">{questions[questionNumber].question}</span>
            <div className="flex justify-center p-10">
                {questions[questionNumber].options.map((option) => {
                    return <div className="flex flex-col items-center p-10 cursor-pointer"
                        onClick={() => onClick(option, questionNumber)}>
                        <div className="bg-blue-50" dangerouslySetInnerHTML={{ __html: option.display }} />
                        <div>{option.value}</div>
                    </div>
                })}
            </div>
            {answers[questionNumber] !== undefined && <div className="text-center">
                Selected answer: <span>{displayAnswer}</span>
            </div>}
            <div className="flex justify-center p-4">
                {questionNumber !== 0 && <button
                    className="text-white bg-hero-button font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider w-2/12 m-4"
                    onClick={() => setQuestionNumber(questionNumber - 1)}>
                    Previous Question
                </button>}
                {questionNumber !== questions.length - 1 &&
                    <button
                        className="text-white bg-hero-button font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider w-2/12 m-4"
                        onClick={() => setQuestionNumber(questionNumber + 1)}>
                        Next Question
                    </button>}
            </div></>}
        {questionNumber === questions.length && <div className="flex flex-col">
            <h1 className="p-4 text-xl underline">Results</h1>
            {questions.map((question, index) => {
                return <>
                    <span className="text-base mb-2 p-4 text-pine-green uppercase">{question.question}</span>
                    <span className="p-4 ">{typeof (answers[index]) === 'boolean' ? answers[index] === true ? 'Yes' : 'No' : answers[index]}</span>
                </>
            })}
            <div>
                Great news! We have the perfect treatment for your hair loss. Proceed to <a href="http://www.manual.co">www.manual.co</a>, and prepare to say hello to your new hair!”
            </div>
            <button
                className="text-white bg-hero-button font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider w-2/12 m-4"
                onClick={closeQuestions}>
                Exit
            </button>
        </div>}
        {questionNumber > questions.length && <div>
            <div>
                Unfortunately, we are unable to prescribe this medication for you. This is because finasteride can alter the PSA levels, which maybe used to monitor for cancer. You should discuss this further with your GP or specialist if you would still like this medication
            </div>
            <button
                className="text-white bg-hero-button font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider w-2/12 m-4"
                onClick={closeQuestions}>
                Exit
            </button>
        </div>}
    </div>
}
