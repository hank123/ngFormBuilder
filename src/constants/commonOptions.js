/**
  * These are component options that can be reused
  * with the builder-option directive
  * Valid properties: label, placeholder, tooltip, type
  */
module.exports = {
  label: {
    label: '标签',
    placeholder: 'Field Label',
    tooltip: 'The label for this field that will appear next to it.'
  },
  defaultValue: {
    label: '缺省值',
    placeholder: 'Default Value',
    tooltip: 'The will be the value for this field, before user interaction. Having a default value will override the placeholder text.'
  },
  placeholder: {
    label: '站位符',
    placeholder: 'Placeholder',
    tooltip: 'The placeholder text that will appear when this field is empty.'
  },
  inputMask: {
    label: '输入掩码',
    placeholder: 'Input Mask',
    tooltip: 'An input mask helps the user with input by ensuring a predefined format.<br><br>9: numeric<br>a: alphabetical<br>*: alphanumeric<br><br>Example telephone mask: (999) 999-9999<br><br>See the <a target=\'_blank\' href=\'https://github.com/RobinHerbots/jquery.inputmask\'>jquery.inputmask documentation</a> for more information.</a>'
  },
  authenticate: {
    label: 'Formio Authenticate',
    tooltip: 'Check this if you would like to use Formio Authentication with the request.',
    type: 'checkbox'
  },
  tableView: {
    label: '表单显示',
    type: 'checkbox',
    tooltip: 'Shows this value within the table view of the submissions.'
  },
  prefix: {
    label: '字首',
    placeholder: 'example \'$\', \'@\'',
    tooltip: 'The text to show before a field.'
  },
  suffix: {
    label: '字尾',
    placeholder: 'example \'$\', \'@\'',
    tooltip: 'The text to show after a field.'
  },
  multiple: {
    label: '多值',
    type: 'checkbox',
    tooltip: 'Allows multiple values to be entered for this field.'
  },
  disabled: {
    label: '禁用',
    type: 'checkbox',
    tooltip: 'Disable the form input.'
  },
  clearOnRefresh: {
    label: '刷新清理',
    type: 'checkbox',
    tooltip: 'When the Refresh On field is changed, clear the selected value.'
  },
  unique: {
    label: '唯一',
    type: 'checkbox',
    tooltip: 'Makes sure the data submitted for this field is unique, and has not been submitted before.'
  },
  protected: {
    label: '保护',
    type: 'checkbox',
    tooltip: 'A protected field will not be returned when queried via API.'
  },
  image: {
    label: '以图像显示',
    type: 'checkbox',
    tooltip: 'Instead of a list of linked files, images will be rendered in the view.'
  },
  imageSize: {
    label: '图像尺寸',
    placeholder: '100',
    tooltip: 'The image size for previewing images.'
  },
  persistent: {
    label: '可存储',
    type: 'checkbox',
    tooltip: 'A persistent field will be stored in database when the form is submitted.'
  },
  block: {
    label: '块',
    type: 'checkbox',
    tooltip: 'This control should span the full width of the bounding container.'
  },
  leftIcon: {
    label: '左图标',
    placeholder: 'Enter icon classes',
    tooltip: 'This is the full icon class string to show the icon. Example: \'glyphicon glyphicon-search\' or \'fa fa-plus\''
  },
  rightIcon: {
    label: '右图标',
    placeholder: 'Enter icon classes',
    tooltip: 'This is the full icon class string to show the icon. Example: \'glyphicon glyphicon-search\' or \'fa fa-plus\''
  },
  url: {
    label: '上传 Url',
    placeholder: 'Enter the url to post the files to.',
    tooltip: 'See <a href=\'https://github.com/danialfarid/ng-file-upload#server-side\' target=\'_blank\'>https://github.com/danialfarid/ng-file-upload#server-side</a> for how to set up the server.'
  },
  dir: {
    label: '路径',
    placeholder: '(optional) Enter a directory for the files',
    tooltip: 'This will place all the files uploaded in this field in the directory'
  },
  disableOnInvalid: {
    label: '表单无效时禁用',
    type: 'checkbox',
    tooltip: 'This will disable this field if the form is invalid.'
  },
  striped: {
    label: '条纹',
    type: 'checkbox',
    tooltip: 'This will stripe the table if checked.'
  },
  bordered: {
    label: '边框',
    type: 'checkbox',
    tooltip: 'This will border the table if checked.'
  },
  hover: {
    label: '盘旋',
    type: 'checkbox',
    tooltip: 'Highlight a row on hover.'
  },
  condensed: {
    label: '压缩',
    type: 'checkbox',
    tooltip: 'Condense the size of the table.'
  },
  datagridLabel: {
    label: '数据表格标签',
    type: 'checkbox',
    tooltip: 'Show the label when in a datagrid.'
  },
  'validate.required': {
    label: '必须',
    type: 'checkbox',
    tooltip: 'A required field must be filled in before the form can be submitted.'
  },
  'validate.minLength': {
    label: '最小长度',
    placeholder: 'Minimum Length',
    type: 'number',
    tooltip: 'The minimum length requirement this field must meet.'
  },
  'validate.maxLength': {
    label: '最大长度',
    placeholder: 'Maximum Length',
    type: 'number',
    tooltip: 'The maximum length requirement this field must meet'
  },
  'validate.pattern': {
    label: '正则表达式',
    placeholder: 'Regular Expression Pattern',
    tooltip: 'The regular expression pattern test that the field value must pass before the form can be submitted.'
  },
  'customClass': {
    label: '客户化 CSS',
    placeholder: 'Custom CSS Class',
    tooltip: 'Custom CSS class to add to this component.'
  },
  'tabindex': {
    label: '选项卡索引',
    placeholder: 'Tab Index',
    tooltip: 'Sets the tabindex attribute of this component to override the tab order of the form. See the <a href=\'https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex\'>MDN documentation</a> on tabindex for more information.'
  },
  'addAnother': {
    label: '添加键文本',
    placeholder: 'Add Another',
    tooltip: 'Set the text of the Add Another button.'
  },
  'defaultDate': {
    label: '缺省值',
    placeholder: 'Default Value',
    tooltip: 'You can use Moment.js functions to set the default value to a specific date. For example: \n \n moment().subtract(10, \'days\').calendar();'
  },
  // Need to use array notation to have dash in name
  'style[\'margin-top\']': {
    label: '顶部余量',
    placeholder: '0px',
    tooltip: 'Sets the top margin of this component. Must be a valid CSS measurement like `10px`.'
  },
  'style[\'Margin Right\']': {
    label: '右边余量',
    placeholder: '0px',
    tooltip: 'Sets the right margin of this component. Must be a valid CSS measurement like `10px`.'
  },
  'style[\'Margin Bottom\']': {
    label: '下方余量',
    placeholder: '0px',
    tooltip: 'Sets the bottom margin of this component. Must be a valid CSS measurement like `10px`.'
  },
  'style[\'Margin Left\']': {
    label: '左边余量Margin Left',
    placeholder: '0px',
    tooltip: 'Sets the left margin of this component. Must be a valid CSS measurement like `10px`.'
  }
};
