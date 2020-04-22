import { Command } from "./Command.ts";
import { Denomander } from "./Denomander.ts";

/**
 * The methods that must be implemented for public api
 * 
 * @export
 * @interface PublicAPI
 */
export interface PublicAPI {
  option(value: string, description: string): Denomander;
  requiredOption(value: string, description: string): Denomander;
  command(value: string, description?: string): Denomander;
  description(description: string): Denomander;
  action(callback: Function): Denomander;
  on(arg: string, callback: Function): Denomander;
  setHelp(command: string, description: string): Denomander;
  setVersion(version: string, command: string, description: string): Denomander;
  parse(args: Array<string>): void;
}

/**
 * Interface to implement parse() method.
 * 
 * @export 
 * @interface Parasable
 */
export interface Parasable {
  parse(args: Array<string>): void;
}

/**
 * Defines the app detail types
 * 
 * @export 
 * @interface AppDetails
 */
export interface AppDetails {
  app_name: string;
  app_description: string;
  app_version: string;
}

/**
 * Defines the .on() command options.
 * 
 * @export 
 * @interface OnCommand
 */
export interface OnCommand {
  command: Command;
  callback: Function;
}

/**
 * Defines the temporary on command options.
 * 
 * @export 
 * @interface TempOnCommand
 */
export interface TempOnCommand {
  arg: string;
  callback: Function;
}

/**
 * Defines the Command object options
 * 
 * @export 
 * @interface CommandOptions
 */
export interface CommandOptions {
  value: string;
  description?: string;
  is_required?: boolean;
  type?: "command" | "option";
  action?: Function;
}

/**
 * Defines the args
 * 
 * @export
 * @interface CustomArgs
 */
export interface CustomArgs {
  [key: string]: string | Array<string>;
}

/**
 * Defines all the types of commands
 * 
 * @export
 * @interface CommandTypes
 */
export interface CommandTypes {
  default_options: Array<Command>;
  required_options: Array<Command>;
  options: Array<Command>;
  commands: Array<Command>;
}

export interface ValidatorContract {
  validate(): void;
}

export interface ValidationResult {
  passed: boolean;
  error?: Error;
}

export interface ArgumentsContract {
  parse(): void;
}
