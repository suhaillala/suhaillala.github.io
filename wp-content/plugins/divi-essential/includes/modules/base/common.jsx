import React from "react";

/**
 * Title Component
 * @param {{
    title: string
    dynamicTitle: object
    tag: String
    classes: string
  }}
 * @param {string} String- As title props, you have to serve title text slug(not dynamic slug)
 * @param {object} Object- As dynamicTitle props, serve dynamic title text slug(ex: this.props.dynamic.your_title_slug)
 * @param {String} String- As tag props , serve your title's html tag (ex: h1,h2,h3 etc).By default it's 'h2'.
 * @param {string} String- As classes props, you have to serve Title css className, By default there will be no className
 */
const Title = ({ title, dynamicTitle, tag = "h2", classes = "" }) => {
  if ("" === title) return "";
  const HeadingTag = tag;
  let titleText = dynamicTitle;
  let titleComponent = titleText.render();
  if (titleText.loading) return titleComponent;
  return <HeadingTag className={classes}>{titleComponent}</HeadingTag>;
};

/**
 * Description Component
 * @param {{
 *  desc: String
 *  dynamicDesc: Object
 *  classes: String
 * }}
 * @param {string} String- As desc props, you have to serve description text slug(not dynamic slug)
 * @param {object} Object- As dynamicDesc props, serve dynamic description text slug(ex: this.props.dynamic.your_desc_slug)
 * @param {string} String- As classes props, you have to serve Description css className, By default there will be no className
 */
const Description = ({ desc, dynamicDesc, classes = "" }) => {
  if ("" === desc) return "";
  let descComponent = dynamicDesc.render();
  if (dynamicDesc.loading) return descComponent;
  return (
    <div
      className={classes}
      dangerouslySetInnerHTML={{ __html: dynamicDesc.value }}
    />
  );
};

/**
 * Button Component
 * @param {{
 *  text: String
 *  dynamicText: String
 *  link: String,
 *  linkTarget: String,
 *  classes: String
 * }}
 * @param {string} String- As text props, you have to serve button text slug(not dynamic slug)
 * @param {object} Object- As dynamicText props, serve dynamic button text slug(ex: this.props.dynamic.your_button_slug)
 * @param {String} String- As link props, serve valid url (ex: https://divinext.com)
 * @param {String} String- As linkTarget props, serve link target(ex: _blank, _self etc.)
 * @param {string} String- As classes props, you have to serve Button css className, By default there will be no className
 */
const Button = ({ text, dynamicText, link, linkTarget, classes = "" }) => {
  const validURL = (str) => {
    const pattern = /^((http|https|ftp):\/\/)/;
    if (!pattern.test(str)) return `http://${str}`;
    return str;
  };
  if ("" === text) return "";
  const validLink = validURL(link);
  let buttonComponent = dynamicText.render();
  if (dynamicText.loading) return buttonComponent;
  return (
    <a className={classes} href={validLink} target={linkTarget}>
      {buttonComponent}
    </a>
  );
};

/**
 * Image Component
 * @param {{
 *  dynamicImg: Object
 *  lastEdited: String
 *  hoverEnabled: String
 *  imageTablet: String
 *  imagePhone: String
 *  imageHover: String
 *  imgAlt: Object
 *  classes: String
 * }}
 * @param {object} Object -As dynamicImg props, serve dynamic image slug(ex: this.props.dynamic.your_image_slug)
 * @param {string} String -As lastEdited props, serve image slug last edited(ex: this.props.your_image_slug_last_edited).note that lastEdited props should not be dynamic
 * @param {string} String -As hoverEnabled props, serve image slug hover enabled(ex: this.props.your_image_slug__hover_enabled). note that hoverEnabled props should not be dynamic
 * @param {string} String -As imageTablet props, serve dynamic image slug tablet(ex: this.props.dynamic.your_image_slug_tablet)
 * @param {string} String -As imagePhone props, serve dynamic image slug phone(ex: this.props.dynamic.your_image_slug_phone)
 * @param {string} String -As imageHover props, serve dynamic image slug hover(ex: this.props.dynamic.your_image_slug__hover)
 * @param {string} String -As imgAlt props, serve dynamic image alt text(ex: this.props.dynamic.your_image_slug_alt_text)
 * @param {string} String -As classes props, you have to serve image css className, By default there will be no className
 */

const Image = ({
  dynamicImg,
  lastEdited,
  hoverEnabled,
  imageTablet,
  imagePhone,
  imageHover,
  imgAlt,
  classes = "",
}) => {
  let img = dynamicImg;
  if ("" === img.value) return "";

  if (img.loading) return img.render();

  if ("on|tablet" === lastEdited) {
    return (
      <img
        src={imageTablet.value ? imageTablet.value : img.value}
        alt={imgAlt.value}
        className={classes}
      />
    );
  } else if ("on|phone" === lastEdited) {
    return (
      <img
        src={
          imagePhone.value
            ? imagePhone.value
            : imageTablet.value
            ? imageTablet.value
            : img.value
        }
        alt={imgAlt.value}
        className={classes}
      />
    );
  } else if ("on|hover" === hoverEnabled) {
    return (
      <img
        src={imageHover.value ? imageHover.value : img.value}
        alt={imgAlt.value}
        className={classes}
      />
    );
  } else {
    return <img src={img.value} alt={imgAlt.value} className={classes} />;
  }
};

/**
 * Icon Component
 * @param {{
 *  utils: Object
 *  tag: String
 *  icon: String
 *  classes: String
 * }}
 * @param {Object} Object -As utils props, serve DIVI's utility object
 * @param {String} String -As tag props, serve Icon's html tag, By default it's' span tag.
 * @param {String} String -As icon props, serve Icon slug, note that icon slug should not be dynamic.
 * @param {string} String -As classes props, you have to serve image css className, By default there will be no className
 */

const Icon = ({ utils, tag = "span", icon, classes = "" }) => {
  if (icon === "") return "";
  const Tag = tag;
  const processedIcon = utils.processFontIcon(icon);

  return <Tag className={classes}>{processedIcon}</Tag>;
};

export { Title, Description, Button, Image, Icon };
