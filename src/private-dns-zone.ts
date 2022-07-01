// https://www.terraform.io/docs/providers/azurerm/r/private_dns_zone
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PrivateDnsZoneConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_dns_zone#id PrivateDnsZone#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_dns_zone#name PrivateDnsZone#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_dns_zone#resource_group_name PrivateDnsZone#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_dns_zone#tags PrivateDnsZone#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * soa_record block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_dns_zone#soa_record PrivateDnsZone#soa_record}
  */
  readonly soaRecord?: PrivateDnsZoneSoaRecord;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_dns_zone#timeouts PrivateDnsZone#timeouts}
  */
  readonly timeouts?: PrivateDnsZoneTimeouts;
}
export interface PrivateDnsZoneSoaRecord {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_dns_zone#email PrivateDnsZone#email}
  */
  readonly email: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_dns_zone#expire_time PrivateDnsZone#expire_time}
  */
  readonly expireTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_dns_zone#minimum_ttl PrivateDnsZone#minimum_ttl}
  */
  readonly minimumTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_dns_zone#refresh_time PrivateDnsZone#refresh_time}
  */
  readonly refreshTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_dns_zone#retry_time PrivateDnsZone#retry_time}
  */
  readonly retryTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_dns_zone#tags PrivateDnsZone#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_dns_zone#ttl PrivateDnsZone#ttl}
  */
  readonly ttl?: number;
}

export function privateDnsZoneSoaRecordToTerraform(struct?: PrivateDnsZoneSoaRecordOutputReference | PrivateDnsZoneSoaRecord): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
    expire_time: cdktf.numberToTerraform(struct!.expireTime),
    minimum_ttl: cdktf.numberToTerraform(struct!.minimumTtl),
    refresh_time: cdktf.numberToTerraform(struct!.refreshTime),
    retry_time: cdktf.numberToTerraform(struct!.retryTime),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    ttl: cdktf.numberToTerraform(struct!.ttl),
  }
}

export class PrivateDnsZoneSoaRecordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PrivateDnsZoneSoaRecord | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._expireTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.expireTime = this._expireTime;
    }
    if (this._minimumTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumTtl = this._minimumTtl;
    }
    if (this._refreshTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshTime = this._refreshTime;
    }
    if (this._retryTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryTime = this._retryTime;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivateDnsZoneSoaRecord | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._email = undefined;
      this._expireTime = undefined;
      this._minimumTtl = undefined;
      this._refreshTime = undefined;
      this._retryTime = undefined;
      this._tags = undefined;
      this._ttl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // host_name - computed: true, optional: false, required: false
  public get hostName() {
    return this.getStringAttribute('host_name');
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

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getNumberAttribute('serial_number');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_dns_zone#create PrivateDnsZone#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_dns_zone#delete PrivateDnsZone#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_dns_zone#read PrivateDnsZone#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_dns_zone#update PrivateDnsZone#update}
  */
  readonly update?: string;
}

export function privateDnsZoneTimeoutsToTerraform(struct?: PrivateDnsZoneTimeoutsOutputReference | PrivateDnsZoneTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PrivateDnsZoneTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivateDnsZoneTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/private_dns_zone azurerm_private_dns_zone}
*/
export class PrivateDnsZone extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_private_dns_zone";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/private_dns_zone azurerm_private_dns_zone} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PrivateDnsZoneConfig
  */
  public constructor(scope: Construct, id: string, config: PrivateDnsZoneConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_private_dns_zone',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '3.12.0',
        providerVersionConstraint: '~> 3.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._id = config.id;
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
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
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
  private _soaRecord = new PrivateDnsZoneSoaRecordOutputReference(this, "soa_record");
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
  private _timeouts = new PrivateDnsZoneTimeoutsOutputReference(this, "timeouts");
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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      soa_record: privateDnsZoneSoaRecordToTerraform(this._soaRecord.internalValue),
      timeouts: privateDnsZoneTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
