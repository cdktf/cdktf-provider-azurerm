// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_public_ips.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataAzurermPublicIpsConfig extends TerraformMetaArguments {
  readonly allocationType?: string;
  readonly attached?: boolean;
  readonly namePrefix?: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermPublicIpsTimeouts;
}
export class DataAzurermPublicIpsPublicIps extends ComplexComputedList {

  // domain_name_label - computed: true, optional: false, required: true
  public get domainNameLabel() {
    return this.getStringAttribute('domain_name_label');
  }

  // fqdn - computed: true, optional: false, required: true
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_address - computed: true, optional: false, required: true
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface DataAzurermPublicIpsTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermPublicIps extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermPublicIpsConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_public_ips',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._allocationType = config.allocationType;
    this._attached = config.attached;
    this._namePrefix = config.namePrefix;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allocation_type - computed: false, optional: true, required: false
  private _allocationType?: string;
  public get allocationType() {
    return this._allocationType;
  }
  public set allocationType(value: string | undefined) {
    this._allocationType = value;
  }

  // attached - computed: false, optional: true, required: false
  private _attached?: boolean;
  public get attached() {
    return this._attached;
  }
  public set attached(value: boolean | undefined) {
    this._attached = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name_prefix - computed: false, optional: true, required: false
  private _namePrefix?: string;
  public get namePrefix() {
    return this._namePrefix;
  }
  public set namePrefix(value: string | undefined) {
    this._namePrefix = value;
  }

  // public_ips - computed: true, optional: false, required: true
  public publicIps(index: string) {
    return new DataAzurermPublicIpsPublicIps(this, 'public_ips', index);
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
  private _timeouts?: DataAzurermPublicIpsTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataAzurermPublicIpsTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allocation_type: this._allocationType,
      attached: this._attached,
      name_prefix: this._namePrefix,
      resource_group_name: this._resourceGroupName,
      timeouts: this._timeouts,
    };
  }
}
