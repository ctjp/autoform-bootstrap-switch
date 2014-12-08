# AutoForm Bootstrap Switch
[![Build Status](https://img.shields.io/travis/ctjp/autoform-bootstrap-switch.svg?style=flat)](https://travis-ci.org/ctjp/autoform-bootstrap-switch)

An add-on Meteor package for [aldeed:autoform](https://github.com/aldeed/meteor-autoform). Provides a single custom input type, "bootstrap-switch", which renders an input using the [bootstrap-switch](https://github.com/nostalgiaz/bootstrap-switch) plugin.

## Prerequisites

The plugin library must be installed separately.

In a Meteor app directory, enter:

```bash
$ meteor add ctjp:meteor-bootstrap-switch
$ meteor add aldeed:autoform
```

## Installation

In a Meteor app directory, enter:

```bash
$ meteor add ctjp:autoform-bootstrap-switch
```

## Usage

Specify "bootstrap-switch" for the `type` attribute of any input. This can be done in a number of ways:

In the schema, which will then work with a `quickForm` or `afQuickFields`:

```js
{
  enabled: {
    type: Boolean,
    defaultValue: true,
    autoform: {
      type: 'bootstrap-switch',
      afFieldInput: {
        switchOptions: {
          size: 'small',
          onColor: 'success'
        }
      }
    }
  }
}
```

Or on the `afFieldInput` component or any component that passes along attributes to `afFieldInput`:

```js
{{> afQuickField name="enabled" type="bootstrap-switch" switchOptions=helperFunction}}

{{> afFormGroup name="enabled" type="bootstrap-switch" switchOptions=helperFunction}}

{{> afFieldInput name="enabled" type="bootstrap-switch" switchOptions=helperFunction}}
```

To provide bootstrap-switch options, set a `switchOptions` attribute equal to a helper that returns the options object.
