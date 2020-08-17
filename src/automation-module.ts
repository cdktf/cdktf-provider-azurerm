// https://www.terraform.io/docs/providers/azurerm/r/automation_module.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface AutomationModuleConfig extends TerraformMetaArguments {
  readonly automationAccountName: string;
  readonly name: string;
  readonly resourceGroupName: string;
  /** module_link block */
  readonly moduleLink: AutomationModuleModuleLink[];
  /** timeouts block */
  readonly timeouts?: AutomationModuleTimeouts;
}
export interface AutomationModuleModuleLinkHash {
  readonly algorithm: string;
  readonly value: string;
}
export interface AutomationModuleModuleLink {
  readonly uri: string;
  /** hash block */
  readonly hash?: AutomationModuleModuleLinkHash[];
}
export interface AutomationModuleTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class AutomationModule extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AutomationModuleConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_automation_module',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._automationAccountName = config.automationAccountName;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._moduleLink = config.moduleLink;
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

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
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

  // module_link - computed: false, optional: false, required: true
  private _moduleLink: AutomationModuleModuleLink[];
  public get moduleLink() {
    return this._moduleLink;
  }
  public set moduleLink(value: AutomationModuleModuleLink[]) {
    this._moduleLink = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AutomationModuleTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: AutomationModuleTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      automation_account_name: this._automationAccountName,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      module_link: this._moduleLink,
      timeouts: this._timeouts,
    };
  }
}
