// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/elastic_san_volume_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ElasticSanVolumeGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/elastic_san_volume_group#elastic_san_id ElasticSanVolumeGroup#elastic_san_id}
  */
  readonly elasticSanId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/elastic_san_volume_group#encryption_type ElasticSanVolumeGroup#encryption_type}
  */
  readonly encryptionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/elastic_san_volume_group#id ElasticSanVolumeGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/elastic_san_volume_group#name ElasticSanVolumeGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/elastic_san_volume_group#protocol_type ElasticSanVolumeGroup#protocol_type}
  */
  readonly protocolType?: string;
  /**
  * encryption block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/elastic_san_volume_group#encryption ElasticSanVolumeGroup#encryption}
  */
  readonly encryption?: ElasticSanVolumeGroupEncryption;
  /**
  * identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/elastic_san_volume_group#identity ElasticSanVolumeGroup#identity}
  */
  readonly identity?: ElasticSanVolumeGroupIdentity;
  /**
  * network_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/elastic_san_volume_group#network_rule ElasticSanVolumeGroup#network_rule}
  */
  readonly networkRule?: ElasticSanVolumeGroupNetworkRule[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/elastic_san_volume_group#timeouts ElasticSanVolumeGroup#timeouts}
  */
  readonly timeouts?: ElasticSanVolumeGroupTimeouts;
}
export interface ElasticSanVolumeGroupEncryption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/elastic_san_volume_group#key_vault_key_id ElasticSanVolumeGroup#key_vault_key_id}
  */
  readonly keyVaultKeyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/elastic_san_volume_group#user_assigned_identity_id ElasticSanVolumeGroup#user_assigned_identity_id}
  */
  readonly userAssignedIdentityId?: string;
}

export function elasticSanVolumeGroupEncryptionToTerraform(struct?: ElasticSanVolumeGroupEncryptionOutputReference | ElasticSanVolumeGroupEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_vault_key_id: cdktf.stringToTerraform(struct!.keyVaultKeyId),
    user_assigned_identity_id: cdktf.stringToTerraform(struct!.userAssignedIdentityId),
  }
}


export function elasticSanVolumeGroupEncryptionToHclTerraform(struct?: ElasticSanVolumeGroupEncryptionOutputReference | ElasticSanVolumeGroupEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_vault_key_id: {
      value: cdktf.stringToHclTerraform(struct!.keyVaultKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_assigned_identity_id: {
      value: cdktf.stringToHclTerraform(struct!.userAssignedIdentityId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticSanVolumeGroupEncryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElasticSanVolumeGroupEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyVaultKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyVaultKeyId = this._keyVaultKeyId;
    }
    if (this._userAssignedIdentityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAssignedIdentityId = this._userAssignedIdentityId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticSanVolumeGroupEncryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyVaultKeyId = undefined;
      this._userAssignedIdentityId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyVaultKeyId = value.keyVaultKeyId;
      this._userAssignedIdentityId = value.userAssignedIdentityId;
    }
  }

  // current_versioned_key_expiration_timestamp - computed: true, optional: false, required: false
  public get currentVersionedKeyExpirationTimestamp() {
    return this.getStringAttribute('current_versioned_key_expiration_timestamp');
  }

  // current_versioned_key_id - computed: true, optional: false, required: false
  public get currentVersionedKeyId() {
    return this.getStringAttribute('current_versioned_key_id');
  }

  // key_vault_key_id - computed: false, optional: false, required: true
  private _keyVaultKeyId?: string; 
  public get keyVaultKeyId() {
    return this.getStringAttribute('key_vault_key_id');
  }
  public set keyVaultKeyId(value: string) {
    this._keyVaultKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultKeyIdInput() {
    return this._keyVaultKeyId;
  }

  // last_key_rotation_timestamp - computed: true, optional: false, required: false
  public get lastKeyRotationTimestamp() {
    return this.getStringAttribute('last_key_rotation_timestamp');
  }

  // user_assigned_identity_id - computed: false, optional: true, required: false
  private _userAssignedIdentityId?: string; 
  public get userAssignedIdentityId() {
    return this.getStringAttribute('user_assigned_identity_id');
  }
  public set userAssignedIdentityId(value: string) {
    this._userAssignedIdentityId = value;
  }
  public resetUserAssignedIdentityId() {
    this._userAssignedIdentityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAssignedIdentityIdInput() {
    return this._userAssignedIdentityId;
  }
}
export interface ElasticSanVolumeGroupIdentity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/elastic_san_volume_group#identity_ids ElasticSanVolumeGroup#identity_ids}
  */
  readonly identityIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/elastic_san_volume_group#type ElasticSanVolumeGroup#type}
  */
  readonly type: string;
}

export function elasticSanVolumeGroupIdentityToTerraform(struct?: ElasticSanVolumeGroupIdentityOutputReference | ElasticSanVolumeGroupIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function elasticSanVolumeGroupIdentityToHclTerraform(struct?: ElasticSanVolumeGroupIdentityOutputReference | ElasticSanVolumeGroupIdentity): any {
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

export class ElasticSanVolumeGroupIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElasticSanVolumeGroupIdentity | undefined {
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

  public set internalValue(value: ElasticSanVolumeGroupIdentity | undefined) {
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

  // identity_ids - computed: false, optional: true, required: false
  private _identityIds?: string[]; 
  public get identityIds() {
    return cdktf.Fn.tolist(this.getListAttribute('identity_ids'));
  }
  public set identityIds(value: string[]) {
    this._identityIds = value;
  }
  public resetIdentityIds() {
    this._identityIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityIdsInput() {
    return this._identityIds;
  }

  // principal_id - computed: true, optional: false, required: false
  public get principalId() {
    return this.getStringAttribute('principal_id');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
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
export interface ElasticSanVolumeGroupNetworkRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/elastic_san_volume_group#action ElasticSanVolumeGroup#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/elastic_san_volume_group#subnet_id ElasticSanVolumeGroup#subnet_id}
  */
  readonly subnetId: string;
}

export function elasticSanVolumeGroupNetworkRuleToTerraform(struct?: ElasticSanVolumeGroupNetworkRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}


export function elasticSanVolumeGroupNetworkRuleToHclTerraform(struct?: ElasticSanVolumeGroupNetworkRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticSanVolumeGroupNetworkRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElasticSanVolumeGroupNetworkRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticSanVolumeGroupNetworkRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._subnetId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._subnetId = value.subnetId;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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
}

export class ElasticSanVolumeGroupNetworkRuleList extends cdktf.ComplexList {
  public internalValue? : ElasticSanVolumeGroupNetworkRule[] | cdktf.IResolvable

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
  public get(index: number): ElasticSanVolumeGroupNetworkRuleOutputReference {
    return new ElasticSanVolumeGroupNetworkRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElasticSanVolumeGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/elastic_san_volume_group#create ElasticSanVolumeGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/elastic_san_volume_group#delete ElasticSanVolumeGroup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/elastic_san_volume_group#read ElasticSanVolumeGroup#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/elastic_san_volume_group#update ElasticSanVolumeGroup#update}
  */
  readonly update?: string;
}

export function elasticSanVolumeGroupTimeoutsToTerraform(struct?: ElasticSanVolumeGroupTimeouts | cdktf.IResolvable): any {
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


export function elasticSanVolumeGroupTimeoutsToHclTerraform(struct?: ElasticSanVolumeGroupTimeouts | cdktf.IResolvable): any {
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

export class ElasticSanVolumeGroupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ElasticSanVolumeGroupTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ElasticSanVolumeGroupTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/elastic_san_volume_group azurerm_elastic_san_volume_group}
*/
export class ElasticSanVolumeGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_elastic_san_volume_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ElasticSanVolumeGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ElasticSanVolumeGroup to import
  * @param importFromId The id of the existing ElasticSanVolumeGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/elastic_san_volume_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ElasticSanVolumeGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_elastic_san_volume_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/elastic_san_volume_group azurerm_elastic_san_volume_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ElasticSanVolumeGroupConfig
  */
  public constructor(scope: Construct, id: string, config: ElasticSanVolumeGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_elastic_san_volume_group',
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
    this._elasticSanId = config.elasticSanId;
    this._encryptionType = config.encryptionType;
    this._id = config.id;
    this._name = config.name;
    this._protocolType = config.protocolType;
    this._encryption.internalValue = config.encryption;
    this._identity.internalValue = config.identity;
    this._networkRule.internalValue = config.networkRule;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // elastic_san_id - computed: false, optional: false, required: true
  private _elasticSanId?: string; 
  public get elasticSanId() {
    return this.getStringAttribute('elastic_san_id');
  }
  public set elasticSanId(value: string) {
    this._elasticSanId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticSanIdInput() {
    return this._elasticSanId;
  }

  // encryption_type - computed: false, optional: true, required: false
  private _encryptionType?: string; 
  public get encryptionType() {
    return this.getStringAttribute('encryption_type');
  }
  public set encryptionType(value: string) {
    this._encryptionType = value;
  }
  public resetEncryptionType() {
    this._encryptionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionTypeInput() {
    return this._encryptionType;
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

  // protocol_type - computed: false, optional: true, required: false
  private _protocolType?: string; 
  public get protocolType() {
    return this.getStringAttribute('protocol_type');
  }
  public set protocolType(value: string) {
    this._protocolType = value;
  }
  public resetProtocolType() {
    this._protocolType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolTypeInput() {
    return this._protocolType;
  }

  // encryption - computed: false, optional: true, required: false
  private _encryption = new ElasticSanVolumeGroupEncryptionOutputReference(this, "encryption");
  public get encryption() {
    return this._encryption;
  }
  public putEncryption(value: ElasticSanVolumeGroupEncryption) {
    this._encryption.internalValue = value;
  }
  public resetEncryption() {
    this._encryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption.internalValue;
  }

  // identity - computed: false, optional: true, required: false
  private _identity = new ElasticSanVolumeGroupIdentityOutputReference(this, "identity");
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: ElasticSanVolumeGroupIdentity) {
    this._identity.internalValue = value;
  }
  public resetIdentity() {
    this._identity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }

  // network_rule - computed: false, optional: true, required: false
  private _networkRule = new ElasticSanVolumeGroupNetworkRuleList(this, "network_rule", false);
  public get networkRule() {
    return this._networkRule;
  }
  public putNetworkRule(value: ElasticSanVolumeGroupNetworkRule[] | cdktf.IResolvable) {
    this._networkRule.internalValue = value;
  }
  public resetNetworkRule() {
    this._networkRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkRuleInput() {
    return this._networkRule.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ElasticSanVolumeGroupTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ElasticSanVolumeGroupTimeouts) {
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
      elastic_san_id: cdktf.stringToTerraform(this._elasticSanId),
      encryption_type: cdktf.stringToTerraform(this._encryptionType),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      protocol_type: cdktf.stringToTerraform(this._protocolType),
      encryption: elasticSanVolumeGroupEncryptionToTerraform(this._encryption.internalValue),
      identity: elasticSanVolumeGroupIdentityToTerraform(this._identity.internalValue),
      network_rule: cdktf.listMapper(elasticSanVolumeGroupNetworkRuleToTerraform, true)(this._networkRule.internalValue),
      timeouts: elasticSanVolumeGroupTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      elastic_san_id: {
        value: cdktf.stringToHclTerraform(this._elasticSanId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryption_type: {
        value: cdktf.stringToHclTerraform(this._encryptionType),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol_type: {
        value: cdktf.stringToHclTerraform(this._protocolType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryption: {
        value: elasticSanVolumeGroupEncryptionToHclTerraform(this._encryption.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElasticSanVolumeGroupEncryptionList",
      },
      identity: {
        value: elasticSanVolumeGroupIdentityToHclTerraform(this._identity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElasticSanVolumeGroupIdentityList",
      },
      network_rule: {
        value: cdktf.listMapperHcl(elasticSanVolumeGroupNetworkRuleToHclTerraform, true)(this._networkRule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElasticSanVolumeGroupNetworkRuleList",
      },
      timeouts: {
        value: elasticSanVolumeGroupTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ElasticSanVolumeGroupTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
