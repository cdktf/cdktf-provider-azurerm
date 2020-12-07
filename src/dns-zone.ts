// https://www.terraform.io/docs/providers/azurerm/r/dns_zone.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsZoneConfig extends cdktf.TerraformMetaArguments {
  readonly name: string;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  /** soa_record block */
  readonly soaRecord?: DnsZoneSoaRecord[];
  /** timeouts block */
  readonly timeouts?: DnsZoneTimeouts;
}
export interface DnsZoneSoaRecord {
  readonly email: string;
  readonly expireTime?: number;
  readonly hostName: string;
  readonly minimumTtl?: number;
  readonly refreshTime?: number;
  readonly retryTime?: number;
  readonly serialNumber?: number;
  readonly tags?: { [key: string]: string };
  readonly ttl?: number;
}

function dnsZoneSoaRecordToTerraform(struct?: DnsZoneSoaRecord): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    email: cdktf.stringToTerraform(struct!.email),
    expire_time: cdktf.numberToTerraform(struct!.expireTime),
    host_name: cdktf.stringToTerraform(struct!.hostName),
    minimum_ttl: cdktf.numberToTerraform(struct!.minimumTtl),
    refresh_time: cdktf.numberToTerraform(struct!.refreshTime),
    retry_time: cdktf.numberToTerraform(struct!.retryTime),
    serial_number: cdktf.numberToTerraform(struct!.serialNumber),
    tags: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.tags),
    ttl: cdktf.numberToTerraform(struct!.ttl),
  }
}

export interface DnsZoneTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function dnsZoneTimeoutsToTerraform(struct?: DnsZoneTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class DnsZone extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DnsZoneConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_dns_zone',
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
    this._soaRecord = config.soaRecord;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_number_of_record_sets - computed: true, optional: false, required: false
  public get maxNumberOfRecordSets() {
    return this.getNumberAttribute('max_number_of_record_sets');
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

  // name_servers - computed: true, optional: false, required: false
  public get nameServers() {
    return this.getListAttribute('name_servers');
  }

  // number_of_record_sets - computed: true, optional: false, required: false
  public get numberOfRecordSets() {
    return this.getNumberAttribute('number_of_record_sets');
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

  // soa_record - computed: false, optional: true, required: false
  private _soaRecord?: DnsZoneSoaRecord[];
  public get soaRecord() {
    return this.interpolationForAttribute('soa_record') as any;
  }
  public set soaRecord(value: DnsZoneSoaRecord[] ) {
    this._soaRecord = value;
  }
  public resetSoaRecord() {
    this._soaRecord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soaRecordInput() {
    return this._soaRecord
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DnsZoneTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DnsZoneTimeouts ) {
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
      soa_record: cdktf.listMapper(dnsZoneSoaRecordToTerraform)(this._soaRecord),
      timeouts: dnsZoneTimeoutsToTerraform(this._timeouts),
    };
  }
}
