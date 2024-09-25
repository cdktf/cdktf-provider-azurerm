// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/managed_lustre_file_system
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagedLustreFileSystemConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/managed_lustre_file_system#id ManagedLustreFileSystem#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/managed_lustre_file_system#location ManagedLustreFileSystem#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/managed_lustre_file_system#name ManagedLustreFileSystem#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/managed_lustre_file_system#resource_group_name ManagedLustreFileSystem#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/managed_lustre_file_system#sku_name ManagedLustreFileSystem#sku_name}
  */
  readonly skuName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/managed_lustre_file_system#storage_capacity_in_tb ManagedLustreFileSystem#storage_capacity_in_tb}
  */
  readonly storageCapacityInTb: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/managed_lustre_file_system#subnet_id ManagedLustreFileSystem#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/managed_lustre_file_system#tags ManagedLustreFileSystem#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/managed_lustre_file_system#zones ManagedLustreFileSystem#zones}
  */
  readonly zones: string[];
  /**
  * encryption_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/managed_lustre_file_system#encryption_key ManagedLustreFileSystem#encryption_key}
  */
  readonly encryptionKey?: ManagedLustreFileSystemEncryptionKey;
  /**
  * hsm_setting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/managed_lustre_file_system#hsm_setting ManagedLustreFileSystem#hsm_setting}
  */
  readonly hsmSetting?: ManagedLustreFileSystemHsmSetting;
  /**
  * identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/managed_lustre_file_system#identity ManagedLustreFileSystem#identity}
  */
  readonly identity?: ManagedLustreFileSystemIdentity;
  /**
  * maintenance_window block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/managed_lustre_file_system#maintenance_window ManagedLustreFileSystem#maintenance_window}
  */
  readonly maintenanceWindow: ManagedLustreFileSystemMaintenanceWindow;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/managed_lustre_file_system#timeouts ManagedLustreFileSystem#timeouts}
  */
  readonly timeouts?: ManagedLustreFileSystemTimeouts;
}
export interface ManagedLustreFileSystemEncryptionKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/managed_lustre_file_system#key_url ManagedLustreFileSystem#key_url}
  */
  readonly keyUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/managed_lustre_file_system#source_vault_id ManagedLustreFileSystem#source_vault_id}
  */
  readonly sourceVaultId: string;
}

export function managedLustreFileSystemEncryptionKeyToTerraform(struct?: ManagedLustreFileSystemEncryptionKeyOutputReference | ManagedLustreFileSystemEncryptionKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_url: cdktf.stringToTerraform(struct!.keyUrl),
    source_vault_id: cdktf.stringToTerraform(struct!.sourceVaultId),
  }
}


export function managedLustreFileSystemEncryptionKeyToHclTerraform(struct?: ManagedLustreFileSystemEncryptionKeyOutputReference | ManagedLustreFileSystemEncryptionKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_url: {
      value: cdktf.stringToHclTerraform(struct!.keyUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_vault_id: {
      value: cdktf.stringToHclTerraform(struct!.sourceVaultId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedLustreFileSystemEncryptionKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedLustreFileSystemEncryptionKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyUrl = this._keyUrl;
    }
    if (this._sourceVaultId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceVaultId = this._sourceVaultId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedLustreFileSystemEncryptionKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyUrl = undefined;
      this._sourceVaultId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyUrl = value.keyUrl;
      this._sourceVaultId = value.sourceVaultId;
    }
  }

  // key_url - computed: false, optional: false, required: true
  private _keyUrl?: string; 
  public get keyUrl() {
    return this.getStringAttribute('key_url');
  }
  public set keyUrl(value: string) {
    this._keyUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyUrlInput() {
    return this._keyUrl;
  }

  // source_vault_id - computed: false, optional: false, required: true
  private _sourceVaultId?: string; 
  public get sourceVaultId() {
    return this.getStringAttribute('source_vault_id');
  }
  public set sourceVaultId(value: string) {
    this._sourceVaultId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceVaultIdInput() {
    return this._sourceVaultId;
  }
}
export interface ManagedLustreFileSystemHsmSetting {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/managed_lustre_file_system#container_id ManagedLustreFileSystem#container_id}
  */
  readonly containerId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/managed_lustre_file_system#import_prefix ManagedLustreFileSystem#import_prefix}
  */
  readonly importPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/managed_lustre_file_system#logging_container_id ManagedLustreFileSystem#logging_container_id}
  */
  readonly loggingContainerId: string;
}

export function managedLustreFileSystemHsmSettingToTerraform(struct?: ManagedLustreFileSystemHsmSettingOutputReference | ManagedLustreFileSystemHsmSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_id: cdktf.stringToTerraform(struct!.containerId),
    import_prefix: cdktf.stringToTerraform(struct!.importPrefix),
    logging_container_id: cdktf.stringToTerraform(struct!.loggingContainerId),
  }
}


export function managedLustreFileSystemHsmSettingToHclTerraform(struct?: ManagedLustreFileSystemHsmSettingOutputReference | ManagedLustreFileSystemHsmSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_id: {
      value: cdktf.stringToHclTerraform(struct!.containerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    import_prefix: {
      value: cdktf.stringToHclTerraform(struct!.importPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logging_container_id: {
      value: cdktf.stringToHclTerraform(struct!.loggingContainerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedLustreFileSystemHsmSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedLustreFileSystemHsmSetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerId = this._containerId;
    }
    if (this._importPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.importPrefix = this._importPrefix;
    }
    if (this._loggingContainerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggingContainerId = this._loggingContainerId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedLustreFileSystemHsmSetting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._containerId = undefined;
      this._importPrefix = undefined;
      this._loggingContainerId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._containerId = value.containerId;
      this._importPrefix = value.importPrefix;
      this._loggingContainerId = value.loggingContainerId;
    }
  }

  // container_id - computed: false, optional: false, required: true
  private _containerId?: string; 
  public get containerId() {
    return this.getStringAttribute('container_id');
  }
  public set containerId(value: string) {
    this._containerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerIdInput() {
    return this._containerId;
  }

  // import_prefix - computed: false, optional: true, required: false
  private _importPrefix?: string; 
  public get importPrefix() {
    return this.getStringAttribute('import_prefix');
  }
  public set importPrefix(value: string) {
    this._importPrefix = value;
  }
  public resetImportPrefix() {
    this._importPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importPrefixInput() {
    return this._importPrefix;
  }

  // logging_container_id - computed: false, optional: false, required: true
  private _loggingContainerId?: string; 
  public get loggingContainerId() {
    return this.getStringAttribute('logging_container_id');
  }
  public set loggingContainerId(value: string) {
    this._loggingContainerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingContainerIdInput() {
    return this._loggingContainerId;
  }
}
export interface ManagedLustreFileSystemIdentity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/managed_lustre_file_system#identity_ids ManagedLustreFileSystem#identity_ids}
  */
  readonly identityIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/managed_lustre_file_system#type ManagedLustreFileSystem#type}
  */
  readonly type: string;
}

export function managedLustreFileSystemIdentityToTerraform(struct?: ManagedLustreFileSystemIdentityOutputReference | ManagedLustreFileSystemIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function managedLustreFileSystemIdentityToHclTerraform(struct?: ManagedLustreFileSystemIdentityOutputReference | ManagedLustreFileSystemIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identity_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.identityIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedLustreFileSystemIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedLustreFileSystemIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identityIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityIds = this._identityIds;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedLustreFileSystemIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._identityIds = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._identityIds = value.identityIds;
      this._type = value.type;
    }
  }

  // identity_ids - computed: false, optional: false, required: true
  private _identityIds?: string[]; 
  public get identityIds() {
    return cdktf.Fn.tolist(this.getListAttribute('identity_ids'));
  }
  public set identityIds(value: string[]) {
    this._identityIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityIdsInput() {
    return this._identityIds;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface ManagedLustreFileSystemMaintenanceWindow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/managed_lustre_file_system#day_of_week ManagedLustreFileSystem#day_of_week}
  */
  readonly dayOfWeek: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/managed_lustre_file_system#time_of_day_in_utc ManagedLustreFileSystem#time_of_day_in_utc}
  */
  readonly timeOfDayInUtc: string;
}

export function managedLustreFileSystemMaintenanceWindowToTerraform(struct?: ManagedLustreFileSystemMaintenanceWindowOutputReference | ManagedLustreFileSystemMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_week: cdktf.stringToTerraform(struct!.dayOfWeek),
    time_of_day_in_utc: cdktf.stringToTerraform(struct!.timeOfDayInUtc),
  }
}


export function managedLustreFileSystemMaintenanceWindowToHclTerraform(struct?: ManagedLustreFileSystemMaintenanceWindowOutputReference | ManagedLustreFileSystemMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day_of_week: {
      value: cdktf.stringToHclTerraform(struct!.dayOfWeek),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_of_day_in_utc: {
      value: cdktf.stringToHclTerraform(struct!.timeOfDayInUtc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedLustreFileSystemMaintenanceWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedLustreFileSystemMaintenanceWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    if (this._timeOfDayInUtc !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeOfDayInUtc = this._timeOfDayInUtc;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedLustreFileSystemMaintenanceWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dayOfWeek = undefined;
      this._timeOfDayInUtc = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dayOfWeek = value.dayOfWeek;
      this._timeOfDayInUtc = value.timeOfDayInUtc;
    }
  }

  // day_of_week - computed: false, optional: false, required: true
  private _dayOfWeek?: string; 
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }
  public set dayOfWeek(value: string) {
    this._dayOfWeek = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }

  // time_of_day_in_utc - computed: false, optional: false, required: true
  private _timeOfDayInUtc?: string; 
  public get timeOfDayInUtc() {
    return this.getStringAttribute('time_of_day_in_utc');
  }
  public set timeOfDayInUtc(value: string) {
    this._timeOfDayInUtc = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeOfDayInUtcInput() {
    return this._timeOfDayInUtc;
  }
}
export interface ManagedLustreFileSystemTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/managed_lustre_file_system#create ManagedLustreFileSystem#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/managed_lustre_file_system#delete ManagedLustreFileSystem#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/managed_lustre_file_system#read ManagedLustreFileSystem#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/managed_lustre_file_system#update ManagedLustreFileSystem#update}
  */
  readonly update?: string;
}

export function managedLustreFileSystemTimeoutsToTerraform(struct?: ManagedLustreFileSystemTimeouts | cdktf.IResolvable): any {
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


export function managedLustreFileSystemTimeoutsToHclTerraform(struct?: ManagedLustreFileSystemTimeouts | cdktf.IResolvable): any {
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
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedLustreFileSystemTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ManagedLustreFileSystemTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ManagedLustreFileSystemTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/managed_lustre_file_system azurerm_managed_lustre_file_system}
*/
export class ManagedLustreFileSystem extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_managed_lustre_file_system";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagedLustreFileSystem resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagedLustreFileSystem to import
  * @param importFromId The id of the existing ManagedLustreFileSystem that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/managed_lustre_file_system#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagedLustreFileSystem to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_managed_lustre_file_system", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/managed_lustre_file_system azurerm_managed_lustre_file_system} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagedLustreFileSystemConfig
  */
  public constructor(scope: Construct, id: string, config: ManagedLustreFileSystemConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_managed_lustre_file_system',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.3.0',
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
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._skuName = config.skuName;
    this._storageCapacityInTb = config.storageCapacityInTb;
    this._subnetId = config.subnetId;
    this._tags = config.tags;
    this._zones = config.zones;
    this._encryptionKey.internalValue = config.encryptionKey;
    this._hsmSetting.internalValue = config.hsmSetting;
    this._identity.internalValue = config.identity;
    this._maintenanceWindow.internalValue = config.maintenanceWindow;
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

  // mgs_address - computed: true, optional: false, required: false
  public get mgsAddress() {
    return this.getStringAttribute('mgs_address');
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

  // sku_name - computed: false, optional: false, required: true
  private _skuName?: string; 
  public get skuName() {
    return this.getStringAttribute('sku_name');
  }
  public set skuName(value: string) {
    this._skuName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuNameInput() {
    return this._skuName;
  }

  // storage_capacity_in_tb - computed: false, optional: false, required: true
  private _storageCapacityInTb?: number; 
  public get storageCapacityInTb() {
    return this.getNumberAttribute('storage_capacity_in_tb');
  }
  public set storageCapacityInTb(value: number) {
    this._storageCapacityInTb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageCapacityInTbInput() {
    return this._storageCapacityInTb;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
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

  // zones - computed: false, optional: false, required: true
  private _zones?: string[]; 
  public get zones() {
    return cdktf.Fn.tolist(this.getListAttribute('zones'));
  }
  public set zones(value: string[]) {
    this._zones = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones;
  }

  // encryption_key - computed: false, optional: true, required: false
  private _encryptionKey = new ManagedLustreFileSystemEncryptionKeyOutputReference(this, "encryption_key");
  public get encryptionKey() {
    return this._encryptionKey;
  }
  public putEncryptionKey(value: ManagedLustreFileSystemEncryptionKey) {
    this._encryptionKey.internalValue = value;
  }
  public resetEncryptionKey() {
    this._encryptionKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyInput() {
    return this._encryptionKey.internalValue;
  }

  // hsm_setting - computed: false, optional: true, required: false
  private _hsmSetting = new ManagedLustreFileSystemHsmSettingOutputReference(this, "hsm_setting");
  public get hsmSetting() {
    return this._hsmSetting;
  }
  public putHsmSetting(value: ManagedLustreFileSystemHsmSetting) {
    this._hsmSetting.internalValue = value;
  }
  public resetHsmSetting() {
    this._hsmSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hsmSettingInput() {
    return this._hsmSetting.internalValue;
  }

  // identity - computed: false, optional: true, required: false
  private _identity = new ManagedLustreFileSystemIdentityOutputReference(this, "identity");
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: ManagedLustreFileSystemIdentity) {
    this._identity.internalValue = value;
  }
  public resetIdentity() {
    this._identity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }

  // maintenance_window - computed: false, optional: false, required: true
  private _maintenanceWindow = new ManagedLustreFileSystemMaintenanceWindowOutputReference(this, "maintenance_window");
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }
  public putMaintenanceWindow(value: ManagedLustreFileSystemMaintenanceWindow) {
    this._maintenanceWindow.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowInput() {
    return this._maintenanceWindow.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ManagedLustreFileSystemTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ManagedLustreFileSystemTimeouts) {
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
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      sku_name: cdktf.stringToTerraform(this._skuName),
      storage_capacity_in_tb: cdktf.numberToTerraform(this._storageCapacityInTb),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      zones: cdktf.listMapper(cdktf.stringToTerraform, false)(this._zones),
      encryption_key: managedLustreFileSystemEncryptionKeyToTerraform(this._encryptionKey.internalValue),
      hsm_setting: managedLustreFileSystemHsmSettingToTerraform(this._hsmSetting.internalValue),
      identity: managedLustreFileSystemIdentityToTerraform(this._identity.internalValue),
      maintenance_window: managedLustreFileSystemMaintenanceWindowToTerraform(this._maintenanceWindow.internalValue),
      timeouts: managedLustreFileSystemTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      sku_name: {
        value: cdktf.stringToHclTerraform(this._skuName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_capacity_in_tb: {
        value: cdktf.numberToHclTerraform(this._storageCapacityInTb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      zones: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._zones),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      encryption_key: {
        value: managedLustreFileSystemEncryptionKeyToHclTerraform(this._encryptionKey.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagedLustreFileSystemEncryptionKeyList",
      },
      hsm_setting: {
        value: managedLustreFileSystemHsmSettingToHclTerraform(this._hsmSetting.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagedLustreFileSystemHsmSettingList",
      },
      identity: {
        value: managedLustreFileSystemIdentityToHclTerraform(this._identity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagedLustreFileSystemIdentityList",
      },
      maintenance_window: {
        value: managedLustreFileSystemMaintenanceWindowToHclTerraform(this._maintenanceWindow.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagedLustreFileSystemMaintenanceWindowList",
      },
      timeouts: {
        value: managedLustreFileSystemTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ManagedLustreFileSystemTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
