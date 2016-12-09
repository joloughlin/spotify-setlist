import { mount } from 'enzyme'
import React from 'react'
import configureStore from 'store/configureStore'
import createBrowserHistory from 'history/createBrowserHistory'
import Root from 'components/Root'

const checkOnlyOneNode = (wrapper, propValue, method) => {
  if (wrapper.length !== 1) {
    throw new Error(`${method} '${propValue}' failed, ${wrapper.length} nodes found`)
  }
}

export default class Page {
  constructor(initialUrl='/') {
    this.store = configureStore()
    this.history = createBrowserHistory()
    this.history.push(initialUrl)
    this.wrapper = mount(<Root store={this.store} />)
    this.lastTouchedElement = null
  }

  afterPromisesResolve(callback) {
    setTimeout(() => callback(), 0)
  }

  currentPath() {
    return window.location.pathname
  }

  destroy() {
    this.wrapper.unmount()
    this.history.push('/')
  }

  content() {
    return this.wrapper.text()
  }

  outputHtml() {
    //eslint-disable-next-line no-console
    console.log(this.wrapper.html())
  }

  findElement(type, propValue, propsToCheck, requiredProps = {}) {
    return this.wrapper.findWhere(element => {
      if (element.type() === type) {
        const elementProps = element.props()
        const requiredPropNames = Object.keys(requiredProps)

        if (requiredPropNames.every(propName => elementProps[propName] === requiredProps[propName])) {
          return propsToCheck.some(prop => elementProps[prop] === propValue)
        }

        return false
      }

      return false
    })
  }

  findButton(propValue, propsToCheck = ['id', 'children']) {
    return this.findElement('button', propValue, propsToCheck)
  }

  findCheckbox(propValue, propsToCheck = ['id', 'name']) {
    return this.findElement('input', propValue, propsToCheck, { type: 'checkbox' })
  }

  findInput(propValue, propsToCheck = ['id', 'name', 'placeholder']) {
    return this.findElement('input', propValue, propsToCheck)
  }

  findLink(propValue, propsToCheck = ['id', 'href', 'children']) {
    return this.findElement('a', propValue, propsToCheck)
  }

  findOption(propValue, propsToCheck = ['children']) {
    return this.findElement('option', propValue, propsToCheck)
  }

  findRadio(propValue, propsToCheck = ['id', 'name']) {
    return this.findElement('input', propValue, propsToCheck, { type: 'radio' })
  }

  findSelect(propValue, propsToCheck = ['id', 'name']) {
    return this.findElement('select', propValue, propsToCheck)
  }

  findTextArea(propValue, propsToCheck = ['id', 'name', 'placeholder']) {
    return this.findElement('textarea', propValue, propsToCheck)
  }

  check(propValue, propsToCheck) {
    const checkbox = this.findCheckbox(propValue, propsToCheck)
    checkOnlyOneNode(checkbox, propValue, 'check')
    this.blurLastTouchedElement(checkbox)
    checkbox.simulate('focus')
    checkbox.simulate('change', {
      target: {
        checked: true,
        type: 'checkbox',
        value: checkbox.props().value || 'on',
      },
    })
  }

  choose(propValue, propsToCheck) {
    const radio = this.findRadio(propValue, propsToCheck)
    checkOnlyOneNode(radio, propValue, 'choose')
    this.blurLastTouchedElement(radio)
    radio.simulate('focus')
    radio.simulate('change', {
      target: {
        checked: true,
        type: 'radio',
        value: radio.props().value || 'on',
      },
    })
  }

  clickLink(propValue, propsToCheck) {
    const link = this.findLink(propValue, propsToCheck)
    checkOnlyOneNode(link, propValue, 'clickLink')
    link.simulate('click', { button: 0 })
  }

  fillIn(propValue, value, propsToCheck) {
    let input = this.findInput(propValue, propsToCheck)
    input = input.length === 0 ? this.findTextArea(propValue, propsToCheck) : input
    checkOnlyOneNode(input, propValue, 'fillIn')
    this.blurLastTouchedElement(input)
    input.simulate('focus')
    input.simulate('change', { target: { value } })
  }

  select(propValue, optionText, propsToCheck) {
    const select = this.findSelect(propValue, propsToCheck)
    checkOnlyOneNode(select, propValue, 'select')
    const option = select.findWhere(element => {
      return element.type() === 'option' && element.props().children === optionText
    })
    if (option.length !== 1) {
      throw new Error(`select '${propValue}' failed, ${option.length} ${optionText} options found for select box`)
    }

    this.blurLastTouchedElement(select)
    select.simulate('focus')
    select.simulate('change', { target: { value: option.props().value } })
  }

  clickButton(propValue, propsToCheck) {
    const button = this.findButton(propValue, propsToCheck)
    checkOnlyOneNode(button, propValue, 'clickButton')
    this.blurLastTouchedElement(button)
    button.simulate('focus')
    button.simulate('click')
    button.simulate('submit')
  }

  blurLastTouchedElement(touchedElement) {
    if (this.lastTouchedElement) {
      this.lastTouchedElement.simulate('blur')
      this.lastTouchedElement = null
    }
    this.lastTouchedElement = touchedElement
  }
}
