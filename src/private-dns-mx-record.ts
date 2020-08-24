// https://www.terraform.io/docs/providers/azurerm/r/private_dns_mx_record.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface PrivateDnsMxRecordConfig extends TerraformMetaArguments {
  readonly name?: string;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  readonly ttl: number;
  readonly zoneName: string;
  /** record block */
  readonly record: PrivateDnsMxRecordRecord[];
  /** timeouts block */
  readonly timeouts?: PrivateDnsMxRecordTimeouts;
}
export interface PrivateDnsMxRecordRecord {
  readonly exchange: string;
  readonly preference: number;
}
export interface PrivateDnsMxRecordTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class PrivateDnsMxRecord extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: PrivateDnsMxRecordConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_private_dns_mx_record',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._ttl = config.ttl;
    this._zoneName = config.zoneName;
    this._record = config.record;
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

  // name - computed: false, optional: true, required: false
  private _name?: string;
  public get name() {
    return this._name;
  }
  public set name(value: string | undefined) {
    this._name = value;
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

  // ttl - computed: false, optional: false, required: true
  private _ttl: number;
  public get ttl() {
    return this._ttl;
  }
  public set ttl(value: number) {
    this._ttl = value;
  }

  // zone_name - computed: false, optional: false, required: true
  private _zoneName: string;
  public get zoneName() {
    return this._zoneName;
  }
  public set zoneName(value: string) {
    this._zoneName = value;
  }

  // record - computed: false, optional: false, required: true
  private _record: PrivateDnsMxRecordRecord[];
  public get record() {
    return this._record;
  }
  public set record(value: PrivateDnsMxRecordRecord[]) {
    this._record = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: PrivateDnsMxRecordTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: PrivateDnsMxRecordTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      resource_group_name: this._resourceGroupName,
      tags: this._tags,
      ttl: this._ttl,
      zone_name: this._zoneName,
      record: this._record,
      timeouts: this._timeouts,
    };
  }
}
