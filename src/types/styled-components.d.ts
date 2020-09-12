/*
 * Configuration for testing using toHaveStyleRule
 * @github.com/styled-components/jest-styled-components/blob/master/typings/index.d.ts
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import { Plugin, NewPlugin } from 'pretty-format'

declare global {
  namespace jest {
    interface AsymmetricMatcher {
      $$typeof: Symbol
      sample?: string | RegExp | object | Array<any> | Function
    }

    type Value = string | number | RegExp | AsymmetricMatcher | undefined

    interface Options {
      media?: string
      modifier?: string
      supports?: string
    }

    interface Matchers<R, T> {
      toHaveStyleRule(property: string, value?: Value, options?: Options): R
    }
  }
}

export declare const styleSheetSerializer: Exclude<Plugin, NewPlugin>