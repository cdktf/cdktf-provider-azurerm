// https://www.terraform.io/docs/providers/azurerm/r/automation_dsc_configuration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface AutomationDscConfigurationConfig extends TerraformMetaArguments {
  readonly automationAccountName: string;
  readonly contentEmbedded: string;
  readonly description?: string;
  readonly location: string;
  readonly logVerbose?: boolean;
  readonly name: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: AutomationDscConfigurationTimeouts;
}
export interface AutomationDscConfigurationTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class AutomationDscConfiguration extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AutomationDscConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_automation_dsc_configuration',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._automationAccountName = config.automationAccountName;
    this._contentEmbedded = config.contentEmbedded;
    this._description = config.description;
    this._location = config.location;
    this._logVerbose = config.logVerbose;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // automation_account_name - computed: false, optional: false, required: true
  private _automationAccountName: string;
  public get automationAccountName() {
    return this._automationAccountName;
  }
  public set automationAccountName(value: string) {
    this._automationAccountName = value;
  }

  // content_embedded - computed: false, optional: false, required: true
  private _contentEmbedded: string;
  public get contentEmbedded() {
    return this._contentEmbedded;
  }
  public set contentEmbedded(value: string) {
    this._contentEmbedded = value;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this._location;
  }
  public set location(value: string) {
    this._location = value;
  }

  // log_verbose - computed: false, optional: true, required: false
  private _logVerbose?: boolean;
  public get logVerbose() {
    return this._logVerbose;
  }
  public set logVerbose(value: boolean | undefined) {
    this._logVerbose = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AutomationDscConfigurationTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: AutomationDscConfigurationTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      automation_account_name: this._automationAccountName,
      content_embedded: this._contentEmbedded,
      description: this._description,
      location: this._location,
      log_verbose: this._logVerbose,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      timeouts: this._timeouts,
    };
  }
}
