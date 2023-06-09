import React, { useEffect, useState } from 'react';
import './style.css';
import FormElementMessage from '../shared/FormElementMessage';
import SigninFormErrorMessages from '../types/SigninFormErrorMessagesType';
import SigninRequest from '../types/SigninRequest';
import { TranslationDictionary, TranslationName, getTranslation } from '../types/TranslationDictionaryType';
import Checkbox from '../ui/Checkbox';
import Tagline from '../Tagline';

interface Props {
  onSignin: any;
  onSignup: any;
  onForgotPassword: any;
  signinFormErrorMessages: SigninFormErrorMessages;
  dictionary: TranslationDictionary;
}

const SigninForm = (props: Props) => {
  const [state, setState] = useState<SigninRequest>({
    email: "",
    password: ""
  });

  const onInput = (event: any) => {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const onSignin = (event: any) => {
    event.preventDefault();
    props.onSignin({
      ...state
    })
  }

  return (
    <form onSubmit={onSignin} className="authlite-signin-form">
      <div className='authlite-margin-top'>
        <Tagline title={props.dictionary.SIGNIN_FORM__GREETING_TITLE} subtitle={props.dictionary.SIGNIN_FORM__GREETING_SUBTITLE} />
      </div>
      <div className='authlite-margin-top'>
        <FormElementMessage text={getTranslation(TranslationName.SIGNIN_FORM__LABEL_USERNAME, props.dictionary)} type='label' />
        <input className="authlite-input" autoComplete='off' autoFocus name="email" value={state.email} onInput={onInput} />
        {props.signinFormErrorMessages.email && <FormElementMessage text={getTranslation(props.signinFormErrorMessages.email, props.dictionary)} type='error' />}
      </div>
      <div className='authlite-margin-top'>
        <FormElementMessage text={getTranslation(TranslationName.SIGNIN_FORM__LABEL_PASSWORD, props.dictionary)} type='label' />
        <input className="authlite-input" name="password" value={state.password} onInput={onInput} type="password" />
        {props.signinFormErrorMessages.password && <FormElementMessage text={getTranslation(props.signinFormErrorMessages.password, props.dictionary)} type='error' />}
      </div>
      <div className="authlite-signin-form__forgot authlite-margin-top-small">
        <Checkbox label='Remember me' />
        <button className="authlite-button-as-link" type="button" onClick={props.onForgotPassword}>
          {getTranslation(TranslationName.SIGNIN_FORM__ACTION_FORGOTPASSWORD, props.dictionary)}
        </button>
      </div>
      <div className="authlite-action-bar authlite-margin-top">
        <button className="authlite-primary-button" type="submit">{getTranslation(TranslationName.SIGNIN_FORM__ACTION_SIGNIN, props.dictionary)}</button>
      </div>
      <div className="authlite-margin-top authlite-action-bar-center">
        {getTranslation(TranslationName.SIGNIN_FORM__MESSAGE_NO_ACCOUNT, props.dictionary)}
        <button className="authlite-button-as-link" type="button" onClick={props.onSignup}>{getTranslation(TranslationName.SIGNIN_FORM__ACTION_CREATEACCOUNT, props.dictionary)}</button>
      </div>
    </form>
  )
};

export default SigninForm;
