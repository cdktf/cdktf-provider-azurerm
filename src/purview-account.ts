// https://www.terraform.io/docs/providers/azurerm/r/purview_account.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PurviewAccountConfig extends cdktf.TerraformMetaArguments {
  readonly location: string;
  readonly name: string;
  readonly publicNetworkEnabled?: boolean;
  readonly resourceGroupName: string;
  readonly skuName: string;
  readonly tags?: { [key: string]: string };
  /** timeouts block */
  readonly timeouts?: PurviewAccountTimeouts;
}
export class PurviewAccountIdentity extends cdktf.ComplexComputedList {

  // principal_id - computed: true, optional: false, required: false
  public get principalId() {
    return this.getStringAttribute('principal_id');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface PurviewAccountTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function purviewAccountTimeoutsToTerraform(struct?: PurviewAccountTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class PurviewAccount extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: PurviewAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_purview_account',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._location = config.location;
    this._name = config.name;
    this._publicNetworkEnabled = config.publicNetworkEnabled;
    this._resourceGroupName = config.resourceGroupName;
    this._skuName = config.skuName;
    this._tags = config.tags;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // atlas_kafka_endpoint_primary_connection_string - computed: true, optional: false, required: false
  public get atlasKafkaEndpointPrimaryConnectionString() {
    return this.getStringAttribute('atlas_kafka_endpoint_primary_connection_string');
  }

  // atlas_kafka_endpoint_secondary_connection_string - computed: true, optional: false, required: false
  public get atlasKafkaEndpointSecondaryConnectionString() {
    return this.getStringAttribute('atlas_kafka_endpoint_secondary_connection_string');
  }

  // catalog_endpoint - computed: true, optional: false, required: false
  public get catalogEndpoint() {
    return this.getStringAttribute('catalog_endpoint');
  }

  // guardian_endpoint - computed: true, optional: false, required: false
  public get guardianEndpoint() {
    return this.getStringAttribute('guardian_endpoint');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity - computed: true, optional: false, required: false
  public identity(index: string) {
    return new PurviewAccountIdentity(this, 'identity', index);
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
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

  // public_network_enabled - computed: false, optional: true, required: false
  private _publicNetworkEnabled?: boolean;
  public get publicNetworkEnabled() {
    return this.getBooleanAttribute('public_network_enabled');
  }
  public set publicNetworkEnabled(value: boolean ) {
    this._publicNetworkEnabled = value;
  }
  public resetPublicNetworkEnabled() {
    this._publicNetworkEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicNetworkEnabledInput() {
    return this._publicNetworkEnabled
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

  // scan_endpoint - computed: true, optional: false, required: false
  public get scanEndpoint() {
    return this.getStringAttribute('scan_endpoint');
  }

  // sku_name - computed: false, optional: false, required: true
  private _skuName: string;
  public get skuName() {
    return this.getStringAttribute('sku_name');
  }
  public set skuName(value: string) {
    this._skuName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuNameInput() {
    return this._skuName
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: PurviewAccountTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: PurviewAccountTimeouts ) {
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
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      public_network_enabled: cdktf.booleanToTerraform(this._publicNetworkEnabled),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      sku_name: cdktf.stringToTerraform(this._skuName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      timeouts: purviewAccountTimeoutsToTerraform(this._timeouts),
    };
  }
}
