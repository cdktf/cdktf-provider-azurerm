// https://www.terraform.io/docs/providers/azurerm/r/eventhub_namespace.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EventhubNamespaceConfig extends cdktf.TerraformMetaArguments {
  readonly autoInflateEnabled?: boolean;
  readonly capacity?: number;
  readonly dedicatedClusterId?: string;
  readonly location: string;
  readonly maximumThroughputUnits?: number;
  readonly name: string;
  readonly networkRulesets?: EventhubNamespaceNetworkRulesets[];
  readonly resourceGroupName: string;
  readonly sku: string;
  readonly tags?: { [key: string]: string };
  readonly zoneRedundant?: boolean;
  /** identity block */
  readonly identity?: EventhubNamespaceIdentity[];
  /** timeouts block */
  readonly timeouts?: EventhubNamespaceTimeouts;
}
export interface EventhubNamespaceNetworkRulesetsIpRule {
  readonly action?: string;
  readonly ipMask?: string;
}

function eventhubNamespaceNetworkRulesetsIpRuleToTerraform(struct?: EventhubNamespaceNetworkRulesetsIpRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    ip_mask: cdktf.stringToTerraform(struct!.ipMask),
  }
}

export interface EventhubNamespaceNetworkRulesetsVirtualNetworkRule {
  readonly ignoreMissingVirtualNetworkServiceEndpoint?: boolean;
  readonly subnetId?: string;
}

function eventhubNamespaceNetworkRulesetsVirtualNetworkRuleToTerraform(struct?: EventhubNamespaceNetworkRulesetsVirtualNetworkRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    ignore_missing_virtual_network_service_endpoint: cdktf.booleanToTerraform(struct!.ignoreMissingVirtualNetworkServiceEndpoint),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}

export interface EventhubNamespaceNetworkRulesets {
  readonly defaultAction?: string;
  readonly ipRule?: EventhubNamespaceNetworkRulesetsIpRule[];
  readonly trustedServiceAccessEnabled?: boolean;
  readonly virtualNetworkRule?: EventhubNamespaceNetworkRulesetsVirtualNetworkRule[];
}

function eventhubNamespaceNetworkRulesetsToTerraform(struct?: EventhubNamespaceNetworkRulesets): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    default_action: cdktf.stringToTerraform(struct!.defaultAction),
    ip_rule: cdktf.listMapper(eventhubNamespaceNetworkRulesetsIpRuleToTerraform)(struct!.ipRule),
    trusted_service_access_enabled: cdktf.booleanToTerraform(struct!.trustedServiceAccessEnabled),
    virtual_network_rule: cdktf.listMapper(eventhubNamespaceNetworkRulesetsVirtualNetworkRuleToTerraform)(struct!.virtualNetworkRule),
  }
}

export interface EventhubNamespaceIdentity {
  readonly type: string;
}

function eventhubNamespaceIdentityToTerraform(struct?: EventhubNamespaceIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface EventhubNamespaceTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function eventhubNamespaceTimeoutsToTerraform(struct?: EventhubNamespaceTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class EventhubNamespace extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: EventhubNamespaceConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_eventhub_namespace',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._autoInflateEnabled = config.autoInflateEnabled;
    this._capacity = config.capacity;
    this._dedicatedClusterId = config.dedicatedClusterId;
    this._location = config.location;
    this._maximumThroughputUnits = config.maximumThroughputUnits;
    this._name = config.name;
    this._networkRulesets = config.networkRulesets;
    this._resourceGroupName = config.resourceGroupName;
    this._sku = config.sku;
    this._tags = config.tags;
    this._zoneRedundant = config.zoneRedundant;
    this._identity = config.identity;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_inflate_enabled - computed: false, optional: true, required: false
  private _autoInflateEnabled?: boolean;
  public get autoInflateEnabled() {
    return this.getBooleanAttribute('auto_inflate_enabled');
  }
  public set autoInflateEnabled(value: boolean ) {
    this._autoInflateEnabled = value;
  }
  public resetAutoInflateEnabled() {
    this._autoInflateEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoInflateEnabledInput() {
    return this._autoInflateEnabled
  }

  // capacity - computed: false, optional: true, required: false
  private _capacity?: number;
  public get capacity() {
    return this.getNumberAttribute('capacity');
  }
  public set capacity(value: number ) {
    this._capacity = value;
  }
  public resetCapacity() {
    this._capacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity
  }

  // dedicated_cluster_id - computed: false, optional: true, required: false
  private _dedicatedClusterId?: string;
  public get dedicatedClusterId() {
    return this.getStringAttribute('dedicated_cluster_id');
  }
  public set dedicatedClusterId(value: string ) {
    this._dedicatedClusterId = value;
  }
  public resetDedicatedClusterId() {
    this._dedicatedClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedClusterIdInput() {
    return this._dedicatedClusterId
  }

  // default_primary_connection_string - computed: true, optional: false, required: false
  public get defaultPrimaryConnectionString() {
    return this.getStringAttribute('default_primary_connection_string');
  }

  // default_primary_connection_string_alias - computed: true, optional: false, required: false
  public get defaultPrimaryConnectionStringAlias() {
    return this.getStringAttribute('default_primary_connection_string_alias');
  }

  // default_primary_key - computed: true, optional: false, required: false
  public get defaultPrimaryKey() {
    return this.getStringAttribute('default_primary_key');
  }

  // default_secondary_connection_string - computed: true, optional: false, required: false
  public get defaultSecondaryConnectionString() {
    return this.getStringAttribute('default_secondary_connection_string');
  }

  // default_secondary_connection_string_alias - computed: true, optional: false, required: false
  public get defaultSecondaryConnectionStringAlias() {
    return this.getStringAttribute('default_secondary_connection_string_alias');
  }

  // default_secondary_key - computed: true, optional: false, required: false
  public get defaultSecondaryKey() {
    return this.getStringAttribute('default_secondary_key');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // maximum_throughput_units - computed: true, optional: true, required: false
  private _maximumThroughputUnits?: number;
  public get maximumThroughputUnits() {
    return this.getNumberAttribute('maximum_throughput_units');
  }
  public set maximumThroughputUnits(value: number) {
    this._maximumThroughputUnits = value;
  }
  public resetMaximumThroughputUnits() {
    this._maximumThroughputUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumThroughputUnitsInput() {
    return this._maximumThroughputUnits
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

  // network_rulesets - computed: true, optional: true, required: false
  private _networkRulesets?: EventhubNamespaceNetworkRulesets[]
  public get networkRulesets(): EventhubNamespaceNetworkRulesets[] {
    return this.interpolationForAttribute('network_rulesets') as any; // Getting the computed value is not yet implemented
  }
  public set networkRulesets(value: EventhubNamespaceNetworkRulesets[]) {
    this._networkRulesets = value;
  }
  public resetNetworkRulesets() {
    this._networkRulesets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkRulesetsInput() {
    return this._networkRulesets
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

  // sku - computed: false, optional: false, required: true
  private _sku: string;
  public get sku() {
    return this.getStringAttribute('sku');
  }
  public set sku(value: string) {
    this._sku = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku
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

  // zone_redundant - computed: false, optional: true, required: false
  private _zoneRedundant?: boolean;
  public get zoneRedundant() {
    return this.getBooleanAttribute('zone_redundant');
  }
  public set zoneRedundant(value: boolean ) {
    this._zoneRedundant = value;
  }
  public resetZoneRedundant() {
    this._zoneRedundant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneRedundantInput() {
    return this._zoneRedundant
  }

  // identity - computed: false, optional: true, required: false
  private _identity?: EventhubNamespaceIdentity[];
  public get identity() {
    return this.interpolationForAttribute('identity') as any;
  }
  public set identity(value: EventhubNamespaceIdentity[] ) {
    this._identity = value;
  }
  public resetIdentity() {
    this._identity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: EventhubNamespaceTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: EventhubNamespaceTimeouts ) {
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
      auto_inflate_enabled: cdktf.booleanToTerraform(this._autoInflateEnabled),
      capacity: cdktf.numberToTerraform(this._capacity),
      dedicated_cluster_id: cdktf.stringToTerraform(this._dedicatedClusterId),
      location: cdktf.stringToTerraform(this._location),
      maximum_throughput_units: cdktf.numberToTerraform(this._maximumThroughputUnits),
      name: cdktf.stringToTerraform(this._name),
      network_rulesets: cdktf.listMapper(eventhubNamespaceNetworkRulesetsToTerraform)(this._networkRulesets),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      sku: cdktf.stringToTerraform(this._sku),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      zone_redundant: cdktf.booleanToTerraform(this._zoneRedundant),
      identity: cdktf.listMapper(eventhubNamespaceIdentityToTerraform)(this._identity),
      timeouts: eventhubNamespaceTimeoutsToTerraform(this._timeouts),
    };
  }
}
