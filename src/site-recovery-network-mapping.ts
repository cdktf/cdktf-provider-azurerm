// https://www.terraform.io/docs/providers/azurerm/r/site_recovery_network_mapping.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface SiteRecoveryNetworkMappingConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly recoveryVaultName: string;
  readonly resourceGroupName: string;
  readonly sourceNetworkId: string;
  readonly sourceRecoveryFabricName: string;
  readonly targetNetworkId: string;
  readonly targetRecoveryFabricName: string;
  /** timeouts block */
  readonly timeouts?: SiteRecoveryNetworkMappingTimeouts;
}
export interface SiteRecoveryNetworkMappingTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class SiteRecoveryNetworkMapping extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SiteRecoveryNetworkMappingConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_site_recovery_network_mapping',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._recoveryVaultName = config.recoveryVaultName;
    this._resourceGroupName = config.resourceGroupName;
    this._sourceNetworkId = config.sourceNetworkId;
    this._sourceRecoveryFabricName = config.sourceRecoveryFabricName;
    this._targetNetworkId = config.targetNetworkId;
    this._targetRecoveryFabricName = config.targetRecoveryFabricName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // recovery_vault_name - computed: false, optional: false, required: true
  private _recoveryVaultName: string;
  public get recoveryVaultName() {
    return this._recoveryVaultName;
  }
  public set recoveryVaultName(value: string) {
    this._recoveryVaultName = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // source_network_id - computed: false, optional: false, required: true
  private _sourceNetworkId: string;
  public get sourceNetworkId() {
    return this._sourceNetworkId;
  }
  public set sourceNetworkId(value: string) {
    this._sourceNetworkId = value;
  }

  // source_recovery_fabric_name - computed: false, optional: false, required: true
  private _sourceRecoveryFabricName: string;
  public get sourceRecoveryFabricName() {
    return this._sourceRecoveryFabricName;
  }
  public set sourceRecoveryFabricName(value: string) {
    this._sourceRecoveryFabricName = value;
  }

  // target_network_id - computed: false, optional: false, required: true
  private _targetNetworkId: string;
  public get targetNetworkId() {
    return this._targetNetworkId;
  }
  public set targetNetworkId(value: string) {
    this._targetNetworkId = value;
  }

  // target_recovery_fabric_name - computed: false, optional: false, required: true
  private _targetRecoveryFabricName: string;
  public get targetRecoveryFabricName() {
    return this._targetRecoveryFabricName;
  }
  public set targetRecoveryFabricName(value: string) {
    this._targetRecoveryFabricName = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SiteRecoveryNetworkMappingTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: SiteRecoveryNetworkMappingTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      recovery_vault_name: this._recoveryVaultName,
      resource_group_name: this._resourceGroupName,
      source_network_id: this._sourceNetworkId,
      source_recovery_fabric_name: this._sourceRecoveryFabricName,
      target_network_id: this._targetNetworkId,
      target_recovery_fabric_name: this._targetRecoveryFabricName,
      timeouts: this._timeouts,
    };
  }
}
