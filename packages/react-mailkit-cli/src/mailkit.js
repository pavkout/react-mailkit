import mjml2html from 'mjml-browser'
import camelcase from 'lodash.camelcase'
import capitalize from 'lodash.capitalize'
import upperfirst from 'lodash.upperfirst'

const indentPad = (n) => Array(n + 1).join(' ')

const TAG_CONVERSION = {
  'mj-dev': 'mj-raw',
}

const isHTML = (str) => {
  return /<(?=.*? .*?\/ ?>|br|hr|input|!--|wbr)[a-z]+.*?>|<([a-z]+).*?<\/\1>/i.test(str)
}

const getStyleObjectFromString = (str) => {
  const style = {}
  str.split(';').forEach((el) => {
    const [property, value] = el.split(':')
    if (!property) return

    style[capitalize(property.trim())] = value.trim()
  })

  return {
    style,
  }
}

const lineAttributes = (attrs) =>
  Object.keys(attrs)
    .filter((key) => key !== 'passport')
    .map(
      (key) =>
        `${camelcase(key)}=${
          key === 'style' ? getStyleObjectFromString(attrs[key]) : `"${attrs[key]}"`
        }`,
    )
    .sort()
    .join(' ')

export function json2xml(node, indent = 0) {
  let { tagName } = node
  const { children, content, attributes } = node

  if (tagName in TAG_CONVERSION) {
    tagName = TAG_CONVERSION[tagName] // eslint-disable-line prefer-destructuring
  }

  if (tagName === 'mjml') {
    tagName = 'EMail'
  } else {
    const tagNameWithoutPrefix = tagName.replace('mj-', '')
    tagName = `E${upperfirst(camelcase(capitalize(tagNameWithoutPrefix)))}`
  }

  const space = indentPad(indent)

  let attrs = (attributes && ` ${lineAttributes(attributes)}`) || ''

  if (!attrs.trim()) {
    attrs = ''
  }

  const inside =
    (content && `\n${space}  ${content}\n${space}`) ||
    (children && `\n${children.map((c) => `${json2xml(c, indent + 2)}`).join('\n')}\n${space}`) ||
    ''

  return `${space}<${tagName}${attrs}>${inside}</${tagName}>`
}

export default function mailkit(mjml) {
  const result = mjml2html(mjml)

  return json2xml(result.json)
}
