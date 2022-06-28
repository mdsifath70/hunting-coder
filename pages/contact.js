import { useState } from 'react';
import styles from '../styles/Contact.module.scss';

export default function Contact() {
    const [userInput, setUserInput] = useState({
        name: '',
        email: '',
        phone: '',
        desc: '',
    });

    const changeHandler = (e) => {
        setUserInput((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('http://localhost:3000/api/postContact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userInput),
            });
            const responseMessage = await res.json();
            setUserInput({
                name: '',
                email: '',
                phone: '',
                desc: '',
            });
            alert(responseMessage.message);
        } catch (err) {
            console.log(err);
        }
    };

    const { name, email, phone, desc } = userInput;

    return (
        <div className="container">
            <form className={styles.form} onSubmit={submitHandler}>
                <div className={styles.inputField}>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        placeholder="Enter name"
                        name="name"
                        id="name"
                        required
                        value={name}
                        onChange={changeHandler}
                    />
                </div>
                <div className={styles.inputField}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        id="email"
                        required
                        value={email}
                        onChange={changeHandler}
                    />
                </div>
                <div className={styles.inputField}>
                    <label htmlFor="phone">Phone</label>
                    <input
                        type="number"
                        placeholder="Enter phone"
                        name="phone"
                        id="phone"
                        required
                        value={phone}
                        onChange={changeHandler}
                    />
                </div>
                <div className={styles.inputField}>
                    <label htmlFor="desc">Description</label>
                    <textarea
                        placeholder="Enter description"
                        name="desc"
                        id="desc"
                        cols="50"
                        rows="5"
                        required
                        value={desc}
                        onChange={changeHandler}
                    ></textarea>
                </div>
                <input
                    className={styles.submitBtn}
                    type="submit"
                    value="Submit"
                />
            </form>
        </div>
    );
}
