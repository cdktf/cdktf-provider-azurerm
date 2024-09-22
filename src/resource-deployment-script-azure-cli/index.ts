// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/resource_deployment_script_azure_cli
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ResourceDeploymentScriptAzureCliConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/resource_deployment_script_azure_cli#cleanup_preference ResourceDeploymentScriptAzureCli#cleanup_preference}
  */
  readonly cleanupPreference?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/resource_deployment_script_azure_cli#command_line ResourceDeploymentScriptAzureCli#command_line}
  */
  readonly commandLine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/resource_deployment_script_azure_cli#force_update_tag ResourceDeploymentScriptAzureCli#force_update_tag}
  */
  readonly forceUpdateTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/resource_deployment_script_azure_cli#id ResourceDeploymentScriptAzureCli#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/resource_deployment_script_azure_cli#location ResourceDeploymentScriptAzureCli#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/resource_deployment_script_azure_cli#name ResourceDeploymentScriptAzureCli#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/resource_deployment_script_azure_cli#primary_script_uri ResourceDeploymentScriptAzureCli#primary_script_uri}
  */
  readonly primaryScriptUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/resource_deployment_script_azure_cli#resource_group_name ResourceDeploymentScriptAzureCli#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/resource_deployment_script_azure_cli#retention_interval ResourceDeploymentScriptAzureCli#retention_interval}
  */
  readonly retentionInterval: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/resource_deployment_script_azure_cli#script_content ResourceDeploymentScriptAzureCli#script_content}
  */
  readonly scriptContent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/resource_deployment_script_azure_cli#supporting_script_uris ResourceDeploymentScriptAzureCli#supporting_script_uris}
  */
  readonly supportingScriptUris?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/resource_deployment_script_azure_cli#tags ResourceDeploymentScriptAzureCli#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/resource_deployment_script_azure_cli#timeout ResourceDeploymentScriptAzureCli#timeout}
  */
  readonly timeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/resource_deployment_script_azure_cli#version ResourceDeploymentScriptAzureCli#version}
  */
  readonly version: string;
  /**
  * container block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/resource_deployment_script_azure_cli#container ResourceDeploymentScriptAzureCli#container}
  */
  readonly container?: ResourceDeploymentScriptAzureCliContainer;
  /**
  * environment_variable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/resource_deployment_script_azure_cli#environment_variable ResourceDeploymentScriptAzureCli#environment_variable}
  */
  readonly environmentVariable?: ResourceDeploymentScriptAzureCliEnvironmentVariable[] | cdktf.IResolvable;
  /**
  * identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/resource_deployment_script_azure_cli#identity ResourceDeploymentScriptAzureCli#identity}
  */
  readonly identity?: ResourceDeploymentScriptAzureCliIdentity;
  /**
  * storage_account block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/resource_deployment_script_azure_cli#storage_account ResourceDeploymentScriptAzureCli#storage_account}
  */
  readonly storageAccount?: ResourceDeploymentScriptAzureCliStorageAccount;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/resource_deployment_script_azure_cli#timeouts ResourceDeploymentScriptAzureCli#timeouts}
  */
  readonly timeouts?: ResourceDeploymentScriptAzureCliTimeouts;
}
export interface ResourceDeploymentScriptAzureCliContainer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/resource_deployment_script_azure_cli#container_group_name ResourceDeploymentScriptAzureCli#container_group_name}
  */
  readonly containerGroupName?: string;
}

export function resourceDeploymentScriptAzureCliContainerToTerraform(struct?: ResourceDeploymentScriptAzureCliContainerOutputReference | ResourceDeploymentScriptAzureCliContainer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_group_name: cdktf.stringToTerraform(struct!.containerGroupName),
  }
}


export function resourceDeploymentScriptAzureCliContainerToHclTerraform(struct?: ResourceDeploymentScriptAzureCliContainerOutputReference | ResourceDeploymentScriptAzureCliContainer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_group_name: {
      value: cdktf.stringToHclTerraform(struct!.containerGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceDeploymentScriptAzureCliContainerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceDeploymentScriptAzureCliContainer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerGroupName = this._containerGroupName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceDeploymentScriptAzureCliContainer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._containerGroupName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._containerGroupName = value.containerGroupName;
    }
  }

  // container_group_name - computed: false, optional: true, required: false
  private _containerGroupName?: string; 
  public get containerGroupName() {
    return this.getStringAttribute('container_group_name');
  }
  public set containerGroupName(value: string) {
    this._containerGroupName = value;
  }
  public resetContainerGroupName() {
    this._containerGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerGroupNameInput() {
    return this._containerGroupName;
  }
}
export interface ResourceDeploymentScriptAzureCliEnvironmentVariable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/resource_deployment_script_azure_cli#name ResourceDeploymentScriptAzureCli#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/resource_deployment_script_azure_cli#secure_value ResourceDeploymentScriptAzureCli#secure_value}
  */
  readonly secureValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/resource_deployment_script_azure_cli#value ResourceDeploymentScriptAzureCli#value}
  */
  readonly value?: string;
}

export function resourceDeploymentScriptAzureCliEnvironmentVariableToTerraform(struct?: ResourceDeploymentScriptAzureCliEnvironmentVariable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    secure_value: cdktf.stringToTerraform(struct!.secureValue),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function resourceDeploymentScriptAzureCliEnvironmentVariableToHclTerraform(struct?: ResourceDeploymentScriptAzureCliEnvironmentVariable | cdktf.IResolvable): any {
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
    secure_value: {
      value: cdktf.stringToHclTerraform(struct!.secureValue),
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

export class ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourceDeploymentScriptAzureCliEnvironmentVariable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._secureValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secureValue = this._secureValue;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceDeploymentScriptAzureCliEnvironmentVariable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._secureValue = undefined;
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
      this._secureValue = value.secureValue;
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

  // secure_value - computed: false, optional: true, required: false
  private _secureValue?: string; 
  public get secureValue() {
    return this.getStringAttribute('secure_value');
  }
  public set secureValue(value: string) {
    this._secureValue = value;
  }
  public resetSecureValue() {
    this._secureValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureValueInput() {
    return this._secureValue;
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

export class ResourceDeploymentScriptAzureCliEnvironmentVariableList extends cdktf.ComplexList {
  public internalValue? : ResourceDeploymentScriptAzureCliEnvironmentVariable[] | cdktf.IResolvable

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
  public get(index: number): ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference {
    return new ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceDeploymentScriptAzureCliIdentity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/resource_deployment_script_azure_cli#identity_ids ResourceDeploymentScriptAzureCli#identity_ids}
  */
  readonly identityIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/resource_deployment_script_azure_cli#type ResourceDeploymentScriptAzureCli#type}
  */
  readonly type: string;
}

export function resourceDeploymentScriptAzureCliIdentityToTerraform(struct?: ResourceDeploymentScriptAzureCliIdentityOutputReference | ResourceDeploymentScriptAzureCliIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function resourceDeploymentScriptAzureCliIdentityToHclTerraform(struct?: ResourceDeploymentScriptAzureCliIdentityOutputReference | ResourceDeploymentScriptAzureCliIdentity): any {
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

export class ResourceDeploymentScriptAzureCliIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceDeploymentScriptAzureCliIdentity | undefined {
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

  public set internalValue(value: ResourceDeploymentScriptAzureCliIdentity | undefined) {
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
export interface ResourceDeploymentScriptAzureCliStorageAccount {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/resource_deployment_script_azure_cli#key ResourceDeploymentScriptAzureCli#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/resource_deployment_script_azure_cli#name ResourceDeploymentScriptAzureCli#name}
  */
  readonly name: string;
}

export function resourceDeploymentScriptAzureCliStorageAccountToTerraform(struct?: ResourceDeploymentScriptAzureCliStorageAccountOutputReference | ResourceDeploymentScriptAzureCliStorageAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function resourceDeploymentScriptAzureCliStorageAccountToHclTerraform(struct?: ResourceDeploymentScriptAzureCliStorageAccountOutputReference | ResourceDeploymentScriptAzureCliStorageAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceDeploymentScriptAzureCliStorageAccountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceDeploymentScriptAzureCliStorageAccount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceDeploymentScriptAzureCliStorageAccount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._name = value.name;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
}
export interface ResourceDeploymentScriptAzureCliTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/resource_deployment_script_azure_cli#create ResourceDeploymentScriptAzureCli#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/resource_deployment_script_azure_cli#delete ResourceDeploymentScriptAzureCli#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/resource_deployment_script_azure_cli#read ResourceDeploymentScriptAzureCli#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/resource_deployment_script_azure_cli#update ResourceDeploymentScriptAzureCli#update}
  */
  readonly update?: string;
}

export function resourceDeploymentScriptAzureCliTimeoutsToTerraform(struct?: ResourceDeploymentScriptAzureCliTimeouts | cdktf.IResolvable): any {
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


export function resourceDeploymentScriptAzureCliTimeoutsToHclTerraform(struct?: ResourceDeploymentScriptAzureCliTimeouts | cdktf.IResolvable): any {
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

export class ResourceDeploymentScriptAzureCliTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceDeploymentScriptAzureCliTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ResourceDeploymentScriptAzureCliTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/resource_deployment_script_azure_cli azurerm_resource_deployment_script_azure_cli}
*/
export class ResourceDeploymentScriptAzureCli extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_resource_deployment_script_azure_cli";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ResourceDeploymentScriptAzureCli resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ResourceDeploymentScriptAzureCli to import
  * @param importFromId The id of the existing ResourceDeploymentScriptAzureCli that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/resource_deployment_script_azure_cli#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ResourceDeploymentScriptAzureCli to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_resource_deployment_script_azure_cli", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/resource_deployment_script_azure_cli azurerm_resource_deployment_script_azure_cli} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ResourceDeploymentScriptAzureCliConfig
  */
  public constructor(scope: Construct, id: string, config: ResourceDeploymentScriptAzureCliConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_resource_deployment_script_azure_cli',
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
    this._cleanupPreference = config.cleanupPreference;
    this._commandLine = config.commandLine;
    this._forceUpdateTag = config.forceUpdateTag;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._primaryScriptUri = config.primaryScriptUri;
    this._resourceGroupName = config.resourceGroupName;
    this._retentionInterval = config.retentionInterval;
    this._scriptContent = config.scriptContent;
    this._supportingScriptUris = config.supportingScriptUris;
    this._tags = config.tags;
    this._timeout = config.timeout;
    this._version = config.version;
    this._container.internalValue = config.container;
    this._environmentVariable.internalValue = config.environmentVariable;
    this._identity.internalValue = config.identity;
    this._storageAccount.internalValue = config.storageAccount;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cleanup_preference - computed: false, optional: true, required: false
  private _cleanupPreference?: string; 
  public get cleanupPreference() {
    return this.getStringAttribute('cleanup_preference');
  }
  public set cleanupPreference(value: string) {
    this._cleanupPreference = value;
  }
  public resetCleanupPreference() {
    this._cleanupPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanupPreferenceInput() {
    return this._cleanupPreference;
  }

  // command_line - computed: false, optional: true, required: false
  private _commandLine?: string; 
  public get commandLine() {
    return this.getStringAttribute('command_line');
  }
  public set commandLine(value: string) {
    this._commandLine = value;
  }
  public resetCommandLine() {
    this._commandLine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandLineInput() {
    return this._commandLine;
  }

  // force_update_tag - computed: false, optional: true, required: false
  private _forceUpdateTag?: string; 
  public get forceUpdateTag() {
    return this.getStringAttribute('force_update_tag');
  }
  public set forceUpdateTag(value: string) {
    this._forceUpdateTag = value;
  }
  public resetForceUpdateTag() {
    this._forceUpdateTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceUpdateTagInput() {
    return this._forceUpdateTag;
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

  // outputs - computed: true, optional: false, required: false
  public get outputs() {
    return this.getStringAttribute('outputs');
  }

  // primary_script_uri - computed: false, optional: true, required: false
  private _primaryScriptUri?: string; 
  public get primaryScriptUri() {
    return this.getStringAttribute('primary_script_uri');
  }
  public set primaryScriptUri(value: string) {
    this._primaryScriptUri = value;
  }
  public resetPrimaryScriptUri() {
    this._primaryScriptUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryScriptUriInput() {
    return this._primaryScriptUri;
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

  // retention_interval - computed: false, optional: false, required: true
  private _retentionInterval?: string; 
  public get retentionInterval() {
    return this.getStringAttribute('retention_interval');
  }
  public set retentionInterval(value: string) {
    this._retentionInterval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionIntervalInput() {
    return this._retentionInterval;
  }

  // script_content - computed: false, optional: true, required: false
  private _scriptContent?: string; 
  public get scriptContent() {
    return this.getStringAttribute('script_content');
  }
  public set scriptContent(value: string) {
    this._scriptContent = value;
  }
  public resetScriptContent() {
    this._scriptContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptContentInput() {
    return this._scriptContent;
  }

  // supporting_script_uris - computed: false, optional: true, required: false
  private _supportingScriptUris?: string[]; 
  public get supportingScriptUris() {
    return this.getListAttribute('supporting_script_uris');
  }
  public set supportingScriptUris(value: string[]) {
    this._supportingScriptUris = value;
  }
  public resetSupportingScriptUris() {
    this._supportingScriptUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportingScriptUrisInput() {
    return this._supportingScriptUris;
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

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
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

  // container - computed: false, optional: true, required: false
  private _container = new ResourceDeploymentScriptAzureCliContainerOutputReference(this, "container");
  public get container() {
    return this._container;
  }
  public putContainer(value: ResourceDeploymentScriptAzureCliContainer) {
    this._container.internalValue = value;
  }
  public resetContainer() {
    this._container.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container.internalValue;
  }

  // environment_variable - computed: false, optional: true, required: false
  private _environmentVariable = new ResourceDeploymentScriptAzureCliEnvironmentVariableList(this, "environment_variable", true);
  public get environmentVariable() {
    return this._environmentVariable;
  }
  public putEnvironmentVariable(value: ResourceDeploymentScriptAzureCliEnvironmentVariable[] | cdktf.IResolvable) {
    this._environmentVariable.internalValue = value;
  }
  public resetEnvironmentVariable() {
    this._environmentVariable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentVariableInput() {
    return this._environmentVariable.internalValue;
  }

  // identity - computed: false, optional: true, required: false
  private _identity = new ResourceDeploymentScriptAzureCliIdentityOutputReference(this, "identity");
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: ResourceDeploymentScriptAzureCliIdentity) {
    this._identity.internalValue = value;
  }
  public resetIdentity() {
    this._identity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }

  // storage_account - computed: false, optional: true, required: false
  private _storageAccount = new ResourceDeploymentScriptAzureCliStorageAccountOutputReference(this, "storage_account");
  public get storageAccount() {
    return this._storageAccount;
  }
  public putStorageAccount(value: ResourceDeploymentScriptAzureCliStorageAccount) {
    this._storageAccount.internalValue = value;
  }
  public resetStorageAccount() {
    this._storageAccount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountInput() {
    return this._storageAccount.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ResourceDeploymentScriptAzureCliTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ResourceDeploymentScriptAzureCliTimeouts) {
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
      cleanup_preference: cdktf.stringToTerraform(this._cleanupPreference),
      command_line: cdktf.stringToTerraform(this._commandLine),
      force_update_tag: cdktf.stringToTerraform(this._forceUpdateTag),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      primary_script_uri: cdktf.stringToTerraform(this._primaryScriptUri),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      retention_interval: cdktf.stringToTerraform(this._retentionInterval),
      script_content: cdktf.stringToTerraform(this._scriptContent),
      supporting_script_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(this._supportingScriptUris),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      timeout: cdktf.stringToTerraform(this._timeout),
      version: cdktf.stringToTerraform(this._version),
      container: resourceDeploymentScriptAzureCliContainerToTerraform(this._container.internalValue),
      environment_variable: cdktf.listMapper(resourceDeploymentScriptAzureCliEnvironmentVariableToTerraform, true)(this._environmentVariable.internalValue),
      identity: resourceDeploymentScriptAzureCliIdentityToTerraform(this._identity.internalValue),
      storage_account: resourceDeploymentScriptAzureCliStorageAccountToTerraform(this._storageAccount.internalValue),
      timeouts: resourceDeploymentScriptAzureCliTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cleanup_preference: {
        value: cdktf.stringToHclTerraform(this._cleanupPreference),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      command_line: {
        value: cdktf.stringToHclTerraform(this._commandLine),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_update_tag: {
        value: cdktf.stringToHclTerraform(this._forceUpdateTag),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_script_uri: {
        value: cdktf.stringToHclTerraform(this._primaryScriptUri),
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
      retention_interval: {
        value: cdktf.stringToHclTerraform(this._retentionInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      script_content: {
        value: cdktf.stringToHclTerraform(this._scriptContent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      supporting_script_uris: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._supportingScriptUris),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      timeout: {
        value: cdktf.stringToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      container: {
        value: resourceDeploymentScriptAzureCliContainerToHclTerraform(this._container.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ResourceDeploymentScriptAzureCliContainerList",
      },
      environment_variable: {
        value: cdktf.listMapperHcl(resourceDeploymentScriptAzureCliEnvironmentVariableToHclTerraform, true)(this._environmentVariable.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ResourceDeploymentScriptAzureCliEnvironmentVariableList",
      },
      identity: {
        value: resourceDeploymentScriptAzureCliIdentityToHclTerraform(this._identity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ResourceDeploymentScriptAzureCliIdentityList",
      },
      storage_account: {
        value: resourceDeploymentScriptAzureCliStorageAccountToHclTerraform(this._storageAccount.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ResourceDeploymentScriptAzureCliStorageAccountList",
      },
      timeouts: {
        value: resourceDeploymentScriptAzureCliTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ResourceDeploymentScriptAzureCliTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
