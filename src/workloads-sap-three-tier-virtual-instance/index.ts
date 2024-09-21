// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkloadsSapThreeTierVirtualInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#app_location WorkloadsSapThreeTierVirtualInstance#app_location}
  */
  readonly appLocation: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#environment WorkloadsSapThreeTierVirtualInstance#environment}
  */
  readonly environment: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#id WorkloadsSapThreeTierVirtualInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#location WorkloadsSapThreeTierVirtualInstance#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#managed_resource_group_name WorkloadsSapThreeTierVirtualInstance#managed_resource_group_name}
  */
  readonly managedResourceGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#name WorkloadsSapThreeTierVirtualInstance#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#resource_group_name WorkloadsSapThreeTierVirtualInstance#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#sap_fqdn WorkloadsSapThreeTierVirtualInstance#sap_fqdn}
  */
  readonly sapFqdn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#sap_product WorkloadsSapThreeTierVirtualInstance#sap_product}
  */
  readonly sapProduct: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#tags WorkloadsSapThreeTierVirtualInstance#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#identity WorkloadsSapThreeTierVirtualInstance#identity}
  */
  readonly identity?: WorkloadsSapThreeTierVirtualInstanceIdentity;
  /**
  * three_tier_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#three_tier_configuration WorkloadsSapThreeTierVirtualInstance#three_tier_configuration}
  */
  readonly threeTierConfiguration: WorkloadsSapThreeTierVirtualInstanceThreeTierConfiguration;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#timeouts WorkloadsSapThreeTierVirtualInstance#timeouts}
  */
  readonly timeouts?: WorkloadsSapThreeTierVirtualInstanceTimeouts;
}
export interface WorkloadsSapThreeTierVirtualInstanceIdentity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#identity_ids WorkloadsSapThreeTierVirtualInstance#identity_ids}
  */
  readonly identityIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#type WorkloadsSapThreeTierVirtualInstance#type}
  */
  readonly type: string;
}

export function workloadsSapThreeTierVirtualInstanceIdentityToTerraform(struct?: WorkloadsSapThreeTierVirtualInstanceIdentityOutputReference | WorkloadsSapThreeTierVirtualInstanceIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function workloadsSapThreeTierVirtualInstanceIdentityToHclTerraform(struct?: WorkloadsSapThreeTierVirtualInstanceIdentityOutputReference | WorkloadsSapThreeTierVirtualInstanceIdentity): any {
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

export class WorkloadsSapThreeTierVirtualInstanceIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkloadsSapThreeTierVirtualInstanceIdentity | undefined {
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

  public set internalValue(value: WorkloadsSapThreeTierVirtualInstanceIdentity | undefined) {
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
export interface WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationApplicationServerConfigurationVirtualMachineConfigurationImage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#offer WorkloadsSapThreeTierVirtualInstance#offer}
  */
  readonly offer: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#publisher WorkloadsSapThreeTierVirtualInstance#publisher}
  */
  readonly publisher: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#sku WorkloadsSapThreeTierVirtualInstance#sku}
  */
  readonly sku: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#version WorkloadsSapThreeTierVirtualInstance#version}
  */
  readonly version: string;
}

export function workloadsSapThreeTierVirtualInstanceThreeTierConfigurationApplicationServerConfigurationVirtualMachineConfigurationImageToTerraform(struct?: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationApplicationServerConfigurationVirtualMachineConfigurationImageOutputReference | WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationApplicationServerConfigurationVirtualMachineConfigurationImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    offer: cdktf.stringToTerraform(struct!.offer),
    publisher: cdktf.stringToTerraform(struct!.publisher),
    sku: cdktf.stringToTerraform(struct!.sku),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function workloadsSapThreeTierVirtualInstanceThreeTierConfigurationApplicationServerConfigurationVirtualMachineConfigurationImageToHclTerraform(struct?: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationApplicationServerConfigurationVirtualMachineConfigurationImageOutputReference | WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationApplicationServerConfigurationVirtualMachineConfigurationImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    offer: {
      value: cdktf.stringToHclTerraform(struct!.offer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    publisher: {
      value: cdktf.stringToHclTerraform(struct!.publisher),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sku: {
      value: cdktf.stringToHclTerraform(struct!.sku),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationApplicationServerConfigurationVirtualMachineConfigurationImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationApplicationServerConfigurationVirtualMachineConfigurationImage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._offer !== undefined) {
      hasAnyValues = true;
      internalValueResult.offer = this._offer;
    }
    if (this._publisher !== undefined) {
      hasAnyValues = true;
      internalValueResult.publisher = this._publisher;
    }
    if (this._sku !== undefined) {
      hasAnyValues = true;
      internalValueResult.sku = this._sku;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationApplicationServerConfigurationVirtualMachineConfigurationImage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._offer = undefined;
      this._publisher = undefined;
      this._sku = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._offer = value.offer;
      this._publisher = value.publisher;
      this._sku = value.sku;
      this._version = value.version;
    }
  }

  // offer - computed: false, optional: false, required: true
  private _offer?: string; 
  public get offer() {
    return this.getStringAttribute('offer');
  }
  public set offer(value: string) {
    this._offer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get offerInput() {
    return this._offer;
  }

  // publisher - computed: false, optional: false, required: true
  private _publisher?: string; 
  public get publisher() {
    return this.getStringAttribute('publisher');
  }
  public set publisher(value: string) {
    this._publisher = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publisherInput() {
    return this._publisher;
  }

  // sku - computed: false, optional: false, required: true
  private _sku?: string; 
  public get sku() {
    return this.getStringAttribute('sku');
  }
  public set sku(value: string) {
    this._sku = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationApplicationServerConfigurationVirtualMachineConfigurationOsProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#admin_username WorkloadsSapThreeTierVirtualInstance#admin_username}
  */
  readonly adminUsername: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#ssh_private_key WorkloadsSapThreeTierVirtualInstance#ssh_private_key}
  */
  readonly sshPrivateKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#ssh_public_key WorkloadsSapThreeTierVirtualInstance#ssh_public_key}
  */
  readonly sshPublicKey: string;
}

export function workloadsSapThreeTierVirtualInstanceThreeTierConfigurationApplicationServerConfigurationVirtualMachineConfigurationOsProfileToTerraform(struct?: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationApplicationServerConfigurationVirtualMachineConfigurationOsProfileOutputReference | WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationApplicationServerConfigurationVirtualMachineConfigurationOsProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_username: cdktf.stringToTerraform(struct!.adminUsername),
    ssh_private_key: cdktf.stringToTerraform(struct!.sshPrivateKey),
    ssh_public_key: cdktf.stringToTerraform(struct!.sshPublicKey),
  }
}


export function workloadsSapThreeTierVirtualInstanceThreeTierConfigurationApplicationServerConfigurationVirtualMachineConfigurationOsProfileToHclTerraform(struct?: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationApplicationServerConfigurationVirtualMachineConfigurationOsProfileOutputReference | WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationApplicationServerConfigurationVirtualMachineConfigurationOsProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_username: {
      value: cdktf.stringToHclTerraform(struct!.adminUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_private_key: {
      value: cdktf.stringToHclTerraform(struct!.sshPrivateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_public_key: {
      value: cdktf.stringToHclTerraform(struct!.sshPublicKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationApplicationServerConfigurationVirtualMachineConfigurationOsProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationApplicationServerConfigurationVirtualMachineConfigurationOsProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminUsername = this._adminUsername;
    }
    if (this._sshPrivateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshPrivateKey = this._sshPrivateKey;
    }
    if (this._sshPublicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshPublicKey = this._sshPublicKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationApplicationServerConfigurationVirtualMachineConfigurationOsProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adminUsername = undefined;
      this._sshPrivateKey = undefined;
      this._sshPublicKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adminUsername = value.adminUsername;
      this._sshPrivateKey = value.sshPrivateKey;
      this._sshPublicKey = value.sshPublicKey;
    }
  }

  // admin_username - computed: false, optional: false, required: true
  private _adminUsername?: string; 
  public get adminUsername() {
    return this.getStringAttribute('admin_username');
  }
  public set adminUsername(value: string) {
    this._adminUsername = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminUsernameInput() {
    return this._adminUsername;
  }

  // ssh_private_key - computed: false, optional: false, required: true
  private _sshPrivateKey?: string; 
  public get sshPrivateKey() {
    return this.getStringAttribute('ssh_private_key');
  }
  public set sshPrivateKey(value: string) {
    this._sshPrivateKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPrivateKeyInput() {
    return this._sshPrivateKey;
  }

  // ssh_public_key - computed: false, optional: false, required: true
  private _sshPublicKey?: string; 
  public get sshPublicKey() {
    return this.getStringAttribute('ssh_public_key');
  }
  public set sshPublicKey(value: string) {
    this._sshPublicKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPublicKeyInput() {
    return this._sshPublicKey;
  }
}
export interface WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationApplicationServerConfigurationVirtualMachineConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#virtual_machine_size WorkloadsSapThreeTierVirtualInstance#virtual_machine_size}
  */
  readonly virtualMachineSize: string;
  /**
  * image block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#image WorkloadsSapThreeTierVirtualInstance#image}
  */
  readonly image: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationApplicationServerConfigurationVirtualMachineConfigurationImage;
  /**
  * os_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#os_profile WorkloadsSapThreeTierVirtualInstance#os_profile}
  */
  readonly osProfile: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationApplicationServerConfigurationVirtualMachineConfigurationOsProfile;
}

export function workloadsSapThreeTierVirtualInstanceThreeTierConfigurationApplicationServerConfigurationVirtualMachineConfigurationToTerraform(struct?: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationApplicationServerConfigurationVirtualMachineConfigurationOutputReference | WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationApplicationServerConfigurationVirtualMachineConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    virtual_machine_size: cdktf.stringToTerraform(struct!.virtualMachineSize),
    image: workloadsSapThreeTierVirtualInstanceThreeTierConfigurationApplicationServerConfigurationVirtualMachineConfigurationImageToTerraform(struct!.image),
    os_profile: workloadsSapThreeTierVirtualInstanceThreeTierConfigurationApplicationServerConfigurationVirtualMachineConfigurationOsProfileToTerraform(struct!.osProfile),
  }
}


export function workloadsSapThreeTierVirtualInstanceThreeTierConfigurationApplicationServerConfigurationVirtualMachineConfigurationToHclTerraform(struct?: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationApplicationServerConfigurationVirtualMachineConfigurationOutputReference | WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationApplicationServerConfigurationVirtualMachineConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    virtual_machine_size: {
      value: cdktf.stringToHclTerraform(struct!.virtualMachineSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image: {
      value: workloadsSapThreeTierVirtualInstanceThreeTierConfigurationApplicationServerConfigurationVirtualMachineConfigurationImageToHclTerraform(struct!.image),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationApplicationServerConfigurationVirtualMachineConfigurationImageList",
    },
    os_profile: {
      value: workloadsSapThreeTierVirtualInstanceThreeTierConfigurationApplicationServerConfigurationVirtualMachineConfigurationOsProfileToHclTerraform(struct!.osProfile),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationApplicationServerConfigurationVirtualMachineConfigurationOsProfileList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationApplicationServerConfigurationVirtualMachineConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationApplicationServerConfigurationVirtualMachineConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._virtualMachineSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualMachineSize = this._virtualMachineSize;
    }
    if (this._image?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image?.internalValue;
    }
    if (this._osProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.osProfile = this._osProfile?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationApplicationServerConfigurationVirtualMachineConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._virtualMachineSize = undefined;
      this._image.internalValue = undefined;
      this._osProfile.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._virtualMachineSize = value.virtualMachineSize;
      this._image.internalValue = value.image;
      this._osProfile.internalValue = value.osProfile;
    }
  }

  // virtual_machine_size - computed: false, optional: false, required: true
  private _virtualMachineSize?: string; 
  public get virtualMachineSize() {
    return this.getStringAttribute('virtual_machine_size');
  }
  public set virtualMachineSize(value: string) {
    this._virtualMachineSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualMachineSizeInput() {
    return this._virtualMachineSize;
  }

  // image - computed: false, optional: false, required: true
  private _image = new WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationApplicationServerConfigurationVirtualMachineConfigurationImageOutputReference(this, "image");
  public get image() {
    return this._image;
  }
  public putImage(value: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationApplicationServerConfigurationVirtualMachineConfigurationImage) {
    this._image.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image.internalValue;
  }

  // os_profile - computed: false, optional: false, required: true
  private _osProfile = new WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationApplicationServerConfigurationVirtualMachineConfigurationOsProfileOutputReference(this, "os_profile");
  public get osProfile() {
    return this._osProfile;
  }
  public putOsProfile(value: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationApplicationServerConfigurationVirtualMachineConfigurationOsProfile) {
    this._osProfile.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get osProfileInput() {
    return this._osProfile.internalValue;
  }
}
export interface WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationApplicationServerConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#instance_count WorkloadsSapThreeTierVirtualInstance#instance_count}
  */
  readonly instanceCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#subnet_id WorkloadsSapThreeTierVirtualInstance#subnet_id}
  */
  readonly subnetId: string;
  /**
  * virtual_machine_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#virtual_machine_configuration WorkloadsSapThreeTierVirtualInstance#virtual_machine_configuration}
  */
  readonly virtualMachineConfiguration: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationApplicationServerConfigurationVirtualMachineConfiguration;
}

export function workloadsSapThreeTierVirtualInstanceThreeTierConfigurationApplicationServerConfigurationToTerraform(struct?: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationApplicationServerConfigurationOutputReference | WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationApplicationServerConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_count: cdktf.numberToTerraform(struct!.instanceCount),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    virtual_machine_configuration: workloadsSapThreeTierVirtualInstanceThreeTierConfigurationApplicationServerConfigurationVirtualMachineConfigurationToTerraform(struct!.virtualMachineConfiguration),
  }
}


export function workloadsSapThreeTierVirtualInstanceThreeTierConfigurationApplicationServerConfigurationToHclTerraform(struct?: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationApplicationServerConfigurationOutputReference | WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationApplicationServerConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_count: {
      value: cdktf.numberToHclTerraform(struct!.instanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_machine_configuration: {
      value: workloadsSapThreeTierVirtualInstanceThreeTierConfigurationApplicationServerConfigurationVirtualMachineConfigurationToHclTerraform(struct!.virtualMachineConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationApplicationServerConfigurationVirtualMachineConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationApplicationServerConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationApplicationServerConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceCount = this._instanceCount;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._virtualMachineConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualMachineConfiguration = this._virtualMachineConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationApplicationServerConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceCount = undefined;
      this._subnetId = undefined;
      this._virtualMachineConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceCount = value.instanceCount;
      this._subnetId = value.subnetId;
      this._virtualMachineConfiguration.internalValue = value.virtualMachineConfiguration;
    }
  }

  // instance_count - computed: false, optional: false, required: true
  private _instanceCount?: number; 
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }
  public set instanceCount(value: number) {
    this._instanceCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceCountInput() {
    return this._instanceCount;
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

  // virtual_machine_configuration - computed: false, optional: false, required: true
  private _virtualMachineConfiguration = new WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationApplicationServerConfigurationVirtualMachineConfigurationOutputReference(this, "virtual_machine_configuration");
  public get virtualMachineConfiguration() {
    return this._virtualMachineConfiguration;
  }
  public putVirtualMachineConfiguration(value: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationApplicationServerConfigurationVirtualMachineConfiguration) {
    this._virtualMachineConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualMachineConfigurationInput() {
    return this._virtualMachineConfiguration.internalValue;
  }
}
export interface WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationCentralServerConfigurationVirtualMachineConfigurationImage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#offer WorkloadsSapThreeTierVirtualInstance#offer}
  */
  readonly offer: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#publisher WorkloadsSapThreeTierVirtualInstance#publisher}
  */
  readonly publisher: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#sku WorkloadsSapThreeTierVirtualInstance#sku}
  */
  readonly sku: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#version WorkloadsSapThreeTierVirtualInstance#version}
  */
  readonly version: string;
}

export function workloadsSapThreeTierVirtualInstanceThreeTierConfigurationCentralServerConfigurationVirtualMachineConfigurationImageToTerraform(struct?: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationCentralServerConfigurationVirtualMachineConfigurationImageOutputReference | WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationCentralServerConfigurationVirtualMachineConfigurationImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    offer: cdktf.stringToTerraform(struct!.offer),
    publisher: cdktf.stringToTerraform(struct!.publisher),
    sku: cdktf.stringToTerraform(struct!.sku),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function workloadsSapThreeTierVirtualInstanceThreeTierConfigurationCentralServerConfigurationVirtualMachineConfigurationImageToHclTerraform(struct?: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationCentralServerConfigurationVirtualMachineConfigurationImageOutputReference | WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationCentralServerConfigurationVirtualMachineConfigurationImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    offer: {
      value: cdktf.stringToHclTerraform(struct!.offer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    publisher: {
      value: cdktf.stringToHclTerraform(struct!.publisher),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sku: {
      value: cdktf.stringToHclTerraform(struct!.sku),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationCentralServerConfigurationVirtualMachineConfigurationImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationCentralServerConfigurationVirtualMachineConfigurationImage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._offer !== undefined) {
      hasAnyValues = true;
      internalValueResult.offer = this._offer;
    }
    if (this._publisher !== undefined) {
      hasAnyValues = true;
      internalValueResult.publisher = this._publisher;
    }
    if (this._sku !== undefined) {
      hasAnyValues = true;
      internalValueResult.sku = this._sku;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationCentralServerConfigurationVirtualMachineConfigurationImage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._offer = undefined;
      this._publisher = undefined;
      this._sku = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._offer = value.offer;
      this._publisher = value.publisher;
      this._sku = value.sku;
      this._version = value.version;
    }
  }

  // offer - computed: false, optional: false, required: true
  private _offer?: string; 
  public get offer() {
    return this.getStringAttribute('offer');
  }
  public set offer(value: string) {
    this._offer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get offerInput() {
    return this._offer;
  }

  // publisher - computed: false, optional: false, required: true
  private _publisher?: string; 
  public get publisher() {
    return this.getStringAttribute('publisher');
  }
  public set publisher(value: string) {
    this._publisher = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publisherInput() {
    return this._publisher;
  }

  // sku - computed: false, optional: false, required: true
  private _sku?: string; 
  public get sku() {
    return this.getStringAttribute('sku');
  }
  public set sku(value: string) {
    this._sku = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationCentralServerConfigurationVirtualMachineConfigurationOsProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#admin_username WorkloadsSapThreeTierVirtualInstance#admin_username}
  */
  readonly adminUsername: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#ssh_private_key WorkloadsSapThreeTierVirtualInstance#ssh_private_key}
  */
  readonly sshPrivateKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#ssh_public_key WorkloadsSapThreeTierVirtualInstance#ssh_public_key}
  */
  readonly sshPublicKey: string;
}

export function workloadsSapThreeTierVirtualInstanceThreeTierConfigurationCentralServerConfigurationVirtualMachineConfigurationOsProfileToTerraform(struct?: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationCentralServerConfigurationVirtualMachineConfigurationOsProfileOutputReference | WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationCentralServerConfigurationVirtualMachineConfigurationOsProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_username: cdktf.stringToTerraform(struct!.adminUsername),
    ssh_private_key: cdktf.stringToTerraform(struct!.sshPrivateKey),
    ssh_public_key: cdktf.stringToTerraform(struct!.sshPublicKey),
  }
}


export function workloadsSapThreeTierVirtualInstanceThreeTierConfigurationCentralServerConfigurationVirtualMachineConfigurationOsProfileToHclTerraform(struct?: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationCentralServerConfigurationVirtualMachineConfigurationOsProfileOutputReference | WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationCentralServerConfigurationVirtualMachineConfigurationOsProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_username: {
      value: cdktf.stringToHclTerraform(struct!.adminUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_private_key: {
      value: cdktf.stringToHclTerraform(struct!.sshPrivateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_public_key: {
      value: cdktf.stringToHclTerraform(struct!.sshPublicKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationCentralServerConfigurationVirtualMachineConfigurationOsProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationCentralServerConfigurationVirtualMachineConfigurationOsProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminUsername = this._adminUsername;
    }
    if (this._sshPrivateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshPrivateKey = this._sshPrivateKey;
    }
    if (this._sshPublicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshPublicKey = this._sshPublicKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationCentralServerConfigurationVirtualMachineConfigurationOsProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adminUsername = undefined;
      this._sshPrivateKey = undefined;
      this._sshPublicKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adminUsername = value.adminUsername;
      this._sshPrivateKey = value.sshPrivateKey;
      this._sshPublicKey = value.sshPublicKey;
    }
  }

  // admin_username - computed: false, optional: false, required: true
  private _adminUsername?: string; 
  public get adminUsername() {
    return this.getStringAttribute('admin_username');
  }
  public set adminUsername(value: string) {
    this._adminUsername = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminUsernameInput() {
    return this._adminUsername;
  }

  // ssh_private_key - computed: false, optional: false, required: true
  private _sshPrivateKey?: string; 
  public get sshPrivateKey() {
    return this.getStringAttribute('ssh_private_key');
  }
  public set sshPrivateKey(value: string) {
    this._sshPrivateKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPrivateKeyInput() {
    return this._sshPrivateKey;
  }

  // ssh_public_key - computed: false, optional: false, required: true
  private _sshPublicKey?: string; 
  public get sshPublicKey() {
    return this.getStringAttribute('ssh_public_key');
  }
  public set sshPublicKey(value: string) {
    this._sshPublicKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPublicKeyInput() {
    return this._sshPublicKey;
  }
}
export interface WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationCentralServerConfigurationVirtualMachineConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#virtual_machine_size WorkloadsSapThreeTierVirtualInstance#virtual_machine_size}
  */
  readonly virtualMachineSize: string;
  /**
  * image block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#image WorkloadsSapThreeTierVirtualInstance#image}
  */
  readonly image: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationCentralServerConfigurationVirtualMachineConfigurationImage;
  /**
  * os_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#os_profile WorkloadsSapThreeTierVirtualInstance#os_profile}
  */
  readonly osProfile: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationCentralServerConfigurationVirtualMachineConfigurationOsProfile;
}

export function workloadsSapThreeTierVirtualInstanceThreeTierConfigurationCentralServerConfigurationVirtualMachineConfigurationToTerraform(struct?: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationCentralServerConfigurationVirtualMachineConfigurationOutputReference | WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationCentralServerConfigurationVirtualMachineConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    virtual_machine_size: cdktf.stringToTerraform(struct!.virtualMachineSize),
    image: workloadsSapThreeTierVirtualInstanceThreeTierConfigurationCentralServerConfigurationVirtualMachineConfigurationImageToTerraform(struct!.image),
    os_profile: workloadsSapThreeTierVirtualInstanceThreeTierConfigurationCentralServerConfigurationVirtualMachineConfigurationOsProfileToTerraform(struct!.osProfile),
  }
}


export function workloadsSapThreeTierVirtualInstanceThreeTierConfigurationCentralServerConfigurationVirtualMachineConfigurationToHclTerraform(struct?: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationCentralServerConfigurationVirtualMachineConfigurationOutputReference | WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationCentralServerConfigurationVirtualMachineConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    virtual_machine_size: {
      value: cdktf.stringToHclTerraform(struct!.virtualMachineSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image: {
      value: workloadsSapThreeTierVirtualInstanceThreeTierConfigurationCentralServerConfigurationVirtualMachineConfigurationImageToHclTerraform(struct!.image),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationCentralServerConfigurationVirtualMachineConfigurationImageList",
    },
    os_profile: {
      value: workloadsSapThreeTierVirtualInstanceThreeTierConfigurationCentralServerConfigurationVirtualMachineConfigurationOsProfileToHclTerraform(struct!.osProfile),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationCentralServerConfigurationVirtualMachineConfigurationOsProfileList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationCentralServerConfigurationVirtualMachineConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationCentralServerConfigurationVirtualMachineConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._virtualMachineSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualMachineSize = this._virtualMachineSize;
    }
    if (this._image?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image?.internalValue;
    }
    if (this._osProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.osProfile = this._osProfile?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationCentralServerConfigurationVirtualMachineConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._virtualMachineSize = undefined;
      this._image.internalValue = undefined;
      this._osProfile.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._virtualMachineSize = value.virtualMachineSize;
      this._image.internalValue = value.image;
      this._osProfile.internalValue = value.osProfile;
    }
  }

  // virtual_machine_size - computed: false, optional: false, required: true
  private _virtualMachineSize?: string; 
  public get virtualMachineSize() {
    return this.getStringAttribute('virtual_machine_size');
  }
  public set virtualMachineSize(value: string) {
    this._virtualMachineSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualMachineSizeInput() {
    return this._virtualMachineSize;
  }

  // image - computed: false, optional: false, required: true
  private _image = new WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationCentralServerConfigurationVirtualMachineConfigurationImageOutputReference(this, "image");
  public get image() {
    return this._image;
  }
  public putImage(value: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationCentralServerConfigurationVirtualMachineConfigurationImage) {
    this._image.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image.internalValue;
  }

  // os_profile - computed: false, optional: false, required: true
  private _osProfile = new WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationCentralServerConfigurationVirtualMachineConfigurationOsProfileOutputReference(this, "os_profile");
  public get osProfile() {
    return this._osProfile;
  }
  public putOsProfile(value: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationCentralServerConfigurationVirtualMachineConfigurationOsProfile) {
    this._osProfile.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get osProfileInput() {
    return this._osProfile.internalValue;
  }
}
export interface WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationCentralServerConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#instance_count WorkloadsSapThreeTierVirtualInstance#instance_count}
  */
  readonly instanceCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#subnet_id WorkloadsSapThreeTierVirtualInstance#subnet_id}
  */
  readonly subnetId: string;
  /**
  * virtual_machine_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#virtual_machine_configuration WorkloadsSapThreeTierVirtualInstance#virtual_machine_configuration}
  */
  readonly virtualMachineConfiguration: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationCentralServerConfigurationVirtualMachineConfiguration;
}

export function workloadsSapThreeTierVirtualInstanceThreeTierConfigurationCentralServerConfigurationToTerraform(struct?: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationCentralServerConfigurationOutputReference | WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationCentralServerConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_count: cdktf.numberToTerraform(struct!.instanceCount),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    virtual_machine_configuration: workloadsSapThreeTierVirtualInstanceThreeTierConfigurationCentralServerConfigurationVirtualMachineConfigurationToTerraform(struct!.virtualMachineConfiguration),
  }
}


export function workloadsSapThreeTierVirtualInstanceThreeTierConfigurationCentralServerConfigurationToHclTerraform(struct?: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationCentralServerConfigurationOutputReference | WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationCentralServerConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_count: {
      value: cdktf.numberToHclTerraform(struct!.instanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_machine_configuration: {
      value: workloadsSapThreeTierVirtualInstanceThreeTierConfigurationCentralServerConfigurationVirtualMachineConfigurationToHclTerraform(struct!.virtualMachineConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationCentralServerConfigurationVirtualMachineConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationCentralServerConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationCentralServerConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceCount = this._instanceCount;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._virtualMachineConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualMachineConfiguration = this._virtualMachineConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationCentralServerConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceCount = undefined;
      this._subnetId = undefined;
      this._virtualMachineConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceCount = value.instanceCount;
      this._subnetId = value.subnetId;
      this._virtualMachineConfiguration.internalValue = value.virtualMachineConfiguration;
    }
  }

  // instance_count - computed: false, optional: false, required: true
  private _instanceCount?: number; 
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }
  public set instanceCount(value: number) {
    this._instanceCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceCountInput() {
    return this._instanceCount;
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

  // virtual_machine_configuration - computed: false, optional: false, required: true
  private _virtualMachineConfiguration = new WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationCentralServerConfigurationVirtualMachineConfigurationOutputReference(this, "virtual_machine_configuration");
  public get virtualMachineConfiguration() {
    return this._virtualMachineConfiguration;
  }
  public putVirtualMachineConfiguration(value: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationCentralServerConfigurationVirtualMachineConfiguration) {
    this._virtualMachineConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualMachineConfigurationInput() {
    return this._virtualMachineConfiguration.internalValue;
  }
}
export interface WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationDatabaseServerConfigurationDiskVolumeConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#number_of_disks WorkloadsSapThreeTierVirtualInstance#number_of_disks}
  */
  readonly numberOfDisks: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#size_in_gb WorkloadsSapThreeTierVirtualInstance#size_in_gb}
  */
  readonly sizeInGb: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#sku_name WorkloadsSapThreeTierVirtualInstance#sku_name}
  */
  readonly skuName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#volume_name WorkloadsSapThreeTierVirtualInstance#volume_name}
  */
  readonly volumeName: string;
}

export function workloadsSapThreeTierVirtualInstanceThreeTierConfigurationDatabaseServerConfigurationDiskVolumeConfigurationToTerraform(struct?: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationDatabaseServerConfigurationDiskVolumeConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number_of_disks: cdktf.numberToTerraform(struct!.numberOfDisks),
    size_in_gb: cdktf.numberToTerraform(struct!.sizeInGb),
    sku_name: cdktf.stringToTerraform(struct!.skuName),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
  }
}


export function workloadsSapThreeTierVirtualInstanceThreeTierConfigurationDatabaseServerConfigurationDiskVolumeConfigurationToHclTerraform(struct?: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationDatabaseServerConfigurationDiskVolumeConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    number_of_disks: {
      value: cdktf.numberToHclTerraform(struct!.numberOfDisks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    size_in_gb: {
      value: cdktf.numberToHclTerraform(struct!.sizeInGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sku_name: {
      value: cdktf.stringToHclTerraform(struct!.skuName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_name: {
      value: cdktf.stringToHclTerraform(struct!.volumeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationDatabaseServerConfigurationDiskVolumeConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationDatabaseServerConfigurationDiskVolumeConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numberOfDisks !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfDisks = this._numberOfDisks;
    }
    if (this._sizeInGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeInGb = this._sizeInGb;
    }
    if (this._skuName !== undefined) {
      hasAnyValues = true;
      internalValueResult.skuName = this._skuName;
    }
    if (this._volumeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeName = this._volumeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationDatabaseServerConfigurationDiskVolumeConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._numberOfDisks = undefined;
      this._sizeInGb = undefined;
      this._skuName = undefined;
      this._volumeName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._numberOfDisks = value.numberOfDisks;
      this._sizeInGb = value.sizeInGb;
      this._skuName = value.skuName;
      this._volumeName = value.volumeName;
    }
  }

  // number_of_disks - computed: false, optional: false, required: true
  private _numberOfDisks?: number; 
  public get numberOfDisks() {
    return this.getNumberAttribute('number_of_disks');
  }
  public set numberOfDisks(value: number) {
    this._numberOfDisks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfDisksInput() {
    return this._numberOfDisks;
  }

  // size_in_gb - computed: false, optional: false, required: true
  private _sizeInGb?: number; 
  public get sizeInGb() {
    return this.getNumberAttribute('size_in_gb');
  }
  public set sizeInGb(value: number) {
    this._sizeInGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInGbInput() {
    return this._sizeInGb;
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

  // volume_name - computed: false, optional: false, required: true
  private _volumeName?: string; 
  public get volumeName() {
    return this.getStringAttribute('volume_name');
  }
  public set volumeName(value: string) {
    this._volumeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeNameInput() {
    return this._volumeName;
  }
}

export class WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationDatabaseServerConfigurationDiskVolumeConfigurationList extends cdktf.ComplexList {
  public internalValue? : WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationDatabaseServerConfigurationDiskVolumeConfiguration[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationDatabaseServerConfigurationDiskVolumeConfigurationOutputReference {
    return new WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationDatabaseServerConfigurationDiskVolumeConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationDatabaseServerConfigurationVirtualMachineConfigurationImage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#offer WorkloadsSapThreeTierVirtualInstance#offer}
  */
  readonly offer: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#publisher WorkloadsSapThreeTierVirtualInstance#publisher}
  */
  readonly publisher: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#sku WorkloadsSapThreeTierVirtualInstance#sku}
  */
  readonly sku: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#version WorkloadsSapThreeTierVirtualInstance#version}
  */
  readonly version: string;
}

export function workloadsSapThreeTierVirtualInstanceThreeTierConfigurationDatabaseServerConfigurationVirtualMachineConfigurationImageToTerraform(struct?: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationDatabaseServerConfigurationVirtualMachineConfigurationImageOutputReference | WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationDatabaseServerConfigurationVirtualMachineConfigurationImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    offer: cdktf.stringToTerraform(struct!.offer),
    publisher: cdktf.stringToTerraform(struct!.publisher),
    sku: cdktf.stringToTerraform(struct!.sku),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function workloadsSapThreeTierVirtualInstanceThreeTierConfigurationDatabaseServerConfigurationVirtualMachineConfigurationImageToHclTerraform(struct?: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationDatabaseServerConfigurationVirtualMachineConfigurationImageOutputReference | WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationDatabaseServerConfigurationVirtualMachineConfigurationImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    offer: {
      value: cdktf.stringToHclTerraform(struct!.offer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    publisher: {
      value: cdktf.stringToHclTerraform(struct!.publisher),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sku: {
      value: cdktf.stringToHclTerraform(struct!.sku),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationDatabaseServerConfigurationVirtualMachineConfigurationImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationDatabaseServerConfigurationVirtualMachineConfigurationImage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._offer !== undefined) {
      hasAnyValues = true;
      internalValueResult.offer = this._offer;
    }
    if (this._publisher !== undefined) {
      hasAnyValues = true;
      internalValueResult.publisher = this._publisher;
    }
    if (this._sku !== undefined) {
      hasAnyValues = true;
      internalValueResult.sku = this._sku;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationDatabaseServerConfigurationVirtualMachineConfigurationImage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._offer = undefined;
      this._publisher = undefined;
      this._sku = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._offer = value.offer;
      this._publisher = value.publisher;
      this._sku = value.sku;
      this._version = value.version;
    }
  }

  // offer - computed: false, optional: false, required: true
  private _offer?: string; 
  public get offer() {
    return this.getStringAttribute('offer');
  }
  public set offer(value: string) {
    this._offer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get offerInput() {
    return this._offer;
  }

  // publisher - computed: false, optional: false, required: true
  private _publisher?: string; 
  public get publisher() {
    return this.getStringAttribute('publisher');
  }
  public set publisher(value: string) {
    this._publisher = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publisherInput() {
    return this._publisher;
  }

  // sku - computed: false, optional: false, required: true
  private _sku?: string; 
  public get sku() {
    return this.getStringAttribute('sku');
  }
  public set sku(value: string) {
    this._sku = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationDatabaseServerConfigurationVirtualMachineConfigurationOsProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#admin_username WorkloadsSapThreeTierVirtualInstance#admin_username}
  */
  readonly adminUsername: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#ssh_private_key WorkloadsSapThreeTierVirtualInstance#ssh_private_key}
  */
  readonly sshPrivateKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#ssh_public_key WorkloadsSapThreeTierVirtualInstance#ssh_public_key}
  */
  readonly sshPublicKey: string;
}

export function workloadsSapThreeTierVirtualInstanceThreeTierConfigurationDatabaseServerConfigurationVirtualMachineConfigurationOsProfileToTerraform(struct?: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationDatabaseServerConfigurationVirtualMachineConfigurationOsProfileOutputReference | WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationDatabaseServerConfigurationVirtualMachineConfigurationOsProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_username: cdktf.stringToTerraform(struct!.adminUsername),
    ssh_private_key: cdktf.stringToTerraform(struct!.sshPrivateKey),
    ssh_public_key: cdktf.stringToTerraform(struct!.sshPublicKey),
  }
}


export function workloadsSapThreeTierVirtualInstanceThreeTierConfigurationDatabaseServerConfigurationVirtualMachineConfigurationOsProfileToHclTerraform(struct?: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationDatabaseServerConfigurationVirtualMachineConfigurationOsProfileOutputReference | WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationDatabaseServerConfigurationVirtualMachineConfigurationOsProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_username: {
      value: cdktf.stringToHclTerraform(struct!.adminUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_private_key: {
      value: cdktf.stringToHclTerraform(struct!.sshPrivateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_public_key: {
      value: cdktf.stringToHclTerraform(struct!.sshPublicKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationDatabaseServerConfigurationVirtualMachineConfigurationOsProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationDatabaseServerConfigurationVirtualMachineConfigurationOsProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminUsername = this._adminUsername;
    }
    if (this._sshPrivateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshPrivateKey = this._sshPrivateKey;
    }
    if (this._sshPublicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshPublicKey = this._sshPublicKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationDatabaseServerConfigurationVirtualMachineConfigurationOsProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adminUsername = undefined;
      this._sshPrivateKey = undefined;
      this._sshPublicKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adminUsername = value.adminUsername;
      this._sshPrivateKey = value.sshPrivateKey;
      this._sshPublicKey = value.sshPublicKey;
    }
  }

  // admin_username - computed: false, optional: false, required: true
  private _adminUsername?: string; 
  public get adminUsername() {
    return this.getStringAttribute('admin_username');
  }
  public set adminUsername(value: string) {
    this._adminUsername = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminUsernameInput() {
    return this._adminUsername;
  }

  // ssh_private_key - computed: false, optional: false, required: true
  private _sshPrivateKey?: string; 
  public get sshPrivateKey() {
    return this.getStringAttribute('ssh_private_key');
  }
  public set sshPrivateKey(value: string) {
    this._sshPrivateKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPrivateKeyInput() {
    return this._sshPrivateKey;
  }

  // ssh_public_key - computed: false, optional: false, required: true
  private _sshPublicKey?: string; 
  public get sshPublicKey() {
    return this.getStringAttribute('ssh_public_key');
  }
  public set sshPublicKey(value: string) {
    this._sshPublicKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPublicKeyInput() {
    return this._sshPublicKey;
  }
}
export interface WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationDatabaseServerConfigurationVirtualMachineConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#virtual_machine_size WorkloadsSapThreeTierVirtualInstance#virtual_machine_size}
  */
  readonly virtualMachineSize: string;
  /**
  * image block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#image WorkloadsSapThreeTierVirtualInstance#image}
  */
  readonly image: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationDatabaseServerConfigurationVirtualMachineConfigurationImage;
  /**
  * os_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#os_profile WorkloadsSapThreeTierVirtualInstance#os_profile}
  */
  readonly osProfile: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationDatabaseServerConfigurationVirtualMachineConfigurationOsProfile;
}

export function workloadsSapThreeTierVirtualInstanceThreeTierConfigurationDatabaseServerConfigurationVirtualMachineConfigurationToTerraform(struct?: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationDatabaseServerConfigurationVirtualMachineConfigurationOutputReference | WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationDatabaseServerConfigurationVirtualMachineConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    virtual_machine_size: cdktf.stringToTerraform(struct!.virtualMachineSize),
    image: workloadsSapThreeTierVirtualInstanceThreeTierConfigurationDatabaseServerConfigurationVirtualMachineConfigurationImageToTerraform(struct!.image),
    os_profile: workloadsSapThreeTierVirtualInstanceThreeTierConfigurationDatabaseServerConfigurationVirtualMachineConfigurationOsProfileToTerraform(struct!.osProfile),
  }
}


export function workloadsSapThreeTierVirtualInstanceThreeTierConfigurationDatabaseServerConfigurationVirtualMachineConfigurationToHclTerraform(struct?: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationDatabaseServerConfigurationVirtualMachineConfigurationOutputReference | WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationDatabaseServerConfigurationVirtualMachineConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    virtual_machine_size: {
      value: cdktf.stringToHclTerraform(struct!.virtualMachineSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image: {
      value: workloadsSapThreeTierVirtualInstanceThreeTierConfigurationDatabaseServerConfigurationVirtualMachineConfigurationImageToHclTerraform(struct!.image),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationDatabaseServerConfigurationVirtualMachineConfigurationImageList",
    },
    os_profile: {
      value: workloadsSapThreeTierVirtualInstanceThreeTierConfigurationDatabaseServerConfigurationVirtualMachineConfigurationOsProfileToHclTerraform(struct!.osProfile),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationDatabaseServerConfigurationVirtualMachineConfigurationOsProfileList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationDatabaseServerConfigurationVirtualMachineConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationDatabaseServerConfigurationVirtualMachineConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._virtualMachineSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualMachineSize = this._virtualMachineSize;
    }
    if (this._image?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image?.internalValue;
    }
    if (this._osProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.osProfile = this._osProfile?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationDatabaseServerConfigurationVirtualMachineConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._virtualMachineSize = undefined;
      this._image.internalValue = undefined;
      this._osProfile.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._virtualMachineSize = value.virtualMachineSize;
      this._image.internalValue = value.image;
      this._osProfile.internalValue = value.osProfile;
    }
  }

  // virtual_machine_size - computed: false, optional: false, required: true
  private _virtualMachineSize?: string; 
  public get virtualMachineSize() {
    return this.getStringAttribute('virtual_machine_size');
  }
  public set virtualMachineSize(value: string) {
    this._virtualMachineSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualMachineSizeInput() {
    return this._virtualMachineSize;
  }

  // image - computed: false, optional: false, required: true
  private _image = new WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationDatabaseServerConfigurationVirtualMachineConfigurationImageOutputReference(this, "image");
  public get image() {
    return this._image;
  }
  public putImage(value: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationDatabaseServerConfigurationVirtualMachineConfigurationImage) {
    this._image.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image.internalValue;
  }

  // os_profile - computed: false, optional: false, required: true
  private _osProfile = new WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationDatabaseServerConfigurationVirtualMachineConfigurationOsProfileOutputReference(this, "os_profile");
  public get osProfile() {
    return this._osProfile;
  }
  public putOsProfile(value: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationDatabaseServerConfigurationVirtualMachineConfigurationOsProfile) {
    this._osProfile.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get osProfileInput() {
    return this._osProfile.internalValue;
  }
}
export interface WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationDatabaseServerConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#database_type WorkloadsSapThreeTierVirtualInstance#database_type}
  */
  readonly databaseType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#instance_count WorkloadsSapThreeTierVirtualInstance#instance_count}
  */
  readonly instanceCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#subnet_id WorkloadsSapThreeTierVirtualInstance#subnet_id}
  */
  readonly subnetId: string;
  /**
  * disk_volume_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#disk_volume_configuration WorkloadsSapThreeTierVirtualInstance#disk_volume_configuration}
  */
  readonly diskVolumeConfiguration?: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationDatabaseServerConfigurationDiskVolumeConfiguration[] | cdktf.IResolvable;
  /**
  * virtual_machine_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#virtual_machine_configuration WorkloadsSapThreeTierVirtualInstance#virtual_machine_configuration}
  */
  readonly virtualMachineConfiguration: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationDatabaseServerConfigurationVirtualMachineConfiguration;
}

export function workloadsSapThreeTierVirtualInstanceThreeTierConfigurationDatabaseServerConfigurationToTerraform(struct?: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationDatabaseServerConfigurationOutputReference | WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationDatabaseServerConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_type: cdktf.stringToTerraform(struct!.databaseType),
    instance_count: cdktf.numberToTerraform(struct!.instanceCount),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    disk_volume_configuration: cdktf.listMapper(workloadsSapThreeTierVirtualInstanceThreeTierConfigurationDatabaseServerConfigurationDiskVolumeConfigurationToTerraform, true)(struct!.diskVolumeConfiguration),
    virtual_machine_configuration: workloadsSapThreeTierVirtualInstanceThreeTierConfigurationDatabaseServerConfigurationVirtualMachineConfigurationToTerraform(struct!.virtualMachineConfiguration),
  }
}


export function workloadsSapThreeTierVirtualInstanceThreeTierConfigurationDatabaseServerConfigurationToHclTerraform(struct?: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationDatabaseServerConfigurationOutputReference | WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationDatabaseServerConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database_type: {
      value: cdktf.stringToHclTerraform(struct!.databaseType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_count: {
      value: cdktf.numberToHclTerraform(struct!.instanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_volume_configuration: {
      value: cdktf.listMapperHcl(workloadsSapThreeTierVirtualInstanceThreeTierConfigurationDatabaseServerConfigurationDiskVolumeConfigurationToHclTerraform, true)(struct!.diskVolumeConfiguration),
      isBlock: true,
      type: "set",
      storageClassType: "WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationDatabaseServerConfigurationDiskVolumeConfigurationList",
    },
    virtual_machine_configuration: {
      value: workloadsSapThreeTierVirtualInstanceThreeTierConfigurationDatabaseServerConfigurationVirtualMachineConfigurationToHclTerraform(struct!.virtualMachineConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationDatabaseServerConfigurationVirtualMachineConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationDatabaseServerConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationDatabaseServerConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseType !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseType = this._databaseType;
    }
    if (this._instanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceCount = this._instanceCount;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._diskVolumeConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskVolumeConfiguration = this._diskVolumeConfiguration?.internalValue;
    }
    if (this._virtualMachineConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualMachineConfiguration = this._virtualMachineConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationDatabaseServerConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._databaseType = undefined;
      this._instanceCount = undefined;
      this._subnetId = undefined;
      this._diskVolumeConfiguration.internalValue = undefined;
      this._virtualMachineConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._databaseType = value.databaseType;
      this._instanceCount = value.instanceCount;
      this._subnetId = value.subnetId;
      this._diskVolumeConfiguration.internalValue = value.diskVolumeConfiguration;
      this._virtualMachineConfiguration.internalValue = value.virtualMachineConfiguration;
    }
  }

  // database_type - computed: false, optional: true, required: false
  private _databaseType?: string; 
  public get databaseType() {
    return this.getStringAttribute('database_type');
  }
  public set databaseType(value: string) {
    this._databaseType = value;
  }
  public resetDatabaseType() {
    this._databaseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseTypeInput() {
    return this._databaseType;
  }

  // instance_count - computed: false, optional: false, required: true
  private _instanceCount?: number; 
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }
  public set instanceCount(value: number) {
    this._instanceCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceCountInput() {
    return this._instanceCount;
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

  // disk_volume_configuration - computed: false, optional: true, required: false
  private _diskVolumeConfiguration = new WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationDatabaseServerConfigurationDiskVolumeConfigurationList(this, "disk_volume_configuration", true);
  public get diskVolumeConfiguration() {
    return this._diskVolumeConfiguration;
  }
  public putDiskVolumeConfiguration(value: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationDatabaseServerConfigurationDiskVolumeConfiguration[] | cdktf.IResolvable) {
    this._diskVolumeConfiguration.internalValue = value;
  }
  public resetDiskVolumeConfiguration() {
    this._diskVolumeConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskVolumeConfigurationInput() {
    return this._diskVolumeConfiguration.internalValue;
  }

  // virtual_machine_configuration - computed: false, optional: false, required: true
  private _virtualMachineConfiguration = new WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationDatabaseServerConfigurationVirtualMachineConfigurationOutputReference(this, "virtual_machine_configuration");
  public get virtualMachineConfiguration() {
    return this._virtualMachineConfiguration;
  }
  public putVirtualMachineConfiguration(value: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationDatabaseServerConfigurationVirtualMachineConfiguration) {
    this._virtualMachineConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualMachineConfigurationInput() {
    return this._virtualMachineConfiguration.internalValue;
  }
}
export interface WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesApplicationServerVirtualMachineDataDisk {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#names WorkloadsSapThreeTierVirtualInstance#names}
  */
  readonly names: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#volume_name WorkloadsSapThreeTierVirtualInstance#volume_name}
  */
  readonly volumeName: string;
}

export function workloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesApplicationServerVirtualMachineDataDiskToTerraform(struct?: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesApplicationServerVirtualMachineDataDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.names),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
  }
}


export function workloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesApplicationServerVirtualMachineDataDiskToHclTerraform(struct?: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesApplicationServerVirtualMachineDataDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.names),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    volume_name: {
      value: cdktf.stringToHclTerraform(struct!.volumeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesApplicationServerVirtualMachineDataDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesApplicationServerVirtualMachineDataDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._names !== undefined) {
      hasAnyValues = true;
      internalValueResult.names = this._names;
    }
    if (this._volumeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeName = this._volumeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesApplicationServerVirtualMachineDataDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._names = undefined;
      this._volumeName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._names = value.names;
      this._volumeName = value.volumeName;
    }
  }

  // names - computed: false, optional: false, required: true
  private _names?: string[]; 
  public get names() {
    return this.getListAttribute('names');
  }
  public set names(value: string[]) {
    this._names = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namesInput() {
    return this._names;
  }

  // volume_name - computed: false, optional: false, required: true
  private _volumeName?: string; 
  public get volumeName() {
    return this.getStringAttribute('volume_name');
  }
  public set volumeName(value: string) {
    this._volumeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeNameInput() {
    return this._volumeName;
  }
}

export class WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesApplicationServerVirtualMachineDataDiskList extends cdktf.ComplexList {
  public internalValue? : WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesApplicationServerVirtualMachineDataDisk[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesApplicationServerVirtualMachineDataDiskOutputReference {
    return new WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesApplicationServerVirtualMachineDataDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesApplicationServerVirtualMachine {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#host_name WorkloadsSapThreeTierVirtualInstance#host_name}
  */
  readonly hostName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#network_interface_names WorkloadsSapThreeTierVirtualInstance#network_interface_names}
  */
  readonly networkInterfaceNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#os_disk_name WorkloadsSapThreeTierVirtualInstance#os_disk_name}
  */
  readonly osDiskName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#virtual_machine_name WorkloadsSapThreeTierVirtualInstance#virtual_machine_name}
  */
  readonly virtualMachineName?: string;
  /**
  * data_disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#data_disk WorkloadsSapThreeTierVirtualInstance#data_disk}
  */
  readonly dataDisk?: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesApplicationServerVirtualMachineDataDisk[] | cdktf.IResolvable;
}

export function workloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesApplicationServerVirtualMachineToTerraform(struct?: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesApplicationServerVirtualMachine | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_name: cdktf.stringToTerraform(struct!.hostName),
    network_interface_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.networkInterfaceNames),
    os_disk_name: cdktf.stringToTerraform(struct!.osDiskName),
    virtual_machine_name: cdktf.stringToTerraform(struct!.virtualMachineName),
    data_disk: cdktf.listMapper(workloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesApplicationServerVirtualMachineDataDiskToTerraform, true)(struct!.dataDisk),
  }
}


export function workloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesApplicationServerVirtualMachineToHclTerraform(struct?: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesApplicationServerVirtualMachine | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_name: {
      value: cdktf.stringToHclTerraform(struct!.hostName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_interface_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.networkInterfaceNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    os_disk_name: {
      value: cdktf.stringToHclTerraform(struct!.osDiskName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_machine_name: {
      value: cdktf.stringToHclTerraform(struct!.virtualMachineName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_disk: {
      value: cdktf.listMapperHcl(workloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesApplicationServerVirtualMachineDataDiskToHclTerraform, true)(struct!.dataDisk),
      isBlock: true,
      type: "set",
      storageClassType: "WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesApplicationServerVirtualMachineDataDiskList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesApplicationServerVirtualMachineOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesApplicationServerVirtualMachine | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostName = this._hostName;
    }
    if (this._networkInterfaceNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkInterfaceNames = this._networkInterfaceNames;
    }
    if (this._osDiskName !== undefined) {
      hasAnyValues = true;
      internalValueResult.osDiskName = this._osDiskName;
    }
    if (this._virtualMachineName !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualMachineName = this._virtualMachineName;
    }
    if (this._dataDisk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataDisk = this._dataDisk?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesApplicationServerVirtualMachine | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostName = undefined;
      this._networkInterfaceNames = undefined;
      this._osDiskName = undefined;
      this._virtualMachineName = undefined;
      this._dataDisk.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostName = value.hostName;
      this._networkInterfaceNames = value.networkInterfaceNames;
      this._osDiskName = value.osDiskName;
      this._virtualMachineName = value.virtualMachineName;
      this._dataDisk.internalValue = value.dataDisk;
    }
  }

  // host_name - computed: false, optional: true, required: false
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  public resetHostName() {
    this._hostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
  }

  // network_interface_names - computed: false, optional: true, required: false
  private _networkInterfaceNames?: string[]; 
  public get networkInterfaceNames() {
    return this.getListAttribute('network_interface_names');
  }
  public set networkInterfaceNames(value: string[]) {
    this._networkInterfaceNames = value;
  }
  public resetNetworkInterfaceNames() {
    this._networkInterfaceNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceNamesInput() {
    return this._networkInterfaceNames;
  }

  // os_disk_name - computed: false, optional: true, required: false
  private _osDiskName?: string; 
  public get osDiskName() {
    return this.getStringAttribute('os_disk_name');
  }
  public set osDiskName(value: string) {
    this._osDiskName = value;
  }
  public resetOsDiskName() {
    this._osDiskName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osDiskNameInput() {
    return this._osDiskName;
  }

  // virtual_machine_name - computed: false, optional: true, required: false
  private _virtualMachineName?: string; 
  public get virtualMachineName() {
    return this.getStringAttribute('virtual_machine_name');
  }
  public set virtualMachineName(value: string) {
    this._virtualMachineName = value;
  }
  public resetVirtualMachineName() {
    this._virtualMachineName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualMachineNameInput() {
    return this._virtualMachineName;
  }

  // data_disk - computed: false, optional: true, required: false
  private _dataDisk = new WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesApplicationServerVirtualMachineDataDiskList(this, "data_disk", true);
  public get dataDisk() {
    return this._dataDisk;
  }
  public putDataDisk(value: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesApplicationServerVirtualMachineDataDisk[] | cdktf.IResolvable) {
    this._dataDisk.internalValue = value;
  }
  public resetDataDisk() {
    this._dataDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDiskInput() {
    return this._dataDisk.internalValue;
  }
}

export class WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesApplicationServerVirtualMachineList extends cdktf.ComplexList {
  public internalValue? : WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesApplicationServerVirtualMachine[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesApplicationServerVirtualMachineOutputReference {
    return new WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesApplicationServerVirtualMachineOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesApplicationServer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#availability_set_name WorkloadsSapThreeTierVirtualInstance#availability_set_name}
  */
  readonly availabilitySetName?: string;
  /**
  * virtual_machine block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#virtual_machine WorkloadsSapThreeTierVirtualInstance#virtual_machine}
  */
  readonly virtualMachine?: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesApplicationServerVirtualMachine[] | cdktf.IResolvable;
}

export function workloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesApplicationServerToTerraform(struct?: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesApplicationServerOutputReference | WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesApplicationServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_set_name: cdktf.stringToTerraform(struct!.availabilitySetName),
    virtual_machine: cdktf.listMapper(workloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesApplicationServerVirtualMachineToTerraform, true)(struct!.virtualMachine),
  }
}


export function workloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesApplicationServerToHclTerraform(struct?: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesApplicationServerOutputReference | WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesApplicationServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability_set_name: {
      value: cdktf.stringToHclTerraform(struct!.availabilitySetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_machine: {
      value: cdktf.listMapperHcl(workloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesApplicationServerVirtualMachineToHclTerraform, true)(struct!.virtualMachine),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesApplicationServerVirtualMachineList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesApplicationServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesApplicationServer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilitySetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilitySetName = this._availabilitySetName;
    }
    if (this._virtualMachine?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualMachine = this._virtualMachine?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesApplicationServer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availabilitySetName = undefined;
      this._virtualMachine.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availabilitySetName = value.availabilitySetName;
      this._virtualMachine.internalValue = value.virtualMachine;
    }
  }

  // availability_set_name - computed: false, optional: true, required: false
  private _availabilitySetName?: string; 
  public get availabilitySetName() {
    return this.getStringAttribute('availability_set_name');
  }
  public set availabilitySetName(value: string) {
    this._availabilitySetName = value;
  }
  public resetAvailabilitySetName() {
    this._availabilitySetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilitySetNameInput() {
    return this._availabilitySetName;
  }

  // virtual_machine - computed: false, optional: true, required: false
  private _virtualMachine = new WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesApplicationServerVirtualMachineList(this, "virtual_machine", false);
  public get virtualMachine() {
    return this._virtualMachine;
  }
  public putVirtualMachine(value: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesApplicationServerVirtualMachine[] | cdktf.IResolvable) {
    this._virtualMachine.internalValue = value;
  }
  public resetVirtualMachine() {
    this._virtualMachine.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualMachineInput() {
    return this._virtualMachine.internalValue;
  }
}
export interface WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesCentralServerLoadBalancer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#backend_pool_names WorkloadsSapThreeTierVirtualInstance#backend_pool_names}
  */
  readonly backendPoolNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#frontend_ip_configuration_names WorkloadsSapThreeTierVirtualInstance#frontend_ip_configuration_names}
  */
  readonly frontendIpConfigurationNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#health_probe_names WorkloadsSapThreeTierVirtualInstance#health_probe_names}
  */
  readonly healthProbeNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#name WorkloadsSapThreeTierVirtualInstance#name}
  */
  readonly name?: string;
}

export function workloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesCentralServerLoadBalancerToTerraform(struct?: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesCentralServerLoadBalancerOutputReference | WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesCentralServerLoadBalancer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_pool_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.backendPoolNames),
    frontend_ip_configuration_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.frontendIpConfigurationNames),
    health_probe_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.healthProbeNames),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function workloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesCentralServerLoadBalancerToHclTerraform(struct?: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesCentralServerLoadBalancerOutputReference | WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesCentralServerLoadBalancer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backend_pool_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.backendPoolNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    frontend_ip_configuration_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.frontendIpConfigurationNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    health_probe_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.healthProbeNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesCentralServerLoadBalancerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesCentralServerLoadBalancer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backendPoolNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendPoolNames = this._backendPoolNames;
    }
    if (this._frontendIpConfigurationNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.frontendIpConfigurationNames = this._frontendIpConfigurationNames;
    }
    if (this._healthProbeNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthProbeNames = this._healthProbeNames;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesCentralServerLoadBalancer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backendPoolNames = undefined;
      this._frontendIpConfigurationNames = undefined;
      this._healthProbeNames = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backendPoolNames = value.backendPoolNames;
      this._frontendIpConfigurationNames = value.frontendIpConfigurationNames;
      this._healthProbeNames = value.healthProbeNames;
      this._name = value.name;
    }
  }

  // backend_pool_names - computed: false, optional: true, required: false
  private _backendPoolNames?: string[]; 
  public get backendPoolNames() {
    return this.getListAttribute('backend_pool_names');
  }
  public set backendPoolNames(value: string[]) {
    this._backendPoolNames = value;
  }
  public resetBackendPoolNames() {
    this._backendPoolNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendPoolNamesInput() {
    return this._backendPoolNames;
  }

  // frontend_ip_configuration_names - computed: false, optional: true, required: false
  private _frontendIpConfigurationNames?: string[]; 
  public get frontendIpConfigurationNames() {
    return this.getListAttribute('frontend_ip_configuration_names');
  }
  public set frontendIpConfigurationNames(value: string[]) {
    this._frontendIpConfigurationNames = value;
  }
  public resetFrontendIpConfigurationNames() {
    this._frontendIpConfigurationNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frontendIpConfigurationNamesInput() {
    return this._frontendIpConfigurationNames;
  }

  // health_probe_names - computed: false, optional: true, required: false
  private _healthProbeNames?: string[]; 
  public get healthProbeNames() {
    return this.getListAttribute('health_probe_names');
  }
  public set healthProbeNames(value: string[]) {
    this._healthProbeNames = value;
  }
  public resetHealthProbeNames() {
    this._healthProbeNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthProbeNamesInput() {
    return this._healthProbeNames;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesCentralServerVirtualMachineDataDisk {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#names WorkloadsSapThreeTierVirtualInstance#names}
  */
  readonly names: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#volume_name WorkloadsSapThreeTierVirtualInstance#volume_name}
  */
  readonly volumeName: string;
}

export function workloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesCentralServerVirtualMachineDataDiskToTerraform(struct?: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesCentralServerVirtualMachineDataDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.names),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
  }
}


export function workloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesCentralServerVirtualMachineDataDiskToHclTerraform(struct?: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesCentralServerVirtualMachineDataDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.names),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    volume_name: {
      value: cdktf.stringToHclTerraform(struct!.volumeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesCentralServerVirtualMachineDataDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesCentralServerVirtualMachineDataDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._names !== undefined) {
      hasAnyValues = true;
      internalValueResult.names = this._names;
    }
    if (this._volumeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeName = this._volumeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesCentralServerVirtualMachineDataDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._names = undefined;
      this._volumeName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._names = value.names;
      this._volumeName = value.volumeName;
    }
  }

  // names - computed: false, optional: false, required: true
  private _names?: string[]; 
  public get names() {
    return this.getListAttribute('names');
  }
  public set names(value: string[]) {
    this._names = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namesInput() {
    return this._names;
  }

  // volume_name - computed: false, optional: false, required: true
  private _volumeName?: string; 
  public get volumeName() {
    return this.getStringAttribute('volume_name');
  }
  public set volumeName(value: string) {
    this._volumeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeNameInput() {
    return this._volumeName;
  }
}

export class WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesCentralServerVirtualMachineDataDiskList extends cdktf.ComplexList {
  public internalValue? : WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesCentralServerVirtualMachineDataDisk[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesCentralServerVirtualMachineDataDiskOutputReference {
    return new WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesCentralServerVirtualMachineDataDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesCentralServerVirtualMachine {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#host_name WorkloadsSapThreeTierVirtualInstance#host_name}
  */
  readonly hostName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#network_interface_names WorkloadsSapThreeTierVirtualInstance#network_interface_names}
  */
  readonly networkInterfaceNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#os_disk_name WorkloadsSapThreeTierVirtualInstance#os_disk_name}
  */
  readonly osDiskName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#virtual_machine_name WorkloadsSapThreeTierVirtualInstance#virtual_machine_name}
  */
  readonly virtualMachineName?: string;
  /**
  * data_disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#data_disk WorkloadsSapThreeTierVirtualInstance#data_disk}
  */
  readonly dataDisk?: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesCentralServerVirtualMachineDataDisk[] | cdktf.IResolvable;
}

export function workloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesCentralServerVirtualMachineToTerraform(struct?: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesCentralServerVirtualMachine | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_name: cdktf.stringToTerraform(struct!.hostName),
    network_interface_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.networkInterfaceNames),
    os_disk_name: cdktf.stringToTerraform(struct!.osDiskName),
    virtual_machine_name: cdktf.stringToTerraform(struct!.virtualMachineName),
    data_disk: cdktf.listMapper(workloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesCentralServerVirtualMachineDataDiskToTerraform, true)(struct!.dataDisk),
  }
}


export function workloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesCentralServerVirtualMachineToHclTerraform(struct?: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesCentralServerVirtualMachine | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_name: {
      value: cdktf.stringToHclTerraform(struct!.hostName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_interface_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.networkInterfaceNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    os_disk_name: {
      value: cdktf.stringToHclTerraform(struct!.osDiskName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_machine_name: {
      value: cdktf.stringToHclTerraform(struct!.virtualMachineName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_disk: {
      value: cdktf.listMapperHcl(workloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesCentralServerVirtualMachineDataDiskToHclTerraform, true)(struct!.dataDisk),
      isBlock: true,
      type: "set",
      storageClassType: "WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesCentralServerVirtualMachineDataDiskList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesCentralServerVirtualMachineOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesCentralServerVirtualMachine | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostName = this._hostName;
    }
    if (this._networkInterfaceNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkInterfaceNames = this._networkInterfaceNames;
    }
    if (this._osDiskName !== undefined) {
      hasAnyValues = true;
      internalValueResult.osDiskName = this._osDiskName;
    }
    if (this._virtualMachineName !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualMachineName = this._virtualMachineName;
    }
    if (this._dataDisk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataDisk = this._dataDisk?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesCentralServerVirtualMachine | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostName = undefined;
      this._networkInterfaceNames = undefined;
      this._osDiskName = undefined;
      this._virtualMachineName = undefined;
      this._dataDisk.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostName = value.hostName;
      this._networkInterfaceNames = value.networkInterfaceNames;
      this._osDiskName = value.osDiskName;
      this._virtualMachineName = value.virtualMachineName;
      this._dataDisk.internalValue = value.dataDisk;
    }
  }

  // host_name - computed: false, optional: true, required: false
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  public resetHostName() {
    this._hostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
  }

  // network_interface_names - computed: false, optional: true, required: false
  private _networkInterfaceNames?: string[]; 
  public get networkInterfaceNames() {
    return this.getListAttribute('network_interface_names');
  }
  public set networkInterfaceNames(value: string[]) {
    this._networkInterfaceNames = value;
  }
  public resetNetworkInterfaceNames() {
    this._networkInterfaceNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceNamesInput() {
    return this._networkInterfaceNames;
  }

  // os_disk_name - computed: false, optional: true, required: false
  private _osDiskName?: string; 
  public get osDiskName() {
    return this.getStringAttribute('os_disk_name');
  }
  public set osDiskName(value: string) {
    this._osDiskName = value;
  }
  public resetOsDiskName() {
    this._osDiskName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osDiskNameInput() {
    return this._osDiskName;
  }

  // virtual_machine_name - computed: false, optional: true, required: false
  private _virtualMachineName?: string; 
  public get virtualMachineName() {
    return this.getStringAttribute('virtual_machine_name');
  }
  public set virtualMachineName(value: string) {
    this._virtualMachineName = value;
  }
  public resetVirtualMachineName() {
    this._virtualMachineName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualMachineNameInput() {
    return this._virtualMachineName;
  }

  // data_disk - computed: false, optional: true, required: false
  private _dataDisk = new WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesCentralServerVirtualMachineDataDiskList(this, "data_disk", true);
  public get dataDisk() {
    return this._dataDisk;
  }
  public putDataDisk(value: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesCentralServerVirtualMachineDataDisk[] | cdktf.IResolvable) {
    this._dataDisk.internalValue = value;
  }
  public resetDataDisk() {
    this._dataDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDiskInput() {
    return this._dataDisk.internalValue;
  }
}

export class WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesCentralServerVirtualMachineList extends cdktf.ComplexList {
  public internalValue? : WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesCentralServerVirtualMachine[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesCentralServerVirtualMachineOutputReference {
    return new WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesCentralServerVirtualMachineOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesCentralServer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#availability_set_name WorkloadsSapThreeTierVirtualInstance#availability_set_name}
  */
  readonly availabilitySetName?: string;
  /**
  * load_balancer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#load_balancer WorkloadsSapThreeTierVirtualInstance#load_balancer}
  */
  readonly loadBalancer?: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesCentralServerLoadBalancer;
  /**
  * virtual_machine block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#virtual_machine WorkloadsSapThreeTierVirtualInstance#virtual_machine}
  */
  readonly virtualMachine?: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesCentralServerVirtualMachine[] | cdktf.IResolvable;
}

export function workloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesCentralServerToTerraform(struct?: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesCentralServerOutputReference | WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesCentralServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_set_name: cdktf.stringToTerraform(struct!.availabilitySetName),
    load_balancer: workloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesCentralServerLoadBalancerToTerraform(struct!.loadBalancer),
    virtual_machine: cdktf.listMapper(workloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesCentralServerVirtualMachineToTerraform, true)(struct!.virtualMachine),
  }
}


export function workloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesCentralServerToHclTerraform(struct?: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesCentralServerOutputReference | WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesCentralServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability_set_name: {
      value: cdktf.stringToHclTerraform(struct!.availabilitySetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    load_balancer: {
      value: workloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesCentralServerLoadBalancerToHclTerraform(struct!.loadBalancer),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesCentralServerLoadBalancerList",
    },
    virtual_machine: {
      value: cdktf.listMapperHcl(workloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesCentralServerVirtualMachineToHclTerraform, true)(struct!.virtualMachine),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesCentralServerVirtualMachineList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesCentralServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesCentralServer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilitySetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilitySetName = this._availabilitySetName;
    }
    if (this._loadBalancer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancer = this._loadBalancer?.internalValue;
    }
    if (this._virtualMachine?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualMachine = this._virtualMachine?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesCentralServer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availabilitySetName = undefined;
      this._loadBalancer.internalValue = undefined;
      this._virtualMachine.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availabilitySetName = value.availabilitySetName;
      this._loadBalancer.internalValue = value.loadBalancer;
      this._virtualMachine.internalValue = value.virtualMachine;
    }
  }

  // availability_set_name - computed: false, optional: true, required: false
  private _availabilitySetName?: string; 
  public get availabilitySetName() {
    return this.getStringAttribute('availability_set_name');
  }
  public set availabilitySetName(value: string) {
    this._availabilitySetName = value;
  }
  public resetAvailabilitySetName() {
    this._availabilitySetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilitySetNameInput() {
    return this._availabilitySetName;
  }

  // load_balancer - computed: false, optional: true, required: false
  private _loadBalancer = new WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesCentralServerLoadBalancerOutputReference(this, "load_balancer");
  public get loadBalancer() {
    return this._loadBalancer;
  }
  public putLoadBalancer(value: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesCentralServerLoadBalancer) {
    this._loadBalancer.internalValue = value;
  }
  public resetLoadBalancer() {
    this._loadBalancer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerInput() {
    return this._loadBalancer.internalValue;
  }

  // virtual_machine - computed: false, optional: true, required: false
  private _virtualMachine = new WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesCentralServerVirtualMachineList(this, "virtual_machine", false);
  public get virtualMachine() {
    return this._virtualMachine;
  }
  public putVirtualMachine(value: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesCentralServerVirtualMachine[] | cdktf.IResolvable) {
    this._virtualMachine.internalValue = value;
  }
  public resetVirtualMachine() {
    this._virtualMachine.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualMachineInput() {
    return this._virtualMachine.internalValue;
  }
}
export interface WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesDatabaseServerLoadBalancer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#backend_pool_names WorkloadsSapThreeTierVirtualInstance#backend_pool_names}
  */
  readonly backendPoolNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#frontend_ip_configuration_names WorkloadsSapThreeTierVirtualInstance#frontend_ip_configuration_names}
  */
  readonly frontendIpConfigurationNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#health_probe_names WorkloadsSapThreeTierVirtualInstance#health_probe_names}
  */
  readonly healthProbeNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#name WorkloadsSapThreeTierVirtualInstance#name}
  */
  readonly name?: string;
}

export function workloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesDatabaseServerLoadBalancerToTerraform(struct?: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesDatabaseServerLoadBalancerOutputReference | WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesDatabaseServerLoadBalancer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_pool_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.backendPoolNames),
    frontend_ip_configuration_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.frontendIpConfigurationNames),
    health_probe_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.healthProbeNames),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function workloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesDatabaseServerLoadBalancerToHclTerraform(struct?: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesDatabaseServerLoadBalancerOutputReference | WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesDatabaseServerLoadBalancer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backend_pool_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.backendPoolNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    frontend_ip_configuration_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.frontendIpConfigurationNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    health_probe_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.healthProbeNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesDatabaseServerLoadBalancerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesDatabaseServerLoadBalancer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backendPoolNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendPoolNames = this._backendPoolNames;
    }
    if (this._frontendIpConfigurationNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.frontendIpConfigurationNames = this._frontendIpConfigurationNames;
    }
    if (this._healthProbeNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthProbeNames = this._healthProbeNames;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesDatabaseServerLoadBalancer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backendPoolNames = undefined;
      this._frontendIpConfigurationNames = undefined;
      this._healthProbeNames = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backendPoolNames = value.backendPoolNames;
      this._frontendIpConfigurationNames = value.frontendIpConfigurationNames;
      this._healthProbeNames = value.healthProbeNames;
      this._name = value.name;
    }
  }

  // backend_pool_names - computed: false, optional: true, required: false
  private _backendPoolNames?: string[]; 
  public get backendPoolNames() {
    return this.getListAttribute('backend_pool_names');
  }
  public set backendPoolNames(value: string[]) {
    this._backendPoolNames = value;
  }
  public resetBackendPoolNames() {
    this._backendPoolNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendPoolNamesInput() {
    return this._backendPoolNames;
  }

  // frontend_ip_configuration_names - computed: false, optional: true, required: false
  private _frontendIpConfigurationNames?: string[]; 
  public get frontendIpConfigurationNames() {
    return this.getListAttribute('frontend_ip_configuration_names');
  }
  public set frontendIpConfigurationNames(value: string[]) {
    this._frontendIpConfigurationNames = value;
  }
  public resetFrontendIpConfigurationNames() {
    this._frontendIpConfigurationNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frontendIpConfigurationNamesInput() {
    return this._frontendIpConfigurationNames;
  }

  // health_probe_names - computed: false, optional: true, required: false
  private _healthProbeNames?: string[]; 
  public get healthProbeNames() {
    return this.getListAttribute('health_probe_names');
  }
  public set healthProbeNames(value: string[]) {
    this._healthProbeNames = value;
  }
  public resetHealthProbeNames() {
    this._healthProbeNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthProbeNamesInput() {
    return this._healthProbeNames;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesDatabaseServerVirtualMachineDataDisk {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#names WorkloadsSapThreeTierVirtualInstance#names}
  */
  readonly names: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#volume_name WorkloadsSapThreeTierVirtualInstance#volume_name}
  */
  readonly volumeName: string;
}

export function workloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesDatabaseServerVirtualMachineDataDiskToTerraform(struct?: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesDatabaseServerVirtualMachineDataDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.names),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
  }
}


export function workloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesDatabaseServerVirtualMachineDataDiskToHclTerraform(struct?: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesDatabaseServerVirtualMachineDataDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.names),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    volume_name: {
      value: cdktf.stringToHclTerraform(struct!.volumeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesDatabaseServerVirtualMachineDataDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesDatabaseServerVirtualMachineDataDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._names !== undefined) {
      hasAnyValues = true;
      internalValueResult.names = this._names;
    }
    if (this._volumeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeName = this._volumeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesDatabaseServerVirtualMachineDataDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._names = undefined;
      this._volumeName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._names = value.names;
      this._volumeName = value.volumeName;
    }
  }

  // names - computed: false, optional: false, required: true
  private _names?: string[]; 
  public get names() {
    return this.getListAttribute('names');
  }
  public set names(value: string[]) {
    this._names = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namesInput() {
    return this._names;
  }

  // volume_name - computed: false, optional: false, required: true
  private _volumeName?: string; 
  public get volumeName() {
    return this.getStringAttribute('volume_name');
  }
  public set volumeName(value: string) {
    this._volumeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeNameInput() {
    return this._volumeName;
  }
}

export class WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesDatabaseServerVirtualMachineDataDiskList extends cdktf.ComplexList {
  public internalValue? : WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesDatabaseServerVirtualMachineDataDisk[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesDatabaseServerVirtualMachineDataDiskOutputReference {
    return new WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesDatabaseServerVirtualMachineDataDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesDatabaseServerVirtualMachine {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#host_name WorkloadsSapThreeTierVirtualInstance#host_name}
  */
  readonly hostName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#network_interface_names WorkloadsSapThreeTierVirtualInstance#network_interface_names}
  */
  readonly networkInterfaceNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#os_disk_name WorkloadsSapThreeTierVirtualInstance#os_disk_name}
  */
  readonly osDiskName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#virtual_machine_name WorkloadsSapThreeTierVirtualInstance#virtual_machine_name}
  */
  readonly virtualMachineName?: string;
  /**
  * data_disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#data_disk WorkloadsSapThreeTierVirtualInstance#data_disk}
  */
  readonly dataDisk?: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesDatabaseServerVirtualMachineDataDisk[] | cdktf.IResolvable;
}

export function workloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesDatabaseServerVirtualMachineToTerraform(struct?: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesDatabaseServerVirtualMachine | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_name: cdktf.stringToTerraform(struct!.hostName),
    network_interface_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.networkInterfaceNames),
    os_disk_name: cdktf.stringToTerraform(struct!.osDiskName),
    virtual_machine_name: cdktf.stringToTerraform(struct!.virtualMachineName),
    data_disk: cdktf.listMapper(workloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesDatabaseServerVirtualMachineDataDiskToTerraform, true)(struct!.dataDisk),
  }
}


export function workloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesDatabaseServerVirtualMachineToHclTerraform(struct?: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesDatabaseServerVirtualMachine | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_name: {
      value: cdktf.stringToHclTerraform(struct!.hostName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_interface_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.networkInterfaceNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    os_disk_name: {
      value: cdktf.stringToHclTerraform(struct!.osDiskName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_machine_name: {
      value: cdktf.stringToHclTerraform(struct!.virtualMachineName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_disk: {
      value: cdktf.listMapperHcl(workloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesDatabaseServerVirtualMachineDataDiskToHclTerraform, true)(struct!.dataDisk),
      isBlock: true,
      type: "set",
      storageClassType: "WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesDatabaseServerVirtualMachineDataDiskList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesDatabaseServerVirtualMachineOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesDatabaseServerVirtualMachine | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostName = this._hostName;
    }
    if (this._networkInterfaceNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkInterfaceNames = this._networkInterfaceNames;
    }
    if (this._osDiskName !== undefined) {
      hasAnyValues = true;
      internalValueResult.osDiskName = this._osDiskName;
    }
    if (this._virtualMachineName !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualMachineName = this._virtualMachineName;
    }
    if (this._dataDisk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataDisk = this._dataDisk?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesDatabaseServerVirtualMachine | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostName = undefined;
      this._networkInterfaceNames = undefined;
      this._osDiskName = undefined;
      this._virtualMachineName = undefined;
      this._dataDisk.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostName = value.hostName;
      this._networkInterfaceNames = value.networkInterfaceNames;
      this._osDiskName = value.osDiskName;
      this._virtualMachineName = value.virtualMachineName;
      this._dataDisk.internalValue = value.dataDisk;
    }
  }

  // host_name - computed: false, optional: true, required: false
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  public resetHostName() {
    this._hostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
  }

  // network_interface_names - computed: false, optional: true, required: false
  private _networkInterfaceNames?: string[]; 
  public get networkInterfaceNames() {
    return this.getListAttribute('network_interface_names');
  }
  public set networkInterfaceNames(value: string[]) {
    this._networkInterfaceNames = value;
  }
  public resetNetworkInterfaceNames() {
    this._networkInterfaceNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceNamesInput() {
    return this._networkInterfaceNames;
  }

  // os_disk_name - computed: false, optional: true, required: false
  private _osDiskName?: string; 
  public get osDiskName() {
    return this.getStringAttribute('os_disk_name');
  }
  public set osDiskName(value: string) {
    this._osDiskName = value;
  }
  public resetOsDiskName() {
    this._osDiskName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osDiskNameInput() {
    return this._osDiskName;
  }

  // virtual_machine_name - computed: false, optional: true, required: false
  private _virtualMachineName?: string; 
  public get virtualMachineName() {
    return this.getStringAttribute('virtual_machine_name');
  }
  public set virtualMachineName(value: string) {
    this._virtualMachineName = value;
  }
  public resetVirtualMachineName() {
    this._virtualMachineName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualMachineNameInput() {
    return this._virtualMachineName;
  }

  // data_disk - computed: false, optional: true, required: false
  private _dataDisk = new WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesDatabaseServerVirtualMachineDataDiskList(this, "data_disk", true);
  public get dataDisk() {
    return this._dataDisk;
  }
  public putDataDisk(value: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesDatabaseServerVirtualMachineDataDisk[] | cdktf.IResolvable) {
    this._dataDisk.internalValue = value;
  }
  public resetDataDisk() {
    this._dataDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDiskInput() {
    return this._dataDisk.internalValue;
  }
}

export class WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesDatabaseServerVirtualMachineList extends cdktf.ComplexList {
  public internalValue? : WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesDatabaseServerVirtualMachine[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesDatabaseServerVirtualMachineOutputReference {
    return new WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesDatabaseServerVirtualMachineOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesDatabaseServer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#availability_set_name WorkloadsSapThreeTierVirtualInstance#availability_set_name}
  */
  readonly availabilitySetName?: string;
  /**
  * load_balancer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#load_balancer WorkloadsSapThreeTierVirtualInstance#load_balancer}
  */
  readonly loadBalancer?: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesDatabaseServerLoadBalancer;
  /**
  * virtual_machine block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#virtual_machine WorkloadsSapThreeTierVirtualInstance#virtual_machine}
  */
  readonly virtualMachine?: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesDatabaseServerVirtualMachine[] | cdktf.IResolvable;
}

export function workloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesDatabaseServerToTerraform(struct?: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesDatabaseServerOutputReference | WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesDatabaseServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_set_name: cdktf.stringToTerraform(struct!.availabilitySetName),
    load_balancer: workloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesDatabaseServerLoadBalancerToTerraform(struct!.loadBalancer),
    virtual_machine: cdktf.listMapper(workloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesDatabaseServerVirtualMachineToTerraform, true)(struct!.virtualMachine),
  }
}


export function workloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesDatabaseServerToHclTerraform(struct?: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesDatabaseServerOutputReference | WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesDatabaseServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability_set_name: {
      value: cdktf.stringToHclTerraform(struct!.availabilitySetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    load_balancer: {
      value: workloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesDatabaseServerLoadBalancerToHclTerraform(struct!.loadBalancer),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesDatabaseServerLoadBalancerList",
    },
    virtual_machine: {
      value: cdktf.listMapperHcl(workloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesDatabaseServerVirtualMachineToHclTerraform, true)(struct!.virtualMachine),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesDatabaseServerVirtualMachineList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesDatabaseServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesDatabaseServer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilitySetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilitySetName = this._availabilitySetName;
    }
    if (this._loadBalancer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancer = this._loadBalancer?.internalValue;
    }
    if (this._virtualMachine?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualMachine = this._virtualMachine?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesDatabaseServer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availabilitySetName = undefined;
      this._loadBalancer.internalValue = undefined;
      this._virtualMachine.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availabilitySetName = value.availabilitySetName;
      this._loadBalancer.internalValue = value.loadBalancer;
      this._virtualMachine.internalValue = value.virtualMachine;
    }
  }

  // availability_set_name - computed: false, optional: true, required: false
  private _availabilitySetName?: string; 
  public get availabilitySetName() {
    return this.getStringAttribute('availability_set_name');
  }
  public set availabilitySetName(value: string) {
    this._availabilitySetName = value;
  }
  public resetAvailabilitySetName() {
    this._availabilitySetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilitySetNameInput() {
    return this._availabilitySetName;
  }

  // load_balancer - computed: false, optional: true, required: false
  private _loadBalancer = new WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesDatabaseServerLoadBalancerOutputReference(this, "load_balancer");
  public get loadBalancer() {
    return this._loadBalancer;
  }
  public putLoadBalancer(value: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesDatabaseServerLoadBalancer) {
    this._loadBalancer.internalValue = value;
  }
  public resetLoadBalancer() {
    this._loadBalancer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerInput() {
    return this._loadBalancer.internalValue;
  }

  // virtual_machine - computed: false, optional: true, required: false
  private _virtualMachine = new WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesDatabaseServerVirtualMachineList(this, "virtual_machine", false);
  public get virtualMachine() {
    return this._virtualMachine;
  }
  public putVirtualMachine(value: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesDatabaseServerVirtualMachine[] | cdktf.IResolvable) {
    this._virtualMachine.internalValue = value;
  }
  public resetVirtualMachine() {
    this._virtualMachine.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualMachineInput() {
    return this._virtualMachine.internalValue;
  }
}
export interface WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesSharedStorage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#account_name WorkloadsSapThreeTierVirtualInstance#account_name}
  */
  readonly accountName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#private_endpoint_name WorkloadsSapThreeTierVirtualInstance#private_endpoint_name}
  */
  readonly privateEndpointName?: string;
}

export function workloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesSharedStorageToTerraform(struct?: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesSharedStorageOutputReference | WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesSharedStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_name: cdktf.stringToTerraform(struct!.accountName),
    private_endpoint_name: cdktf.stringToTerraform(struct!.privateEndpointName),
  }
}


export function workloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesSharedStorageToHclTerraform(struct?: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesSharedStorageOutputReference | WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesSharedStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_name: {
      value: cdktf.stringToHclTerraform(struct!.accountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_endpoint_name: {
      value: cdktf.stringToHclTerraform(struct!.privateEndpointName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesSharedStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesSharedStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountName = this._accountName;
    }
    if (this._privateEndpointName !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateEndpointName = this._privateEndpointName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesSharedStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountName = undefined;
      this._privateEndpointName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountName = value.accountName;
      this._privateEndpointName = value.privateEndpointName;
    }
  }

  // account_name - computed: false, optional: true, required: false
  private _accountName?: string; 
  public get accountName() {
    return this.getStringAttribute('account_name');
  }
  public set accountName(value: string) {
    this._accountName = value;
  }
  public resetAccountName() {
    this._accountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName;
  }

  // private_endpoint_name - computed: false, optional: true, required: false
  private _privateEndpointName?: string; 
  public get privateEndpointName() {
    return this.getStringAttribute('private_endpoint_name');
  }
  public set privateEndpointName(value: string) {
    this._privateEndpointName = value;
  }
  public resetPrivateEndpointName() {
    this._privateEndpointName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateEndpointNameInput() {
    return this._privateEndpointName;
  }
}
export interface WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNames {
  /**
  * application_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#application_server WorkloadsSapThreeTierVirtualInstance#application_server}
  */
  readonly applicationServer?: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesApplicationServer;
  /**
  * central_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#central_server WorkloadsSapThreeTierVirtualInstance#central_server}
  */
  readonly centralServer?: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesCentralServer;
  /**
  * database_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#database_server WorkloadsSapThreeTierVirtualInstance#database_server}
  */
  readonly databaseServer?: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesDatabaseServer;
  /**
  * shared_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#shared_storage WorkloadsSapThreeTierVirtualInstance#shared_storage}
  */
  readonly sharedStorage?: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesSharedStorage;
}

export function workloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesToTerraform(struct?: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesOutputReference | WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNames): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_server: workloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesApplicationServerToTerraform(struct!.applicationServer),
    central_server: workloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesCentralServerToTerraform(struct!.centralServer),
    database_server: workloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesDatabaseServerToTerraform(struct!.databaseServer),
    shared_storage: workloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesSharedStorageToTerraform(struct!.sharedStorage),
  }
}


export function workloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesToHclTerraform(struct?: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesOutputReference | WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNames): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_server: {
      value: workloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesApplicationServerToHclTerraform(struct!.applicationServer),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesApplicationServerList",
    },
    central_server: {
      value: workloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesCentralServerToHclTerraform(struct!.centralServer),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesCentralServerList",
    },
    database_server: {
      value: workloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesDatabaseServerToHclTerraform(struct!.databaseServer),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesDatabaseServerList",
    },
    shared_storage: {
      value: workloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesSharedStorageToHclTerraform(struct!.sharedStorage),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesSharedStorageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNames | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationServer = this._applicationServer?.internalValue;
    }
    if (this._centralServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.centralServer = this._centralServer?.internalValue;
    }
    if (this._databaseServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseServer = this._databaseServer?.internalValue;
    }
    if (this._sharedStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedStorage = this._sharedStorage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNames | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._applicationServer.internalValue = undefined;
      this._centralServer.internalValue = undefined;
      this._databaseServer.internalValue = undefined;
      this._sharedStorage.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._applicationServer.internalValue = value.applicationServer;
      this._centralServer.internalValue = value.centralServer;
      this._databaseServer.internalValue = value.databaseServer;
      this._sharedStorage.internalValue = value.sharedStorage;
    }
  }

  // application_server - computed: false, optional: true, required: false
  private _applicationServer = new WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesApplicationServerOutputReference(this, "application_server");
  public get applicationServer() {
    return this._applicationServer;
  }
  public putApplicationServer(value: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesApplicationServer) {
    this._applicationServer.internalValue = value;
  }
  public resetApplicationServer() {
    this._applicationServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationServerInput() {
    return this._applicationServer.internalValue;
  }

  // central_server - computed: false, optional: true, required: false
  private _centralServer = new WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesCentralServerOutputReference(this, "central_server");
  public get centralServer() {
    return this._centralServer;
  }
  public putCentralServer(value: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesCentralServer) {
    this._centralServer.internalValue = value;
  }
  public resetCentralServer() {
    this._centralServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get centralServerInput() {
    return this._centralServer.internalValue;
  }

  // database_server - computed: false, optional: true, required: false
  private _databaseServer = new WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesDatabaseServerOutputReference(this, "database_server");
  public get databaseServer() {
    return this._databaseServer;
  }
  public putDatabaseServer(value: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesDatabaseServer) {
    this._databaseServer.internalValue = value;
  }
  public resetDatabaseServer() {
    this._databaseServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseServerInput() {
    return this._databaseServer.internalValue;
  }

  // shared_storage - computed: false, optional: true, required: false
  private _sharedStorage = new WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesSharedStorageOutputReference(this, "shared_storage");
  public get sharedStorage() {
    return this._sharedStorage;
  }
  public putSharedStorage(value: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesSharedStorage) {
    this._sharedStorage.internalValue = value;
  }
  public resetSharedStorage() {
    this._sharedStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedStorageInput() {
    return this._sharedStorage.internalValue;
  }
}
export interface WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationTransportCreateAndMount {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#resource_group_id WorkloadsSapThreeTierVirtualInstance#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#storage_account_name WorkloadsSapThreeTierVirtualInstance#storage_account_name}
  */
  readonly storageAccountName?: string;
}

export function workloadsSapThreeTierVirtualInstanceThreeTierConfigurationTransportCreateAndMountToTerraform(struct?: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationTransportCreateAndMountOutputReference | WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationTransportCreateAndMount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_group_id: cdktf.stringToTerraform(struct!.resourceGroupId),
    storage_account_name: cdktf.stringToTerraform(struct!.storageAccountName),
  }
}


export function workloadsSapThreeTierVirtualInstanceThreeTierConfigurationTransportCreateAndMountToHclTerraform(struct?: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationTransportCreateAndMountOutputReference | WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationTransportCreateAndMount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_group_id: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_account_name: {
      value: cdktf.stringToHclTerraform(struct!.storageAccountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationTransportCreateAndMountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationTransportCreateAndMount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroupId = this._resourceGroupId;
    }
    if (this._storageAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAccountName = this._storageAccountName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationTransportCreateAndMount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceGroupId = undefined;
      this._storageAccountName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceGroupId = value.resourceGroupId;
      this._storageAccountName = value.storageAccountName;
    }
  }

  // resource_group_id - computed: false, optional: true, required: false
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  public resetResourceGroupId() {
    this._resourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
  }

  // storage_account_name - computed: false, optional: true, required: false
  private _storageAccountName?: string; 
  public get storageAccountName() {
    return this.getStringAttribute('storage_account_name');
  }
  public set storageAccountName(value: string) {
    this._storageAccountName = value;
  }
  public resetStorageAccountName() {
    this._storageAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountNameInput() {
    return this._storageAccountName;
  }
}
export interface WorkloadsSapThreeTierVirtualInstanceThreeTierConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#app_resource_group_name WorkloadsSapThreeTierVirtualInstance#app_resource_group_name}
  */
  readonly appResourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#high_availability_type WorkloadsSapThreeTierVirtualInstance#high_availability_type}
  */
  readonly highAvailabilityType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#secondary_ip_enabled WorkloadsSapThreeTierVirtualInstance#secondary_ip_enabled}
  */
  readonly secondaryIpEnabled?: boolean | cdktf.IResolvable;
  /**
  * application_server_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#application_server_configuration WorkloadsSapThreeTierVirtualInstance#application_server_configuration}
  */
  readonly applicationServerConfiguration: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationApplicationServerConfiguration;
  /**
  * central_server_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#central_server_configuration WorkloadsSapThreeTierVirtualInstance#central_server_configuration}
  */
  readonly centralServerConfiguration: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationCentralServerConfiguration;
  /**
  * database_server_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#database_server_configuration WorkloadsSapThreeTierVirtualInstance#database_server_configuration}
  */
  readonly databaseServerConfiguration: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationDatabaseServerConfiguration;
  /**
  * resource_names block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#resource_names WorkloadsSapThreeTierVirtualInstance#resource_names}
  */
  readonly resourceNames?: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNames;
  /**
  * transport_create_and_mount block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#transport_create_and_mount WorkloadsSapThreeTierVirtualInstance#transport_create_and_mount}
  */
  readonly transportCreateAndMount?: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationTransportCreateAndMount;
}

export function workloadsSapThreeTierVirtualInstanceThreeTierConfigurationToTerraform(struct?: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationOutputReference | WorkloadsSapThreeTierVirtualInstanceThreeTierConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_resource_group_name: cdktf.stringToTerraform(struct!.appResourceGroupName),
    high_availability_type: cdktf.stringToTerraform(struct!.highAvailabilityType),
    secondary_ip_enabled: cdktf.booleanToTerraform(struct!.secondaryIpEnabled),
    application_server_configuration: workloadsSapThreeTierVirtualInstanceThreeTierConfigurationApplicationServerConfigurationToTerraform(struct!.applicationServerConfiguration),
    central_server_configuration: workloadsSapThreeTierVirtualInstanceThreeTierConfigurationCentralServerConfigurationToTerraform(struct!.centralServerConfiguration),
    database_server_configuration: workloadsSapThreeTierVirtualInstanceThreeTierConfigurationDatabaseServerConfigurationToTerraform(struct!.databaseServerConfiguration),
    resource_names: workloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesToTerraform(struct!.resourceNames),
    transport_create_and_mount: workloadsSapThreeTierVirtualInstanceThreeTierConfigurationTransportCreateAndMountToTerraform(struct!.transportCreateAndMount),
  }
}


export function workloadsSapThreeTierVirtualInstanceThreeTierConfigurationToHclTerraform(struct?: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationOutputReference | WorkloadsSapThreeTierVirtualInstanceThreeTierConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_resource_group_name: {
      value: cdktf.stringToHclTerraform(struct!.appResourceGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    high_availability_type: {
      value: cdktf.stringToHclTerraform(struct!.highAvailabilityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secondary_ip_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.secondaryIpEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    application_server_configuration: {
      value: workloadsSapThreeTierVirtualInstanceThreeTierConfigurationApplicationServerConfigurationToHclTerraform(struct!.applicationServerConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationApplicationServerConfigurationList",
    },
    central_server_configuration: {
      value: workloadsSapThreeTierVirtualInstanceThreeTierConfigurationCentralServerConfigurationToHclTerraform(struct!.centralServerConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationCentralServerConfigurationList",
    },
    database_server_configuration: {
      value: workloadsSapThreeTierVirtualInstanceThreeTierConfigurationDatabaseServerConfigurationToHclTerraform(struct!.databaseServerConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationDatabaseServerConfigurationList",
    },
    resource_names: {
      value: workloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesToHclTerraform(struct!.resourceNames),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesList",
    },
    transport_create_and_mount: {
      value: workloadsSapThreeTierVirtualInstanceThreeTierConfigurationTransportCreateAndMountToHclTerraform(struct!.transportCreateAndMount),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationTransportCreateAndMountList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkloadsSapThreeTierVirtualInstanceThreeTierConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appResourceGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.appResourceGroupName = this._appResourceGroupName;
    }
    if (this._highAvailabilityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.highAvailabilityType = this._highAvailabilityType;
    }
    if (this._secondaryIpEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryIpEnabled = this._secondaryIpEnabled;
    }
    if (this._applicationServerConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationServerConfiguration = this._applicationServerConfiguration?.internalValue;
    }
    if (this._centralServerConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.centralServerConfiguration = this._centralServerConfiguration?.internalValue;
    }
    if (this._databaseServerConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseServerConfiguration = this._databaseServerConfiguration?.internalValue;
    }
    if (this._resourceNames?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceNames = this._resourceNames?.internalValue;
    }
    if (this._transportCreateAndMount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transportCreateAndMount = this._transportCreateAndMount?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadsSapThreeTierVirtualInstanceThreeTierConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._appResourceGroupName = undefined;
      this._highAvailabilityType = undefined;
      this._secondaryIpEnabled = undefined;
      this._applicationServerConfiguration.internalValue = undefined;
      this._centralServerConfiguration.internalValue = undefined;
      this._databaseServerConfiguration.internalValue = undefined;
      this._resourceNames.internalValue = undefined;
      this._transportCreateAndMount.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._appResourceGroupName = value.appResourceGroupName;
      this._highAvailabilityType = value.highAvailabilityType;
      this._secondaryIpEnabled = value.secondaryIpEnabled;
      this._applicationServerConfiguration.internalValue = value.applicationServerConfiguration;
      this._centralServerConfiguration.internalValue = value.centralServerConfiguration;
      this._databaseServerConfiguration.internalValue = value.databaseServerConfiguration;
      this._resourceNames.internalValue = value.resourceNames;
      this._transportCreateAndMount.internalValue = value.transportCreateAndMount;
    }
  }

  // app_resource_group_name - computed: false, optional: false, required: true
  private _appResourceGroupName?: string; 
  public get appResourceGroupName() {
    return this.getStringAttribute('app_resource_group_name');
  }
  public set appResourceGroupName(value: string) {
    this._appResourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appResourceGroupNameInput() {
    return this._appResourceGroupName;
  }

  // high_availability_type - computed: false, optional: true, required: false
  private _highAvailabilityType?: string; 
  public get highAvailabilityType() {
    return this.getStringAttribute('high_availability_type');
  }
  public set highAvailabilityType(value: string) {
    this._highAvailabilityType = value;
  }
  public resetHighAvailabilityType() {
    this._highAvailabilityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highAvailabilityTypeInput() {
    return this._highAvailabilityType;
  }

  // secondary_ip_enabled - computed: false, optional: true, required: false
  private _secondaryIpEnabled?: boolean | cdktf.IResolvable; 
  public get secondaryIpEnabled() {
    return this.getBooleanAttribute('secondary_ip_enabled');
  }
  public set secondaryIpEnabled(value: boolean | cdktf.IResolvable) {
    this._secondaryIpEnabled = value;
  }
  public resetSecondaryIpEnabled() {
    this._secondaryIpEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryIpEnabledInput() {
    return this._secondaryIpEnabled;
  }

  // application_server_configuration - computed: false, optional: false, required: true
  private _applicationServerConfiguration = new WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationApplicationServerConfigurationOutputReference(this, "application_server_configuration");
  public get applicationServerConfiguration() {
    return this._applicationServerConfiguration;
  }
  public putApplicationServerConfiguration(value: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationApplicationServerConfiguration) {
    this._applicationServerConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationServerConfigurationInput() {
    return this._applicationServerConfiguration.internalValue;
  }

  // central_server_configuration - computed: false, optional: false, required: true
  private _centralServerConfiguration = new WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationCentralServerConfigurationOutputReference(this, "central_server_configuration");
  public get centralServerConfiguration() {
    return this._centralServerConfiguration;
  }
  public putCentralServerConfiguration(value: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationCentralServerConfiguration) {
    this._centralServerConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get centralServerConfigurationInput() {
    return this._centralServerConfiguration.internalValue;
  }

  // database_server_configuration - computed: false, optional: false, required: true
  private _databaseServerConfiguration = new WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationDatabaseServerConfigurationOutputReference(this, "database_server_configuration");
  public get databaseServerConfiguration() {
    return this._databaseServerConfiguration;
  }
  public putDatabaseServerConfiguration(value: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationDatabaseServerConfiguration) {
    this._databaseServerConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseServerConfigurationInput() {
    return this._databaseServerConfiguration.internalValue;
  }

  // resource_names - computed: false, optional: true, required: false
  private _resourceNames = new WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNamesOutputReference(this, "resource_names");
  public get resourceNames() {
    return this._resourceNames;
  }
  public putResourceNames(value: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationResourceNames) {
    this._resourceNames.internalValue = value;
  }
  public resetResourceNames() {
    this._resourceNames.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNamesInput() {
    return this._resourceNames.internalValue;
  }

  // transport_create_and_mount - computed: false, optional: true, required: false
  private _transportCreateAndMount = new WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationTransportCreateAndMountOutputReference(this, "transport_create_and_mount");
  public get transportCreateAndMount() {
    return this._transportCreateAndMount;
  }
  public putTransportCreateAndMount(value: WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationTransportCreateAndMount) {
    this._transportCreateAndMount.internalValue = value;
  }
  public resetTransportCreateAndMount() {
    this._transportCreateAndMount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportCreateAndMountInput() {
    return this._transportCreateAndMount.internalValue;
  }
}
export interface WorkloadsSapThreeTierVirtualInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#create WorkloadsSapThreeTierVirtualInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#delete WorkloadsSapThreeTierVirtualInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#read WorkloadsSapThreeTierVirtualInstance#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#update WorkloadsSapThreeTierVirtualInstance#update}
  */
  readonly update?: string;
}

export function workloadsSapThreeTierVirtualInstanceTimeoutsToTerraform(struct?: WorkloadsSapThreeTierVirtualInstanceTimeouts | cdktf.IResolvable): any {
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


export function workloadsSapThreeTierVirtualInstanceTimeoutsToHclTerraform(struct?: WorkloadsSapThreeTierVirtualInstanceTimeouts | cdktf.IResolvable): any {
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

export class WorkloadsSapThreeTierVirtualInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkloadsSapThreeTierVirtualInstanceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WorkloadsSapThreeTierVirtualInstanceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance azurerm_workloads_sap_three_tier_virtual_instance}
*/
export class WorkloadsSapThreeTierVirtualInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_workloads_sap_three_tier_virtual_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkloadsSapThreeTierVirtualInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkloadsSapThreeTierVirtualInstance to import
  * @param importFromId The id of the existing WorkloadsSapThreeTierVirtualInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkloadsSapThreeTierVirtualInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_workloads_sap_three_tier_virtual_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_three_tier_virtual_instance azurerm_workloads_sap_three_tier_virtual_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkloadsSapThreeTierVirtualInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: WorkloadsSapThreeTierVirtualInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_workloads_sap_three_tier_virtual_instance',
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
    this._appLocation = config.appLocation;
    this._environment = config.environment;
    this._id = config.id;
    this._location = config.location;
    this._managedResourceGroupName = config.managedResourceGroupName;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._sapFqdn = config.sapFqdn;
    this._sapProduct = config.sapProduct;
    this._tags = config.tags;
    this._identity.internalValue = config.identity;
    this._threeTierConfiguration.internalValue = config.threeTierConfiguration;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_location - computed: false, optional: false, required: true
  private _appLocation?: string; 
  public get appLocation() {
    return this.getStringAttribute('app_location');
  }
  public set appLocation(value: string) {
    this._appLocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appLocationInput() {
    return this._appLocation;
  }

  // environment - computed: false, optional: false, required: true
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
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

  // managed_resource_group_name - computed: false, optional: true, required: false
  private _managedResourceGroupName?: string; 
  public get managedResourceGroupName() {
    return this.getStringAttribute('managed_resource_group_name');
  }
  public set managedResourceGroupName(value: string) {
    this._managedResourceGroupName = value;
  }
  public resetManagedResourceGroupName() {
    this._managedResourceGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedResourceGroupNameInput() {
    return this._managedResourceGroupName;
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

  // sap_fqdn - computed: false, optional: false, required: true
  private _sapFqdn?: string; 
  public get sapFqdn() {
    return this.getStringAttribute('sap_fqdn');
  }
  public set sapFqdn(value: string) {
    this._sapFqdn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sapFqdnInput() {
    return this._sapFqdn;
  }

  // sap_product - computed: false, optional: false, required: true
  private _sapProduct?: string; 
  public get sapProduct() {
    return this.getStringAttribute('sap_product');
  }
  public set sapProduct(value: string) {
    this._sapProduct = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sapProductInput() {
    return this._sapProduct;
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

  // identity - computed: false, optional: true, required: false
  private _identity = new WorkloadsSapThreeTierVirtualInstanceIdentityOutputReference(this, "identity");
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: WorkloadsSapThreeTierVirtualInstanceIdentity) {
    this._identity.internalValue = value;
  }
  public resetIdentity() {
    this._identity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }

  // three_tier_configuration - computed: false, optional: false, required: true
  private _threeTierConfiguration = new WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationOutputReference(this, "three_tier_configuration");
  public get threeTierConfiguration() {
    return this._threeTierConfiguration;
  }
  public putThreeTierConfiguration(value: WorkloadsSapThreeTierVirtualInstanceThreeTierConfiguration) {
    this._threeTierConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get threeTierConfigurationInput() {
    return this._threeTierConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new WorkloadsSapThreeTierVirtualInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: WorkloadsSapThreeTierVirtualInstanceTimeouts) {
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
      app_location: cdktf.stringToTerraform(this._appLocation),
      environment: cdktf.stringToTerraform(this._environment),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      managed_resource_group_name: cdktf.stringToTerraform(this._managedResourceGroupName),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      sap_fqdn: cdktf.stringToTerraform(this._sapFqdn),
      sap_product: cdktf.stringToTerraform(this._sapProduct),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      identity: workloadsSapThreeTierVirtualInstanceIdentityToTerraform(this._identity.internalValue),
      three_tier_configuration: workloadsSapThreeTierVirtualInstanceThreeTierConfigurationToTerraform(this._threeTierConfiguration.internalValue),
      timeouts: workloadsSapThreeTierVirtualInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_location: {
        value: cdktf.stringToHclTerraform(this._appLocation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment: {
        value: cdktf.stringToHclTerraform(this._environment),
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
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      managed_resource_group_name: {
        value: cdktf.stringToHclTerraform(this._managedResourceGroupName),
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
      sap_fqdn: {
        value: cdktf.stringToHclTerraform(this._sapFqdn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sap_product: {
        value: cdktf.stringToHclTerraform(this._sapProduct),
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
      identity: {
        value: workloadsSapThreeTierVirtualInstanceIdentityToHclTerraform(this._identity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkloadsSapThreeTierVirtualInstanceIdentityList",
      },
      three_tier_configuration: {
        value: workloadsSapThreeTierVirtualInstanceThreeTierConfigurationToHclTerraform(this._threeTierConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkloadsSapThreeTierVirtualInstanceThreeTierConfigurationList",
      },
      timeouts: {
        value: workloadsSapThreeTierVirtualInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WorkloadsSapThreeTierVirtualInstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
