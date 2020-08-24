// https://www.terraform.io/docs/providers/azurerm/r/dns_ns_record.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DnsNsRecordConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly records: string[];
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  readonly ttl: number;
  readonly zoneName: string;
  /** timeouts block */
  readonly timeouts?: DnsNsRecordTimeouts;
}
export interface DnsNsRecordTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class DnsNsRecord extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DnsNsRecordConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_dns_ns_record',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._records = config.records;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._ttl = config.ttl;
    this._zoneName = config.zoneName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // fqdn - computed: true, optional: false, required: true
  public get fqdn() {
    return this.getStringAttribute('fqdn');
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

  // records - computed: false, optional: false, required: true
  private _records: string[];
  public get records() {
    return this._records;
  }
  public set records(value: string[]) {
    this._records = value;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DnsNsRecordTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DnsNsRecordTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      records: this._records,
      resource_group_name: this._resourceGroupName,
      tags: this._tags,
      ttl: this._ttl,
      zone_name: this._zoneName,
      timeouts: this._timeouts,
    };
  }
}
