// https://www.terraform.io/docs/providers/azurerm/r/automation_connection_service_principal.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface AutomationConnectionServicePrincipalConfig extends TerraformMetaArguments {
  readonly applicationId: string;
  readonly automationAccountName: string;
  readonly certificateThumbprint: string;
  readonly description?: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly subscriptionId: string;
  readonly tenantId: string;
  /** timeouts block */
  readonly timeouts?: AutomationConnectionServicePrincipalTimeouts;
}
export interface AutomationConnectionServicePrincipalTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class AutomationConnectionServicePrincipal extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AutomationConnectionServicePrincipalConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_automation_connection_service_principal',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._applicationId = config.applicationId;
    this._automationAccountName = config.automationAccountName;
    this._certificateThumbprint = config.certificateThumbprint;
    this._description = config.description;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._subscriptionId = config.subscriptionId;
    this._tenantId = config.tenantId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_id - computed: false, optional: false, required: true
  private _applicationId: string;
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId
  }

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

  // certificate_thumbprint - computed: false, optional: false, required: true
  private _certificateThumbprint: string;
  public get certificateThumbprint() {
    return this.getStringAttribute('certificate_thumbprint');
  }
  public set certificateThumbprint(value: string) {
    this._certificateThumbprint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateThumbprintInput() {
    return this._certificateThumbprint
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

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId: string;
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AutomationConnectionServicePrincipalTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: AutomationConnectionServicePrincipalTimeouts ) {
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
      application_id: this._applicationId,
      automation_account_name: this._automationAccountName,
      certificate_thumbprint: this._certificateThumbprint,
      description: this._description,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      subscription_id: this._subscriptionId,
      tenant_id: this._tenantId,
      timeouts: this._timeouts,
    };
  }
}
