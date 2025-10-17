# Multilingual Support

Bike Matrix provides multilingual support for **all** integration methods.

## Supported Languages

The following languages are supported by the Bike Matrix and are based on the ISO 639-1 standard:

| Language     | ISO Language Code | Example `lang` Attribute |
| ------------ | ----------------- | ------------------------ |
| English (US) | `en-US`           | `<html lang="en-US">`    |
| English (UK) | `en-GB`           | `<html lang="en-GB">`    |
| German       | `de`              | `<html lang="de">`       |
| French       | `fr`              | `<html lang="fr">`       |
| Spanish      | `es`              | `<html lang="es">`       |
| Italian      | `it`              | `<html lang="it">`       |
| Dutch        | `nl`              | `<html lang="nl">`       |
| Finnish      | `fi`              | `<html lang="fi">`       |
| Polish       | `pl`              | `<html lang="pl">`       |

## Shopify & SDK Integrations

Bike Matrix provides seamless multilingual support for **Shopify** and **SDK** integrations using on the `lang` attribute in the HTML on your website. By setting the appropriate language code (and optional country code), the Bike Matrix web components will automatically display content in the desired language.

:::info

If the lang attribute is not set or the specified language is not supported, Bike Matrix will default to English (UK) (en-GB).

:::

## API Integrations

Bike Matrix APIs which provide a response written in a language will always provide a `lang` parameter. These use the ISO Language Code to chose the language.
