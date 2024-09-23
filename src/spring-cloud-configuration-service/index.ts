// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_configuration_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SpringCloudConfigurationServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_configuration_service#generation SpringCloudConfigurationService#generation}
  */
  readonly generation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_configuration_service#id SpringCloudConfigurationService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_configuration_service#name SpringCloudConfigurationService#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_configuration_service#refresh_interval_in_seconds SpringCloudConfigurationService#refresh_interval_in_seconds}
  */
  readonly refreshIntervalInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_configuration_service#spring_cloud_service_id SpringCloudConfigurationService#spring_cloud_service_id}
  */
  readonly springCloudServiceId: string;
  /**
  * repository block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_configuration_service#repository SpringCloudConfigurationService#repository}
  */
  readonly repository?: SpringCloudConfigurationServiceRepository[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_configuration_service#timeouts SpringCloudConfigurationService#timeouts}
  */
  readonly timeouts?: SpringCloudConfigurationServiceTimeouts;
}
export interface SpringCloudConfigurationServiceRepository {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_configuration_service#ca_certificate_id SpringCloudConfigurationService#ca_certificate_id}
  */
  readonly caCertificateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_configuration_service#host_key SpringCloudConfigurationService#host_key}
  */
  readonly hostKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_configuration_service#host_key_algorithm SpringCloudConfigurationService#host_key_algorithm}
  */
  readonly hostKeyAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_configuration_service#label SpringCloudConfigurationService#label}
  */
  readonly label: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_configuration_service#name SpringCloudConfigurationService#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_configuration_service#password SpringCloudConfigurationService#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_configuration_service#patterns SpringCloudConfigurationService#patterns}
  */
  readonly patterns: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_configuration_service#private_key SpringCloudConfigurationService#private_key}
  */
  readonly privateKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_configuration_service#search_paths SpringCloudConfigurationService#search_paths}
  */
  readonly searchPaths?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_configuration_service#strict_host_key_checking SpringCloudConfigurationService#strict_host_key_checking}
  */
  readonly strictHostKeyChecking?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_configuration_service#uri SpringCloudConfigurationService#uri}
  */
  readonly uri: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_configuration_service#username SpringCloudConfigurationService#username}
  */
  readonly username?: string;
}

export function springCloudConfigurationServiceRepositoryToTerraform(struct?: SpringCloudConfigurationServiceRepository | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_certificate_id: cdktf.stringToTerraform(struct!.caCertificateId),
    host_key: cdktf.stringToTerraform(struct!.hostKey),
    host_key_algorithm: cdktf.stringToTerraform(struct!.hostKeyAlgorithm),
    label: cdktf.stringToTerraform(struct!.label),
    name: cdktf.stringToTerraform(struct!.name),
    password: cdktf.stringToTerraform(struct!.password),
    patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.patterns),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
    search_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.searchPaths),
    strict_host_key_checking: cdktf.booleanToTerraform(struct!.strictHostKeyChecking),
    uri: cdktf.stringToTerraform(struct!.uri),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function springCloudConfigurationServiceRepositoryToHclTerraform(struct?: SpringCloudConfigurationServiceRepository | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_certificate_id: {
      value: cdktf.stringToHclTerraform(struct!.caCertificateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_key: {
      value: cdktf.stringToHclTerraform(struct!.hostKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_key_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.hostKeyAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
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
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    patterns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.patterns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search_paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.searchPaths),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    strict_host_key_checking: {
      value: cdktf.booleanToHclTerraform(struct!.strictHostKeyChecking),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpringCloudConfigurationServiceRepositoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SpringCloudConfigurationServiceRepository | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCertificateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificateId = this._caCertificateId;
    }
    if (this._hostKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostKey = this._hostKey;
    }
    if (this._hostKeyAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostKeyAlgorithm = this._hostKeyAlgorithm;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._patterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.patterns = this._patterns;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    if (this._searchPaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchPaths = this._searchPaths;
    }
    if (this._strictHostKeyChecking !== undefined) {
      hasAnyValues = true;
      internalValueResult.strictHostKeyChecking = this._strictHostKeyChecking;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpringCloudConfigurationServiceRepository | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caCertificateId = undefined;
      this._hostKey = undefined;
      this._hostKeyAlgorithm = undefined;
      this._label = undefined;
      this._name = undefined;
      this._password = undefined;
      this._patterns = undefined;
      this._privateKey = undefined;
      this._searchPaths = undefined;
      this._strictHostKeyChecking = undefined;
      this._uri = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caCertificateId = value.caCertificateId;
      this._hostKey = value.hostKey;
      this._hostKeyAlgorithm = value.hostKeyAlgorithm;
      this._label = value.label;
      this._name = value.name;
      this._password = value.password;
      this._patterns = value.patterns;
      this._privateKey = value.privateKey;
      this._searchPaths = value.searchPaths;
      this._strictHostKeyChecking = value.strictHostKeyChecking;
      this._uri = value.uri;
      this._username = value.username;
    }
  }

  // ca_certificate_id - computed: false, optional: true, required: false
  private _caCertificateId?: string; 
  public get caCertificateId() {
    return this.getStringAttribute('ca_certificate_id');
  }
  public set caCertificateId(value: string) {
    this._caCertificateId = value;
  }
  public resetCaCertificateId() {
    this._caCertificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateIdInput() {
    return this._caCertificateId;
  }

  // host_key - computed: false, optional: true, required: false
  private _hostKey?: string; 
  public get hostKey() {
    return this.getStringAttribute('host_key');
  }
  public set hostKey(value: string) {
    this._hostKey = value;
  }
  public resetHostKey() {
    this._hostKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostKeyInput() {
    return this._hostKey;
  }

  // host_key_algorithm - computed: false, optional: true, required: false
  private _hostKeyAlgorithm?: string; 
  public get hostKeyAlgorithm() {
    return this.getStringAttribute('host_key_algorithm');
  }
  public set hostKeyAlgorithm(value: string) {
    this._hostKeyAlgorithm = value;
  }
  public resetHostKeyAlgorithm() {
    this._hostKeyAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostKeyAlgorithmInput() {
    return this._hostKeyAlgorithm;
  }

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
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

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // patterns - computed: false, optional: false, required: true
  private _patterns?: string[]; 
  public get patterns() {
    return cdktf.Fn.tolist(this.getListAttribute('patterns'));
  }
  public set patterns(value: string[]) {
    this._patterns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternsInput() {
    return this._patterns;
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // search_paths - computed: false, optional: true, required: false
  private _searchPaths?: string[]; 
  public get searchPaths() {
    return cdktf.Fn.tolist(this.getListAttribute('search_paths'));
  }
  public set searchPaths(value: string[]) {
    this._searchPaths = value;
  }
  public resetSearchPaths() {
    this._searchPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchPathsInput() {
    return this._searchPaths;
  }

  // strict_host_key_checking - computed: false, optional: true, required: false
  private _strictHostKeyChecking?: boolean | cdktf.IResolvable; 
  public get strictHostKeyChecking() {
    return this.getBooleanAttribute('strict_host_key_checking');
  }
  public set strictHostKeyChecking(value: boolean | cdktf.IResolvable) {
    this._strictHostKeyChecking = value;
  }
  public resetStrictHostKeyChecking() {
    this._strictHostKeyChecking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictHostKeyCheckingInput() {
    return this._strictHostKeyChecking;
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

export class SpringCloudConfigurationServiceRepositoryList extends cdktf.ComplexList {
  public internalValue? : SpringCloudConfigurationServiceRepository[] | cdktf.IResolvable

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
  public get(index: number): SpringCloudConfigurationServiceRepositoryOutputReference {
    return new SpringCloudConfigurationServiceRepositoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SpringCloudConfigurationServiceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_configuration_service#create SpringCloudConfigurationService#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_configuration_service#delete SpringCloudConfigurationService#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_configuration_service#read SpringCloudConfigurationService#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_configuration_service#update SpringCloudConfigurationService#update}
  */
  readonly update?: string;
}

export function springCloudConfigurationServiceTimeoutsToTerraform(struct?: SpringCloudConfigurationServiceTimeouts | cdktf.IResolvable): any {
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


export function springCloudConfigurationServiceTimeoutsToHclTerraform(struct?: SpringCloudConfigurationServiceTimeouts | cdktf.IResolvable): any {
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

export class SpringCloudConfigurationServiceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpringCloudConfigurationServiceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SpringCloudConfigurationServiceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_configuration_service azurerm_spring_cloud_configuration_service}
*/
export class SpringCloudConfigurationService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_spring_cloud_configuration_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SpringCloudConfigurationService resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SpringCloudConfigurationService to import
  * @param importFromId The id of the existing SpringCloudConfigurationService that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_configuration_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SpringCloudConfigurationService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_spring_cloud_configuration_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_configuration_service azurerm_spring_cloud_configuration_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SpringCloudConfigurationServiceConfig
  */
  public constructor(scope: Construct, id: string, config: SpringCloudConfigurationServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_spring_cloud_configuration_service',
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
    this._generation = config.generation;
    this._id = config.id;
    this._name = config.name;
    this._refreshIntervalInSeconds = config.refreshIntervalInSeconds;
    this._springCloudServiceId = config.springCloudServiceId;
    this._repository.internalValue = config.repository;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // generation - computed: false, optional: true, required: false
  private _generation?: string; 
  public get generation() {
    return this.getStringAttribute('generation');
  }
  public set generation(value: string) {
    this._generation = value;
  }
  public resetGeneration() {
    this._generation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generationInput() {
    return this._generation;
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

  // refresh_interval_in_seconds - computed: false, optional: true, required: false
  private _refreshIntervalInSeconds?: number; 
  public get refreshIntervalInSeconds() {
    return this.getNumberAttribute('refresh_interval_in_seconds');
  }
  public set refreshIntervalInSeconds(value: number) {
    this._refreshIntervalInSeconds = value;
  }
  public resetRefreshIntervalInSeconds() {
    this._refreshIntervalInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshIntervalInSecondsInput() {
    return this._refreshIntervalInSeconds;
  }

  // spring_cloud_service_id - computed: false, optional: false, required: true
  private _springCloudServiceId?: string; 
  public get springCloudServiceId() {
    return this.getStringAttribute('spring_cloud_service_id');
  }
  public set springCloudServiceId(value: string) {
    this._springCloudServiceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get springCloudServiceIdInput() {
    return this._springCloudServiceId;
  }

  // repository - computed: false, optional: true, required: false
  private _repository = new SpringCloudConfigurationServiceRepositoryList(this, "repository", false);
  public get repository() {
    return this._repository;
  }
  public putRepository(value: SpringCloudConfigurationServiceRepository[] | cdktf.IResolvable) {
    this._repository.internalValue = value;
  }
  public resetRepository() {
    this._repository.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SpringCloudConfigurationServiceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SpringCloudConfigurationServiceTimeouts) {
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
      generation: cdktf.stringToTerraform(this._generation),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      refresh_interval_in_seconds: cdktf.numberToTerraform(this._refreshIntervalInSeconds),
      spring_cloud_service_id: cdktf.stringToTerraform(this._springCloudServiceId),
      repository: cdktf.listMapper(springCloudConfigurationServiceRepositoryToTerraform, true)(this._repository.internalValue),
      timeouts: springCloudConfigurationServiceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      generation: {
        value: cdktf.stringToHclTerraform(this._generation),
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
      refresh_interval_in_seconds: {
        value: cdktf.numberToHclTerraform(this._refreshIntervalInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      spring_cloud_service_id: {
        value: cdktf.stringToHclTerraform(this._springCloudServiceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository: {
        value: cdktf.listMapperHcl(springCloudConfigurationServiceRepositoryToHclTerraform, true)(this._repository.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SpringCloudConfigurationServiceRepositoryList",
      },
      timeouts: {
        value: springCloudConfigurationServiceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SpringCloudConfigurationServiceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
