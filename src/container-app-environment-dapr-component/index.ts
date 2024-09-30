// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_app_environment_dapr_component
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ContainerAppEnvironmentDaprComponentConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Dapr Component Type. For example `state.azure.blobstorage`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_app_environment_dapr_component#component_type ContainerAppEnvironmentDaprComponent#component_type}
  */
  readonly componentType: string;
  /**
  * The Container App Managed Environment ID to configure this Dapr component on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_app_environment_dapr_component#container_app_environment_id ContainerAppEnvironmentDaprComponent#container_app_environment_id}
  */
  readonly containerAppEnvironmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_app_environment_dapr_component#id ContainerAppEnvironmentDaprComponent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Should the Dapr sidecar to continue initialisation if the component fails to load. Defaults to `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_app_environment_dapr_component#ignore_errors ContainerAppEnvironmentDaprComponent#ignore_errors}
  */
  readonly ignoreErrors?: boolean | cdktf.IResolvable;
  /**
  * The component initialisation timeout in ISO8601 format. e.g. `5s`, `2h`, `1m`. Defaults to `5s`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_app_environment_dapr_component#init_timeout ContainerAppEnvironmentDaprComponent#init_timeout}
  */
  readonly initTimeout?: string;
  /**
  * The name for this Dapr Component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_app_environment_dapr_component#name ContainerAppEnvironmentDaprComponent#name}
  */
  readonly name: string;
  /**
  * A list of scopes to which this component applies. e.g. a Container App's `dapr.app_id` value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_app_environment_dapr_component#scopes ContainerAppEnvironmentDaprComponent#scopes}
  */
  readonly scopes?: string[];
  /**
  * The version of the component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_app_environment_dapr_component#version ContainerAppEnvironmentDaprComponent#version}
  */
  readonly version: string;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_app_environment_dapr_component#metadata ContainerAppEnvironmentDaprComponent#metadata}
  */
  readonly metadata?: ContainerAppEnvironmentDaprComponentMetadata[] | cdktf.IResolvable;
  /**
  * secret block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_app_environment_dapr_component#secret ContainerAppEnvironmentDaprComponent#secret}
  */
  readonly secret?: ContainerAppEnvironmentDaprComponentSecret[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_app_environment_dapr_component#timeouts ContainerAppEnvironmentDaprComponent#timeouts}
  */
  readonly timeouts?: ContainerAppEnvironmentDaprComponentTimeouts;
}
export interface ContainerAppEnvironmentDaprComponentMetadata {
  /**
  * The name of the Metadata configuration item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_app_environment_dapr_component#name ContainerAppEnvironmentDaprComponent#name}
  */
  readonly name: string;
  /**
  * The name of a secret specified in the `secrets` block that contains the value for this metadata configuration item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_app_environment_dapr_component#secret_name ContainerAppEnvironmentDaprComponent#secret_name}
  */
  readonly secretName?: string;
  /**
  * The value for this metadata configuration item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_app_environment_dapr_component#value ContainerAppEnvironmentDaprComponent#value}
  */
  readonly value?: string;
}

export function containerAppEnvironmentDaprComponentMetadataToTerraform(struct?: ContainerAppEnvironmentDaprComponentMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function containerAppEnvironmentDaprComponentMetadataToHclTerraform(struct?: ContainerAppEnvironmentDaprComponentMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerAppEnvironmentDaprComponentMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerAppEnvironmentDaprComponentMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerAppEnvironmentDaprComponentMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._secretName = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._secretName = value.secretName;
      this._value = value.value;
    }
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

  // secret_name - computed: false, optional: true, required: false
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  public resetSecretName() {
    this._secretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ContainerAppEnvironmentDaprComponentMetadataList extends cdktf.ComplexList {
  public internalValue? : ContainerAppEnvironmentDaprComponentMetadata[] | cdktf.IResolvable

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
  public get(index: number): ContainerAppEnvironmentDaprComponentMetadataOutputReference {
    return new ContainerAppEnvironmentDaprComponentMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerAppEnvironmentDaprComponentSecret {
  /**
  * The identity to use for accessing key vault reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_app_environment_dapr_component#identity ContainerAppEnvironmentDaprComponent#identity}
  */
  readonly identity?: string;
  /**
  * The Key Vault Secret ID. Could be either one of `id` or `versionless_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_app_environment_dapr_component#key_vault_secret_id ContainerAppEnvironmentDaprComponent#key_vault_secret_id}
  */
  readonly keyVaultSecretId?: string;
  /**
  * The secret name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_app_environment_dapr_component#name ContainerAppEnvironmentDaprComponent#name}
  */
  readonly name: string;
  /**
  * The value for this secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_app_environment_dapr_component#value ContainerAppEnvironmentDaprComponent#value}
  */
  readonly value?: string;
}

export function containerAppEnvironmentDaprComponentSecretToTerraform(struct?: ContainerAppEnvironmentDaprComponentSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity: cdktf.stringToTerraform(struct!.identity),
    key_vault_secret_id: cdktf.stringToTerraform(struct!.keyVaultSecretId),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function containerAppEnvironmentDaprComponentSecretToHclTerraform(struct?: ContainerAppEnvironmentDaprComponentSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identity: {
      value: cdktf.stringToHclTerraform(struct!.identity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_vault_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.keyVaultSecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerAppEnvironmentDaprComponentSecretOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerAppEnvironmentDaprComponentSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identity !== undefined) {
      hasAnyValues = true;
      internalValueResult.identity = this._identity;
    }
    if (this._keyVaultSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyVaultSecretId = this._keyVaultSecretId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerAppEnvironmentDaprComponentSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identity = undefined;
      this._keyVaultSecretId = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identity = value.identity;
      this._keyVaultSecretId = value.keyVaultSecretId;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // identity - computed: false, optional: true, required: false
  private _identity?: string; 
  public get identity() {
    return this.getStringAttribute('identity');
  }
  public set identity(value: string) {
    this._identity = value;
  }
  public resetIdentity() {
    this._identity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity;
  }

  // key_vault_secret_id - computed: false, optional: true, required: false
  private _keyVaultSecretId?: string; 
  public get keyVaultSecretId() {
    return this.getStringAttribute('key_vault_secret_id');
  }
  public set keyVaultSecretId(value: string) {
    this._keyVaultSecretId = value;
  }
  public resetKeyVaultSecretId() {
    this._keyVaultSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultSecretIdInput() {
    return this._keyVaultSecretId;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ContainerAppEnvironmentDaprComponentSecretList extends cdktf.ComplexList {
  public internalValue? : ContainerAppEnvironmentDaprComponentSecret[] | cdktf.IResolvable

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
  public get(index: number): ContainerAppEnvironmentDaprComponentSecretOutputReference {
    return new ContainerAppEnvironmentDaprComponentSecretOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerAppEnvironmentDaprComponentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_app_environment_dapr_component#create ContainerAppEnvironmentDaprComponent#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_app_environment_dapr_component#delete ContainerAppEnvironmentDaprComponent#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_app_environment_dapr_component#read ContainerAppEnvironmentDaprComponent#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_app_environment_dapr_component#update ContainerAppEnvironmentDaprComponent#update}
  */
  readonly update?: string;
}

export function containerAppEnvironmentDaprComponentTimeoutsToTerraform(struct?: ContainerAppEnvironmentDaprComponentTimeouts | cdktf.IResolvable): any {
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


export function containerAppEnvironmentDaprComponentTimeoutsToHclTerraform(struct?: ContainerAppEnvironmentDaprComponentTimeouts | cdktf.IResolvable): any {
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

export class ContainerAppEnvironmentDaprComponentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ContainerAppEnvironmentDaprComponentTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ContainerAppEnvironmentDaprComponentTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_app_environment_dapr_component azurerm_container_app_environment_dapr_component}
*/
export class ContainerAppEnvironmentDaprComponent extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_container_app_environment_dapr_component";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ContainerAppEnvironmentDaprComponent resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ContainerAppEnvironmentDaprComponent to import
  * @param importFromId The id of the existing ContainerAppEnvironmentDaprComponent that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_app_environment_dapr_component#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ContainerAppEnvironmentDaprComponent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_container_app_environment_dapr_component", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_app_environment_dapr_component azurerm_container_app_environment_dapr_component} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ContainerAppEnvironmentDaprComponentConfig
  */
  public constructor(scope: Construct, id: string, config: ContainerAppEnvironmentDaprComponentConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_container_app_environment_dapr_component',
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
    this._componentType = config.componentType;
    this._containerAppEnvironmentId = config.containerAppEnvironmentId;
    this._id = config.id;
    this._ignoreErrors = config.ignoreErrors;
    this._initTimeout = config.initTimeout;
    this._name = config.name;
    this._scopes = config.scopes;
    this._version = config.version;
    this._metadata.internalValue = config.metadata;
    this._secret.internalValue = config.secret;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // component_type - computed: false, optional: false, required: true
  private _componentType?: string; 
  public get componentType() {
    return this.getStringAttribute('component_type');
  }
  public set componentType(value: string) {
    this._componentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get componentTypeInput() {
    return this._componentType;
  }

  // container_app_environment_id - computed: false, optional: false, required: true
  private _containerAppEnvironmentId?: string; 
  public get containerAppEnvironmentId() {
    return this.getStringAttribute('container_app_environment_id');
  }
  public set containerAppEnvironmentId(value: string) {
    this._containerAppEnvironmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerAppEnvironmentIdInput() {
    return this._containerAppEnvironmentId;
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

  // ignore_errors - computed: false, optional: true, required: false
  private _ignoreErrors?: boolean | cdktf.IResolvable; 
  public get ignoreErrors() {
    return this.getBooleanAttribute('ignore_errors');
  }
  public set ignoreErrors(value: boolean | cdktf.IResolvable) {
    this._ignoreErrors = value;
  }
  public resetIgnoreErrors() {
    this._ignoreErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreErrorsInput() {
    return this._ignoreErrors;
  }

  // init_timeout - computed: false, optional: true, required: false
  private _initTimeout?: string; 
  public get initTimeout() {
    return this.getStringAttribute('init_timeout');
  }
  public set initTimeout(value: string) {
    this._initTimeout = value;
  }
  public resetInitTimeout() {
    this._initTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initTimeoutInput() {
    return this._initTimeout;
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

  // scopes - computed: false, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
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

  // metadata - computed: false, optional: true, required: false
  private _metadata = new ContainerAppEnvironmentDaprComponentMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: ContainerAppEnvironmentDaprComponentMetadata[] | cdktf.IResolvable) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new ContainerAppEnvironmentDaprComponentSecretList(this, "secret", true);
  public get secret() {
    return this._secret;
  }
  public putSecret(value: ContainerAppEnvironmentDaprComponentSecret[] | cdktf.IResolvable) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ContainerAppEnvironmentDaprComponentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ContainerAppEnvironmentDaprComponentTimeouts) {
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
      component_type: cdktf.stringToTerraform(this._componentType),
      container_app_environment_id: cdktf.stringToTerraform(this._containerAppEnvironmentId),
      id: cdktf.stringToTerraform(this._id),
      ignore_errors: cdktf.booleanToTerraform(this._ignoreErrors),
      init_timeout: cdktf.stringToTerraform(this._initTimeout),
      name: cdktf.stringToTerraform(this._name),
      scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scopes),
      version: cdktf.stringToTerraform(this._version),
      metadata: cdktf.listMapper(containerAppEnvironmentDaprComponentMetadataToTerraform, true)(this._metadata.internalValue),
      secret: cdktf.listMapper(containerAppEnvironmentDaprComponentSecretToTerraform, true)(this._secret.internalValue),
      timeouts: containerAppEnvironmentDaprComponentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      component_type: {
        value: cdktf.stringToHclTerraform(this._componentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      container_app_environment_id: {
        value: cdktf.stringToHclTerraform(this._containerAppEnvironmentId),
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
      ignore_errors: {
        value: cdktf.booleanToHclTerraform(this._ignoreErrors),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      init_timeout: {
        value: cdktf.stringToHclTerraform(this._initTimeout),
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
      scopes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scopes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata: {
        value: cdktf.listMapperHcl(containerAppEnvironmentDaprComponentMetadataToHclTerraform, true)(this._metadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerAppEnvironmentDaprComponentMetadataList",
      },
      secret: {
        value: cdktf.listMapperHcl(containerAppEnvironmentDaprComponentSecretToHclTerraform, true)(this._secret.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ContainerAppEnvironmentDaprComponentSecretList",
      },
      timeouts: {
        value: containerAppEnvironmentDaprComponentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ContainerAppEnvironmentDaprComponentTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
