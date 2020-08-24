// https://www.terraform.io/docs/providers/azurerm/r/eventhub_namespace.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface EventhubNamespaceConfig extends TerraformMetaArguments {
  readonly autoInflateEnabled?: boolean;
  readonly capacity?: number;
  readonly location: string;
  readonly maximumThroughputUnits?: number;
  readonly name: string;
  readonly networkRulesets?: EventhubNamespaceNetworkRulesets[];
  readonly resourceGroupName: string;
  readonly sku: string;
  readonly tags?: { [key: string]: string };
  /** timeouts block */
  readonly timeouts?: EventhubNamespaceTimeouts;
}
export interface EventhubNamespaceNetworkRulesetsIpRule {
  readonly action?: string;
  readonly ipMask?: string;
}
export interface EventhubNamespaceNetworkRulesetsVirtualNetworkRule {
  readonly ignoreMissingVirtualNetworkServiceEndpoint?: boolean;
  readonly subnetId?: string;
}
export interface EventhubNamespaceNetworkRulesets {
  readonly defaultAction?: string;
  readonly ipRule?: EventhubNamespaceNetworkRulesetsIpRule[];
  readonly virtualNetworkRule?: EventhubNamespaceNetworkRulesetsVirtualNetworkRule[];
}
export interface EventhubNamespaceTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class EventhubNamespace extends TerraformResource {

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
    this._location = config.location;
    this._maximumThroughputUnits = config.maximumThroughputUnits;
    this._name = config.name;
    this._networkRulesets = config.networkRulesets;
    this._resourceGroupName = config.resourceGroupName;
    this._sku = config.sku;
    this._tags = config.tags;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_inflate_enabled - computed: false, optional: true, required: false
  private _autoInflateEnabled?: boolean;
  public get autoInflateEnabled() {
    return this._autoInflateEnabled;
  }
  public set autoInflateEnabled(value: boolean | undefined) {
    this._autoInflateEnabled = value;
  }

  // capacity - computed: false, optional: true, required: false
  private _capacity?: number;
  public get capacity() {
    return this._capacity;
  }
  public set capacity(value: number | undefined) {
    this._capacity = value;
  }

  // default_primary_connection_string - computed: true, optional: false, required: true
  public get defaultPrimaryConnectionString() {
    return this.getStringAttribute('default_primary_connection_string');
  }

  // default_primary_key - computed: true, optional: false, required: true
  public get defaultPrimaryKey() {
    return this.getStringAttribute('default_primary_key');
  }

  // default_secondary_connection_string - computed: true, optional: false, required: true
  public get defaultSecondaryConnectionString() {
    return this.getStringAttribute('default_secondary_connection_string');
  }

  // default_secondary_key - computed: true, optional: false, required: true
  public get defaultSecondaryKey() {
    return this.getStringAttribute('default_secondary_key');
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

  // maximum_throughput_units - computed: true, optional: true, required: false
  private _maximumThroughputUnits?: number;
  public get maximumThroughputUnits() {
    return this._maximumThroughputUnits ?? this.getNumberAttribute('maximum_throughput_units');
  }
  public set maximumThroughputUnits(value: number | undefined) {
    this._maximumThroughputUnits = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // network_rulesets - computed: true, optional: true, required: false
  private _networkRulesets?: EventhubNamespaceNetworkRulesets[]
  public get networkRulesets(): EventhubNamespaceNetworkRulesets[] | undefined {
    return this._networkRulesets; // Getting the computed value is not yet implemented
  }
  public set networkRulesets(value: EventhubNamespaceNetworkRulesets[] | undefined) {
    this._networkRulesets = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // sku - computed: false, optional: false, required: true
  private _sku: string;
  public get sku() {
    return this._sku;
  }
  public set sku(value: string) {
    this._sku = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: EventhubNamespaceTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: EventhubNamespaceTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_inflate_enabled: this._autoInflateEnabled,
      capacity: this._capacity,
      location: this._location,
      maximum_throughput_units: this._maximumThroughputUnits,
      name: this._name,
      network_rulesets: this._networkRulesets,
      resource_group_name: this._resourceGroupName,
      sku: this._sku,
      tags: this._tags,
      timeouts: this._timeouts,
    };
  }
}
