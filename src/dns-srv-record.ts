// https://www.terraform.io/docs/providers/azurerm/r/dns_srv_record.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsSrvRecordConfig extends cdktf.TerraformMetaArguments {
  readonly name: string;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  readonly ttl: number;
  readonly zoneName: string;
  /** record block */
  readonly record: DnsSrvRecordRecord[];
  /** timeouts block */
  readonly timeouts?: DnsSrvRecordTimeouts;
}
export interface DnsSrvRecordRecord {
  readonly port: number;
  readonly priority: number;
  readonly target: string;
  readonly weight: number;
}

function dnsSrvRecordRecordToTerraform(struct?: DnsSrvRecordRecord): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    priority: cdktf.numberToTerraform(struct!.priority),
    target: cdktf.stringToTerraform(struct!.target),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}

export interface DnsSrvRecordTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function dnsSrvRecordTimeoutsToTerraform(struct?: DnsSrvRecordTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class DnsSrvRecord extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DnsSrvRecordConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_dns_srv_record',
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

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
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

  // ttl - computed: false, optional: false, required: true
  private _ttl: number;
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl
  }

  // zone_name - computed: false, optional: false, required: true
  private _zoneName: string;
  public get zoneName() {
    return this.getStringAttribute('zone_name');
  }
  public set zoneName(value: string) {
    this._zoneName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneNameInput() {
    return this._zoneName
  }

  // record - computed: false, optional: false, required: true
  private _record: DnsSrvRecordRecord[];
  public get record() {
    return this.interpolationForAttribute('record') as any;
  }
  public set record(value: DnsSrvRecordRecord[]) {
    this._record = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordInput() {
    return this._record
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DnsSrvRecordTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DnsSrvRecordTimeouts ) {
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
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      ttl: cdktf.numberToTerraform(this._ttl),
      zone_name: cdktf.stringToTerraform(this._zoneName),
      record: cdktf.listMapper(dnsSrvRecordRecordToTerraform)(this._record),
      timeouts: dnsSrvRecordTimeoutsToTerraform(this._timeouts),
    };
  }
}
