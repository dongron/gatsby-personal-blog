import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import config from '../utils/siteConfig'

/*
  ⚠️ This is an example of a contact form powered with Netlify form handling.
  Be sure to review the Netlify documentation for more information:
  https://www.netlify.com/docs/form-handling/
*/

const Form = styled.form`
  max-width: ${(props) => props.theme.sizes.maxWidthCentered};
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  input,
  textarea {
    font-family: inherit;
    font-size: inherit;
    border: none;
    outline: none;
    background: ${(props) => props.theme.colors.tertiary};
    color: ${(props) => props.theme.colors.base};
    border-radius: 2px;
    padding: 1em;
    &::-webkit-input-placeholder {
      color: ${(props) => props.theme.colors.text};
    }
    &::-moz-placeholder {
      color: ${(props) => props.theme.colors.text};
    }
    &:-ms-input-placeholder {
      color: ${(props) => props.theme.colors.text};
    }
    &:-moz-placeholder {
      color: ${(props) => props.theme.colors.text};
    }
    &:required {
      box-shadow: none;
    }
    &:focus {
      outline: none;
    }
  }
  &::before {
    content: '';
    background: black;
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    transition: 0.2s all;
    opacity: ${(props) => (props.overlay ? '.8' : '0')};
    visibility: ${(props) => (props.overlay ? 'visible' : 'hidden')};
  }
`

const Name = styled.input`
  margin: 0 0 1em 0;
  width: 100%;
`

const Email = styled.input`
  margin: 0 0 1em 0;
  width: 100%;
`

const Message = styled.textarea`
  width: 100%;
  margin: 0 0 1em 0;
  line-height: 1.6;
  min-height: 250px;
  resize: vertical;
`

const FieldGroupContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2%;
  width: 100%;
`

const FieldGroup = styled.div`
  width: 100%;

  @media (min-width: ${(props) => props.theme.responsive.small}) {
    width: ${(props) => (props.$half ? '49%' : '100%')};
  }
`

const Label = styled.label`
  display: block;
  margin: 0 0 0.5em 0;
  color: ${(props) => props.theme.colors.base};
  font-weight: 600;
`

const FormNote = styled.p`
  width: 100%;
  margin: 0 0 1.5em 0;
  line-height: 1.7;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 3em;
`

// todo: unify buttons
const Submit = styled.button`
  font-family: inherit;
  font-size: inherit;
  border: none;
  outline: none;
  background: ${(props) => props.theme.colors.base};
  color: white;
  border-radius: 2px;
  padding: 1em;
  cursor: pointer;
  transition: 0.2s;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 75px;
  min-height: 50px;
  gap: 0.5em;
  &:hover:not(:disabled) {
    background: ${(props) => props.theme.colors.highlight};
  }
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

const Spinner = styled.span`
  display: inline-block;
  width: 0.9em;
  height: 0.9em;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`

const Modal = styled.div`
  background: white;
  padding: 2em;
  border-radius: 2px;
  position: fixed;
  min-width: 75%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  z-index: 99;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  transition: 0.2s all;
  opacity: ${(props) => (props.visible ? '1' : '0')};
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
  @media screen and (min-width: ${(props) => props.theme.responsive.small}) {
    min-width: inherit;
    max-width: 400px;
  }
  p {
    line-height: 1.6;
    margin: 0 0 2em 0;
  }
`

const ActionButton = styled.button`
  background: ${(props) => props.theme.colors.base};
  font-family: inherit;
  font-size: 1em;
  display: inline-block;
  margin: 0 auto;
  border: none;
  outline: none;
  cursor: pointer;
  color: white;
  padding: 1em;
  border-radius: 2px;
  text-decoration: none;
  transition: 0.2s;
  z-index: 99;
  &:hover {
    background: ${(props) => props.theme.colors.highlight};
  }
`

const ActionLink = styled.a`
  background: ${(props) => props.theme.colors.base};
  font-size: 1em;
  display: inline-block;
  margin: 0 auto;
  border: none;
  outline: none;
  cursor: pointer;
  color: white;
  padding: 1em;
  border-radius: 2px;
  text-decoration: none;
  transition: 0.2s;
  z-index: 99;
  &:hover {
    background: ${(props) => props.theme.colors.highlight};
  }
`

const defaultContent = {
  note: `${config.remoteAvailabilityText} ${config.preferredContactText}`,
  fields: {
    name: {
      label: 'Full Name',
      placeholder: 'Full Name',
    },
    email: {
      label: 'Email',
      placeholder: 'Email',
    },
    message: {
      label: 'Message',
      placeholder: 'Message',
    },
  },
  submitLabel: 'Send',
  loadingLabel: 'Sending...',
  modal: {
    success: {
      title: 'Success',
      message:
        'Thank you for reaching out. I will get back to you as soon as possible.',
      closeLabel: 'Ok',
    },
    error: {
      title: 'Error',
      message:
        'Something went wrong sending your message. You can email me directly at',
      actionLabel: 'Open email',
    },
  },
}

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.modalRef = React.createRef()
    this.closeButtonRef = React.createRef()
    this.lastFocusedElement = null
    this.state = {
      name: '',
      email: '',
      message: '',
      showModal: false,
      status: null,
      loading: false,
    }
  }

  handleInputChange = (event) => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({ loading: true })
    fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        message: this.state.message,
      }),
    })
      .then((res) => {
        console.log(res)
        if (!res.ok) throw new Error('-Failed to send message')
        return res.json()
      })
      .then(this.handleSuccess)
      .catch((error) => {
        console.error(error.message)
        this.setState({ showModal: true, status: 'error' })
      })
      .finally(() => this.setState({ loading: false }))
  }

  handleSuccess = () => {
    // Fire Google Ads / GA4 conversion event on successful submission.
    // Reads `?ref=` from the current URL so we can attribute leads to a
    // specific landing page (e.g. ?ref=wcag-audit, ?ref=audyt-wcag).
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      let ref = null
      try {
        ref = new URLSearchParams(window.location.search).get('ref')
      } catch (e) {
        ref = null
      }
      window.gtag('event', 'contact_form_submit', {
        event_category: 'lead',
        event_label: ref || 'contact',
        ref: ref || null,
        page_path: window.location.pathname,
      })
      // Optional Google Ads conversion (uncomment + replace when ID is set):
      // window.gtag('event', 'conversion', {
      //   send_to: 'AW-XXXXXXXX/YYYYYYYYYYYY',
      //   event_label: ref || 'contact',
      // })
    }
    this.setState({
      name: '',
      email: '',
      message: '',
      showModal: true,
      status: 'success',
    })
  }

  componentDidUpdate(prevProps, prevState) {
    const isDialogOpen =
      this.state.showModal &&
      (this.state.status === 'error' || this.state.status === 'success')
    const wasDialogOpen =
      prevState.showModal &&
      (prevState.status === 'error' || prevState.status === 'success')

    if (!wasDialogOpen && isDialogOpen) {
      this.lastFocusedElement = document.activeElement
      if (this.closeButtonRef.current) {
        this.closeButtonRef.current.focus()
      }
    }

    if (wasDialogOpen && !isDialogOpen && this.lastFocusedElement) {
      this.lastFocusedElement.focus()
      this.lastFocusedElement = null
    }
  }

  handleDialogKeyDown = (event) => {
    if (event.key === 'Escape') {
      this.closeModal()
    }
  }

  stopPropagation = (event) => {
    event.stopPropagation()
  }

  closeModal = () => {
    this.setState({ showModal: false, status: null })
  }

  buildMailtoHref = () => {
    const { name, email, message } = this.state
    const subject = `Contact from ${name || 'your website'}`
    const body = `${message}\n\n— ${name}${email ? ` <${email}>` : ''}`
    return `mailto:${config.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`
  }

  render() {
    const mergedContent = {
      ...defaultContent,
      ...this.props.content,
      fields: {
        ...defaultContent.fields,
        ...(this.props.content && this.props.content.fields),
      },
      modal: {
        ...defaultContent.modal,
        ...(this.props.content && this.props.content.modal),
        success: {
          ...defaultContent.modal.success,
          ...(this.props.content &&
            this.props.content.modal &&
            this.props.content.modal.success),
        },
        error: {
          ...defaultContent.modal.error,
          ...(this.props.content &&
            this.props.content.modal &&
            this.props.content.modal.error),
        },
      },
    }
    const dialogVisible =
      this.state.showModal &&
      (this.state.status === 'error' || this.state.status === 'success')
    const dialogDescriptionId =
      this.state.status === 'error'
        ? 'contact-form-modal-description-error'
        : 'contact-form-modal-description-success'

    return (
      <Form
        name="contact"
        onSubmit={this.handleSubmit}
        overlay={dialogVisible}
        onClick={dialogVisible ? this.closeModal : undefined}
      >
        <FormNote>{mergedContent.note}</FormNote>
        <FieldGroupContainer>
          <FieldGroup $half>
            <Label htmlFor="contact-name">
              {mergedContent.fields.name.label}
            </Label>
            <Name
              id="contact-name"
              name="name"
              type="text"
              placeholder={mergedContent.fields.name.placeholder}
              value={this.state.name}
              onChange={this.handleInputChange}
              required
            />
          </FieldGroup>
          <FieldGroup $half>
            <Label htmlFor="contact-email">
              {mergedContent.fields.email.label}
            </Label>
            <Email
              id="contact-email"
              name="email"
              type="email"
              placeholder={mergedContent.fields.email.placeholder}
              value={this.state.email}
              onChange={this.handleInputChange}
              required
            />
          </FieldGroup>
        </FieldGroupContainer>
        <FieldGroup>
          <Label htmlFor="contact-message">
            {mergedContent.fields.message.label}
          </Label>
          <Message
            id="contact-message"
            name="message"
            type="text"
            placeholder={mergedContent.fields.message.placeholder}
            value={this.state.message}
            onChange={this.handleInputChange}
            required
          />
        </FieldGroup>
        <Submit type="submit" disabled={this.state.loading}>
          {this.state.loading ? (
            <>
              <Spinner aria-hidden="true" />
              <span>{mergedContent.loadingLabel}</span>
            </>
          ) : (
            mergedContent.submitLabel
          )}
        </Submit>

        <Modal
          ref={this.modalRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-form-modal-title"
          aria-describedby={dialogDescriptionId}
          visible={dialogVisible}
          onClick={this.stopPropagation}
          onKeyDown={this.handleDialogKeyDown}
        >
          <h2 id="contact-form-modal-title" style={{ margin: '0 0 0.5em 0' }}>
            {this.state.status === 'error'
              ? mergedContent.modal.error.title
              : mergedContent.modal.success.title}
          </h2>
          {this.state.status === 'error' ? (
            <>
              <p id="contact-form-modal-description-error">
                {mergedContent.modal.error.message}{' '}
                <strong>{config.email}</strong>.
              </p>
              <ActionLink
                href={this.buildMailtoHref()}
                onClick={this.closeModal}
                ref={this.closeButtonRef}
              >
                {mergedContent.modal.error.actionLabel}
              </ActionLink>
            </>
          ) : this.state.status === 'success' ? (
            <>
              <p id="contact-form-modal-description-success">
                {mergedContent.modal.success.message}
              </p>
              <ActionButton
                type="button"
                onClick={this.closeModal}
                ref={this.closeButtonRef}
              >
                {mergedContent.modal.success.closeLabel}
              </ActionButton>
            </>
          ) : (
            <></>
          )}
        </Modal>
      </Form>
    )
  }
}

ContactForm.propTypes = {
  data: PropTypes.object,
  content: PropTypes.shape({
    note: PropTypes.string,
    fields: PropTypes.shape({
      name: PropTypes.shape({
        label: PropTypes.string,
        placeholder: PropTypes.string,
      }),
      email: PropTypes.shape({
        label: PropTypes.string,
        placeholder: PropTypes.string,
      }),
      message: PropTypes.shape({
        label: PropTypes.string,
        placeholder: PropTypes.string,
      }),
    }),
    submitLabel: PropTypes.string,
    loadingLabel: PropTypes.string,
    modal: PropTypes.shape({
      success: PropTypes.shape({
        title: PropTypes.string,
        message: PropTypes.string,
        closeLabel: PropTypes.string,
      }),
      error: PropTypes.shape({
        title: PropTypes.string,
        message: PropTypes.string,
        actionLabel: PropTypes.string,
      }),
    }),
  }),
}

export default ContactForm
