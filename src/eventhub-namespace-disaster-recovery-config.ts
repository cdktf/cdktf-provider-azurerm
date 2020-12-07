// https://www.terraform.io/docs/providers/azurerm/r/eventhub_namespace_disaster_recovery_config.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EventhubNamespaceDisasterRecoveryConfigConfig extends cdktf.TerraformMetaArguments {
  readonly alternateName?: string;
  readonly name: string;
  readonly namespaceName: string;
  readonly partnerNamespaceId: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: EventhubNamespaceDisasterRecoveryConfigTimeouts;
}
export interface EventhubNamespaceDisasterRecoveryConfigTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function eventhubNamespaceDisasterRecoveryConfigTimeoutsToTerraform(struct?: EventhubNamespaceDisasterRecoveryConfigTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class EventhubNamespaceDisasterRecoveryConfig extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: EventhubNamespaceDisasterRecoveryConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_eventhub_namespace_disaster_recovery_config',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._alternateName = config.alternateName;
    this._name = config.name;
    this._namespaceName = config.namespaceName;
    this._partnerNamespaceId = config.partnerNamespaceId;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alternate_name - computed: false, optional: true, required: false
  private _alternateName?: string;
  public get alternateName() {
    return this.getStringAttribute('alternate_name');
  }
  public set alternateName(value: string ) {
    this._alternateName = value;
  }
  public resetAlternateName() {
    this._alternateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alternateNameInput() {
    return this._alternateName
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

  // namespace_name - computed: false, optional: false, required: true
  private _namespaceName: string;
  public get namespaceName() {
    return this.getStringAttribute('namespace_name');
  }
  public set namespaceName(value: string) {
    this._namespaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceNameInput() {
    return this._namespaceName
  }

  // partner_namespace_id - computed: false, optional: false, required: true
  private _partnerNamespaceId: string;
  public get partnerNamespaceId() {
    return this.getStringAttribute('partner_namespace_id');
  }
  public set partnerNamespaceId(value: string) {
    this._partnerNamespaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get partnerNamespaceIdInput() {
    return this._partnerNamespaceId
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: EventhubNamespaceDisasterRecoveryConfigTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: EventhubNamespaceDisasterRecoveryConfigTimeouts ) {
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
      alternate_name: cdktf.stringToTerraform(this._alternateName),
      name: cdktf.stringToTerraform(this._name),
      namespace_name: cdktf.stringToTerraform(this._namespaceName),
      partner_namespace_id: cdktf.stringToTerraform(this._partnerNamespaceId),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: eventhubNamespaceDisasterRecoveryConfigTimeoutsToTerraform(this._timeouts),
    };
  }
}
