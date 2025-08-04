# Multilingual Support

Bike Matrix provides seamless multilingual support in the Shopify app and SDK based on the `lang` attribute in the HTML on your website. By setting the appropriate language code (and optional country code), the SDK will automatically display content in the desired language.

## Supported Languages

The following languages are supported by the Bike Matrix SDK, and are based on the ISO 639-1 standard::

| Language       | ISO Language Code | Example `lang` Attribute |
|----------------|--------------------|---------------------------|
| English (US)   | `en-US`           | `<html lang="en-US">`     |
| English (UK)   | `en-GB`           | `<html lang="en-GB">`     |
| German         | `de`              | `<html lang="de">`        |
| French         | `fr`              | `<html lang="fr">`        |
| Spanish        | `es`              | `<html lang="es">`        |
| Italian        | `it`              | `<html lang="it">`        |
| Dutch          | `nl`              | `<html lang="nl">`        |
| Finnish        | `fi`              | `<html lang="fi">`        |
| Polish         | `pl`              | `<html lang="pl">`        |

## How It Works

The SDK detects the `lang` attribute in the `<html>` tag of your website and adjusts the displayed content accordingly. 

## Notes
If the lang attribute is not set or the specified language is not supported, the SDK will default to English (UK) (en-GB).