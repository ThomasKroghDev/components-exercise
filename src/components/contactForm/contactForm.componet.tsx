import React from 'react';
import Button from '../button/button.componet';
import { useForm } from '@/common/hooks/useForm';
import styles from './contactForm.module.css';
const initialState = {
  FirstName: '',
  LastName: '',
  Email: '',
  comment: '',
};

const validations = [
  (values: {
    FirstName: string;
    LastName: string;
    Email: string;
    comment: string;
  }) => {
    const errors: {
      FirstName?: string;
      LastName?: string;
      Email?: string;
      comment?: string;
    } = {};

    if (!values.FirstName) {
      errors.FirstName = 'First name is required';
    }

    if (!values.LastName) {
      errors.LastName = 'Last name is required';
    }

    if (!values.Email) {
      errors.Email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.Email)) {
      errors.Email = 'Invalid email address';
    }

    if (!values.comment) {
      errors.comment = 'Comment is required';
    }

    return errors;
  },
];

const onSubmit = async () => {
  console.log('Submitted');
};

export default function ContactForm() {
  const { values, isValid, errors, changeHandler, touched, submitHandler } =
    useForm(initialState, validations, onSubmit);
  return (
    <div className={styles.contactFormContainer}>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.formControl}>
          <label className={styles.label} htmlFor="FirstName">
            first name
          </label>
          <input
            onChange={changeHandler}
            className={styles.input}
            type="text"
            name="FirstName"
            id="FirstName"
            placeholder="John"
            aria-placeholder="first name"
          />
          {touched.FirstName && errors.FirstName && (
            <p className={styles.validationWarning}>{errors.FirstName}</p>
          )}
        </div>
        <div className={styles.formControl}>
          <label className={styles.label} htmlFor="LastName">
            last Name
          </label>
          <input
            onChange={changeHandler}
            className={styles.input}
            type="text"
            name="LastName"
            id="LastName"
          />
          {touched.LastName && errors.LastName && (
            <p className={styles.validationWarning}>{errors.LastName}</p>
          )}
        </div>
        <div className={styles.formControl}>
          <label className={styles.label} htmlFor="Email">
            email
          </label>
          <input
            onChange={changeHandler}
            className={styles.input}
            type="email"
            name="Email"
            id="Email"
          />
          {touched.Email && errors.Email && (
            <p className={styles.validationWarning}>{errors.Email}</p>
          )}
        </div>
        <div className={styles.formControl}>
          <label className={styles.label} htmlFor="comment">
            comment
          </label>
          <textarea
            onChange={changeHandler}
            className={styles.input}
            name="comment"
            id="comment"
          ></textarea>
          {touched.comment && errors.comment && (
            <p className={styles.validationWarning}>{errors.comment}</p>
          )}
        </div>
        <Button type={'submit'} title={'Submit'} disabled={!isValid} />
      </form>
    </div>
  );
}
