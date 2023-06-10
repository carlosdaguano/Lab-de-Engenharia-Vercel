import React from "react";
import { useState } from "react";

const FormQuiz = () => {
    const [answer, setAnswer] = useState('');
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('typing');

    if (status === 'success'){
        return <h1>That's Right</h1>
    }

    async function handleSubmit(e){
        e.preventDefault();
        setStatus('submitting');
        try {
            await submitForm(answer);
            setStatus('success');
        } catch (err){
            setStatus('typing');
            setError(err);
        }
    }

    function handleTextareaChange(e){
        setAnswer(e.target.value);
    }

    return(
        <div>
            <h2>City Quiz</h2>
            <p>In witch cittty is there a billboard that turns air into drinkable water?</p>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={answer}
                    onChange={handleTextareaChange}
                    disabled={status === 'submitting'}
                />
                <br/>
                <button disabled={
                    answer.length === 0 ||
                    status === 'submitting'
                }>
                    Submit
                </button>
                {error !== null && <p className="Error">{error.message}</p>}
            </form>
        </div>
    );
}

const submitForm = (answer) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let shouldError = answer.toLowerCase() !== 'lima';
            if (shouldError) {
                reject(new Error('Try again!'));
            } else {
                resolve();
            }
        }, 1500);
    })
}

export default FormQuiz;