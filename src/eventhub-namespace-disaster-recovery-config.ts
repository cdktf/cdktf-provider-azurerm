// https://www.terraform.io/docs/providers/azurerm/r/eventhub_namespace_disaster_recovery_config.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface EventhubNamespaceDisasterRecoveryConfigConfig extends TerraformMetaArguments {
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

// Resource

export class EventhubNamespaceDisasterRecoveryConfig extends TerraformResource {

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
    return this._alternateName;
  }
  public set alternateName(value: string | undefined) {
    this._alternateName = value;
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

  // namespace_name - computed: false, optional: false, required: true
  private _namespaceName: string;
  public get namespaceName() {
    return this._namespaceName;
  }
  public set namespaceName(value: string) {
    this._namespaceName = value;
  }

  // partner_namespace_id - computed: false, optional: false, required: true
  private _partnerNamespaceId: string;
  public get partnerNamespaceId() {
    return this._partnerNamespaceId;
  }
  public set partnerNamespaceId(value: string) {
    this._partnerNamespaceId = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: EventhubNamespaceDisasterRecoveryConfigTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: EventhubNamespaceDisasterRecoveryConfigTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      alternate_name: this._alternateName,
      name: this._name,
      namespace_name: this._namespaceName,
      partner_namespace_id: this._partnerNamespaceId,
      resource_group_name: this._resourceGroupName,
      timeouts: this._timeouts,
    };
  }
}
