// https://www.terraform.io/docs/providers/azurerm/r/automation_certificate.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface AutomationCertificateConfig extends TerraformMetaArguments {
  readonly automationAccountName: string;
  readonly base64: string;
  readonly description?: string;
  readonly name: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: AutomationCertificateTimeouts;
}
export interface AutomationCertificateTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class AutomationCertificate extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AutomationCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_automation_certificate',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._automationAccountName = config.automationAccountName;
    this._base64 = config.base64;
    this._description = config.description;
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

  // base64 - computed: false, optional: false, required: true
  private _base64: string;
  public get base64() {
    return this._base64;
  }
  public set base64(value: string) {
    this._base64 = value;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // exportable - computed: true, optional: false, required: true
  public get exportable() {
    return this.getBooleanAttribute('exportable');
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

  // thumbprint - computed: true, optional: false, required: true
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AutomationCertificateTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: AutomationCertificateTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      automation_account_name: this._automationAccountName,
      base64: this._base64,
      description: this._description,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      timeouts: this._timeouts,
    };
  }
}
