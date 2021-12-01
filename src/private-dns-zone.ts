// https://www.terraform.io/docs/providers/azurerm/r/private_dns_zone.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PrivateDnsZoneConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_dns_zone.html#name PrivateDnsZone#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_dns_zone.html#resource_group_name PrivateDnsZone#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_dns_zone.html#tags PrivateDnsZone#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * soa_record block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_dns_zone.html#soa_record PrivateDnsZone#soa_record}
  */
  readonly soaRecord?: PrivateDnsZoneSoaRecord;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_dns_zone.html#timeouts PrivateDnsZone#timeouts}
  */
  readonly timeouts?: PrivateDnsZoneTimeouts;
}
export interface PrivateDnsZoneSoaRecord {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_dns_zone.html#email PrivateDnsZone#email}
  */
  readonly email: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_dns_zone.html#expire_time PrivateDnsZone#expire_time}
  */
  readonly expireTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_dns_zone.html#minimum_ttl PrivateDnsZone#minimum_ttl}
  */
  readonly minimumTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_dns_zone.html#refresh_time PrivateDnsZone#refresh_time}
  */
  readonly refreshTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_dns_zone.html#retry_time PrivateDnsZone#retry_time}
  */
  readonly retryTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_dns_zone.html#tags PrivateDnsZone#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_dns_zone.html#ttl PrivateDnsZone#ttl}
  */
  readonly ttl?: number;
}

export function privateDnsZoneSoaRecordToTerraform(struct?: PrivateDnsZoneSoaRecordOutputReference | PrivateDnsZoneSoaRecord): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
    expire_time: cdktf.numberToTerraform(struct!.expireTime),
    minimum_ttl: cdktf.numberToTerraform(struct!.minimumTtl),
    refresh_time: cdktf.numberToTerraform(struct!.refreshTime),
    retry_time: cdktf.numberToTerraform(struct!.retryTime),
    tags: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.tags),
    ttl: cdktf.numberToTerraform(struct!.ttl),
  }
}

export class PrivateDnsZoneSoaRecordOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): PrivateDnsZoneSoaRecord | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._email) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._expireTime) {
      hasAnyValues = true;
      internalValueResult.expireTime = this._expireTime;
    }
    if (this._minimumTtl) {
      hasAnyValues = true;
      internalValueResult.minimumTtl = this._minimumTtl;
    }
    if (this._refreshTime) {
      hasAnyValues = true;
      internalValueResult.refreshTime = this._refreshTime;
    }
    if (this._retryTime) {
      hasAnyValues = true;
      internalValueResult.retryTime = this._retryTime;
    }
    if (this._tags) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._ttl) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivateDnsZoneSoaRecord | undefined) {
    if (value === undefined) {
      this._email = undefined;
      this._expireTime = undefined;
      this._minimumTtl = undefined;
      this._refreshTime = undefined;
      this._retryTime = undefined;
      this._tags = undefined;
      this._ttl = undefined;
    }
    else {
      this._email = value.email;
      this._expireTime = value.expireTime;
      this._minimumTtl = value.minimumTtl;
      this._refreshTime = value.refreshTime;
      this._retryTime = value.retryTime;
      this._tags = value.tags;
      this._ttl = value.ttl;
    }
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // expire_time - computed: false, optional: true, required: false
  private _expireTime?: number; 
  public get expireTime() {
    return this.getNumberAttribute('expire_time');
  }
  public set expireTime(value: number) {
    this._expireTime = value;
  }
  public resetExpireTime() {
    this._expireTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expireTimeInput() {
    return this._expireTime;
  }

  // minimum_ttl - computed: false, optional: true, required: false
  private _minimumTtl?: number; 
  public get minimumTtl() {
    return this.getNumberAttribute('minimum_ttl');
  }
  public set minimumTtl(value: number) {
    this._minimumTtl = value;
  }
  public resetMinimumTtl() {
    this._minimumTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumTtlInput() {
    return this._minimumTtl;
  }

  // refresh_time - computed: false, optional: true, required: false
  private _refreshTime?: number; 
  public get refreshTime() {
    return this.getNumberAttribute('refresh_time');
  }
  public set refreshTime(value: number) {
    this._refreshTime = value;
  }
  public resetRefreshTime() {
    this._refreshTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTimeInput() {
    return this._refreshTime;
  }

  // retry_time - computed: false, optional: true, required: false
  private _retryTime?: number; 
  public get retryTime() {
    return this.getNumberAttribute('retry_time');
  }
  public set retryTime(value: number) {
    this._retryTime = value;
  }
  public resetRetryTime() {
    this._retryTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryTimeInput() {
    return this._retryTime;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }
}
export interface PrivateDnsZoneTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_dns_zone.html#create PrivateDnsZone#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_dns_zone.html#delete PrivateDnsZone#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_dns_zone.html#read PrivateDnsZone#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_dns_zone.html#update PrivateDnsZone#update}
  */
  readonly update?: string;
}

export function privateDnsZoneTimeoutsToTerraform(struct?: PrivateDnsZoneTimeoutsOutputReference | PrivateDnsZoneTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class PrivateDnsZoneTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): PrivateDnsZoneTimeouts | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._create) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivateDnsZoneTimeouts | undefined) {
    if (value === undefined) {
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else {
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/private_dns_zone.html azurerm_private_dns_zone}
*/
export class PrivateDnsZone extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_private_dns_zone";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/private_dns_zone.html azurerm_private_dns_zone} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PrivateDnsZoneConfig
  */
  public constructor(scope: Construct, id: string, config: PrivateDnsZoneConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_private_dns_zone',
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
    this._soaRecord.internalValue = config.soaRecord;
    this._timeouts.internalValue = config.timeouts;
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

  // max_number_of_virtual_network_links - computed: true, optional: false, required: false
  public get maxNumberOfVirtualNetworkLinks() {
    return this.getNumberAttribute('max_number_of_virtual_network_links');
  }

  // max_number_of_virtual_network_links_with_registration - computed: true, optional: false, required: false
  public get maxNumberOfVirtualNetworkLinksWithRegistration() {
    return this.getNumberAttribute('max_number_of_virtual_network_links_with_registration');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // number_of_record_sets - computed: true, optional: false, required: false
  public get numberOfRecordSets() {
    return this.getNumberAttribute('number_of_record_sets');
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // soa_record - computed: false, optional: true, required: false
  private _soaRecord = new PrivateDnsZoneSoaRecordOutputReference(this as any, "soa_record", true);
  public get soaRecord() {
    return this._soaRecord;
  }
  public putSoaRecord(value: PrivateDnsZoneSoaRecord) {
    this._soaRecord.internalValue = value;
  }
  public resetSoaRecord() {
    this._soaRecord.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soaRecordInput() {
    return this._soaRecord.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new PrivateDnsZoneTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: PrivateDnsZoneTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      soa_record: privateDnsZoneSoaRecordToTerraform(this._soaRecord.internalValue),
      timeouts: privateDnsZoneTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
