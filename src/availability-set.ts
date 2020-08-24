// https://www.terraform.io/docs/providers/azurerm/r/availability_set.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface AvailabilitySetConfig extends TerraformMetaArguments {
  readonly location: string;
  readonly managed?: boolean;
  readonly name: string;
  readonly platformFaultDomainCount?: number;
  readonly platformUpdateDomainCount?: number;
  readonly proximityPlacementGroupId?: string;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  /** timeouts block */
  readonly timeouts?: AvailabilitySetTimeouts;
}
export interface AvailabilitySetTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class AvailabilitySet extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AvailabilitySetConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_availability_set',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._location = config.location;
    this._managed = config.managed;
    this._name = config.name;
    this._platformFaultDomainCount = config.platformFaultDomainCount;
    this._platformUpdateDomainCount = config.platformUpdateDomainCount;
    this._proximityPlacementGroupId = config.proximityPlacementGroupId;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
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

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this._location;
  }
  public set location(value: string) {
    this._location = value;
  }

  // managed - computed: false, optional: true, required: false
  private _managed?: boolean;
  public get managed() {
    return this._managed;
  }
  public set managed(value: boolean | undefined) {
    this._managed = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // platform_fault_domain_count - computed: false, optional: true, required: false
  private _platformFaultDomainCount?: number;
  public get platformFaultDomainCount() {
    return this._platformFaultDomainCount;
  }
  public set platformFaultDomainCount(value: number | undefined) {
    this._platformFaultDomainCount = value;
  }

  // platform_update_domain_count - computed: false, optional: true, required: false
  private _platformUpdateDomainCount?: number;
  public get platformUpdateDomainCount() {
    return this._platformUpdateDomainCount;
  }
  public set platformUpdateDomainCount(value: number | undefined) {
    this._platformUpdateDomainCount = value;
  }

  // proximity_placement_group_id - computed: false, optional: true, required: false
  private _proximityPlacementGroupId?: string;
  public get proximityPlacementGroupId() {
    return this._proximityPlacementGroupId;
  }
  public set proximityPlacementGroupId(value: string | undefined) {
    this._proximityPlacementGroupId = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
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
  private _timeouts?: AvailabilitySetTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: AvailabilitySetTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      location: this._location,
      managed: this._managed,
      name: this._name,
      platform_fault_domain_count: this._platformFaultDomainCount,
      platform_update_domain_count: this._platformUpdateDomainCount,
      proximity_placement_group_id: this._proximityPlacementGroupId,
      resource_group_name: this._resourceGroupName,
      tags: this._tags,
      timeouts: this._timeouts,
    };
  }
}
