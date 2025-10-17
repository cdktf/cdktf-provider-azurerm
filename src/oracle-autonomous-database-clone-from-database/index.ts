/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OracleAutonomousDatabaseCloneFromDatabaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#admin_password OracleAutonomousDatabaseCloneFromDatabase#admin_password}
  */
  readonly adminPassword: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#allowed_ip_addresses OracleAutonomousDatabaseCloneFromDatabase#allowed_ip_addresses}
  */
  readonly allowedIpAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#auto_scaling_enabled OracleAutonomousDatabaseCloneFromDatabase#auto_scaling_enabled}
  */
  readonly autoScalingEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#auto_scaling_for_storage_enabled OracleAutonomousDatabaseCloneFromDatabase#auto_scaling_for_storage_enabled}
  */
  readonly autoScalingForStorageEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#backup_retention_period_in_days OracleAutonomousDatabaseCloneFromDatabase#backup_retention_period_in_days}
  */
  readonly backupRetentionPeriodInDays: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#character_set OracleAutonomousDatabaseCloneFromDatabase#character_set}
  */
  readonly characterSet: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#clone_type OracleAutonomousDatabaseCloneFromDatabase#clone_type}
  */
  readonly cloneType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#compute_count OracleAutonomousDatabaseCloneFromDatabase#compute_count}
  */
  readonly computeCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#compute_model OracleAutonomousDatabaseCloneFromDatabase#compute_model}
  */
  readonly computeModel: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#customer_contacts OracleAutonomousDatabaseCloneFromDatabase#customer_contacts}
  */
  readonly customerContacts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#data_storage_size_in_tb OracleAutonomousDatabaseCloneFromDatabase#data_storage_size_in_tb}
  */
  readonly dataStorageSizeInTb: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#database_version OracleAutonomousDatabaseCloneFromDatabase#database_version}
  */
  readonly databaseVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#database_workload OracleAutonomousDatabaseCloneFromDatabase#database_workload}
  */
  readonly databaseWorkload: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#display_name OracleAutonomousDatabaseCloneFromDatabase#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#id OracleAutonomousDatabaseCloneFromDatabase#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#license_model OracleAutonomousDatabaseCloneFromDatabase#license_model}
  */
  readonly licenseModel: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#location OracleAutonomousDatabaseCloneFromDatabase#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#mtls_connection_required OracleAutonomousDatabaseCloneFromDatabase#mtls_connection_required}
  */
  readonly mtlsConnectionRequired: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#name OracleAutonomousDatabaseCloneFromDatabase#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#national_character_set OracleAutonomousDatabaseCloneFromDatabase#national_character_set}
  */
  readonly nationalCharacterSet: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#refreshable_model OracleAutonomousDatabaseCloneFromDatabase#refreshable_model}
  */
  readonly refreshableModel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#resource_group_name OracleAutonomousDatabaseCloneFromDatabase#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#source_autonomous_database_id OracleAutonomousDatabaseCloneFromDatabase#source_autonomous_database_id}
  */
  readonly sourceAutonomousDatabaseId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#subnet_id OracleAutonomousDatabaseCloneFromDatabase#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#tags OracleAutonomousDatabaseCloneFromDatabase#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#virtual_network_id OracleAutonomousDatabaseCloneFromDatabase#virtual_network_id}
  */
  readonly virtualNetworkId?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#timeouts OracleAutonomousDatabaseCloneFromDatabase#timeouts}
  */
  readonly timeouts?: OracleAutonomousDatabaseCloneFromDatabaseTimeouts;
}
export interface OracleAutonomousDatabaseCloneFromDatabaseTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#create OracleAutonomousDatabaseCloneFromDatabase#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#delete OracleAutonomousDatabaseCloneFromDatabase#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#read OracleAutonomousDatabaseCloneFromDatabase#read}
  */
  readonly read?: string;
}

export function oracleAutonomousDatabaseCloneFromDatabaseTimeoutsToTerraform(struct?: OracleAutonomousDatabaseCloneFromDatabaseTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function oracleAutonomousDatabaseCloneFromDatabaseTimeoutsToHclTerraform(struct?: OracleAutonomousDatabaseCloneFromDatabaseTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OracleAutonomousDatabaseCloneFromDatabaseTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleAutonomousDatabaseCloneFromDatabaseTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database azurerm_oracle_autonomous_database_clone_from_database}
*/
export class OracleAutonomousDatabaseCloneFromDatabase extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_oracle_autonomous_database_clone_from_database";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OracleAutonomousDatabaseCloneFromDatabase resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OracleAutonomousDatabaseCloneFromDatabase to import
  * @param importFromId The id of the existing OracleAutonomousDatabaseCloneFromDatabase that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OracleAutonomousDatabaseCloneFromDatabase to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_oracle_autonomous_database_clone_from_database", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database azurerm_oracle_autonomous_database_clone_from_database} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OracleAutonomousDatabaseCloneFromDatabaseConfig
  */
  public constructor(scope: Construct, id: string, config: OracleAutonomousDatabaseCloneFromDatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_oracle_autonomous_database_clone_from_database',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.49.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminPassword = config.adminPassword;
    this._allowedIpAddresses = config.allowedIpAddresses;
    this._autoScalingEnabled = config.autoScalingEnabled;
    this._autoScalingForStorageEnabled = config.autoScalingForStorageEnabled;
    this._backupRetentionPeriodInDays = config.backupRetentionPeriodInDays;
    this._characterSet = config.characterSet;
    this._cloneType = config.cloneType;
    this._computeCount = config.computeCount;
    this._computeModel = config.computeModel;
    this._customerContacts = config.customerContacts;
    this._dataStorageSizeInTb = config.dataStorageSizeInTb;
    this._databaseVersion = config.databaseVersion;
    this._databaseWorkload = config.databaseWorkload;
    this._displayName = config.displayName;
    this._id = config.id;
    this._licenseModel = config.licenseModel;
    this._location = config.location;
    this._mtlsConnectionRequired = config.mtlsConnectionRequired;
    this._name = config.name;
    this._nationalCharacterSet = config.nationalCharacterSet;
    this._refreshableModel = config.refreshableModel;
    this._resourceGroupName = config.resourceGroupName;
    this._sourceAutonomousDatabaseId = config.sourceAutonomousDatabaseId;
    this._subnetId = config.subnetId;
    this._tags = config.tags;
    this._virtualNetworkId = config.virtualNetworkId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_password - computed: false, optional: false, required: true
  private _adminPassword?: string; 
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }
  public set adminPassword(value: string) {
    this._adminPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordInput() {
    return this._adminPassword;
  }

  // allowed_ip_addresses - computed: false, optional: true, required: false
  private _allowedIpAddresses?: string[]; 
  public get allowedIpAddresses() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_ip_addresses'));
  }
  public set allowedIpAddresses(value: string[]) {
    this._allowedIpAddresses = value;
  }
  public resetAllowedIpAddresses() {
    this._allowedIpAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedIpAddressesInput() {
    return this._allowedIpAddresses;
  }

  // auto_scaling_enabled - computed: false, optional: false, required: true
  private _autoScalingEnabled?: boolean | cdktf.IResolvable; 
  public get autoScalingEnabled() {
    return this.getBooleanAttribute('auto_scaling_enabled');
  }
  public set autoScalingEnabled(value: boolean | cdktf.IResolvable) {
    this._autoScalingEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalingEnabledInput() {
    return this._autoScalingEnabled;
  }

  // auto_scaling_for_storage_enabled - computed: false, optional: false, required: true
  private _autoScalingForStorageEnabled?: boolean | cdktf.IResolvable; 
  public get autoScalingForStorageEnabled() {
    return this.getBooleanAttribute('auto_scaling_for_storage_enabled');
  }
  public set autoScalingForStorageEnabled(value: boolean | cdktf.IResolvable) {
    this._autoScalingForStorageEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalingForStorageEnabledInput() {
    return this._autoScalingForStorageEnabled;
  }

  // backup_retention_period_in_days - computed: false, optional: false, required: true
  private _backupRetentionPeriodInDays?: number; 
  public get backupRetentionPeriodInDays() {
    return this.getNumberAttribute('backup_retention_period_in_days');
  }
  public set backupRetentionPeriodInDays(value: number) {
    this._backupRetentionPeriodInDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupRetentionPeriodInDaysInput() {
    return this._backupRetentionPeriodInDays;
  }

  // character_set - computed: false, optional: false, required: true
  private _characterSet?: string; 
  public get characterSet() {
    return this.getStringAttribute('character_set');
  }
  public set characterSet(value: string) {
    this._characterSet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get characterSetInput() {
    return this._characterSet;
  }

  // clone_type - computed: false, optional: false, required: true
  private _cloneType?: string; 
  public get cloneType() {
    return this.getStringAttribute('clone_type');
  }
  public set cloneType(value: string) {
    this._cloneType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloneTypeInput() {
    return this._cloneType;
  }

  // compute_count - computed: false, optional: false, required: true
  private _computeCount?: number; 
  public get computeCount() {
    return this.getNumberAttribute('compute_count');
  }
  public set computeCount(value: number) {
    this._computeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeCountInput() {
    return this._computeCount;
  }

  // compute_model - computed: false, optional: false, required: true
  private _computeModel?: string; 
  public get computeModel() {
    return this.getStringAttribute('compute_model');
  }
  public set computeModel(value: string) {
    this._computeModel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeModelInput() {
    return this._computeModel;
  }

  // customer_contacts - computed: false, optional: true, required: false
  private _customerContacts?: string[]; 
  public get customerContacts() {
    return this.getListAttribute('customer_contacts');
  }
  public set customerContacts(value: string[]) {
    this._customerContacts = value;
  }
  public resetCustomerContacts() {
    this._customerContacts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerContactsInput() {
    return this._customerContacts;
  }

  // data_storage_size_in_tb - computed: false, optional: false, required: true
  private _dataStorageSizeInTb?: number; 
  public get dataStorageSizeInTb() {
    return this.getNumberAttribute('data_storage_size_in_tb');
  }
  public set dataStorageSizeInTb(value: number) {
    this._dataStorageSizeInTb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStorageSizeInTbInput() {
    return this._dataStorageSizeInTb;
  }

  // database_version - computed: false, optional: false, required: true
  private _databaseVersion?: string; 
  public get databaseVersion() {
    return this.getStringAttribute('database_version');
  }
  public set databaseVersion(value: string) {
    this._databaseVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseVersionInput() {
    return this._databaseVersion;
  }

  // database_workload - computed: false, optional: false, required: true
  private _databaseWorkload?: string; 
  public get databaseWorkload() {
    return this.getStringAttribute('database_workload');
  }
  public set databaseWorkload(value: string) {
    this._databaseWorkload = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseWorkloadInput() {
    return this._databaseWorkload;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

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

  // license_model - computed: false, optional: false, required: true
  private _licenseModel?: string; 
  public get licenseModel() {
    return this.getStringAttribute('license_model');
  }
  public set licenseModel(value: string) {
    this._licenseModel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseModelInput() {
    return this._licenseModel;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // mtls_connection_required - computed: false, optional: false, required: true
  private _mtlsConnectionRequired?: boolean | cdktf.IResolvable; 
  public get mtlsConnectionRequired() {
    return this.getBooleanAttribute('mtls_connection_required');
  }
  public set mtlsConnectionRequired(value: boolean | cdktf.IResolvable) {
    this._mtlsConnectionRequired = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mtlsConnectionRequiredInput() {
    return this._mtlsConnectionRequired;
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

  // national_character_set - computed: false, optional: false, required: true
  private _nationalCharacterSet?: string; 
  public get nationalCharacterSet() {
    return this.getStringAttribute('national_character_set');
  }
  public set nationalCharacterSet(value: string) {
    this._nationalCharacterSet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nationalCharacterSetInput() {
    return this._nationalCharacterSet;
  }

  // refreshable_model - computed: false, optional: true, required: false
  private _refreshableModel?: string; 
  public get refreshableModel() {
    return this.getStringAttribute('refreshable_model');
  }
  public set refreshableModel(value: string) {
    this._refreshableModel = value;
  }
  public resetRefreshableModel() {
    this._refreshableModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshableModelInput() {
    return this._refreshableModel;
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

  // source_autonomous_database_id - computed: false, optional: false, required: true
  private _sourceAutonomousDatabaseId?: string; 
  public get sourceAutonomousDatabaseId() {
    return this.getStringAttribute('source_autonomous_database_id');
  }
  public set sourceAutonomousDatabaseId(value: string) {
    this._sourceAutonomousDatabaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAutonomousDatabaseIdInput() {
    return this._sourceAutonomousDatabaseId;
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
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

  // virtual_network_id - computed: false, optional: true, required: false
  private _virtualNetworkId?: string; 
  public get virtualNetworkId() {
    return this.getStringAttribute('virtual_network_id');
  }
  public set virtualNetworkId(value: string) {
    this._virtualNetworkId = value;
  }
  public resetVirtualNetworkId() {
    this._virtualNetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkIdInput() {
    return this._virtualNetworkId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OracleAutonomousDatabaseCloneFromDatabaseTimeouts) {
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
      admin_password: cdktf.stringToTerraform(this._adminPassword),
      allowed_ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedIpAddresses),
      auto_scaling_enabled: cdktf.booleanToTerraform(this._autoScalingEnabled),
      auto_scaling_for_storage_enabled: cdktf.booleanToTerraform(this._autoScalingForStorageEnabled),
      backup_retention_period_in_days: cdktf.numberToTerraform(this._backupRetentionPeriodInDays),
      character_set: cdktf.stringToTerraform(this._characterSet),
      clone_type: cdktf.stringToTerraform(this._cloneType),
      compute_count: cdktf.numberToTerraform(this._computeCount),
      compute_model: cdktf.stringToTerraform(this._computeModel),
      customer_contacts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._customerContacts),
      data_storage_size_in_tb: cdktf.numberToTerraform(this._dataStorageSizeInTb),
      database_version: cdktf.stringToTerraform(this._databaseVersion),
      database_workload: cdktf.stringToTerraform(this._databaseWorkload),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      license_model: cdktf.stringToTerraform(this._licenseModel),
      location: cdktf.stringToTerraform(this._location),
      mtls_connection_required: cdktf.booleanToTerraform(this._mtlsConnectionRequired),
      name: cdktf.stringToTerraform(this._name),
      national_character_set: cdktf.stringToTerraform(this._nationalCharacterSet),
      refreshable_model: cdktf.stringToTerraform(this._refreshableModel),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      source_autonomous_database_id: cdktf.stringToTerraform(this._sourceAutonomousDatabaseId),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      virtual_network_id: cdktf.stringToTerraform(this._virtualNetworkId),
      timeouts: oracleAutonomousDatabaseCloneFromDatabaseTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_password: {
        value: cdktf.stringToHclTerraform(this._adminPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allowed_ip_addresses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedIpAddresses),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      auto_scaling_enabled: {
        value: cdktf.booleanToHclTerraform(this._autoScalingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_scaling_for_storage_enabled: {
        value: cdktf.booleanToHclTerraform(this._autoScalingForStorageEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      backup_retention_period_in_days: {
        value: cdktf.numberToHclTerraform(this._backupRetentionPeriodInDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      character_set: {
        value: cdktf.stringToHclTerraform(this._characterSet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clone_type: {
        value: cdktf.stringToHclTerraform(this._cloneType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compute_count: {
        value: cdktf.numberToHclTerraform(this._computeCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      compute_model: {
        value: cdktf.stringToHclTerraform(this._computeModel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customer_contacts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._customerContacts),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      data_storage_size_in_tb: {
        value: cdktf.numberToHclTerraform(this._dataStorageSizeInTb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      database_version: {
        value: cdktf.stringToHclTerraform(this._databaseVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_workload: {
        value: cdktf.stringToHclTerraform(this._databaseWorkload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      license_model: {
        value: cdktf.stringToHclTerraform(this._licenseModel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mtls_connection_required: {
        value: cdktf.booleanToHclTerraform(this._mtlsConnectionRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      national_character_set: {
        value: cdktf.stringToHclTerraform(this._nationalCharacterSet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      refreshable_model: {
        value: cdktf.stringToHclTerraform(this._refreshableModel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_autonomous_database_id: {
        value: cdktf.stringToHclTerraform(this._sourceAutonomousDatabaseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      virtual_network_id: {
        value: cdktf.stringToHclTerraform(this._virtualNetworkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: oracleAutonomousDatabaseCloneFromDatabaseTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OracleAutonomousDatabaseCloneFromDatabaseTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
