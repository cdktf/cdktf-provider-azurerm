// https://www.terraform.io/docs/providers/azurerm/r/automation_connection_classic_certificate.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AutomationConnectionClassicCertificateConfig extends cdktf.TerraformMetaArguments {
  readonly automationAccountName: string;
  readonly certificateAssetName: string;
  readonly description?: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly subscriptionId: string;
  readonly subscriptionName: string;
  /** timeouts block */
  readonly timeouts?: AutomationConnectionClassicCertificateTimeouts;
}
export interface AutomationConnectionClassicCertificateTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function automationConnectionClassicCertificateTimeoutsToTerraform(struct?: AutomationConnectionClassicCertificateTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class AutomationConnectionClassicCertificate extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AutomationConnectionClassicCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_automation_connection_classic_certificate',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._automationAccountName = config.automationAccountName;
    this._certificateAssetName = config.certificateAssetName;
    this._description = config.description;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._subscriptionId = config.subscriptionId;
    this._subscriptionName = config.subscriptionName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // automation_account_name - computed: false, optional: false, required: true
  private _automationAccountName: string;
  public get automationAccountName() {
    return this.getStringAttribute('automation_account_name');
  }
  public set automationAccountName(value: string) {
    this._automationAccountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get automationAccountNameInput() {
    return this._automationAccountName
  }

  // certificate_asset_name - computed: false, optional: false, required: true
  private _certificateAssetName: string;
  public get certificateAssetName() {
    return this.getStringAttribute('certificate_asset_name');
  }
  public set certificateAssetName(value: string) {
    this._certificateAssetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateAssetNameInput() {
    return this._certificateAssetName
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName
  }

  // subscription_id - computed: false, optional: false, required: true
  private _subscriptionId: string;
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId
  }

  // subscription_name - computed: false, optional: false, required: true
  private _subscriptionName: string;
  public get subscriptionName() {
    return this.getStringAttribute('subscription_name');
  }
  public set subscriptionName(value: string) {
    this._subscriptionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionNameInput() {
    return this._subscriptionName
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AutomationConnectionClassicCertificateTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: AutomationConnectionClassicCertificateTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      automation_account_name: cdktf.stringToTerraform(this._automationAccountName),
      certificate_asset_name: cdktf.stringToTerraform(this._certificateAssetName),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      subscription_id: cdktf.stringToTerraform(this._subscriptionId),
      subscription_name: cdktf.stringToTerraform(this._subscriptionName),
      timeouts: automationConnectionClassicCertificateTimeoutsToTerraform(this._timeouts),
    };
  }
}
